import { PublicKey } from '@solana/web3.js';
import { SerumVersion } from '../serum/type.js';

declare function getSerumVersion(version: number): SerumVersion;
declare function getSerumAssociatedAuthority({ programId, marketId }: {
    programId: PublicKey;
    marketId: PublicKey;
}): {
    publicKey: PublicKey;
    nonce: number;
};

export { getSerumAssociatedAuthority, getSerumVersion };
