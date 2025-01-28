import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import '../../marshmallow/buffer-layout.js';

declare const SPL_MINT_LAYOUT: Structure<number | _solana_web3_js.PublicKey | BN, "", {
    decimals: number;
    freezeAuthority: _solana_web3_js.PublicKey;
    mintAuthority: _solana_web3_js.PublicKey;
    isInitialized: number;
    mintAuthorityOption: number;
    supply: BN;
    freezeAuthorityOption: number;
}>;
declare type SplMintLayout = typeof SPL_MINT_LAYOUT;

export { SPL_MINT_LAYOUT, SplMintLayout };
