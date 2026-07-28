# Alavanque Design System

Sistema de design da **Alavanque — Equipamentos para Gastronomia**, uma fabricante brasileira de equipamentos para pequenos e médios produtores de food service (bares, padarias, produtores artesanais). O produto de referência usado neste sistema é a **Dosadora G13**, uma máquina de bancada que molda e dosa massas.

Direção: **moderno, com presença, sem serifas** — nada sóbrio ou acadêmico. Azul de engenharia + laranja de ação, tipografia sans geométrica/neutra, cantos generosos, elevação suave e um laranja usado com disciplina para conversão.

## Fontes deste sistema
- **Logo original**: `uploads/unnamed.jpg` (enviado pelo usuário) → tratado em `assets/`.
- **Copy do produto**: texto da landing da Dosadora G13 fornecido pelo usuário no briefing (benefícios, passos, métodos, ficha técnica, depoimentos, blocos de compra).
- Não há codebase, Figma ou site de origem — o sistema foi derivado da logo e do briefing.

## Marca / logo
- `assets/logo-alavanque.jpg` — original enviado (sobre branco).
- `assets/logo-alavanque.png` — recortado, fundo transparente (uso sobre fundos claros).
- `assets/logo-alavanque-white.png` — knockout branco para fundos escuros (nav escura, footer, bandas azuis).
- A logo tem duas cores: o wordmark **azul #006098** e o "rabo" do **Q em laranja #ff5f19** terminando num ponto — o gesto da marca. Preserve a proporção; não recolora o wordmark exceto pela versão reversa (tudo branco).

## CONTENT FUNDAMENTALS (tom & copy)
- **Idioma**: português do Brasil.
- **Tom**: confiante e vendedor, focado em **benefício concreto** — "produzir mais, padronizar melhor, alavancar seu negócio". Fala com o dono do negócio, não com engenheiro.
- **Pessoa**: trata o leitor por "você" / "seu negócio", "sua produção". Próximo, mas profissional.
- **Casing**: títulos em caixa mista (sentence case), sem CAIXA-ALTA em frases. Caixa-alta só em **eyebrows/kickers** curtos ("O QUE MUDA NA SUA PRODUÇÃO", "BLOCO 2 · DETALHES TÉCNICOS") com letter-spacing.
- **Números como prova**: quando cita capacidade usa o número com ressalva honesta ("até 70 kg por hora, dependendo do método..."). Especificações sempre com unidade (7g a 120g, 19 cm × 2 m, 32 kg).
- **CTA padrão**: "Solicitar cotação no WhatsApp" (ação principal, botão laranja) e "Assistir vídeo" (secundário).
- **Sem emoji.** Ícones de linha fazem o papel visual.
- Exemplos de voz: *"Uma máquina para crescer com você"*, *"Sem complicação para começar"*, *"Pronto para alavancar sua produção?"*.

## VISUAL FOUNDATIONS
- **Cores**: azul `#006098` (primária — confiança, estrutura) e laranja `#ff5f19` (acento — energia, ação/CTA). Ramps 50→900 em `tokens/colors.css`. Neutros = slate levemente azulado. Máximo de duas cores de fundo por página: **branco/neutral-50** e **azul-900** para bandas escuras. Semânticas (sucesso/atenção/erro) só para status.
- **Uso do laranja**: reservado. Um CTA laranja por dobra; ícones, eyebrows, sublinhado de aba/nav ativo e badges. Nunca campos inteiros de laranja exceto o CTA final.
- **Tipografia**: **Manrope** (display/headings, Extrabold 800) sobre **Inter** (corpo). Sem serifa. Títulos com `letter-spacing` negativo e `text-wrap: balance`; corpo com `text-wrap: pretty`.
- **Fundos**: sólidos. Bandas azul-900 com um brilho radial laranja sutil no hero (único gradiente do sistema, decorativo). Sem texturas, sem gradientes chamativos.
- **Cantos**: generosos — cards `--radius-lg` (16px), imagens/hero `--radius-xl/2xl`, tags/botões pill ou `--radius-md`. Nada quadrado.
- **Cards**: superfície branca, borda hairline `--color-border`, sombra suave (`--shadow-sm/md`). Variante `interactive` sobe 4px no hover. Sem borda colorida à esquerda.
- **Sombras**: `--shadow-sm/md/lg/xl` frias (tint azul). Assinatura: `--shadow-accent` (glow laranja no CTA) e `--shadow-primary` (glow azul).
- **Animação**: transições curtas (120–320ms) com `--ease-out`. Hover = mudança de cor/elevação; press = `translateY(1px)`. Sem bounce exagerado.
- **Estados**: hover/active vêm dos ramps (600/700). Foco de teclado = anel laranja 2px (`:focus-visible`). Seleção de texto = laranja-200.
- **Layout**: container 1200px, grades de colunas iguais com `gap`, muito respiro vertical (`--space-24` entre seções).

## ICONOGRAPHY
- **Lucide** (https://lucide.dev), stroke-width padrão (~2), aparência técnica e leve. Carregado por CDN (`unpkg.com/lucide`) — nenhum ícone é desenhado à mão.
- Ícones de acento vivem em "chips" quadrados-arredondados de fundo laranja-suave (`.benefit__ic`) ou herdam a cor do texto/branco em fundos escuros.
- **Sem emoji.** Sem ícones em PNG/sprite proprietário. Substituição sinalizada: nenhum set de ícones original foi fornecido, então adotamos Lucide como padrão do sistema.

## Índice / manifesto
- **`styles.css`** — entrada única (só `@import`). Linke este arquivo.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- **`base.css`** — reset, defaults de tipo, links, foco, seleção, `.eyebrow`.
- **`components.css`** — camada de classes interativas (`.av-btn`, `.av-tag`, `.av-card`, `.av-table`, etc.) consumida pelos primitivos React.
- **`guidelines/`** — cards de especímen (Colors, Type, Spacing, Brand).
- **`components/`** — primitivos React: `buttons/Button`, `forms/Input`+`Select`, `content/Tag`+`Badge`, `surfaces/Card`+`Dialog`, `data/Table`, `navigation/Navbar`+`Tabs`.
- **`ui_kits/site/`** — recreação da landing da Dosadora G13 (`index.html`, autocontida sobre os tokens/classes).
- **`assets/`** — logos.

## Nota de compilação
Os **cards de componentes** (aba Design System) montam os primitivos a partir do `_ds_bundle.js` gerado automaticamente. Esse bundle só é compilado quando o projeto está definido como **File type: Design System** (menu Share). Os cards de fundação e a landing são autocontidos e renderizam sem o bundle.
