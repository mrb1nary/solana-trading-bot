"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapToken = swapToken;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const axios_1 = __importDefault(require("axios"));
const bs58_1 = __importDefault(require("bs58"));
const raydium_sdk_v2_1 = require("@raydium-io/raydium-sdk-v2");
const isV0Tx = true;
const slippage = 2.5;
const connection = new web3_js_1.Connection("https://mainnet.helius-rpc.com/?api-key=e0c0dd23-659c-4dc9-b15e-79a6492f3ad8");
const wallet = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(process.env.WALLET_PRIVATE_KEY));
async function ensureATAExists(tokenAddress) {
    const ata = await (0, spl_token_1.getAssociatedTokenAddress)(new web3_js_1.PublicKey(tokenAddress), wallet.publicKey);
    try {
        await (0, spl_token_1.getAccount)(connection, ata);
        return ata;
    }
    catch (e) {
        console.log(`🛠️ ATA for ${tokenAddress} does not exist, creating...`);
        const transaction = new web3_js_1.Transaction().add((0, spl_token_1.createAssociatedTokenAccountInstruction)(wallet.publicKey, ata, wallet.publicKey, new web3_js_1.PublicKey(tokenAddress)));
        await (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [wallet]);
        return ata;
    }
}
async function swapToken(tokenAddress, amount) {
    console.log("🔄 Fetching priority fee...");
    const { data } = await axios_1.default.get(`${raydium_sdk_v2_1.API_URLS.BASE_HOST}${raydium_sdk_v2_1.API_URLS.PRIORITY_FEE}`);
    console.log("🔄 Ensuring Associated Token Account exists...");
    const ata = await ensureATAExists(tokenAddress);
    console.log("🔄 ATA:", ata.toBase58());
    console.log("🔄 Fetching swap computation data...");
    const { data: swapResponse } = await axios_1.default.get(`${raydium_sdk_v2_1.API_URLS.SWAP_HOST}/compute/swap-base-in?inputMint=${(await (0, spl_token_1.getAssociatedTokenAddress)(spl_token_1.NATIVE_MINT, wallet.publicKey)).toBase58()}&outputMint=${tokenAddress}&amount=${amount}&slippageBps=${slippage * 100}&txVersion=V0`);
    console.log("🔄 Fetching swap transaction...");
    const { data: swapTransactions } = await axios_1.default.post(`${raydium_sdk_v2_1.API_URLS.SWAP_HOST}/transaction/swap-base-in`, {
        computeUnitPriceMicroLamports: String(data.data.default.h),
        swapResponse,
        txVersion: "V0",
        wallet: wallet.publicKey.toBase58(),
        wrapSol: true,
        unwrapSol: true,
    });
    console.log({
        computeUnitPriceMicroLamports: String(data.data.default.h),
        swapResponse,
        txVersion: "V0",
        wallet: wallet.publicKey.toBase58(),
        wrapSol: true,
        unwrapSol: true,
    });
    console.log("🔄 Preparing transactions...");
    const allTxBuf = swapTransactions.data.map((tx) => Buffer.from(tx.transaction, "base64"));
    const allTransactions = allTxBuf.map((txBuf) => isV0Tx ? web3_js_1.VersionedTransaction.deserialize(txBuf) : web3_js_1.Transaction.from(txBuf));
    let idx = 0;
    for (const tx of allTransactions) {
        idx++;
        const transaction = tx;
        transaction.sign([wallet]);
        const txId = await connection.sendTransaction(tx, {
            skipPreflight: true,
        });
        const { lastValidBlockHeight, blockhash } = await connection.getLatestBlockhash({
            commitment: "finalized",
        });
        console.log(`✉️ ${idx} Sending transaction: ${txId}`);
        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature: txId }, "confirmed");
        console.log(`✅ ${idx} Transaction confirmed`);
    }
}
