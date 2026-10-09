/* ============================================================
   Clínica Oral Life – scripts do site
   JavaScript leve: menu, animações, formulário, cookies,
   rastreamento de conversão (WhatsApp / telefone).
   ============================================================ */
(function () {
  "use strict";

  var reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Menu mobile ---------- */
  var botaoMenu = document.querySelector("[data-menu-toggle]");
  var navMobile = document.querySelector("[data-nav-mobile]");

  if (botaoMenu && navMobile) {
    botaoMenu.addEventListener("click", function () {
      var aberto = navMobile.classList.toggle("aberto");
      botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
      botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
      );
    });

    navMobile.addEventListener("click", function (evento) {
      if (evento.target.tagName === "A") {
        navMobile.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && navMobile.classList.contains("aberto")) {
        navMobile.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.focus();
      }
    });
  }

  /* ---------- Sombra do cabeçalho ao rolar ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var aoRolar = function () {
      header.classList.toggle("fixo-ativo", window.scrollY > 8);
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
  }

  /* ---------- Animação de entrada ao rolar ---------- */
  var elementos = document.querySelectorAll(".revelar");
  if (elementos.length) {
    if (reduzirMovimento || !("IntersectionObserver" in window)) {
      elementos.forEach(function (el) { el.classList.add("visivel"); });
    } else {
      var observador = new IntersectionObserver(
        function (entradas) {
          entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("visivel");
              observador.unobserve(entrada.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      elementos.forEach(function (el) { observador.observe(el); });
    }
  }

  /* ---------- Rastreamento de conversão ---------- */
  function registrarEvento(acao, rotulo) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contato_clinica",
      acao: acao,
      rotulo: rotulo || ""
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", acao, { event_category: "contato", label: rotulo });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "Contact");
    }
  }

  document.addEventListener("click", function (evento) {
    var alvo = evento.target.closest("[data-conversao]");
    if (!alvo) return;
    registrarEvento(alvo.getAttribute("data-conversao"), alvo.textContent.trim());
  });

  /* ---------- Formulário → WhatsApp ---------- */
  var form = document.querySelector("[data-form-whatsapp]");

  if (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var nome = form.querySelector("#nome");
      var telefone = form.querySelector("#telefone");
      var tratamento = form.querySelector("#tratamento");
      var erroNome = form.querySelector("#erro-nome");
      var erroTelefone = form.querySelector("#erro-telefone");
      var erroConsentimento = form.querySelector("#erro-consentimento");
      var consentimento = form.querySelector("#consentimento");
      var valido = true;

      function marcar(campo, erro, condicaoValida) {
        var ok = condicaoValida;
        if (erro) erro.classList.toggle("visivel", !ok);
        if (campo) campo.setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok) valido = false;
      }

      marcar(nome, erroNome, nome.value.trim().length >= 2);
      marcar(
        telefone,
        erroTelefone,
        telefone.value.replace(/\D/g, "").length >= 10
      );
      marcar(
        null,
        erroConsentimento,
        consentimento && consentimento.checked
      );

      if (!valido) {
        return;
      }

      var linha = [];
      linha.push("Olá! Gostaria de agendar uma consulta na Clínica Oral Life.");
      linha.push("");
      linha.push("Nome: " + nome.value.trim());
      linha.push("Telefone: " + telefone.value.trim());
      if (tratamento && tratamento.value) {
        linha.push("Tratamento de interesse: " + tratamento.value);
      }

      var url =
        "https://api.whatsapp.com/send?phone=5571997266122&text=" +
        encodeURIComponent(linha.join("\n"));

      registrarEvento("formulario_whatsapp", tratamento ? tratamento.value : "");
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- Banner de cookies (LGPD) ---------- */
  var banner = document.querySelector("[data-banner-cookies]");
  if (banner) {
    var chave = "oralife_consentimento_cookies";
    var jaDecidiu = null;
    try { jaDecidiu = window.localStorage.getItem(chave); } catch (e) {}

    if (!jaDecidiu) {
      window.setTimeout(function () {
        banner.classList.add("visivel");
      }, 900);
    }

    banner.addEventListener("click", function (evento) {
      var botao = evento.target.closest("[data-cookie-opcao]");
      if (!botao) return;
      try {
        window.localStorage.setItem(chave, botao.getAttribute("data-cookie-opcao"));
      } catch (e) {}
      banner.classList.remove("visivel");
    });
  }

  /* ---------- Ano corrente no rodapé ---------- */
  var ano = document.querySelector("[data-ano]");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
