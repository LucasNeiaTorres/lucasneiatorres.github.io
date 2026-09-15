import type { Dict } from "./types";

export const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Lucas Néia Torres — Back-end developer",
    description:
      "Back-end developer based in Curitiba, Brazil. Java with Spring and Python with FastAPI, on telemetry and traffic-enforcement systems taking in data from roughly 1,700 devices in the field.",
  },
  nav: { path: "Timeline", stack: "Stack", contact: "Contact", skip: "Skip to content" },

  opening: {
    eyebrow: "Back-end developer · Curitiba, Brazil",
    headline: "I take in machine data that arrives, goes missing, or arrives wrong.",
    body: [
      "At FiscalTech I work on telemetry and traffic enforcement: roughly 1,700 devices in the field sending data around the clock, and a server that has to receive all of it. Java with Spring and Python with FastAPI, over PostgreSQL and Oracle.",
      "The problem that taught me the most was exactly that one — vehicle data getting lost between the embedded systems and the server, a 20% failure rate on delivery. I traced the bottleneck in the integration path, rewrote the communication routine, and the rate went to *0%*.",
    ],
  },

  axis: {
    heading: "Timeline",
    legend: { work: "Work", project: "Project", edu: "Education" },
    now: "today",
    elapsed: (m: number) => (m === 1 ? "1 month" : `${m} months`),
    featuredLabel: "Featured",
    repoLabel: "View the repository",
    aside:
      "The gap between two events is proportional to the time that passed between them: the spacing on this page is data, not decoration.",
    more: {
      lead: "Off the axis, on GitHub, is what the degree left behind — and what it left behind is systems work, not syntax exercises:",
      items: [
        { label: "an operating-system kernel in user space", repo: "PingPongOS" },
        { label: "a memory allocator in x86-64 assembly", repo: "malloc-assembly" },
        { label: "parallel partitioning with a pthread pool", repo: "parallel-partition-pool" },
        { label: "the same partitioning in distributed memory, with MPI", repo: "parallel-partition-mpi" },
        { label: "a graph library in C99, with no dependencies", repo: "grafos" },
        { label: "pneumothorax classification on DICOM radiographs", repo: "classificador-imagens-biomedicas" },
      ],
      tail: "Each with a README that says what it measures and where it breaks.",
    },
  },

  prose: {
    ifpr: {
      title: "Technical diploma in Information Technology · IFPR",
      role: "Jacarezinho, Brazil · completed 2020",
    },

    queroemprestar: {
      title: "QueroEmprestar",
      role: "Technical-school final project · Java 8, JSF, MySQL, no ORM",
      body: [
        "A peer-to-peer rental marketplace for physical things — a drill, a crutch, a book — where the same account is the owner in one transaction and the renter in the next. The whole system turns on one question: is this item free on those dates?",
        "The answer is not computed in Java. It is a CASE WHEN inside the INSERT itself: if a conflicting booking exists, the date column receives NULL and the row is rejected by the database rather than by the application. The README discusses what that choice buys and the two gaps it leaves open.",
      ],
    },

    "ufpr-ie": {
      title: "UFPR · Sports Intelligence research project",
      role: "Web developer · 08.2022 → 08.2023",
      body: [
        "The research project's web platform went down repeatedly. I fixed the chronic legacy-code problems and the database inconsistencies behind the outages, and kept the maintenance routines that held availability for the research team through the end of the project.",
      ],
    },

    mppr: {
      title: "Public Prosecutor's Office of Paraná",
      role: "Software developer · 09.2023 → 09.2024",
      body: [
        "I architected and shipped to production the complete back end of a government system, owning the Python stack alone — FastAPI and SQLAlchemy over Oracle — from the data model to deployment, and answering for the project's technical decisions.",
        "I wrote the entire authentication and access-control layer for sensitive data with OAuth2 and JWT, with access and refresh tokens. I containerised the application with Docker, which ended the configuration drift between the team's machines, and built the Angular front end against the APIs I had written.",
      ],
    },

    rumores: {
      title: "RUmores",
      role: "REST API in FastAPI · built as a pair",
      body: [
        "Ratings for a university restaurant: the dietitian publishes the day's menu and the nutritional information; the authenticated student leaves a score and a comment. One router per use case, with interactive documentation generated at /docs.",
        "It is a prototype, and the README says where it does not hold up: no persistence, a global session, passwords without hashing. Stating the limit is part of shipping it.",
      ],
    },

    "fiscaltech-estagio": {
      title: "FiscalTech · internship",
      role: "Development intern · 10.2024 → 07.2026",
      body: [
        "I mapped the traffic-data integration bottlenecks by analysing communication logs and correlating delivery failures by device batch — the same bottlenecks that would become the optimisation work carried out after I was hired full time.",
        "I built the first routines of the PlateSight scheduler with Quartz, the basis of what runs in production today, and kept up corrective maintenance on the Java APIs over Spring Boot, as well as React components wired to those services.",
      ],
    },

    ufpr: {
      title: "BSc in Computer Science · UFPR",
      role: "Completed 07.2026",
    },

    "fiscaltech-junior": {
      title: "FiscalTech · hired full time",
      role: "Junior Full-Stack Developer · 08.2026 → present · promoted after 22 months on the same team",
      body: [
        "Vehicle data was getting lost in the communication between the embedded systems and the server: a 20% failure rate on delivery, across a fleet of roughly 1,700 devices. I traced the bottleneck in the integration path and rewrote the communication routine in Java, over Spring Boot and Hibernate, with PostgreSQL underneath. The rate went to *0%*.",
        "I designed the real-time scheduling for the PlateSight platform with Quartz Scheduler, replacing manual triggering with automatic execution of the capture and processing routines. I built the over-the-air update module for the embedded systems over telemetry, which removed the need for a technician to travel to each site for every release.",
        "I maintain the REST telemetry APIs that hold the data from that fleet, modelling the queries in PostgreSQL, and supported the move from manual deployments to CI/CD pipelines on GitLab.",
      ],
    },

    "tcc-mdvrp": {
      title: "Fleet routing when the road breaks mid-operation",
      role: "Final-year project · UFPR · built as a pair · Python",
      body: [
        "A carrier with several depots, a fleet at each one, and a list of customers for the day. Two coupled decisions, both NP-hard: which depot serves which customer, and in what order each vehicle visits its own. The interesting part comes next — during execution, stretches of road are blocked, and the vehicles already out there only find out when they get there.",
        "The design decision was to separate the plan from the improvisation. The plan clusters before it routes: capacitated k-means over vehicle-level slots, then a per-depot genetic algorithm with Prins's local search as mutation and Vidal's split cutting the giant tour into vehicle routes. The improvisation is a three-stage cascade — repair inside the route, inside the depot's cluster, and only then across depots.",
        "Failures are not drawn uniformly over the map. They are collapse zones generated over the edges the fleet actually travels, because a random road block is nearly invisible to the fleet and makes the disaster look easier than it is.",
      ],
      stats:
        "10,459 lines under src/ · 36 Cordeau benchmark instances · genetic-algorithm parameters justified against Prins (2004) and Vidal (2012)",
    },

    curatela: {
      title: "Accounting for court-appointed guardianship",
      role: "FastAPI and SQLAlchemy over Oracle · Angular front end · three containers",
      body: [
        "Someone who manages another person's estate under a court appointment has to file an accounting with the judge periodically: every cent in and every cent out, each one backed by a receipt. In practice this is done in a spreadsheet, and the receipt gets separated from the entry.",
        "The decision that shaped the project was to treat the attachment as evidence. Every incoming file is validated by actually opening it — Pillow for images, PyPDF2 for PDFs — because the extension and the Content-Type are declared by the client and anyone can lie about them. Images are re-encoded, which discards EXIF metadata and any payload hidden in a segment. The file is written under the database row's id, never under the name the user supplied, which removes directory traversal entirely. And the SHA-256 of the stored content goes into that same row, which is what makes it possible to say later that the receipt is the one that was filed.",
        "One vertical slice is finished end to end; the remaining screens are scaffolded against a data model that already covers them.",
      ],
    },
  },

  stack: {
    heading: "Stack",
    lead: "Back end is the centre. The front end exists to consume the APIs I build, and that is how it appears here.",
    groups: [
      {
        label: "Back end",
        lead: "Where I live.",
        items:
          "Java 8 and 17 · Spring Boot · Spring Data JPA · Spring Security · Hibernate · Python · FastAPI · SQLAlchemy · RESTful APIs · microservice architecture · Quartz Scheduler",
      },
      {
        label: "Data",
        lead: "Much of telemetry work is deciding what the database answers, and how fast.",
        items: "PostgreSQL · Oracle Database · MySQL · relational modelling · query optimisation",
      },
      {
        label: "Security",
        items: "OAuth2 · JWT with access and refresh tokens · role-based access control",
      },
      {
        label: "Infrastructure",
        items: "Docker · Linux · Git · GitLab · CI/CD pipelines",
      },
      {
        label: "Front end",
        lead: "Support, not centre.",
        items: "Angular · React · TypeScript · JavaScript (ES6+) · HTML5 · CSS3",
      },
      {
        label: "Practice",
        items: "SOLID · Clean Code · code review · Git Flow · automated tests with pytest",
      },
    ],
  },

  contact: {
    heading: "Contact",
    lead: "I am looking for a back-end role in Java with Spring or Python with FastAPI, in Brazil or remote.",
    cv: "Curriculum vitae (PDF)",
    cvNote: "in Portuguese",
  },

  lang: { other: "PT", otherHref: "/", label: "Ler em português" },
};
