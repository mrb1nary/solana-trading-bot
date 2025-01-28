import { Structure } from '../../marshmallow/index.js';
import '@solana/web3.js';
import 'bn.js';
import '../../marshmallow/buffer-layout.js';

declare const purchaseLayout: Structure<number, "", {
    instruction: number;
    amount: number;
}>;
declare const claimLayout: Structure<number, "", {
    instruction: number;
}>;

export { claimLayout, purchaseLayout };
