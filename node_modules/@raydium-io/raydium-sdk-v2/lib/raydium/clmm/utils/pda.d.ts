import { PublicKey } from '@solana/web3.js';

declare const AMM_CONFIG_SEED: Buffer;
declare const POOL_SEED: Buffer;
declare const POOL_VAULT_SEED: Buffer;
declare const POOL_REWARD_VAULT_SEED: Buffer;
declare const POSITION_SEED: Buffer;
declare const TICK_ARRAY_SEED: Buffer;
declare const OPERATION_SEED: Buffer;
declare const POOL_TICK_ARRAY_BITMAP_SEED: Buffer;
declare const OBSERVATION_SEED: Buffer;
declare function getPdaAmmConfigId(programId: PublicKey, index: number): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaPoolId(programId: PublicKey, ammConfigId: PublicKey, mintA: PublicKey, mintB: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaPoolVaultId(programId: PublicKey, poolId: PublicKey, vaultMint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaPoolRewardVaulId(programId: PublicKey, poolId: PublicKey, rewardMint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaTickArrayAddress(programId: PublicKey, poolId: PublicKey, startIndex: number): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaProtocolPositionAddress(programId: PublicKey, poolId: PublicKey, tickLower: number, tickUpper: number): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaPersonalPositionAddress(programId: PublicKey, nftMint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaMetadataKey(mint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaOperationAccount(programId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaExBitmapAccount(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaObservationAccount(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare const POOL_LOCK_ID_SEED: Buffer;
declare function getPdaLockPositionId(programId: PublicKey, positionId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getPdaLockClPositionIdV2(programId: PublicKey, lockNftMint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};

export { AMM_CONFIG_SEED, OBSERVATION_SEED, OPERATION_SEED, POOL_LOCK_ID_SEED, POOL_REWARD_VAULT_SEED, POOL_SEED, POOL_TICK_ARRAY_BITMAP_SEED, POOL_VAULT_SEED, POSITION_SEED, TICK_ARRAY_SEED, getPdaAmmConfigId, getPdaExBitmapAccount, getPdaLockClPositionIdV2, getPdaLockPositionId, getPdaMetadataKey, getPdaObservationAccount, getPdaOperationAccount, getPdaPersonalPositionAddress, getPdaPoolId, getPdaPoolRewardVaulId, getPdaPoolVaultId, getPdaProtocolPositionAddress, getPdaTickArrayAddress };
