// ══ NAV TEMPLATE - BluexCloud ══

// Guard against nav.js running more than once on the same page (can happen
// on mobile in some back/forward-navigation / flaky-reload edge cases).
// Without this, a second run inserts a second navbar + coupon-banner into
// the DOM, which — since both are position:fixed at the same spot — shows
// up as ghosted/overlapping text stacked on top of each other.
if(window.__scNavLoaded){
  console.warn('nav.js: already initialized on this page, skipping duplicate run.');
} else {
window.__scNavLoaded = true;

const VENOM_LOGO_SVG = `<img src="/logo.png" alt="BluexCloud" style="width:34px;height:34px;object-fit:contain">`;

document.getElementById('nav-placeholder').insertAdjacentHTML('beforebegin', `
<div id="coupon-banner" style="display:none;background:linear-gradient(90deg,#0c1e42,#0a1730);border-bottom:1px solid rgba(59,130,246,.18);color:#dbeafe;text-align:center;padding:9px 20px;font-size:13px;font-weight:500;letter-spacing:.15px;position:fixed;left:0;right:0;z-index:499;">
  <span id="coupon-banner-text"></span>
  <span id="coupon-code-pill" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);font-weight:800;font-size:12.5px;padding:2px 10px;border-radius:5px;margin-left:8px;letter-spacing:.5px;color:#fff;"></span>
</div>
<nav id="navbar">
  <a href="/" class="nav-logo">
    ${VENOM_LOGO_SVG}
    <span class="nav-logo-text">Bluex<em>Cloud</em></span>
  </a>
  <div class="nav-center">
    <div class="nav-item"><a class="nav-btn" href="/" data-page="/">Home</a></div>
    <div class="nav-item">
      <button class="nav-btn">Minecraft
        <svg class="chev" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="drop">
        <a href="/minecraft/budget.html" data-service="mcBudget" data-page="/minecraft/budget.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
          <div class="drop-meta"><span>Budget</span><span class="drop-sub">Affordable plans</span></div>
        </a>
        <a href="/minecraft/power.html" data-service="mcPower" data-page="/minecraft/power.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
          <div class="drop-meta"><span>Power</span><span class="drop-sub">High performance</span></div>
        </a>
        <a href="/cloud-services/proxy.html" data-service="proxy" data-page="/cloud-services/proxy.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h1a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
          <div class="drop-meta"><span>Proxy Server</span><span class="drop-sub">High-speed proxy servers</span></div>
        </a>
      </div>
    </div>
    <div class="nav-item">
      <button class="nav-btn">Games
        <svg class="chev" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="drop">
        <a href="/minecraft/budget.html" data-service="mcBudget">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg></div>
          <div class="drop-meta"><span>Minecraft Hosting</span><span class="drop-sub">Java &amp; Bedrock</span></div>
        </a>
        <a href="/games/palworld.html" data-service="palworld" data-page="/games/palworld">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
          <div class="drop-meta"><span>Palworld Hosting</span><span class="drop-sub">Survival &amp; multiplayer</span></div>
        </a>
        <a href="/games/ark.html" data-service="ark" data-page="/games/ark">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
          <div class="drop-meta"><span>ARK Survival Hosting</span><span class="drop-sub">Dinos, mods &amp; tribes</span></div>
        </a>
        <a href="/games/hytale.html" data-service="hytale" data-page="/games/hytale">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
          <div class="drop-meta"><span>Hytale Hosting</span><span class="drop-sub">Adventure &amp; mods</span></div>
        </a>
      </div>
    </div>
    <div class="nav-item">
      <button class="nav-btn">Services
        <svg class="chev" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="drop">
        <a href="/cloud-services/vps.html" data-service="vps" data-page="/cloud-services/vps.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg></div>
          <div class="drop-meta"><span>VPS Servers</span><span class="drop-sub">High performance KVM</span></div>
        </a>
        <a href="/cloud-services/dedicate.html" data-service="dedicated" data-page="/cloud-services/dedicated.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2M7 8h.01M7 16h.01"/></svg></div>
          <div class="drop-meta"><span>Dedicated Servers</span><span class="drop-sub">Bare metal, full control</span></div>
        </a>
        <a href="/cloud-services/vds.html" data-service="vds" data-page="/cloud-services/vds.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg></div>
          <div class="drop-meta"><span>VDS Servers</span><span class="drop-sub">Dedicated vCores, guaranteed resources</span></div>
        </a>
        <a href="/cloud-services/rdp.html" data-service="rdp" data-page="/cloud-services/rdp.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7a2 2 0 012-2h6a2 2 0 012 2v10M9 17H5a2 2 0 01-2-2V9a2 2 0 012-2h.5M9 17h10m-5 0v4m-3 0h6"/></svg></div>
          <div class="drop-meta"><span>RDP Hosting</span><span class="drop-sub">Windows cloud desktops</span></div>
        </a>
        <a href="/cloud-services/bot-hosting.html" data-service="bot">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>
          <div class="drop-meta"><span>Bot Hosting</span><span class="drop-sub">Node.js &amp; Python</span></div>
        </a>
        <a href="/cloud-services/web-hosting.html" data-service="web" data-page="/cloud-services/web-hosting.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/></svg></div>
          <div class="drop-meta"><span>Web Hosting</span><span class="drop-sub">Fast &amp; reliable website hosting</span></div>
        </a>
      </div>
    </div>
    <div class="nav-item">
      <button class="nav-btn">Company
        <svg class="chev" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="drop">
        <a href="/company/about.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
          <div class="drop-meta"><span>About Us</span><span class="drop-sub">Learn more about our mission and team.</span></div>
        </a>
        <a href="/company/infrastructure.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg></div>
          <div class="drop-meta"><span>Infrastructure</span><span class="drop-sub">Explore our server network and data centers.</span></div>
        </a>
        <a href="/company/contact.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
          <div class="drop-meta"><span>Contact Us</span><span class="drop-sub">Get in touch with our support team.</span></div>
        </a>
        <a href="/company/terms.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
          <div class="drop-meta"><span>Terms and Conditions</span><span class="drop-sub">Terms and conditions of our services.</span></div>
        </a>
        <a href="/company/privacy.html">
          <div class="drop-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
          <div class="drop-meta"><span>Privacy Policy</span><span class="drop-sub">How we protect your data privacy.</span></div>
        </a>
      </div>
    </div>
  </div>
  <div class="nav-right">
    <button class="btn-theme" id="themeToggleBtn" aria-label="Toggle dark / light theme" title="Toggle theme">
      <svg class="icon-moon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      <svg class="icon-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke-width="2"/><path stroke-linecap="round" stroke-width="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    </button>
    <div class="cur-wrap" id="curWrap">
      <button class="btn-cur" id="curBtn">
        <span id="curLabel">₹ INR</span>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="cur-drop" id="curDrop">
        <button data-cur="INR" data-sym="₹" class="active">₹ INR</button>
        <button data-cur="USD" data-sym="$">$ USD</button>
      </div>
    </div>
    <button class="btn-client" onclick="window.open('https://billing.BluexCloud.in','_blank')">Client Area</button>
    <button class="mob-menu-btn" id="mobMenuBtn" aria-label="Open menu">
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</nav>

<!-- Mobile Drawer -->
<div class="mob-overlay" id="mobOverlay"></div>
<div class="mob-drawer" id="mobDrawer">
  <div class="mob-drawer-head">
    <a href="/" class="nav-logo">
      <img src="/logo.png" alt="BluexCloud" style="width:28px;height:28px;object-fit:contain">
      <span class="nav-logo-text">Strength<em>Cloud</em></span>
    </a>
    <button class="mob-close-btn" id="mobCloseBtn" aria-label="Close menu">
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>
  <div class="mob-drawer-body">
    <a class="mob-link" href="/">Home</a>
    <div class="mob-group">
      <button class="mob-group-btn" data-group="minecraft">
        Minecraft
        <svg class="mob-chev" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="mob-group-drop" id="mg-minecraft">
        <a class="mob-sub-link" href="/minecraft/budget" data-service="mcBudget"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Budget Plans</a>
        <a class="mob-sub-link" href="/minecraft/power" data-service="mcPower"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>Power Plans</a>
        <a class="mob-sub-link" href="/cloud-services/proxy" data-service="proxy"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h1a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Proxy Server</a>
      </div>
    </div>
    <div class="mob-group">
      <button class="mob-group-btn" data-group="games">
        Games
        <svg class="mob-chev" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="mob-group-drop" id="mg-games">
        <a class="mob-sub-link" href="/minecraft/budget.html" data-service="mcBudget"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>Minecraft Hosting</a>
        <a class="mob-sub-link" href="/games/palworld.html" data-service="palworld"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>Palworld Hosting</a>
        <a class="mob-sub-link" href="/games/ark.html" data-service="ark"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>ARK Survival Hosting</a>
        <a class="mob-sub-link" href="/games/hytale.html" data-service="hytale"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>Hytale Hosting</a>
      </div>
    </div>
    <div class="mob-group">
      <button class="mob-group-btn" data-group="cloud">
        Services
        <svg class="mob-chev" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="mob-group-drop" id="mg-cloud">
        <a class="mob-sub-link" href="/cloud-services/vps.html" data-service="vps"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>VPS Servers</a>
        <a class="mob-sub-link" href="/cloud-services/dedicated.html" data-service="dedicated"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2M7 8h.01M7 16h.01"/></svg>Dedicated Servers</a>
        <a class="mob-sub-link" href="/cloud-services/vds.html" data-service="vds"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>VDS Servers</a>
        <a class="mob-sub-link" href="/cloud-services/rdp.html" data-service="rdp"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7a2 2 0 012-2h6a2 2 0 012 2v10M9 17H5a2 2 0 01-2-2V9a2 2 0 012-2h.5M9 17h10m-5 0v4m-3 0h6"/></svg>RDP Hosting</a>
        <a class="mob-sub-link" href="/cloud-services/bot-hosting.html" data-service="bot"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Bot Hosting</a>
        <a class="mob-sub-link" href="/cloud-services/web-hosting.html" data-service="web"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/></svg>Web Hosting</a>
      </div>
    </div>
    <div class="mob-group">
      <button class="mob-group-btn" data-group="more">
        Company
        <svg class="mob-chev" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="mob-group-drop" id="mg-more">
        <a class="mob-sub-link" href="/company/about.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>About Us</a>
        <a class="mob-sub-link" href="/company/infrastructure.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg>Infrastructure</a>
        <a class="mob-sub-link" href="/company/contact.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>Contact Us</a>
        <a class="mob-sub-link" href="/company/terms.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>Terms and Conditions</a>
        <a class="mob-sub-link" href="/company/privacy.html"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>Privacy Policy</a>
      </div>
    </div>
    <div class="mob-drawer-footer">
      <button class="btn-client" style="width:100%;justify-content:center;" onclick="window.open('https://billing.BluexCloud.in','_blank')">Client Area</button>
    </div>
  </div>
</div>
`);

// ── Floating WhatsApp Button (site-wide) ──
(function initWhatsappButton(){
  document.body.insertAdjacentHTML('beforeend', `
  <a id="scWhatsappFloat" class="sc-wa-float" href="https://wa.me/910000000000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" title="Chat with us on WhatsApp" style="position:fixed;bottom:22px;right:22px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.35),0 0 0 0 rgba(37,211,102,.5);z-index:900;text-decoration:none;transition:transform .2s;">
    <svg width="30" height="30" viewBox="0 0 448 512" fill="#fff"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
  </a>`);
  const btn = document.getElementById('scWhatsappFloat');
  if(btn){
    btn.addEventListener('mouseenter', ()=>{ btn.style.transform='scale(1.08)'; });
    btn.addEventListener('mouseleave', ()=>{ btn.style.transform='scale(1)'; });
  }
  function applyLink(d){
    const link = d && d.settings && d.settings.whatsappLink;
    if(btn && link) btn.href = link;
  }
  if(window.ADMIN_DATA && Object.keys(window.ADMIN_DATA).length){ applyLink(window.ADMIN_DATA); }
  // Always fetch independently too, so the button works even on pages that don't load ADMIN_DATA themselves
  fetch('/api/data').then(r=>r.ok?r.json():null).then(d=>{ if(d) applyLink(d); }).catch(()=>{});
})();

// ── Coupon Banner ──
(function initCouponBanner(){
  const CACHE_KEY = 'sc-coupon-cache';
  let renderedCode = null; // code currently painted on screen (used to skip no-op re-renders)
  // The navbar stays pinned at top:0 as always. Once a coupon is enabled, the
  // banner sticks directly below it (like a secondary strip), and the page
  // content (via the nav-placeholder spacer) is pushed down to make room for both.
  function repositionForBanner(){
    const banner = document.getElementById('coupon-banner');
    const navEl = document.getElementById('navbar');
    const placeholder = document.getElementById('nav-placeholder');
    if(!banner || banner.style.display === 'none') return;
    const navH = navEl ? navEl.offsetHeight : 64;
    banner.style.top = navH + 'px';
    const bannerH = banner.offsetHeight;
    if(placeholder) placeholder.style.height = `calc(var(--nav-h) + ${bannerH}px)`;
  }
  function hideBanner(){
    const banner = document.getElementById('coupon-banner');
    const placeholder = document.getElementById('nav-placeholder');
    if(banner) banner.style.display = 'none';
    if(placeholder) placeholder.style.height = 'var(--nav-h)';
    renderedCode = null;
    window.__couponCode = null;
  }
  function paintBanner(coupon){
    const banner = document.getElementById('coupon-banner');
    const textEl = document.getElementById('coupon-banner-text');
    const codeEl = document.getElementById('coupon-code-pill');
    if(!banner || !textEl || !codeEl) return;
    textEl.textContent = coupon.desc || 'Special offer!';
    codeEl.textContent = coupon.code;
    banner.style.display = 'block';
    window.__couponCode = coupon.code;
    renderedCode = coupon.code + '|' + (coupon.desc||'');
    repositionForBanner();
  }
  function showBanner(d, opts){
    const coupon = d && d.settings && d.settings.coupon;
    const fromNetwork = !opts || !opts.cache;
    if(!coupon || !coupon.enabled || !coupon.code){
      // Only network data is authoritative enough to hide an already-shown
      // (cached) banner — don't let a still-loading/incomplete object hide it.
      if(fromNetwork){
        if(renderedCode) hideBanner();
        try{ localStorage.removeItem(CACHE_KEY); }catch(e){}
      }
      return;
    }
    const sig = coupon.code + '|' + (coupon.desc||'');
    if(sig !== renderedCode) paintBanner(coupon);
    // Cache whatever the network confirms, so the very next page load (i.e.
    // navigating to another section) can paint this instantly instead of
    // sitting blank/late for the ~1s round trip to /api/data.
    if(fromNetwork){
      try{ localStorage.setItem(CACHE_KEY, JSON.stringify(coupon)); }catch(e){}
    }
  }
  // 1) Instant paint from last known-good state (cached from a previous page
  //    load on this site). This is what actually fixes the "shows up late /
  //    pops in after switching sections" issue — no network wait involved.
  try{
    const cached = localStorage.getItem(CACHE_KEY);
    if(cached){
      const coupon = JSON.parse(cached);
      if(coupon && coupon.enabled && coupon.code) paintBanner(coupon);
    }
  }catch(e){}
  // 2) Bundled defaults, if any page already has them (fast path, no flicker)
  if(window.ADMIN_DATA && window.ADMIN_DATA.settings){ showBanner(window.ADMIN_DATA, {cache:true}); }
  // Also hook into pages that announce readiness via callbacks
  const orig = window.__onAdminDataLoaded;
  window.__onAdminDataLoaded = function(){ if(orig) orig(); showBanner(window.ADMIN_DATA, {cache:true}); };
  if(window.__onDataReady) window.__onDataReady(function(){ showBanner(window.ADMIN_DATA, {cache:true}); });
  // 3) Always fetch independently too, so the banner works on EVERY page
  // (index, about, contact, infrastructure, privacy, toc, etc.) even if
  // that page never sets up window.ADMIN_DATA itself. This is authoritative:
  // it corrects the cached guess (updates text, or hides it if an admin
  // turned the coupon off) and refreshes the cache for the next navigation.
  fetch('/api/data').then(r=>r.ok?r.json():null).then(d=>{ if(d) showBanner(d); }).catch(()=>{});
  // Banner height can change (e.g. text wraps to 2 lines on narrow screens),
  // so keep the navbar/content offset in sync regardless of which path painted it.
  window.addEventListener('resize', repositionForBanner);
})();

// ── Coupon Popup (separate from the top banner — shown once per session as a card) ──
(function initCouponPopup(){
  let shown = false;
  document.body.insertAdjacentHTML('beforeend', `
  <div id="coupon-popup-overlay" style="display:none;position:fixed;inset:0;background:rgba(2,6,23,.7);z-index:2000;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px);">
    <canvas id="coupon-popup-confetti" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;"></canvas>
    <div id="coupon-popup-card" style="background:var(--card);border:1px solid var(--card-border);border-radius:18px;max-width:380px;width:100%;padding:34px 28px 26px;text-align:center;position:relative;box-shadow:0 24px 70px rgba(0,0,0,.5);transform:scale(.94);opacity:0;transition:transform .25s ease,opacity .25s ease;">
      <button id="coupon-popup-close" aria-label="Close" style="position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:50%;background:var(--surface);border:1px solid var(--card-border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text);opacity:.7;">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div style="width:54px;height:54px;border-radius:50%;background:var(--accent-glow);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
        <svg width="24" height="24" fill="none" stroke="var(--accent)" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </div>
      <div style="display:inline-block;background:var(--accent-glow);color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.6px;padding:4px 13px;border-radius:100px;margin-bottom:14px;text-transform:uppercase;">Limited-Time Deal</div>
      <div id="coupon-popup-title" style="font-size:23px;font-weight:800;color:var(--text);margin-bottom:6px;line-height:1.2;"></div>
      <div id="coupon-popup-desc" style="font-size:14px;color:var(--text);opacity:.65;margin-bottom:22px;line-height:1.5;"></div>
      <div style="background:var(--surface);border:1px dashed var(--card-border);border-radius:10px;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:18px;">
        <div style="text-align:left;">
          <div style="font-size:10px;color:var(--text);opacity:.5;font-weight:800;letter-spacing:.6px;text-transform:uppercase;">Coupon Code</div>
          <div id="coupon-popup-code" style="font-size:18px;font-weight:800;color:var(--text);letter-spacing:.5px;"></div>
        </div>
        <button id="coupon-popup-copy" style="background:var(--card);border:1px solid var(--card-border);color:var(--text);font-size:12px;font-weight:700;padding:8px 13px;border-radius:8px;cursor:pointer;display:flex;align-items:center;gap:5px;white-space:nowrap;">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          Copy
        </button>
      </div>
      <button id="coupon-popup-claim" style="width:100%;background:var(--accent);color:#fff;border:none;font-size:15px;font-weight:700;padding:13px;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px;">⚡ Claim Offer</button>
      <div style="font-size:11px;color:var(--text);opacity:.45;margin-top:11px;">Applies at checkout · Use code above</div>
    </div>
  </div>`);
  const overlay = document.getElementById('coupon-popup-overlay');
  const card = document.getElementById('coupon-popup-card');
  function close(){
    card.style.transform='scale(.94)'; card.style.opacity='0';
    setTimeout(()=>{ overlay.style.display='none'; }, 200);
  }
  function fireConfetti(){
    const canvas = document.getElementById('coupon-popup-confetti');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = overlay.clientWidth * dpr; canvas.height = overlay.clientHeight * dpr;
    canvas.style.width = overlay.clientWidth+'px'; canvas.style.height = overlay.clientHeight+'px';
    ctx.scale(dpr, dpr);
    const colors = ['#3b82f6','#818cf8','#22c55e','#f59e0b','#ec4899','#38bdf8','#ffffff'];
    const w = overlay.clientWidth, h = overlay.clientHeight;
    // Spread pieces across the whole top of the screen, like real confetti falling — not a single center burst
    const pieces = Array.from({length:130}, ()=>({
      x: Math.random()*w,
      y: -20 - Math.random()*h*0.5,
      vx: (Math.random()-0.5)*2.5,
      vy: 2 + Math.random()*3,
      size: 4+Math.random()*5,
      color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*Math.PI*2,
      vr: (Math.random()-0.5)*0.25,
      sway: Math.random()*Math.PI*2,
      life: 1,
      fadeDelay: 0.55 + Math.random()*0.35 // most pieces stay fully visible a good while before fading
    }));
    let frame=0;
    function tick(){
      frame++;
      ctx.clearRect(0,0,w,h);
      let alive=false;
      pieces.forEach(p=>{
        if(p.life<=0) return;
        alive=true;
        p.sway += 0.05;
        p.x += p.vx + Math.sin(p.sway)*0.6; p.y += p.vy; p.rot += p.vr;
        if(frame > 130*p.fadeDelay) p.life -= 0.018;
        ctx.save();
        ctx.globalAlpha = Math.max(Math.min(p.life,1),0);
        ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*0.6);
        ctx.restore();
      });
      if(alive && frame<260) requestAnimationFrame(tick);
      else ctx.clearRect(0,0,w,h);
    }
    requestAnimationFrame(tick);
  }
  function open(){
    overlay.style.display='flex';
    requestAnimationFrame(()=>{ card.style.transform='scale(1)'; card.style.opacity='1'; fireConfetti(); });
  }
  document.getElementById('coupon-popup-close').addEventListener('click', close);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
  function copyCode(btn, code){
    const original = btn.innerHTML;
    navigator.clipboard && navigator.clipboard.writeText(code);
    btn.innerHTML = '✅ Copied!';
    setTimeout(()=>{ btn.innerHTML = original; }, 1500);
  }
  function showPopup(d){
    if(shown) return;
    const popup = d && d.settings && d.settings.couponPopup;
    if(!popup || !popup.enabled || !popup.title || !popup.code) return;
    // Once per browser session, so it doesn't nag on every page navigation
    if(sessionStorage.getItem('sc-popup-seen')) return;
    document.getElementById('coupon-popup-title').textContent = popup.title;
    document.getElementById('coupon-popup-desc').textContent = popup.desc || '';
    document.getElementById('coupon-popup-code').textContent = popup.code;
    const copyBtn = document.getElementById('coupon-popup-copy');
    copyBtn.onclick = ()=> copyCode(copyBtn, popup.code);
    document.getElementById('coupon-popup-claim').onclick = ()=>{
      navigator.clipboard && navigator.clipboard.writeText(popup.code);
      close();
      const link = popup.link && popup.link.trim();
      if(link) window.open(link, '_blank');
    };
    shown = true;
    sessionStorage.setItem('sc-popup-seen', '1');
    setTimeout(open, 250);
  }
  if(window.ADMIN_DATA && window.ADMIN_DATA.settings){ showPopup(window.ADMIN_DATA); }
  const origPopup = window.__onAdminDataLoaded;
  window.__onAdminDataLoaded = function(){ if(origPopup) origPopup(); showPopup(window.ADMIN_DATA); };
  if(window.__onDataReady) window.__onDataReady(function(){ showPopup(window.ADMIN_DATA); });
  fetch('/api/data').then(r=>r.ok?r.json():null).then(d=>{ if(d) showPopup(d); }).catch(()=>{});
})();

// ── Theme Toggle (Dark / Light) ──
(function initThemeToggle(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggleBtn');
  const saved = localStorage.getItem('sc-theme');
  if(saved === 'light') root.setAttribute('data-theme','light');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const isLight = root.getAttribute('data-theme') === 'light';
    if(isLight){ root.removeAttribute('data-theme'); localStorage.setItem('sc-theme','dark'); }
    else { root.setAttribute('data-theme','light'); localStorage.setItem('sc-theme','light'); }
    // Trigger the button's flip animation (icon rotate + glow burst)
    btn.classList.remove('theme-flip');
    void btn.offsetWidth; // restart animation
    btn.classList.add('theme-flip');
    setTimeout(()=> btn.classList.remove('theme-flip'), 500);
  });
})();

// ── Currency Dropdown ──
window.SC_CURRENCY = window.SC_CURRENCY || { code:'INR', symbol:'₹', rate:1 };
window.SC_RATES = { INR:1, USD:1/83 };

// ── Shared price formatter: converts a base-INR price into the active currency ──
window.scFormatPrice = function(inrValue){
  const cur = window.SC_CURRENCY || { code:'INR', symbol:'₹', rate:1 };
  const n = Number(inrValue) || 0;
  const converted = n * cur.rate;
  const display = cur.code === 'INR'
    ? Math.round(converted).toLocaleString('en-IN')
    : converted.toFixed(2);
  return `${cur.symbol}${display}`;
};

// ── Refreshes any static [data-inr] price badges on the page ──
window.scRefreshStaticPrices = function(){
  document.querySelectorAll('[data-inr]').forEach(el=>{
    el.textContent = window.scFormatPrice(el.dataset.inr);
  });
};
(function initCurrencyDropdown(){
  const wrap = document.getElementById('curWrap');
  const btn = document.getElementById('curBtn');
  const drop = document.getElementById('curDrop');
  const label = document.getElementById('curLabel');
  if(!wrap || !btn || !drop) return;

  const saved = localStorage.getItem('sc-currency');
  if(saved){
    try{
      const obj = JSON.parse(saved);
      if(obj && window.SC_RATES.hasOwnProperty(obj.code)){
        window.SC_CURRENCY = obj;
        label.textContent = `${obj.symbol} ${obj.code}`;
        drop.querySelectorAll('button').forEach(b=>b.classList.toggle('active', b.dataset.cur===obj.code));
      } else {
        localStorage.removeItem('sc-currency'); // stale currency (e.g. old USD/EUR/GBP) — fall back to INR
      }
    }catch(e){}
  }

  btn.addEventListener('click', e=>{
    e.stopPropagation();
    wrap.classList.toggle('open');
  });
  document.addEventListener('click', ()=> wrap.classList.remove('open'));

  drop.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click', e=>{
      e.stopPropagation();
      const code = b.dataset.cur, sym = b.dataset.sym;
      window.SC_CURRENCY = { code, symbol:sym, rate: window.SC_RATES[code] || 1 };
      label.textContent = `${sym} ${code}`;
      drop.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      wrap.classList.remove('open');
      localStorage.setItem('sc-currency', JSON.stringify(window.SC_CURRENCY));
      window.scRefreshStaticPrices();
      window.dispatchEvent(new CustomEvent('sc-currency-change', { detail: window.SC_CURRENCY }));
    });
  });

  // Apply saved/default currency to any static price badges right away
  window.scRefreshStaticPrices();
})();

} // end __scNavLoaded guard


// ── Service availability (Admin > Settings > Service Availability) ──
// A service the admin switched off disappears from the nav (desktop + mobile),
// from the homepage service cards and from any other element tagged
// data-service="<key>". A dropdown whose items are ALL off is hidden too.
(function initServiceVisibility(){
  function offList(d){
    var h = d && d.settings && d.settings.hiddenServices;
    if(!h || typeof h !== 'object') return [];
    return Object.keys(h).filter(function(k){ return h[k] === true; });
  }
  function apply(d){
    var off = offList(d);
    window.__scHiddenServices = off;
    document.querySelectorAll('[data-service]').forEach(function(el){
      el.style.display = off.indexOf(el.getAttribute('data-service')) > -1 ? 'none' : '';
    });
    // Elements shown while AT LEAST ONE of the listed services is live
    document.querySelectorAll('[data-service-all]').forEach(function(el){
      var keys = el.getAttribute('data-service-all').split(',');
      var allOff = keys.every(function(k){ return off.indexOf(k.trim()) > -1; });
      el.style.display = allOff ? 'none' : '';
    });
    // Hide the whole "Play Now" game section when every game card is off
    document.querySelectorAll('.game-cards-grid').forEach(function(grid){
      var cards = grid.querySelectorAll('.game-card');
      var any = Array.prototype.some.call(cards, function(c){ return c.style.display !== 'none'; });
      var sec = grid.closest('section');
      if(sec) sec.style.display = any ? '' : 'none';
    });
    // Homepage service cards: keyed by the price tag inside each card
    document.querySelectorAll('.svc-card').forEach(function(card){
      var tag = card.querySelector('[data-svc]');
      if(!tag) return;
      card.style.display = off.indexOf(tag.getAttribute('data-svc')) > -1 ? 'none' : '';
    });
    // Hide a whole dropdown when every link inside it is off
    function sweep(groupSel, dropSel){
      document.querySelectorAll(groupSel).forEach(function(g){
        var links = g.querySelectorAll(dropSel + ' a');
        if(!links.length) return;
        var anyShown = Array.prototype.some.call(links, function(a){ return a.style.display !== 'none'; });
        g.style.display = anyShown ? '' : 'none';
      });
    }
    sweep('.nav-item', '.drop');
    sweep('.mob-group', '.mob-group-drop');
    window.dispatchEvent(new Event('resize')); // let the homepage carousel recalc its arrows
  }
  window.scApplyServiceVisibility = apply;
  if(window.ADMIN_DATA && window.ADMIN_DATA.settings) apply(window.ADMIN_DATA);
  if(window.__onDataReady) window.__onDataReady(function(){ if(window.ADMIN_DATA && window.ADMIN_DATA.settings) apply(window.ADMIN_DATA); });
  // Pages that don't get live data injected by the server: ask for it once
  if(!window.__SC_LIVE){
    fetch('/api/data').then(function(r){ return r.ok ? r.json() : null; }).then(function(d){ if(d) apply(d); }).catch(function(){});
  }
})();
