import { Structure } from '../../marshmallow/index.js';
import * as BN from 'bn.js';
import * as _solana_web3_js from '@solana/web3.js';
import { GetStructureSchema } from '../../marshmallow/buffer-layout.js';

declare const MARKET_STATE_LAYOUT_V3: Structure<_solana_web3_js.PublicKey | Buffer | BN, "", {
    baseMint: _solana_web3_js.PublicKey;
    quoteMint: _solana_web3_js.PublicKey;
    ownAddress: _solana_web3_js.PublicKey;
    vaultSignerNonce: BN;
    baseVault: _solana_web3_js.PublicKey;
    baseDepositsTotal: BN;
    baseFeesAccrued: BN;
    quoteVault: _solana_web3_js.PublicKey;
    quoteDepositsTotal: BN;
    quoteFeesAccrued: BN;
    quoteDustThreshold: BN;
    requestQueue: _solana_web3_js.PublicKey;
    eventQueue: _solana_web3_js.PublicKey;
    bids: _solana_web3_js.PublicKey;
    asks: _solana_web3_js.PublicKey;
    baseLotSize: BN;
    quoteLotSize: BN;
    feeRateBps: BN;
    referrerRebatesAccrued: BN;
}>;
declare type MarketStateLayoutV3 = typeof MARKET_STATE_LAYOUT_V3;
declare type MarketStateLayout = MarketStateLayoutV3;
declare type MarketStateV3 = GetStructureSchema<MarketStateLayoutV3>;
declare type MarketState = MarketStateV3;
declare const MARKET_VERSION_TO_STATE_LAYOUT: {
    [version: number]: MarketStateLayout;
};

export { MARKET_STATE_LAYOUT_V3, MARKET_VERSION_TO_STATE_LAYOUT, MarketState, MarketStateLayout, MarketStateLayoutV3, MarketStateV3 };
