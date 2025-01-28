import BN__default from 'bn.js';
import { SerumVersion } from '../serum/type.js';

declare const LIQUIDITY_FEES_NUMERATOR: BN__default;
declare const LIQUIDITY_FEES_DENOMINATOR: BN__default;
declare const LIQUIDITY_VERSION_TO_SERUM_VERSION: {
    [key in 4 | 5]?: SerumVersion;
};

export { LIQUIDITY_FEES_DENOMINATOR, LIQUIDITY_FEES_NUMERATOR, LIQUIDITY_VERSION_TO_SERUM_VERSION };
