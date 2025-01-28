import axios from "axios";

export async function findTokenWithSymbol(
  symbol: string
): Promise<string | undefined> {
  try {
    const response = await axios.get(
      "https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json"
    );

    const tokens = response.data.tokens;

    const token = tokens.find(
      (token: { symbol: string }) =>
        token.symbol.trim().toLowerCase() === symbol.trim().toLowerCase()
    );
    console.log(token);

    if (token) {
      console.log(`Token Address for ${symbol}: ${token.address}`);
      return token.address;
    } else {
      console.log("Token not found");
    }
  } catch (error) {
    console.error("Error fetching token list:", error);
  }
}
