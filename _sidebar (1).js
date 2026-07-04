const SIDEBAR = (active) => `
<aside class="fixed left-0 top-0 h-full w-64 z-50 hidden md:flex flex-col py-5 sidebar-anim" style="background:rgba(20,19,19,0.95);backdrop-filter:blur(24px);border-right:1px solid rgba(255,255,255,0.06);">
  <div class="px-6 mb-6">
    <a href="index.html" style="text-decoration:none;">
      <div style="display:flex;align-items:center;gap:8px;">
        <svg width="28" height="28" viewBox="0 0 90 90" style="flex-shrink:0;"><polygon points="45,4 86,45 45,86 4,45" fill="#ff5c00"/><polygon points="45,14 76,45 45,76 14,45" fill="#c44a00"/><polygon points="45,26 64,45 45,64 26,45" fill="#000"/><line x1="33" y1="33" x2="57" y2="57" stroke="#ff5c00" stroke-width="5.5" stroke-linecap="round"/><line x1="57" y1="33" x2="33" y2="57" stroke="#ff5c00" stroke-width="5.5" stroke-linecap="round"/></svg>
        <span style="font-family:'Hanken Grotesk',sans-serif;font-size:20px;font-weight:800;color:#ffb59a;letter-spacing:-0.04em;">CryptoX</span>
      </div>
    </a>
    <div style="font-family:'Geist',monospace;font-size:10px;color:rgba(228,190,177,0.45);text-transform:uppercase;letter-spacing:0.08em;margin-top:4px;padding-left:36px;">Pro Crypto Trading</div>
  </div>
  <nav style="flex:1;overflow-y:auto;">
    ${[
      ['home.html','dashboard','dashboard','Dashboard'],
      ['trade.html','trade','candlestick_chart','Trade'],
      ['assets.html','assets','account_balance_wallet','Assets'],
      ['transfer.html','transfer','sync_alt','Transfer'],
      ['deposit.html','deposit','add_circle','Deposit'],
      ['withdrawal.html','withdrawal','remove_circle','Withdrawal'],
      ['transactions.html','transactions','receipt_long','Transaction History'],
      ['profile.html','profile','person','Profile'],
      ['settings.html','settings','settings','Settings'],
    ].map(([href,key,icon,label],i)=>`
    <a href="${href}" class="sidebar-link" style="animation-delay:${0.25+i*0.045}s;display:flex;align-items:center;gap:14px;padding:11px 16px;font-family:'Geist',monospace;font-size:13px;letter-spacing:0.03em;transition:background .2s,color .2s,transform .2s;text-decoration:none;${active===key?'background:rgba(255,92,0,0.15);color:#ffb59a;border-right:3px solid #ff5c00;':'color:rgba(228,190,177,0.6);'}" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform='translateX(0)'">
      <span class="material-symbols-outlined" style="font-size:20px;${active===key?'color:#ff5c00;font-variation-settings:\'FILL\' 1;':''}">${icon}</span>
      ${label}
    </a>`).join('')}
  </nav>
  <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,0.05);margin-top:8px;">
    <a href="trade.html" class="sidebar-cta" style="display:block;width:100%;background:#ff5c00;color:#fff;font-family:'Geist',monospace;font-size:12px;font-weight:700;padding:11px;border-radius:8px;border:none;cursor:pointer;margin-bottom:10px;text-align:center;text-decoration:none;transition:transform .2s,box-shadow .2s;">Trade Now</a>
    <a href="support.html" style="display:flex;align-items:center;gap:10px;padding:8px 4px;font-family:'Geist',monospace;font-size:12px;color:rgba(228,190,177,0.45);text-decoration:none;">
      <span class="material-symbols-outlined" style="font-size:18px;">help</span> Help
    </a>
    <a href="login.html" style="display:flex;align-items:center;gap:10px;padding:8px 4px;font-family:'Geist',monospace;font-size:12px;color:rgba(255,180,171,0.7);text-decoration:none;">
      <span class="material-symbols-outlined" style="font-size:18px;">logout</span> Sign Out
    </a>
  </div>
</aside>

<!-- Mobile Bottom Navigation Bar -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 z-50" style="background:rgba(13,13,13,0.97);backdrop-filter:blur(24px);border-top:1px solid rgba(255,255,255,0.07);display:flex;justify-content:space-around;align-items:center;padding:8px 0 14px;">
  <a href="home.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;min-width:52px;">
    <span class="material-symbols-outlined" style="font-size:22px;${active==='dashboard'?'color:#ff5c00;font-variation-settings:\'FILL\' 1;':'color:rgba(228,190,177,0.45);'}">dashboard</span>
    <span style="font-family:'Geist',monospace;font-size:9px;${active==='dashboard'?'color:#ff5c00;':'color:rgba(228,190,177,0.45);'}">Home</span>
  </a>
  <a href="assets.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;min-width:52px;">
    <span class="material-symbols-outlined" style="font-size:22px;${active==='assets'?'color:#ff5c00;font-variation-settings:\'FILL\' 1;':'color:rgba(228,190,177,0.45);'}">account_balance_wallet</span>
    <span style="font-family:'Geist',monospace;font-size:9px;${active==='assets'?'color:#ff5c00;':'color:rgba(228,190,177,0.45);'}">Assets</span>
  </a>
  <a href="trade.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;min-width:52px;">
    <div style="width:46px;height:46px;border-radius:50%;background:#ff5c00;display:flex;align-items:center;justify-content:center;margin-top:-20px;box-shadow:0 0 20px rgba(255,92,0,0.5);">
      <span class="material-symbols-outlined" style="font-size:22px;color:#fff;">candlestick_chart</span>
    </div>
    <span style="font-family:'Geist',monospace;font-size:9px;${active==='trade'?'color:#ff5c00;':'color:rgba(228,190,177,0.45);'}">Trade</span>
  </a>
  <a href="transactions.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;min-width:52px;">
    <span class="material-symbols-outlined" style="font-size:22px;${active==='transactions'?'color:#ff5c00;font-variation-settings:\'FILL\' 1;':'color:rgba(228,190,177,0.45);'}">receipt_long</span>
    <span style="font-family:'Geist',monospace;font-size:9px;${active==='transactions'?'color:#ff5c00;':'color:rgba(228,190,177,0.45);'}">History</span>
  </a>
  <a href="profile.html" style="display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;min-width:52px;">
    <span class="material-symbols-outlined" style="font-size:22px;${active==='profile'?'color:#ff5c00;font-variation-settings:\'FILL\' 1;':'color:rgba(228,190,177,0.45);'}">person</span>
    <span style="font-family:'Geist',monospace;font-size:9px;${active==='profile'?'color:#ff5c00;':'color:rgba(228,190,177,0.45);'}">Profile</span>
  </a>
</nav>
`;

// CryptoX 2.0 sidebar entrance styles (injected once)
if(!document.getElementById('sidebar-motion-style')){
  const s = document.createElement('style');
  s.id = 'sidebar-motion-style';
  s.textContent = `
    @keyframes sbFadeIn{from{opacity:0;transform:translateX(-10px);}to{opacity:1;transform:translateX(0);}}
    .sidebar-anim{animation:sbFadeIn .5s cubic-bezier(.16,1,.3,1) both;}
    .sidebar-link{opacity:0;animation:sbFadeIn .45s cubic-bezier(.16,1,.3,1) both;}
    .sidebar-cta:hover{transform:scale(1.03);box-shadow:0 0 20px rgba(255,92,0,0.4);}
    @media (prefers-reduced-motion: reduce){ .sidebar-anim,.sidebar-link{animation:none!important;opacity:1!important;transform:none!important;} }
  `;
  document.head.appendChild(s);
}
