import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import '../../marshmallow/buffer-layout.js';

declare const ClmmConfigLayout: Structure<number | _solana_web3_js.PublicKey | Buffer | BN[], "", {
    bump: number;
    index: number;
    tickSpacing: number;
    protocolFeeRate: number;
    tradeFeeRate: number;
}>;
declare const ObservationLayout: Structure<number | BN | BN[], "", {
    blockTimestamp: number;
    tickCumulative: BN;
}>;
declare const ObservationInfoLayout: Structure<number | boolean | _solana_web3_js.PublicKey | Buffer | BN | BN[] | {
    blockTimestamp: number;
    tickCumulative: BN;
}[], "", {
    poolId: _solana_web3_js.PublicKey;
    recentEpoch: BN;
    initialized: boolean;
    observationIndex: number;
    observations: {
        blockTimestamp: number;
        tickCumulative: BN;
    }[];
}>;
declare const RewardInfo: Structure<number | _solana_web3_js.PublicKey | BN, "", {
    rewardState: number;
    rewardClaimed: BN;
    creator: _solana_web3_js.PublicKey;
    endTime: BN;
    openTime: BN;
    lastUpdateTime: BN;
    emissionsPerSecondX64: BN;
    rewardTotalEmissioned: BN;
    tokenMint: _solana_web3_js.PublicKey;
    tokenVault: _solana_web3_js.PublicKey;
    rewardGrowthGlobalX64: BN;
}>;
declare const PoolInfoLayout: Structure<number | _solana_web3_js.PublicKey | number[] | Buffer | BN | BN[] | {
    rewardState: number;
    rewardClaimed: BN;
    creator: _solana_web3_js.PublicKey;
    endTime: BN;
    openTime: BN;
    lastUpdateTime: BN;
    emissionsPerSecondX64: BN;
    rewardTotalEmissioned: BN;
    tokenMint: _solana_web3_js.PublicKey;
    tokenVault: _solana_web3_js.PublicKey;
    rewardGrowthGlobalX64: BN;
}[], "", {
    padding: BN[];
    rewardInfos: {
        rewardState: number;
        rewardClaimed: BN;
        creator: _solana_web3_js.PublicKey;
        endTime: BN;
        openTime: BN;
        lastUpdateTime: BN;
        emissionsPerSecondX64: BN;
        rewardTotalEmissioned: BN;
        tokenMint: _solana_web3_js.PublicKey;
        tokenVault: _solana_web3_js.PublicKey;
        rewardGrowthGlobalX64: BN;
    }[];
    creator: _solana_web3_js.PublicKey;
    bump: number;
    startTime: BN;
    liquidity: BN;
    status: number;
    ammConfig: _solana_web3_js.PublicKey;
    mintA: _solana_web3_js.PublicKey;
    mintB: _solana_web3_js.PublicKey;
    vaultA: _solana_web3_js.PublicKey;
    vaultB: _solana_web3_js.PublicKey;
    observationId: _solana_web3_js.PublicKey;
    mintDecimalsA: number;
    mintDecimalsB: number;
    tickSpacing: number;
    sqrtPriceX64: BN;
    tickCurrent: number;
    feeGrowthGlobalX64A: BN;
    feeGrowthGlobalX64B: BN;
    protocolFeesTokenA: BN;
    protocolFeesTokenB: BN;
    swapInAmountTokenA: BN;
    swapOutAmountTokenB: BN;
    swapInAmountTokenB: BN;
    swapOutAmountTokenA: BN;
    tickArrayBitmap: BN[];
    totalFeesTokenA: BN;
    totalFeesClaimedTokenA: BN;
    totalFeesTokenB: BN;
    totalFeesClaimedTokenB: BN;
    fundFeesTokenA: BN;
    fundFeesTokenB: BN;
}>;
declare const PositionRewardInfoLayout: Structure<BN, "", {
    growthInsideLastX64: BN;
    rewardAmountOwed: BN;
}>;
declare const PositionInfoLayout: Structure<number | _solana_web3_js.PublicKey | Buffer | BN | BN[] | {
    growthInsideLastX64: BN;
    rewardAmountOwed: BN;
}[], "", {
    rewardInfos: {
        growthInsideLastX64: BN;
        rewardAmountOwed: BN;
    }[];
    bump: number;
    poolId: _solana_web3_js.PublicKey;
    liquidity: BN;
    nftMint: _solana_web3_js.PublicKey;
    tickLower: number;
    tickUpper: number;
    feeGrowthInsideLastX64A: BN;
    feeGrowthInsideLastX64B: BN;
    tokenFeesOwedA: BN;
    tokenFeesOwedB: BN;
}>;
declare type ClmmPositionLayout = ReturnType<typeof PositionInfoLayout.decode>;
declare const ProtocolPositionLayout: Structure<number | _solana_web3_js.PublicKey | Buffer | BN | BN[], "", {
    bump: number;
    poolId: _solana_web3_js.PublicKey;
    liquidity: BN;
    feeGrowthInsideLastX64A: BN;
    feeGrowthInsideLastX64B: BN;
    tokenFeesOwedA: BN;
    tokenFeesOwedB: BN;
    tickLowerIndex: number;
    tickUpperIndex: number;
    rewardGrowthInside: BN[];
}>;
declare const TickLayout: Structure<number | number[] | BN | BN[], "", {
    tick: number;
    liquidityNet: BN;
    liquidityGross: BN;
    feeGrowthOutsideX64A: BN;
    feeGrowthOutsideX64B: BN;
    rewardGrowthsOutsideX64: BN[];
}>;
declare const TickArrayLayout: Structure<number | _solana_web3_js.PublicKey | number[] | Buffer | {
    tick: number;
    liquidityNet: BN;
    liquidityGross: BN;
    feeGrowthOutsideX64A: BN;
    feeGrowthOutsideX64B: BN;
    rewardGrowthsOutsideX64: BN[];
}[], "", {
    poolId: _solana_web3_js.PublicKey;
    startTickIndex: number;
    ticks: {
        tick: number;
        liquidityNet: BN;
        liquidityGross: BN;
        feeGrowthOutsideX64A: BN;
        feeGrowthOutsideX64B: BN;
        rewardGrowthsOutsideX64: BN[];
    }[];
    initializedTickCount: number;
}>;
declare const OperationLayout: Structure<_solana_web3_js.PublicKey[] | Buffer, "", {
    whitelistMints: _solana_web3_js.PublicKey[];
}>;
declare const TickArrayBitmapExtensionLayout: Structure<_solana_web3_js.PublicKey | Buffer | BN[][], "", {
    poolId: _solana_web3_js.PublicKey;
    positiveTickArrayBitmap: BN[][];
    negativeTickArrayBitmap: BN[][];
}>;
declare const LockPositionLayout: Structure<number | _solana_web3_js.PublicKey | BN | BN[], "", {
    owner: _solana_web3_js.PublicKey;
    bump: number;
    poolId: _solana_web3_js.PublicKey;
    positionId: _solana_web3_js.PublicKey;
    nftAccount: _solana_web3_js.PublicKey;
}>;
declare const LockClPositionLayoutV2: Structure<number | _solana_web3_js.PublicKey | Buffer | BN | BN[], "", {
    bump: number;
    poolId: _solana_web3_js.PublicKey;
    lockOwner: _solana_web3_js.PublicKey;
    positionId: _solana_web3_js.PublicKey;
    nftAccount: _solana_web3_js.PublicKey;
    lockNftMint: _solana_web3_js.PublicKey;
    recentEpoch: BN;
}>;

export { ClmmConfigLayout, ClmmPositionLayout, LockClPositionLayoutV2, LockPositionLayout, ObservationInfoLayout, ObservationLayout, OperationLayout, PoolInfoLayout, PositionInfoLayout, PositionRewardInfoLayout, ProtocolPositionLayout, RewardInfo, TickArrayBitmapExtensionLayout, TickArrayLayout, TickLayout };
