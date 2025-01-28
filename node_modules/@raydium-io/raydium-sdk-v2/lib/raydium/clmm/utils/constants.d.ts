import BN__default from 'bn.js';

declare const ZERO: BN__default;
declare const ONE: BN__default;
declare const NEGATIVE_ONE: BN__default;
declare const Q64: BN__default;
declare const Q128: BN__default;
declare const MaxU64: BN__default;
declare const U64Resolution = 64;
declare const MaxUint128: BN__default;
declare const MIN_TICK = -443636;
declare const MAX_TICK: number;
declare const MIN_SQRT_PRICE_X64: BN__default;
declare const MAX_SQRT_PRICE_X64: BN__default;
declare const MIN_SQRT_PRICE_X64_ADD_ONE: BN__default;
declare const MAX_SQRT_PRICE_X64_SUB_ONE: BN__default;
declare const BIT_PRECISION = 16;
declare const LOG_B_2_X32 = "59543866431248";
declare const LOG_B_P_ERR_MARGIN_LOWER_X64 = "184467440737095516";
declare const LOG_B_P_ERR_MARGIN_UPPER_X64 = "15793534762490258745";
declare const FEE_RATE_DENOMINATOR: BN__default;
declare enum Fee {
    rate_500 = 500,
    rate_3000 = 3000,
    rate_10000 = 10000
}
declare const TICK_SPACINGS: {
    [amount in Fee]: number;
};
declare const mockCreatePoolInfo: {
    version: number;
    liquidity: BN__default;
    tickCurrent: number;
    feeGrowthGlobalX64A: BN__default;
    feeGrowthGlobalX64B: BN__default;
    protocolFeesTokenA: BN__default;
    protocolFeesTokenB: BN__default;
    swapInAmountTokenA: BN__default;
    swapOutAmountTokenB: BN__default;
    swapInAmountTokenB: BN__default;
    swapOutAmountTokenA: BN__default;
    tickArrayBitmap: never[];
    rewardInfos: never[];
    day: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMax: number;
        priceMin: number;
    };
    week: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMax: number;
        priceMin: number;
    };
    month: {
        volume: number;
        volumeFee: number;
        feeA: number;
        feeB: number;
        feeApr: number;
        rewardApr: {
            A: number;
            B: number;
            C: number;
        };
        apr: number;
        priceMax: number;
        priceMin: number;
    };
    tvl: number;
};
declare const mockV3CreatePoolInfo: {
    tvl: number;
    volumeQuote: number;
    mintAmountA: number;
    mintAmountB: number;
    rewardDefaultInfos: never[];
    farmUpcomingCount: number;
    farmOngoingCount: number;
    farmFinishedCount: number;
    day: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    week: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    month: {
        volume: number;
        volumeQuote: number;
        volumeFee: number;
        apr: number;
        feeApr: number;
        priceMin: number;
        priceMax: number;
        rewardApr: number[];
    };
    pooltype: never[];
};
declare const U64_IGNORE_RANGE: BN__default;

export { BIT_PRECISION, FEE_RATE_DENOMINATOR, Fee, LOG_B_2_X32, LOG_B_P_ERR_MARGIN_LOWER_X64, LOG_B_P_ERR_MARGIN_UPPER_X64, MAX_SQRT_PRICE_X64, MAX_SQRT_PRICE_X64_SUB_ONE, MAX_TICK, MIN_SQRT_PRICE_X64, MIN_SQRT_PRICE_X64_ADD_ONE, MIN_TICK, MaxU64, MaxUint128, NEGATIVE_ONE, ONE, Q128, Q64, TICK_SPACINGS, U64Resolution, U64_IGNORE_RANGE, ZERO, mockCreatePoolInfo, mockV3CreatePoolInfo };
