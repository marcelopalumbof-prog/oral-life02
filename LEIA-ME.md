# Clínica Oral Life – Site Institucional

Site institucional completo da **Clínica Oral Life – Odontologia Especializada** (São Cristóvão, Salvador – BA), pronto para publicar. HTML5 semântico, CSS puro, JavaScript leve, mobile-first, acessível (WCAG AA), com SEO local e conformidade LGPD e CFO.

Para visualizar: abra `index.html` no navegador (funciona 100% offline; o mapa do Google exige internet).

---

## 1. Sitemap e estrutura de páginas

**URLs amigáveis** (arquivos `.html` servidos sem a extensão — ver `.htaccess` ou pretty URLs do Netlify):

| URL | Arquivo | Palavra-chave principal |
|---|---|---|
| `/` | `index.html` | dentista em São Cristóvão Salvador |
| `/implante-dentario` | `implante-dentario.html` | implante dentário Salvador ⭐ |
| `/odontopediatria` | `odontopediatria.html` | odontopediatria Salvador ⭐ |
| `/convenios` | `convenios.html` | dentista com convênio Salvador ⭐ |
| `/aparelho-ortodontico` | `aparelho-ortodontico.html` | aparelho ortodôntico Salvador |
| `/tratamento-de-canal` | `tratamento-de-canal.html` | tratamento de canal Salvador |
| `/clareamento` | `clareamento.html` | clareamento dental Salvador |
| `/protese-dentaria` | `protese-dentaria.html` | prótese dentária Salvador |
| `/restauracao` | `restauracao.html` | restauração dental Salvador |
| `/facetas-em-resina` | `facetas-em-resina.html` | facetas em resina Salvador |
| `/extracao-dental` | `extracao-dental.html` | extração dental Salvador |
| `/limpeza-e-avaliacao` | `limpeza-e-avaliacao.html` | limpeza dental Salvador |
| `/politica-de-privacidade` | `politica-de-privacidade.html` | (LGPD) |
| `/termos-de-uso` | `termos-de-uso.html` | (jurídico) |

**Estrutura da home (âncoras):** `#inicio` (hero com foto + selo 4,4★) → diferenciais → `#tratamentos` → `#primeira-consulta` (4 passos + acolhimento para quem tem medo) → `#galeria` (fotos da clínica) → `#sobre` → `#convenios` (fotos dos convênios aceitos) → `#depoimentos` (avaliações reais do Google) → `#faq` (10 perguntas) → `#localizacao` (mapa + como chegar) → `#contato` (formulário → WhatsApp) → CTA final → rodapé (responsável técnico, CNPJ, links jurídicos). *Seção Equipe removida a pedido da clínica.*

**Cada página de tratamento contém:** o que é, para quem é indicado, como é feito (etapas), duração média, cuidados pós-tratamento, 3–5 perguntas frequentes e CTA de WhatsApp com mensagem personalizada (ex.: "Olá! Gostaria de saber mais sobre implante dentário.").

**SEO implementado:** title e meta description únicos por página (com cidade/bairro), H1 único e hierarquia H2/H3, Schema.org JSON-LD (Dentist/LocalBusiness + FAQPage na home; Service + BreadcrumbList + FAQPage nas páginas de tratamento), Open Graph e Twitter Card, sitemap.xml, robots.txt, URLs amigáveis (`.htaccess`), alt texts descritivos.

---

## 2. Paleta, tipografia e diretrizes visuais

### Paleta da marca (cinza, branco, bege e preto — definida pela clínica)

| Uso | Cor | Hex |
|---|---|---|
| Fundo do site (canvas) | Cinza | `#eae9e6` |
| Blocos de informação / seções alternadas | Branco | `#ffffff` |
| Acentos (tiles de ícones, caixas de destaque) | Bege claro | `#f1ece2` / `#f5f0e6` |
| Acentos textuais (eyebrows, detalhes) | Taupe (bege escuro) | `#6e6449` |
| Títulos, botões primários | Preto suave | `#15181d` |
| Rodapé e gradientes escuros | Quase preto | `#0b0d10` |
| Links | Grafite | `#44494f` |
| Botões WhatsApp (conversão) | Verde-WhatsApp | `#0b6e5e` |
| Destaque (estrelas de avaliação) | Âmbar | `#f4b942` |
| Erros de formulário | Coral | `#c6432a` |
| Texto / texto secundário | — | `#1b1f24` / `#5a6169` |
| Bordas | Bege-cinza | `#e1ded7` |

**Conceito:** canvas cinza, informações em blocos brancos, acentos bege e preto para tipografia/botões — sofisticado e neutro. WhatsApp verde apenas nos elementos do canal (reconhecimento = conversão).

### Tipografia
- **Títulos:** Poppins (600/700) — moderna e amigável.
- **Texto:** Inter (400/500/600) — neutra e legível em telas pequenas.
- Carregadas via Google Fonts com `display=swap` e `preconnect`.

### Diretrizes resumidas
- Cantos arredondados (16px em cards, botões em pílula), muito espaço em branco, ícones de linha (stroke) desenhados em SVG inline.
- **Coral e verde-WhatsApp apenas em botões de ação** — nada de "gritar" em todo o layout.
- Animações discretas de entrada (fade/slide) via IntersectionObserver, **desativadas** para `prefers-reduced-motion`.
- Fotos reais em uso (hero, Sobre e galeria); os arquivos originais em alta resolução ficam em `assets/img/fotos/recebida-01…07.png`.

---

## 3. Como o código funciona

```
Oral life 02/
├── index.html … termos-de-uso.html   (14 páginas)
├── sitemap.xml · robots.txt · .htaccess
├── assets/
│   ├── css/styles.css                (design system completo, mobile-first)
│   ├── js/main.js                    (menu, animações, form, cookies, tracking)
│   └── img/  (logo.png ← logo oficial da clínica, favicon.png (64px),
│              apple-touch-icon.png, og-image.png com o logo,
│              logo-marca.svg e favicon.svg (reserva, não referenciados),
│              fotos/recebida-01…08.png ← imagens enviadas pela clínica;
│              recebida-08 = logo, já aplicado)
└── LEIA-ME.md                        (este arquivo)
```

- **Formulário → WhatsApp:** o formulário da home valida nome, telefone e consentimento (LGPD) e abre o WhatsApp da clínica com a mensagem pronta. **Nenhum dado é armazenado no site** (não há backend).
- **Rastreio de conversão:** todo clique em WhatsApp/telefone tem `data-conversao="…"`. O `main.js` dispara automaticamente eventos no `dataLayer` (`contato_clinica` + rótulo), que funcionam com **GA4 e Google Tag Manager** sem nenhuma alteração. Se `gtag` ou `fbq` existirem na página, também dispara neles.
- **Cookies (LGPD):** banner com "Aceitar/Recusar"; a escolha fica no `localStorage`. Por padrão o site não carrega rastreadores externos.
- **Acessibilidade:** skip link, foco visível, `aria-*` em menus/ícones/botões, contraste AA, navegação por teclado, formulário com labels e erros anunciados.

### Ativar GA4 ou Meta Pixel (opcional)
Cole no `<head>` de todas as páginas (ou apenas via GTM):

GA4:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-XXXXXXX');</script>
```
Meta Pixel:
```html
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','SEU_ID');fbq('track','PageView');</script>
```
Os eventos de clique em WhatsApp já estão instrumentados (`clique_whatsapp_*`, `clique_telefone_*`, `envio_formulario`). Ao ativar rastreamento, atualize a seção 3 da Política de Privacidade.

---

## 4. Lista de pendências (fornecer pela clínica)

### Dados oficiais (bloqueiam a publicação)
1. **CNPJ** da clínica — rodapé e Política de Privacidade (`[PREENCHER CNPJ]`).
2. **Responsável técnico:** nome + CRO-BA (rodapé, Termos de Uso e página Equipe).
3. ~~**Equipe**~~ Seção removida a pedido da clínica. Se voltar ao site, exigirá nome, especialidade e CRO-BA de cada dentista — obrigatório por norma do CFO.
4. ~~**Convênios aceitos**~~ ✅ **Nomes extraídos da placa por OCR e publicados por escrito** (home e `convenios.html`): **Interodonto, Amil, MetLife, SulAmérica, Porto Seguro, Hapvida e Santander**. ⚠️ Confirmar com a clínica: (a) se a lista está completa — 1–2 rótulos pequenos da placa não puderam ser lidos com segurança (algo como "…rasil / …ental"); (b) a grafia de "Santander" (lido com um "&" antes, possivelmente parte de um nome maior). As fotos originais ficam em `assets/img/fotos/convenio-0*.png` como material de referência/backup; as 4 grandes são artes promocionais da própria clínica (logo + slogan), aproveitáveis em outras seções se desejar.
5. **Horário de funcionamento:** confirmar dias e horários (fecham às 17h; confirmar sábado) — substituir todas as ocorrências de `[CONFIRMAR dias e horários]` e o JSON-LD `openingHoursSpecification` da home.
6. **Formas de pagamento:** ex.: PIX, cartões, parcelamento — seções "No particular" (home e `convenios.html`).
7. **Prazo de resposta do WhatsApp:** definir média real (ex.: "respondemos em até 2h úteis") — seção `#contato`.
8. **Política de urgência:** confirmar atendimento afora do horário/domingos — FAQ da home.
9. **Estacionamento:** confirmar se o Master Center oferece e se há validação — FAQ e Localização.
10. **Linhas de ônibus** que passam na Av. Aliomar Baleeiro — seção Localização.
11. **Ano de fundação/história** e **detalhes da estrutura** — seção Sobre (`[COMPLETAR]`).
12. **Domínio definitivo** — substituir `www.orallife.com.br` em: canonical/OG de todas as páginas, JSON-LD, `sitemap.xml`, `robots.txt`, `.htaccess`.
13. **Coordenadas GPS** — confirmar latitude/longitude exatas no JSON-LD da home (valores aproximados inseridos).

### Imagens
14. ~~**Logo oficial**~~ ✅ **Sistema de marca completo recebido e aplicado**: logo horizontal oficial (548×161, dente + wordmark prata, cantos arredondados) em `assets/img/logo.png` — usado no cabeçalho e rodapé de todas as páginas e no og-image (fundo claro sofisticado); badge quadrado (150×150) mantido como **favicon** e apple-touch-icon (`assets/img/favicon.png` e `apple-touch-icon.png`, derivados de `recebida-08.png`). Se a clínica enviar qualquer versão em resolução maior, basta substituir o arquivo correspondente.
15. ~~**Fotos reais**~~ ✅ **Distribuídas por todo o site**: hero com a foto da recepção (`foto-hero.jpg`), Sobre (`foto-sobre.jpg`), galeria "Nossa clínica" (4 fotos na home) e **banner com foto antes do CTA final em 12 páginas** (`foto-clinica-1…4.jpg`, rotação entre as artes promocionais da clínica e fotos de ambiente). Como o conteúdo das fotos foi inferido por análise de pixels, **revisar os textos alternativos (alt) no HTML** e reposicionar se desejar. Obs.: `recebida-03.png` é duplicata de `recebida-02.png`.
16. ~~**Depoimentos**~~ ✅ **Avaliações reais fornecidas pela clínica e publicadas** (Bruno Amorim e Noelia Santana, do Google). Manter a prática: publicar apenas avaliações reais, com ciência dos autores. Para as próximas, obter autorização por escrito.
17. Confirmar se a clínica realiza **sisos inclusos** no local (marcado em `extracao-dental.html`).

---

## 5. Checklist de publicação

- [ ] Preencher TODAS as pendências da seção 4 (principalmente CRO, CNPJ, convênios e horários).
- [ ] **Domínio**: registrar (ex.: orallife.com.br / clinicarallife.com.br) e apontar DNS.
- [ ] **Hospedagem**: qualquer hospedagem estática (Netlify, Vercel, Hostinger, HostGator, cPanel). Subir a pasta inteira. Em Apache, o `.htaccess` já ativa as URLs amigáveis.
- [ ] **SSL**: ativar HTTPS gratuito (Let's Encrypt/Let's Encrypt da hospedagem). Descomentar a regra HTTPS no `.htaccess` (trocar o domínio).
- [ ] Trocar `www.orallife.com.br` pelo domínio real em: canonical/OG das 14 páginas, JSON-LD, `sitemap.xml`, `robots.txt`, `.htaccess`.
- [ ] **Google Search Console**: criar conta → enviar o `sitemap.xml` → verificar propriedade (arquivo DNS/meta).
- [ ] **Perfil da Empresa no Google** (Google Business Profile): criar/reivindicar e **preencher o campo "website" com a URL do site** (impacto direto no SEO local e no "dentista perto de mim"). Conferir endereço, telefone e horários idênticos aos do site (NAP consistente).
- [ ] **Google Analytics 4 e/ou Meta Pixel** [OPCIONAL]: colar snippets (seção 3) e testar eventos: clicar no WhatsApp flutuante → conferir evento `clique_whatsapp_flutuante` no GA4 (DebugView).
- [ ] Testar em celular: WhatsApp abre com mensagem correta; mapa carrega; menu funciona; formulário valida e abre o WhatsApp.
- [ ] Lighthouse (Chrome DevTools, mobile): metas Performance/SEO/Acessibilidade ≥ 90 (com fotos reais otimizadas em **WebP**, antes de subir: exportar em ~1600px e comprimir — [squoosh.app](https://squoosh.app) ou conversor local).
- [ ] Revisão final de conformidade CFO: nomes + CRO visíveis, sem preços, sem promessas, sem "antes e depois" sem autorização escrita.
- [ ] Renovar anualmente: domínio, certificado SSL (auto na maioria), e revisar política/datas.

---

## 6. Três melhorias futuras (sugeridas)

1. **Blog de saúde bucal** — 1 artigo/mês respondendo buscas reais (" dói fazer implante?", "quando trocar a escova de bebê?"). É a forma mais barata de ranquear no Google e de alimentar o Instagram com conteúdo.
2. **Agendamento online** — quando a agenda permitir, botão de autoatendimento (ex.: Calendly/Agendor ou sistema da clínica) complementando o WhatsApp, sem substituí-lo.
3. **Galeria de casos autorizados** — fotos de antes/depois **exclusivamente com autorização escrita do paciente e dentro das regras do CFO** (ex.: art. 5º da Resolução CFO nº 168/2022 sobre registro documental). Começar capturando autorizações já na primeira consulta.

---

*Site entregue em outubro de 2026. Dúvidas sobre o código: qualquer desenvolvedor front-end consegue manter — não há frameworks, build ou dependências além das fontes do Google.*
