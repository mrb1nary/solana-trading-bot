import { PublicKey } from '@solana/web3.js';
import { MarketStateLayout } from './layout.js';
import '../../marshmallow/index.js';
import 'bn.js';
import '../../marshmallow/buffer-layout.js';

declare class Market {
    static getProgramId(version: number): PublicKey;
    static getVersion(programId: PublicKey): number;
    static getStateLayout(version: number): MarketStateLayout;
    static getLayouts(version: number): {
        state: MarketStateLayout;
    };
    static getAssociatedAuthority({ programId, marketId }: {
        programId: PublicKey;
        marketId: PublicKey;
    }): {
        publicKey: PublicKey;
        nonce: number;
    };
}

export { Market };
