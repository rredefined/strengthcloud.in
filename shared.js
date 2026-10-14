// ══ SHARED JS - StrengthCloud ══

// ── Desktop Nav Dropdowns ──
// Opens on hover (mouse users just move the cursor over Minecraft / Games /
// Cloud / Company and the menu appears — no click needed) and still supports
// click/tap (for touch/keyboard users, and as a toggle on desktop too).
function closeAll(){ document.querySelectorAll('.nav-item').forEach(i=>i.classList.remove('open')); }
let __scNavCloseTimer = null;
document.querySelectorAll('.nav-item').forEach(item=>{
  const btn = item.querySelector('.nav-btn, button');
  const drop = item.querySelector('.drop');
  if(!btn || !drop) return;

  btn.addEventListener('click',e=>{
    e.stopPropagation();
    const wasOpen=item.classList.contains('open');
    closeAll();
    if(!wasOpen) item.classList.add('open');
  });

  // Hover open/close — a short close delay on mouseleave means moving the
  // cursor from the button down into the dropdown (across the small gap
  // between them) doesn't cause it to flicker shut.
  item.addEventListener('mouseenter', ()=>{
    clearTimeout(__scNavCloseTimer);
    document.querySelectorAll('.nav-item').forEach(i=>{ if(i!==item) i.classList.remove('open'); });
    item.classList.add('open');
  });
  item.addEventListener('mouseleave', ()=>{
    clearTimeout(__scNavCloseTimer);
    __scNavCloseTimer = setTimeout(()=>{ item.classList.remove('open'); }, 180);
  });
});
document.addEventListener('click',closeAll);

// ── Nav scroll shadow ──
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(nav) nav.classList.toggle('scrolled', window.scrollY>20);
});

// ── Scroll Reveal ──
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// ── Active nav link ──
(function(){
  // Normalise: strip a trailing slash (except for the root "/") so
  // "/cloud-services/vps/" and "/cloud-services/vps" both match.
  let path = window.location.pathname;
  if(path.length > 1) path = path.replace(/\/+$/, '');
  document.querySelectorAll('.nav-btn[data-page]').forEach(a=>{
    if(a.dataset.page===path) a.classList.add('active');
    else a.classList.remove('active');
  });
})();

// ── Mobile Drawer ──
(function(){
  const btn = document.getElementById('mobMenuBtn');
  const drawer = document.getElementById('mobDrawer');
  const overlay = document.getElementById('mobOverlay');
  const closeBtn = document.getElementById('mobCloseBtn');
  if(!btn || !drawer) return;

  // Plain `body{overflow:hidden}` doesn't actually stop background scroll/
  // bounce on iOS Safari — the page can still "rubber-band" behind the open
  // drawer, which is exactly the kind of jumpy/unstable feel mobile visitors
  // hit. Pinning the body with position:fixed (and restoring the saved
  // scroll position on close) is the standard fix for that.
  let savedScrollY = 0;
  function openDrawer(){
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.position='fixed';
    document.body.style.top=(-savedScrollY)+'px';
    document.body.style.left='0';
    document.body.style.right='0';
    document.body.style.width='100%';
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.position='';
    document.body.style.top='';
    document.body.style.left='';
    document.body.style.right='';
    document.body.style.width='';
    window.scrollTo(0, savedScrollY);
  }

  btn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  // Tapping a link inside the drawer should close it too — otherwise the
  // drawer/scroll-lock stays engaged while the next page loads underneath.
  drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeDrawer));

  // Mobile accordion groups
  document.querySelectorAll('.mob-group-btn').forEach(gbtn=>{
    gbtn.addEventListener('click', e=>{
      e.stopPropagation();
      const group = gbtn.dataset.group;
      const drop = document.getElementById('mg-'+group);
      const isOpen = drop.classList.contains('open');
      // close all
      document.querySelectorAll('.mob-group-drop').forEach(d=>d.classList.remove('open'));
      document.querySelectorAll('.mob-group-btn').forEach(b=>b.classList.remove('active'));
      if(!isOpen){
        drop.classList.add('open');
        gbtn.classList.add('active');
      }
    });
  });
})();
