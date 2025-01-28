import { PublicKey, TransactionInstruction, Connection, Transaction, Keypair } from '@solana/web3.js';
import BN__default from 'bn.js';

declare type Transactions = {
    transaction: Transaction;
    signer?: Keypair[] | undefined;
    instructionTypes?: string[];
}[];
declare function initializeMarket({ programId, marketInfo, }: {
    programId: PublicKey;
    marketInfo: {
        id: PublicKey;
        requestQueue: PublicKey;
        eventQueue: PublicKey;
        bids: PublicKey;
        asks: PublicKey;
        baseVault: PublicKey;
        quoteVault: PublicKey;
        baseMint: PublicKey;
        quoteMint: PublicKey;
        authority?: PublicKey;
        pruneAuthority?: PublicKey;
        baseLotSize: BN__default;
        quoteLotSize: BN__default;
        feeRateBps: number;
        vaultSignerNonce: BN__default;
        quoteDustThreshold: BN__default;
    };
}): TransactionInstruction;
declare function makeCreateMarketInstruction({ connection, wallet, marketInfo, }: {
    connection: Connection;
    wallet: PublicKey;
    marketInfo: {
        programId: PublicKey;
        id: {
            publicKey: PublicKey;
            seed: string;
        };
        baseMint: PublicKey;
        quoteMint: PublicKey;
        baseVault: {
            publicKey: PublicKey;
            seed: string;
        };
        quoteVault: {
            publicKey: PublicKey;
            seed: string;
        };
        vaultOwner: PublicKey;
        requestQueue: {
            publicKey: PublicKey;
            seed: string;
        };
        eventQueue: {
            publicKey: PublicKey;
            seed: string;
        };
        bids: {
            publicKey: PublicKey;
            seed: string;
        };
        asks: {
            publicKey: PublicKey;
            seed: string;
        };
        feeRateBps: number;
        vaultSignerNonce: BN__default;
        quoteDustThreshold: BN__default;
        baseLotSize: BN__default;
        quoteLotSize: BN__default;
        requestQueueSpace?: number;
        eventQueueSpace?: number;
        orderbookQueueSpace?: number;
        lowestFeeMarket?: boolean;
    };
}): Promise<Transactions>;

export { initializeMarket, makeCreateMarketInstruction };
