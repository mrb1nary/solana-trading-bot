import BN__default from 'bn.js';

declare const FEE_RATE_DENOMINATOR_VALUE: BN__default;
declare function ceilDiv(tokenAmount: BN__default, feeNumerator: BN__default, feeDenominator: BN__default): BN__default;
declare function floorDiv(tokenAmount: BN__default, feeNumerator: BN__default, feeDenominator: BN__default): BN__default;
declare class CpmmFee {
    static tradingFee(amount: BN__default, tradeFeeRate: BN__default): BN__default;
    static protocolFee(amount: BN__default, protocolFeeRate: BN__default): BN__default;
    static fundFee(amount: BN__default, fundFeeRate: BN__default): BN__default;
}

export { CpmmFee, FEE_RATE_DENOMINATOR_VALUE, ceilDiv, floorDiv };
