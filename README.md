# ⚡ PocketFlip Pro — Mobile Paper Trading HUD & Journal

A high-speed, zero-lag mobile paper trading companion engineered for DEX trading on **Solana, Base, Ethereum, and BSC**. Designed specifically for phones to be used alongside **Axiom, Fomo, Pump.fun, and DexScreener**.

---

## 🚀 How to Host on GitHub Pages (100% Free, Under 2 Minutes)

1. Go to [github.com](https://github.com) and click **New Repository**.
2. Name the repo: `pocketflip`
3. Make it **Public** and click **Create repository**.
4. Click **Upload files**, drag and drop all the files from this unzipped folder (`index.html`, `manifest.json`, `sw.js`, `README.md`, etc.), and click **Commit changes**.
5. Go to **Settings** → **Pages** (in the left menu).
6. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
7. In ~60 seconds, your site is live at:
   `https://<your-username>.github.io/pocketflip/`

---

## 📱 How to Use on Your Phone

### Option A: As an Installed Mobile App (PWA)
1. Open your GitHub Pages URL in **Safari** (iOS) or **Chrome** (Android).
2. Tap the share / menu button → **Add to Home Screen**.
3. You now have a full-screen, zero-distraction paper trading terminal saved to your phone!

### Option B: Floating Overlay on Axiom / Fomo (Tampermonkey)
1. Install **Kiwi Browser** or **Brave** (which support Chrome extensions).
2. Install the **Tampermonkey** extension.
3. Add the `pocketflip-overlay.user.js` script included in this zip.
4. Replace `YOUR_GITHUB_USERNAME` in the script with your GitHub username.
5. Whenever you browse Axiom, Fomo, or DexScreener, a floating **"⚡ 73 HUD"** pill will float directly over your charts!

---

## 🛠 Features Fixed & Included
* **Fast 1.5s Polling (No Freeze)**: Uses cache-busted DexScreener API with auto-selection of the most liquid trading pair.
* **Instant Buy Presets**: `0.25 SOL`, `0.5 SOL`, `1 SOL`, `2.5 SOL`.
* **Partial Sells (`25%`, `50%`, `75%`, `100%`)**: Take profits in slices while letting the remainder ride live with the chart.
* **Floating Draggable Pill**: Tap the `—` button to minimize the HUD into a compact badge so it never blocks the price action.
* **Complete Journal**: Automatically records Entry MC, Exit MC, Realized PnL, Multiplier (X), Hold Duration, and Peak Market Cap reached during the trade.
* **Zero External Dependencies**: Pure HTML/CSS/JS that runs lightning fast even on low-end devices.
