import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  VersionedTransaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { getAssociatedTokenAddress, NATIVE_MINT } from "@solana/spl-token";
import axios from "axios";
import bs58 from "bs58";
import { API_URLS } from "@raydium-io/raydium-sdk-v2";

const isV0Tx = true;
const slippage = 2.5;

const connection = new Connection(
  "https://mainnet.helius-rpc.com/?api-key=e0c0dd23-659c-4dc9-b15e-79a6492f3ad8"
);
const wallet = Keypair.fromSecretKey(
  bs58.decode(process.env.WALLET_PRIVATE_KEY!)
);
export async function swapToken(tokenAddress: string, amount: number) {
  const { data } = await axios.get<{
    id: string;
    success: boolean;
    data: { default: { vh: number; h: number; m: number } };
  }>(`${API_URLS.BASE_HOST}${API_URLS.PRIORITY_FEE}`);

  const { data: swapResponse } = await axios.get(
    `${
      API_URLS.SWAP_HOST
    }/compute/swap-base-in?inputMint=${NATIVE_MINT}&outputMint=${tokenAddress}&amount=${amount}&slippageBps=${
      slippage * 100
    }&txVersion=V0`
  );

  const { data: swapTransactions } = await axios.post<{
    id: string;
    version: string;
    success: boolean;
    data: { transaction: string }[];
  }>(`${API_URLS.SWAP_HOST}/transaction/swap-base-in`, {
    computeUnitPriceMicroLamports: String(data.data.default.h),
    swapResponse,
    txVersion: "V0",
    wallet: wallet.publicKey.toBase58(),
    wrapSol: true,
    unwrapSol: false,
  });

  const ata = await getAssociatedTokenAddress(
    new PublicKey(tokenAddress),
    wallet.publicKey
  );

  console.log({
    computeUnitPriceMicroLamports: String(data.data.default.h),
    swapResponse,
    txVersion: "V0",
    wallet: wallet.publicKey.toBase58(),
    wrapSol: true,
    unwrapSol: false,
    // outputMint: ata.toBase58()
  });
  const allTxBuf = swapTransactions.data.map((tx) =>
    Buffer.from(tx.transaction, "base64")
  );
  const allTransactions = allTxBuf.map((txBuf) =>
    isV0Tx ? VersionedTransaction.deserialize(txBuf) : Transaction.from(txBuf)
  );

  let idx = 0;
  for (const tx of allTransactions) {
    idx++;
    const transaction = tx as VersionedTransaction;
    transaction.sign([wallet]);

    const txId = await connection.sendTransaction(tx as VersionedTransaction, {
      skipPreflight: true,
    });
    const { lastValidBlockHeight, blockhash } =
      await connection.getLatestBlockhash({
        commitment: "finalized",
      });
    console.log(`✉️ ${idx} Sending transction to blockchain \n\n: ${txId}`);
    await connection.confirmTransaction(
      {
        blockhash,
        lastValidBlockHeight,
        signature: txId,
      },
      "confirmed"
    );
    console.log(`✅ ${idx} Transaction confirmed`);
  }
}
