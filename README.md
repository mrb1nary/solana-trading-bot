# Solana AI Trading Bot 🤖💰

Automated trading bot that monitors Twitter users, extracts token addresses using AI, and executes trades on Raydium.

## Features ✨

- 🕵️ Monitor multiple Twitter users for new token mentions
- 🤖 AI-powered token address extraction using LLM
- 🔄 Automatic symbol-to-address resolution
- ⚡ Raydium API integration for instant trading
- 🔐 Secure private key management (user-provided)

## Disclaimer ⚠️🔴

**This code is:**
- 🚨 Not professionally audited
- 📅 Not actively maintained
- ⚠️ Provided "as is" without warranties

**You:**
- 💸 Bear 100% responsibility for any financial losses
- 🔐 Acknowledge the risks of cryptocurrency trading
- ✔️ Must verify all transactions manually

**By using this software, you agree that:**
- 📉 Cryptocurrency trading involves high risk of loss
- 🤖 AI-generated trading decisions may be incorrect
- 📉 Prices can fluctuate dramatically in seconds

**Always:**
- 🧪 Test with small amounts first
- 🔍 Do your own research (DYOR)
  

## How It Works 🛠️

1. **User Configuration**  
   Provide Twitter usernames to monitor and your Solana private key

2. **Tweet Scraping**  
   Real-time monitoring and scraping of target users' tweets

3. **AI Analysis**  
   LLM processes tweets to detect:
   - Token addresses (direct matches)
   - Token symbols (indirect matches)
   - Market context and sentiment

4. **Address Resolution**  
   ```mermaid
   graph TD
       A[Tweet] --> B{Address Found?}
       B -->|Yes| C[Direct Trade]
       B -->|No| D[Extract Symbol]
       D --> E[Symbol Search]
       E --> F[Resolve Address]
       F --> C

5. **Trade Execution**
   - Query Raydium API for token details
   - Execute swap using user-provided private key
   - Real-time trade confirmation
  

  ## Getting Started 🚀

  ```
  git clone https://github.com/yourusername/solana-ai-bot.git
  cd solana-ai-bot
  npm install
  pip install -r requirements.txt
  ```

## Preparing .env file

```
Rename .env.example to .env
Fill in all the neccessary keys
```
