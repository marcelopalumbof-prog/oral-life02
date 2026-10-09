/* ============================================================
   Clínica Oral Life – animações de scroll (GSAP + ScrollTrigger)
   Só assume o controle quando: GSAP carregou E o usuário aceita
   movimento. Em qualquer outro caso, o main.js (IntersectionObserver)
   cuida dos reveals — o site nunca fica com conteúdo escondido.
   ============================================================ */
(function () {
  "use strict";

  if (!window.gsap || !window.ScrollTrigger) { return; }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- 1) Entrada do hero (home e páginas internas) ---------- */
  var heroFoto = document.querySelector(".hero-foto");
  var h1 = document.querySelector(".hero h1, .hero-interno h1");
  var sub = document.querySelector(".hero .hero-sub, .hero-interno .lead");
  var pequenos = document.querySelectorAll(
    ".hero .hero-selos .chip, .hero .hero-ctas .btn, .hero-interno .breadcrumbs, .hero-interno .hero-ctas .btn"
  );

  if (h1) {
    var tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.55 } });
    if (heroFoto) { tl.from(heroFoto, { y: 28, opacity: 0, duration: 0.7 }, 0); }
    tl.from(h1, { y: 18, opacity: 0 }, heroFoto ? 0.45 : 0);
    if (sub) { tl.from(sub, { y: 16, opacity: 0 }, "-=0.32"); }
    if (pequenos.length) { tl.from(pequenos, { y: 12, opacity: 0, duration: 0.4, stagger: 0.06 }, "-=0.28"); }
  }

  /* ---------- 2) Parallax sutil na foto do hero (só na home) ---------- */
  var heroImg = document.querySelector(".hero-foto img");
  if (heroImg && heroFoto && document.querySelector(".hero")) {
    gsap.set(heroImg, { scale: 1.08 });
    gsap.fromTo(heroImg,
      { yPercent: -3.5 },
      {
        yPercent: 3.5,
        ease: "none",
        scrollTrigger: { trigger: heroFoto, start: "top top", end: "bottom top", scrub: true }
      }
    );
  }

  /* ---------- 3) Reveals em cascata (cards, painéis, passos, fotos) ---------- */
  var revelar = gsap.utils.toArray(".revelar, .section-cabecalho, .banner-foto").filter(function (el) {
    return !el.classList.contains("hero-foto");
  });

  if (revelar.length) {
    gsap.set(revelar, { opacity: 0, y: 26 });
    ScrollTrigger.batch(revelar, {
      start: "top 88%",
      once: true,
      onEnter: function (lote) {
        gsap.to(lote, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: "power2.out",
          overwrite: true
        });
      }
    });
  }

  /* ---------- 4) Galeria: fotos entram individualmente ---------- */
  var fotosGaleria = gsap.utils.toArray(".galeria-grid img");
  if (fotosGaleria.length) {
    gsap.set(fotosGaleria, { opacity: 0, y: 22 });
    ScrollTrigger.batch(fotosGaleria, {
      start: "top 92%",
      once: true,
      onEnter: function (lote) {
        gsap.to(lote, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power2.out", overwrite: true });
      }
    });
  }

  /* ---------- 5) Depoimentos sobem levemente distintos ---------- */
  var depoimentos = gsap.utils.toArray(".depoimento");
  if (depoimentos.length) {
    gsap.set(depoimentos, { opacity: 0, y: 20 });
    ScrollTrigger.batch(depoimentos, {
      start: "top 90%",
      once: true,
      onEnter: function (lote) {
        gsap.to(lote, { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power2.out", overwrite: true });
      }
    });
  }

  ScrollTrigger.refresh();

  /* Tudo pronto: avisa o main.js para não usar o IntersectionObserver */
  document.documentElement.classList.add("gsap-ativo");
})();
