import { PublicKey } from '@solana/web3.js';

declare function getPdaPoolAuthority(programId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getCpmmPdaAmmConfigId(programId: PublicKey, index: number): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getCpmmPdaPoolId(programId: PublicKey, ammConfigId: PublicKey, mintA: PublicKey, mintB: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaLpMint(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaVault(programId: PublicKey, poolId: PublicKey, mint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaObservationId(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getCreatePoolKeys({ poolId: propPoolId, programId, configId, mintA, mintB, }: {
    poolId?: PublicKey;
    programId: PublicKey;
    configId: PublicKey;
    mintA: PublicKey;
    mintB: PublicKey;
}): {
    poolId: PublicKey;
    configId: PublicKey;
    authority: PublicKey;
    lpMint: PublicKey;
    vaultA: PublicKey;
    vaultB: PublicKey;
    observationId: PublicKey;
};
declare const LOCK_LIQUIDITY_SEED: Buffer;
declare function getCpLockPda(programId: PublicKey, mint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};

export { LOCK_LIQUIDITY_SEED, getCpLockPda, getCpmmPdaAmmConfigId, getCpmmPdaPoolId, getCreatePoolKeys, getPdaLpMint, getPdaObservationId, getPdaPoolAuthority, getPdaVault };
