import { PublicKey } from '@solana/web3.js';
import { SerumVersion } from './type.js';

declare const SERUM_PROGRAMID_TO_VERSION: {
    [key: string]: SerumVersion;
};
declare const SERUM_VERSION_TO_PROGRAMID: {
    [key in SerumVersion]?: PublicKey;
} & {
    [K: number]: PublicKey;
};

export { SERUM_PROGRAMID_TO_VERSION, SERUM_VERSION_TO_PROGRAMID };
