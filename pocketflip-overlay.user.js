// ==UserScript==
// @name         PocketFlip Mobile Overlay HUD
// @namespace    https://pocketflip.app/
// @version      1.2
// @description  Floating Mobile Paper Trading HUD for Axiom, Fomo, Pump.fun, and Dexscreener
// @author       73
// @match        *://*.axiom.trade/*
// @match        *://*.fomo.fund/*
// @match        *://*.pump.fun/*
// @match        *://*.dexscreener.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';
  if (window.top !== window.self) return;

  // Auto-detect CA from URL
  function detectCA() {
    const url = window.location.href;
    const parts = url.split('/');
    for (let part of parts) {
      if (part.length >= 32 && part.length <= 44 && !part.includes('?') && !part.includes('.')) {
        return part;
      }
    }
    return '';
  }

  // Create floating trigger button
  const btn = document.createElement('div');
  btn.id = 'pocketflip-launcher-btn';
  btn.innerHTML = '⚡ 73 HUD';
  btn.style.cssText = 'position:fixed;bottom:80px;right:15px;background:#10b981;color:#000;font-family:monospace;font-weight:900;font-size:12px;padding:8px 14px;border-radius:24px;box-shadow:0 6px 20px rgba(0,0,0,0.7);z-index:9999999;cursor:pointer;user-select:none;border:1px solid #34d399;';
  document.body.appendChild(btn);

  // Floating iframe overlay
  const iframe = document.createElement('iframe');
  iframe.id = 'pocketflip-iframe-overlay';
  iframe.style.cssText = 'position:fixed;bottom:15px;right:15px;width:340px;height:420px;border:1px solid #1e293b;border-radius:18px;box-shadow:0 12px 35px rgba(0,0,0,0.85);z-index:99999999;display:none;background:#080a0f;';
  // Point to local or hosted page
  iframe.src = 'https://YOUR_GITHUB_USERNAME.github.io/pocketflip/';
  document.body.appendChild(iframe);

  btn.onclick = () => {
    if (iframe.style.display === 'none') {
      const ca = detectCA();
      if (ca && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'SET_CA', ca: ca }, '*');
      }
      iframe.style.display = 'block';
      btn.innerHTML = '✕ Close HUD';
    } else {
      iframe.style.display = 'none';
      btn.innerHTML = '⚡ 73 HUD';
    }
  };
})();
