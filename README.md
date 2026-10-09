# Clínica Oral Life — Site Institucional

Site institucional completo da **Clínica Oral Life – Odontologia Especializada** (São Cristóvão, Salvador – BA).

- **14 páginas**: home one-page com âncoras + 11 páginas de tratamento/convênios + Política de Privacidade e Termos de Uso
- **Stack**: HTML5 semântico, CSS puro (mobile-first), JavaScript leve — sem frameworks, sem build
- **Identidade**: paleta cinza, branco, bege e preto; logo oficial horizontal + badge quadrado como favicon
- **Inclui**: SEO local (Schema.org, sitemap, robots), acessibilidade WCAG AA, formulário → WhatsApp, banner de cookies (LGPD), rastreio de conversão pronto para GA4/Pixel

## Como visualizar

Abra `index.html` no navegador. Funciona 100% offline — apenas o mapa do Google e as fontes (Google Fonts) precisam de internet.

## Documentação completa

Consulte o **[LEIA-ME.md](LEIA-ME.md)**: paleta da marca, estrutura de páginas, lista de pendências da clínica (CROs, CNPJ, horários…), checklist de publicação (domínio, SSL, Google Search Console, Perfil da Empresa no Google) e sugestões de próximos passos.

## Estrutura

```
├── index.html … termos-de-uso.html   (14 páginas)
├── sitemap.xml · robots.txt · .htaccess
├── assets/
│   ├── css/styles.css   (design system)
│   ├── js/main.js       (menu, form → WhatsApp, cookies, conversão)
│   └── img/             (logo, favicon, og-image, fotos otimizadas)
└── LEIA-ME.md           (guia completo)
```
