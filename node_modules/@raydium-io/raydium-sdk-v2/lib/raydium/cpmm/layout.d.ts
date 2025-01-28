import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import '../../marshmallow/buffer-layout.js';

declare const CpmmConfigInfoLayout: Structure<number | boolean | _solana_web3_js.PublicKey | Buffer | BN | BN[], "", {
    bump: number;
    index: number;
    protocolFeeRate: BN;
    tradeFeeRate: BN;
    disableCreatePool: boolean;
    fundFeeRate: BN;
    createPoolFee: BN;
    protocolOwner: _solana_web3_js.PublicKey;
    fundOwner: _solana_web3_js.PublicKey;
}>;
declare const CpmmPoolInfoLayout: Structure<number | _solana_web3_js.PublicKey | Buffer | BN | BN[], "", {
    bump: number;
    openTime: BN;
    status: number;
    mintA: _solana_web3_js.PublicKey;
    mintB: _solana_web3_js.PublicKey;
    vaultA: _solana_web3_js.PublicKey;
    vaultB: _solana_web3_js.PublicKey;
    observationId: _solana_web3_js.PublicKey;
    lpAmount: BN;
    mintLp: _solana_web3_js.PublicKey;
    configId: _solana_web3_js.PublicKey;
    poolCreator: _solana_web3_js.PublicKey;
    mintProgramA: _solana_web3_js.PublicKey;
    mintProgramB: _solana_web3_js.PublicKey;
    lpDecimals: number;
    mintDecimalA: number;
    mintDecimalB: number;
    protocolFeesMintA: BN;
    protocolFeesMintB: BN;
    fundFeesMintA: BN;
    fundFeesMintB: BN;
}>;

export { CpmmConfigInfoLayout, CpmmPoolInfoLayout };
