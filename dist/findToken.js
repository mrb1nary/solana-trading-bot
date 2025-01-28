"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTokenWithSymbol = findTokenWithSymbol;
const axios_1 = __importDefault(require("axios"));
function findTokenWithSymbol(symbol) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get("https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json");
            const tokens = response.data.tokens;
            const token = tokens.find((token) => token.symbol.trim().toLowerCase() === symbol.trim().toLowerCase());
            console.log(token);
            if (token) {
                console.log(`Token Address for ${symbol}: ${token.address}`);
                return token.address;
            }
            else {
                console.log("Token not found");
            }
        }
        catch (error) {
            console.error("Error fetching token list:", error);
        }
    });
}
