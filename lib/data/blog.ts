export interface BlogPost {
  slug: string;
  tag: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  hint: string;
}

export const POSTS: BlogPost[] = [
  {
    slug: "calendrier-fiscal",
    tag: "Fiscalité",
    date: "18 août 2026",
    read: "5 min",
    title: "Calendrier fiscal : les échéances à ne pas manquer ce trimestre",
    excerpt:
      "Déclarations, acomptes et obligations déclaratives : la liste des dates qui exposent votre entreprise à des pénalités.",
    hint: "Calendrier annoté et documents fiscaux sur un bureau (800×500)",
  },
  {
    slug: "business-plan-banque",
    tag: "Financement",
    date: "04 août 2026",
    read: "7 min",
    title: "Ce que votre banque lit vraiment dans un business plan",
    excerpt:
      "Les quatre pages qui décident de l’accord, et les erreurs de prévisionnel qui font échouer un dossier solide.",
    hint: "Dossier de financement ouvert avec graphiques, stylo et calculatrice (800×500)",
  },
  {
    slug: "classement-tarifaire",
    tag: "Douane",
    date: "21 juillet 2026",
    read: "6 min",
    title: "Classement tarifaire : l’erreur qui coûte le plus cher à l’importation",
    excerpt:
      "Une position tarifaire mal choisie se paie en droits, en amendes et en immobilisation de marchandises.",
    hint: "Conteneurs et documents de dédouanement au port (800×500)",
  },
  {
    slug: "controle-fiscal",
    tag: "Fiscalité",
    date: "09 juillet 2026",
    read: "8 min",
    title: "Contrôle fiscal : les six réflexes des trois premiers jours",
    excerpt:
      "Ce que vous devez rassembler, ce que vous n’êtes pas obligé de fournir, et à quel moment appeler votre conseil.",
    hint: "Deux personnes examinant des registres comptables (800×500)",
  },
  {
    slug: "contrats-travail",
    tag: "RH",
    date: "27 juin 2026",
    read: "5 min",
    title: "Contrats de travail : les clauses qui protègent réellement l’employeur",
    excerpt:
      "Période d’essai, mobilité, confidentialité : rédiger utile plutôt que copier un modèle générique.",
    hint: "Signature d’un contrat de travail, gros plan sur les mains (800×500)",
  },
  {
    slug: "tableau-de-bord",
    tag: "Gestion",
    date: "12 juin 2026",
    read: "6 min",
    title: "Construire un tableau de bord qu’un dirigeant lit vraiment",
    excerpt:
      "Cinq indicateurs suffisent pour piloter une TPE. Les vingt autres font perdre du temps.",
    hint: "Écran affichant un tableau de bord de gestion, ambiance bureau (800×500)",
  },
  {
    slug: "creation-entreprise",
    tag: "Création",
    date: "30 mai 2026",
    read: "7 min",
    title: "Créer sa société : choisir la forme juridique sans se piéger",
    excerpt:
      "SARL, SA, entreprise individuelle : l’impact réel du choix sur la fiscalité, la responsabilité et le financement.",
    hint: "Jeune entrepreneur devant des documents d’immatriculation (800×500)",
  },
  {
    slug: "tresorerie",
    tag: "Gestion",
    date: "15 mai 2026",
    read: "6 min",
    title: "Trésorerie : sortir du pilotage à vue en quatre semaines",
    excerpt:
      "Un budget de trésorerie glissant, tenu chaque semaine, évite la majorité des crises de liquidité.",
    hint: "Graphique de flux de trésorerie sur écran et carnet (800×500)",
  },
];

export const BLOG_TAGS = [
  "Tous",
  "Fiscalité",
  "Comptabilité",
  "Financement",
  "Douane",
  "RH",
  "Gestion",
  "Création",
];
