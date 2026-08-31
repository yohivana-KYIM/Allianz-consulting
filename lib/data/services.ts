export interface ServiceDomain {
  slug: string;
  num: string;
  icon: string;
  label: string;
  title: string;
  h2: string;
  intro: string;
  body: string;
  note?: string;
  imgHint: string;
  outcomes: string[];
  items: string[];
}

export const SERVICES: ServiceDomain[] = [
  {
    slug: "fiscalite",
    num: "01",
    icon: "ti-receipt-tax",
    label: "Fiscalité",
    title: "Fiscalité",
    h2: "Vos obligations fiscales tenues, vos risques identifiés avant l’administration",
    intro:
      "Diagnostic, déclarations, contrôles et optimisation dans le strict respect de la législation.",
    body: "Nous prenons en charge l’intégralité du cycle fiscal : identification du régime applicable, calcul des impôts et taxes, dépôt des déclarations, suivi sur les plateformes de l’administration et assistance en cas de contrôle. Chaque dossier commence par un diagnostic qui cartographie vos risques et les régularisations à engager.",
    imgHint:
      "Photo — consultant expliquant une liasse fiscale à un dirigeant, documents et écran visibles (900×760)",
    outcomes: [
      "Un calendrier fiscal tenu, sans pénalité de retard",
      "Une cartographie écrite de vos risques fiscaux",
      "Une assistance immédiate en cas de contrôle",
    ],
    items: [
      "Diagnostic de la situation fiscale",
      "Identification du régime fiscal applicable",
      "Conseil et assistance fiscale",
      "Élaboration et suivi des déclarations fiscales",
      "Calcul des impôts et taxes",
      "Assistance lors des contrôles fiscaux",
      "Analyse des risques fiscaux",
      "Régularisation des situations fiscales",
      "Optimisation fiscale conforme à la loi",
      "Suivi des obligations sur les plateformes de l’administration",
      "Demandes et réclamations fiscales",
      "Veille fiscale",
    ],
  },
  {
    slug: "comptabilite",
    num: "02",
    icon: "ti-calculator",
    label: "Comptabilité",
    title: "Comptabilité",
    h2: "Une comptabilité tenue, lisible et prête à être auditée",
    intro:
      "Tenue, clôture et analyse de vos comptes, en formule complète, mensuelle, trimestrielle ou ponctuelle.",
    body: "Saisie, classement, rapprochements bancaires, suivi clients et fournisseurs, trésorerie, états financiers : nous tenons votre comptabilité et nous la rendons exploitable. L’analyse des comptes et la mise en place de procédures évitent que la clôture devienne un chantier annuel.",
    note: "Quatre formules d’accompagnement : comptabilité complète, mensuelle, trimestrielle ou assistance ponctuelle selon vos besoins.",
    imgHint:
      "Photo — pièces comptables classées, écran de logiciel comptable, mains en train de saisir (900×760)",
    outcomes: [
      "Des comptes à jour chaque mois, pas seulement à la clôture",
      "Des états financiers conformes et exploitables",
      "Des procédures écrites que vos équipes peuvent suivre",
    ],
    items: [
      "Tenue de la comptabilité",
      "Saisie et classement des pièces comptables",
      "Enregistrement des opérations",
      "Rapprochements bancaires",
      "Suivi des comptes clients et fournisseurs",
      "Suivi de la trésorerie",
      "Établissement des états financiers",
      "Préparation des déclarations comptables",
      "Analyse des comptes",
      "Mise en place de procédures comptables",
      "Assistance à la clôture des comptes",
      "Conseil en organisation comptable",
    ],
  },
  {
    slug: "management",
    num: "03",
    icon: "ti-target-arrow",
    label: "Management",
    title: "Management & conseil en gestion",
    h2: "Organiser, mesurer, décider — avec des chiffres et non des impressions",
    intro:
      "Organisation, pilotage et prise de décision : nous outillons les dirigeants.",
    body: "Diagnostic organisationnel, procédures internes, tableaux de bord, contrôle de gestion, budgets, analyse des coûts et de la rentabilité. Nous intervenons aussi sur les phases sensibles : restructuration, réorganisation des services, redéfinition de la stratégie.",
    imgHint:
      "Photo — atelier de travail sur tableau blanc avec un dirigeant et un consultant (900×760)",
    outcomes: [
      "Un tableau de bord de cinq indicateurs réellement suivis",
      "Des procédures internes écrites et appliquées",
      "Une lecture chiffrée de la rentabilité par activité",
    ],
    items: [
      "Diagnostic organisationnel",
      "Conseil en management",
      "Mise en place de procédures internes",
      "Organisation des services",
      "Élaboration de tableaux de bord",
      "Contrôle de gestion",
      "Gestion budgétaire",
      "Élaboration et suivi des budgets",
      "Analyse des coûts",
      "Analyse de la rentabilité",
      "Accompagnement à la restructuration",
      "Conseil en stratégie",
      "Indicateurs de performance",
      "Aide à la décision",
    ],
  },
  {
    slug: "ingenierie-financiere",
    num: "04",
    icon: "ti-chart-arrows-vertical",
    label: "Ingénierie financière",
    title: "Ingénierie financière",
    h2: "Des dossiers que les banques et les investisseurs acceptent de lire",
    intro:
      "Business plans, financements et prévisions pour sécuriser vos projets d’investissement.",
    body: "Analyse et diagnostic financier, business plan, plan de financement, études de rentabilité, prévisions, budget de trésorerie et besoin en fonds de roulement. Nous structurons le dossier, nous en défendons les hypothèses et nous vous accompagnons jusqu’à la décision de financement.",
    imgHint:
      "Photo — présentation d’un plan de financement, graphiques imprimés et ordinateur (900×760)",
    outcomes: [
      "Un business plan défendable, hypothèses documentées",
      "Un budget de trésorerie glissant",
      "Un dossier bancaire complet et présenté",
    ],
    items: [
      "Analyse financière",
      "Diagnostic financier",
      "Élaboration de plans de financement",
      "Recherche et structuration de financements",
      "Élaboration de business plans",
      "Études de rentabilité des projets",
      "Prévisions financières",
      "Budgets de trésorerie",
      "Analyse du besoin en fonds de roulement",
      "Conseil en investissement",
      "Évaluation financière des projets",
      "Dossiers banques et investisseurs",
      "Restructuration financière",
    ],
  },
  {
    slug: "audit",
    num: "05",
    icon: "ti-shield-check",
    label: "Audit",
    title: "Audit",
    h2: "Identifier les risques et les anomalies, puis suivre les corrections",
    intro:
      "Audit comptable, financier, fiscal, organisationnel et interne, avec suivi des recommandations.",
    body: "Nos missions d’audit visent un objectif simple : révéler les insuffisances avant qu’elles ne deviennent des litiges. Contrôle des procédures, évaluation des risques, vérification de la conformité, analyse des anomalies, puis un plan de recommandations dont nous suivons la mise en œuvre.",
    note: "Les missions d’audit sont réalisées dans la limite des qualifications, autorisations et dispositions réglementaires applicables.",
    imgHint:
      "Photo — deux auditeurs examinant des registres et un écran, ambiance sobre (900×760)",
    outcomes: [
      "Un rapport d’audit hiérarchisé par niveau de risque",
      "Un plan de correction avec responsables et échéances",
      "Un point de suivi de la mise en œuvre",
    ],
    items: [
      "Audit comptable",
      "Audit financier",
      "Audit fiscal",
      "Audit organisationnel",
      "Audit interne",
      "Contrôle des procédures",
      "Évaluation des risques",
      "Vérification de la conformité des opérations",
      "Analyse des anomalies",
      "Recommandations d’amélioration",
      "Suivi de la mise en œuvre des recommandations",
    ],
  },
  {
    slug: "douane-transit",
    num: "06",
    icon: "ti-ship",
    label: "Douane & transit",
    title: "Douane & transit",
    h2: "Vos marchandises circulent, vos dossiers passent",
    intro:
      "Import, export, dédouanement : vos opérations de commerce extérieur sans blocage.",
    body: "Nous accompagnons vos opérations d’importation et d’exportation : réglementation douanière, préparation des dossiers, procédures de dédouanement, droits et taxes, classement tarifaire et suivi des marchandises. Une position tarifaire mal choisie coûte cher — nous la vérifions avant l’expédition.",
    note: "Les opérations exigeant une qualité professionnelle ou une autorisation spécifique sont réalisées conformément à la réglementation en vigueur.",
    imgHint:
      "Photo — conteneurs au port de Douala ou documents de transit sur un bureau (900×760)",
    outcomes: [
      "Un classement tarifaire vérifié avant expédition",
      "Des dossiers douaniers complets du premier coup",
      "Un suivi de vos marchandises et formalités",
    ],
    items: [
      "Assistance import et export",
      "Conseil en réglementation douanière",
      "Préparation des dossiers douaniers",
      "Procédures de dédouanement",
      "Conseil sur les droits et taxes à l’importation",
      "Classement tarifaire",
      "Suivi des opérations de transit",
      "Conseil sur les documents internationaux",
      "Assistance auprès des intervenants",
      "Suivi des marchandises et formalités",
    ],
  },
  {
    slug: "ressources-humaines",
    num: "07",
    icon: "ti-users",
    label: "Ressources humaines",
    title: "Ressources humaines",
    h2: "Des contrats solides et une gestion du personnel conforme",
    intro:
      "Contrats, dossiers du personnel, recrutement et politiques RH conformes au droit du travail.",
    body: "Rédaction des contrats de travail, gestion administrative et dossiers du personnel, fiches de poste, assistance au recrutement, évaluation des performances, conseil en formation et en droit du travail. Nous intervenons aussi en prévention et en gestion des conflits professionnels.",
    imgHint:
      "Photo — entretien de recrutement ou signature de contrat, deux personnes en bureau (900×760)",
    outcomes: [
      "Des contrats adaptés à votre activité, pas des modèles génériques",
      "Des dossiers du personnel complets et à jour",
      "Un cadre RH écrit : fiches de poste et procédures",
    ],
    items: [
      "Élaboration des contrats de travail",
      "Gestion administrative du personnel",
      "Dossiers du personnel",
      "Conseil et assistance au recrutement",
      "Élaboration des fiches de poste",
      "Organisation du personnel",
      "Évaluation des performances",
      "Conseil en formation",
      "Élaboration des politiques RH",
      "Gestion des conflits professionnels",
      "Conseil en droit du travail",
      "Procédures internes",
    ],
  },
  {
    slug: "creation-entreprise",
    num: "08",
    icon: "ti-building-store",
    label: "Création d’entreprise",
    title: "Création d’entreprise",
    h2: "De l’idée à l’immatriculation, puis les premiers mois",
    intro:
      "Étude du projet, forme juridique, business plan, formalités et accompagnement post-création.",
    body: "Nous étudions votre projet, identifions la forme juridique et le régime fiscal appropriés, produisons le business plan et le plan de financement, préparons les documents administratifs et vous accompagnons jusqu’à l’immatriculation. Puis nous mettons en place votre comptabilité et vos procédures.",
    note: "Un service d’accompagnement post-création permet au nouvel entrepreneur d’être suivi durant ses premiers mois d’activité.",
    imgHint:
      "Photo — jeune entrepreneur recevant ses documents d’immatriculation, poignée de main (900×760)",
    outcomes: [
      "Une structure juridique et fiscale choisie en connaissance",
      "Un dossier de création complet et déposé",
      "Une comptabilité opérationnelle dès le premier mois",
    ],
    items: [
      "Étude du projet",
      "Choix de la forme juridique",
      "Conseil sur le régime fiscal",
      "Élaboration du business plan",
      "Plan de financement",
      "Préparation des documents administratifs",
      "Assistance aux formalités de création",
      "Accompagnement à l’immatriculation",
      "Conseil sur les obligations fiscales et sociales",
      "Mise en place de la comptabilité",
      "Procédures administratives",
      "Accompagnement après création",
    ],
  },
];
