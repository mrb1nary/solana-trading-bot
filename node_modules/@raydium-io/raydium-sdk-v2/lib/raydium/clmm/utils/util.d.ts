import BN__default from 'bn.js';

declare function u16ToBytes(num: number): Uint8Array;
declare function i16ToBytes(num: number): Uint8Array;
declare function u32ToBytes(num: number): Uint8Array;
declare function i32ToBytes(num: number): Uint8Array;
declare function leadingZeros(bitNum: number, data: BN__default): number;
declare function trailingZeros(bitNum: number, data: BN__default): number;
declare function isZero(bitNum: number, data: BN__default): boolean;
declare function mostSignificantBit(bitNum: number, data: BN__default): number | null;
declare function leastSignificantBit(bitNum: number, data: BN__default): number | null;

export { i16ToBytes, i32ToBytes, isZero, leadingZeros, leastSignificantBit, mostSignificantBit, trailingZeros, u16ToBytes, u32ToBytes };
