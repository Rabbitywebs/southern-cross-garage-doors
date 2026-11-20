/* =========================================================
   Southern Cross Garage Doors — site behaviour
   1. Mobile menu   2. Header shadow   3. Problem tabs
   4. Scroll reveal 5. Quote form     6. Footer year
   ========================================================= */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  /* 1. Mobile menu */
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    const setOpen = (open) => {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* 2. Header shadow once you scroll */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 3. "What's wrong with your door?" tabs (keyboard friendly) */
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = [...group.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
      tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab, false));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });
  });

  /* 4. Fade sections in as they scroll into view */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }

  /* 5. Quote form — demo only until you connect a form service (see README step 7) */
  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (form.getAttribute("action") && form.getAttribute("action") !== "#") return; // real endpoint set: let it submit
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      if (msg) msg.classList.add("is-visible");
      form.reset();
    });
  });

  /* 7. Door drawings: on touch screens, open each door as its card scrolls into view */
  const doorCards = document.querySelectorAll(".door-card");
  const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (touch && doorCards.length && "IntersectionObserver" in window) {
    const doorIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) card.classList.add("is-active");
        else if (!entry.isIntersecting) card.classList.remove("is-active"); // closes again once off-screen, so it replays
      });
    }, { threshold: [0, 0.6] });
    doorCards.forEach((c) => doorIO.observe(c));
  }

  /* 8. Brand logos: on touch screens, colour each logo while it passes through the middle of the screen */
  const logos = document.querySelectorAll(".brand-logo");
  if (touch && logos.length && "IntersectionObserver" in window) {
    const logoIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-color", entry.isIntersecting));
    }, { rootMargin: "-25% 0px -25% 0px", threshold: 0.5 });
    logos.forEach((l) => logoIO.observe(l));
  }

  /* 6. Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
});
