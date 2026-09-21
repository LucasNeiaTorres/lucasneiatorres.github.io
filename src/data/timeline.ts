import type { Event } from "./types";

/**
 * Os eventos, em ordem cronológica crescente. A DATA é o que importa aqui:
 * o vão entre dois eventos na página é proporcional aos meses entre eles.
 * Mexer numa data muda o espaçamento da página — é esse o ponto.
 */
export const timeline: Event[] = [
  { id: "ifpr", kind: "edu", date: "2020-12" },
  {
    id: "queroemprestar",
    kind: "project",
    date: "2021-05",
    repo: "QueroEmprestar",
    tags: ["Java 8", "JSF", "MySQL"],
  },
  { id: "ufpr-ie", kind: "work", date: "2022-08", end: "2023-08" },
  { id: "mppr", kind: "work", date: "2023-09", end: "2024-09" },
  {
    id: "rumores",
    kind: "project",
    date: "2024-07",
    repo: "RUmores",
    tags: ["Python", "FastAPI"],
  },
  { id: "fiscaltech-estagio", kind: "work", date: "2024-10", end: "2026-07" },
  { id: "ufpr", kind: "edu", date: "2026-07" },
  { id: "fiscaltech-junior", kind: "work", date: "2026-08", end: "now" },
  {
    id: "tcc-mdvrp",
    kind: "project",
    date: "2026-08",
    repo: "tcc-mdvrp",
    tags: ["Python", "Algoritmos genéticos", "Teoria dos grafos"],
    featured: true,
  },
  {
    id: "curatela",
    kind: "project",
    date: "2026-09",
    repo: "sistema-prestacao-contas",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Oracle", "Angular", "Docker"],
  },
  {
    id: "kafka-weighing",
    kind: "project",
    date: "2026-09",
    repo: "kafka-vehicle-weighing",
    tags: ["Java 17", "Spring Boot 4", "Apache Kafka", "Testcontainers", "Docker"],
  },
];

/** Meses decorridos entre dois carimbos AAAA-MM. */
export function months(from: string, to: string): number {
  const [fy, fm] = from.split("-").map(Number);
  const [ty, tm] = to.split("-").map(Number);
  return (ty - fy) * 12 + (tm - fm);
}

export const firstDate = timeline[0].date;
export const lastDate = timeline[timeline.length - 1].date;
