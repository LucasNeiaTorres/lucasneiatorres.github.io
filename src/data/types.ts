export type Kind = "work" | "project" | "edu";

/** Fato estrutural de um evento do eixo. A prosa mora em pt.ts / en.ts. */
export interface Event {
  id: string;
  kind: Kind;
  /** AAAA-MM — posiciona o evento no eixo e define o vão até o anterior. */
  date: string;
  /** AAAA-MM ou "now"; só para eventos com duração. */
  end?: string;
  repo?: string;
  href?: string;
  tags?: string[];
  /** O destaque atravessa o eixo em vez de ficar contido à direita dele. */
  featured?: boolean;
}

export interface Prose {
  title: string;
  role?: string;
  body?: string[];
  /** Linha de dados medidos, em algarismos tabulares. */
  stats?: string;
}

export interface StackGroup {
  label: string;
  lead?: string;
  items: string;
}

export interface Dict {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { path: string; stack: string; contact: string; skip: string };
  /** O H1 é o nome (site.name). `role` é a linha de cargo logo abaixo dele. */
  opening: { eyebrow: string; role: string; body: string[] };
  axis: {
    heading: string;
    legend: { work: string; project: string; edu: string };
    now: string;
    elapsed: (m: number) => string;
    featuredLabel: string;
    repoLabel: string;
    aside: string;
    more: { lead: string; items: { label: string; repo: string }[]; tail: string };
  };
  prose: Record<string, Prose>;
  stack: { heading: string; lead: string; groups: StackGroup[] };
  contact: { heading: string; lead: string; cv: string; cvNote?: string };
  lang: { other: string; otherHref: string; label: string };
}
