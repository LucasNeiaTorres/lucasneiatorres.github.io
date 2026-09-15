# lucasneiatorres.github.io

Portfólio pessoal de Lucas Néia Torres. Astro 5 + TypeScript, estático, bilíngue
(pt-BR / en), sem framework de UI e sem nenhuma dependência de CDN.

## A direção

A página é **um eixo do tempo**. Emprego, formação e projeto são eventos plotados
na mesma escala, e **o vão entre dois eventos é proporcional aos meses decorridos
entre eles** — o espaçamento vertical da página é dado, não decoração. Três marcas
distinguem a natureza do evento: `●` trabalho, `○` projeto, `─` formação. O único
bloco que rompe a contenção é o projeto de destaque, que interrompe o eixo.

Uma interação: um marcador desliza pelo eixo com o scroll, lendo a data da posição.
Ele interpola entre as posições **reais** dos pontos (não linearmente pelo scroll),
some onde o eixo é interrompido, e não existe sob `prefers-reduced-motion`.

Tema claro único, por decisão: uma série plotada se lê no claro.

## Editar o conteúdo

Não é preciso tocar em markup.

| Arquivo | O que tem |
|---|---|
| `src/data/timeline.ts` | Os eventos: id, natureza, **data** (`AAAA-MM`), repositório, tags. Mexer numa data muda o espaçamento da página. |
| `src/data/pt.ts` | Todo o texto em português, indexado pelo id do evento. |
| `src/data/en.ts` | O mesmo em inglês. As duas precisam ter as mesmas chaves. |
| `src/data/site.ts` | E-mail, LinkedIn, GitHub, caminho do currículo. |
| `src/styles/tokens.css` | Cor, escala tipográfica, espaço e a escala do eixo (`--mes`). |

Na prosa, `*assim*` destaca no verde do acento. É o único marcador, de propósito:
o acento precisa continuar raro.

Adicionar um evento = uma entrada em `timeline.ts` + a mesma chave em `pt.ts` e
`en.ts`. A posição na página sai sozinha da data.

## Rodar

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/
npm run check    # checagem de tipos do Astro
```

Node 22+.

## Deploy — GitHub Pages

O workflow em `.github/workflows/deploy.yml` faz build e publica a cada push na
`main`. Para ligar, **uma vez**:

1. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. `git push origin main`.

O site sai em `https://lucasneiatorres.github.io`. Como o repositório tem o nome
`<usuario>.github.io`, o site fica na raiz do domínio e `astro.config.mjs` não
precisa de `base`.

Para domínio próprio: adicione o arquivo `public/CNAME` com o domínio, troque
`site` em `astro.config.mjs`, e aponte o DNS para o GitHub Pages.

### Alternativa: Vercel

Funciona sem configuração — Vercel detecta Astro, roda `npm run build` e serve
`dist/`. Só é preciso trocar `site` em `astro.config.mjs` para a URL final, senão
`sitemap.xml`, as tags Open Graph e os `hreflang` continuam apontando para o
endereço do GitHub Pages.

## Fontes

Auto-hospedadas em `public/fonts/` (subconjuntos latin e latin-ext, `woff2`,
`font-display: swap`, com `preload` das duas famílias). Nenhum pedido sai para
terceiros.

- **Instrument Serif** — anos, títulos de seção e o e-mail. Contraste altíssimo:
  os anos são marcas de escala e têm de parecer gravados.
- **IBM Plex Sans** — todo o resto. Humanista e nivelada, não disputa.

Ambas com licença SIL Open Font License 1.1.

## Acessibilidade

HTML semântico, um `h1` por página, link de salto para o conteúdo, foco visível
desenhado (anel no acento com halo do fundo, para sobreviver em cima do eixo),
`prefers-reduced-motion` respeitado, e contraste AA verificado: tinta 18,6:1,
texto secundário 4,99:1 e acento 6,05:1 sobre o fundo.
