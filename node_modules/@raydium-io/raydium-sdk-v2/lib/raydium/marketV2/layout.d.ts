import { Structure } from '../../marshmallow/index.js';
import '@solana/web3.js';
import 'bn.js';
import '../../marshmallow/buffer-layout.js';

declare const MARKET_STATE_LAYOUT_V2: Structure<any, "", {
    [x: string]: any;
}>;

export { MARKET_STATE_LAYOUT_V2 };
