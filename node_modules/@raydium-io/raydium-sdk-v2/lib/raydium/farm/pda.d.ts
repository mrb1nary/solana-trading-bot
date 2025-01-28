import { PublicKey } from '@solana/web3.js';

declare function getRegistrarAddress(programId: PublicKey, realm: PublicKey, communityTokenMint: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getVotingTokenMint(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getVotingMintAuthority(programId: PublicKey, poolId: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getVoterAddress(programId: PublicKey, registrar: PublicKey, authority: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getVoterWeightRecordAddress(programId: PublicKey, registrar: PublicKey, authority: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};
declare function getTokenOwnerRecordAddress(programId: PublicKey, realm: PublicKey, governingTokenMint: PublicKey, governingTokenOwner: PublicKey): {
    publicKey: PublicKey;
    nonce: number;
};

export { getRegistrarAddress, getTokenOwnerRecordAddress, getVoterAddress, getVoterWeightRecordAddress, getVotingMintAuthority, getVotingTokenMint };
