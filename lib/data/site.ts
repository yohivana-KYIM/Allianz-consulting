export const NAV_LINKS = [
  { href: "/", label: "Accueil", key: "home" },
  { href: "/a-propos", label: "À propos", key: "about" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/equipe", label: "Équipe", key: "team" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/contact", label: "Contact", key: "contact" },
] as const;

export const CONTACT_INFO = {
  email: "allianzconsulting@yahoo.com",
  phones: "691 53 84 95 / 694 96 04 73",
  phoneMain: "+237691538495",
  phoneMainDisplay: "691 53 84 95",
  address:
    "2ᵉ étage, porte 304 — immeuble en face de la Maison du Bois, Akwa rue Bernabé, Douala",
  hours: "Lundi – vendredi · 08 h – 18 h",
  legal: "© 2026 Allianz Consulting Sarl · RCCM RC/DLA/2021/B/3203 · NIU M062116251729J",
  legalShort: "© 2026 Allianz Consulting Sarl · RCCM RC/DLA/2021/B/3203",
};

export const VALUES = [
  {
    icon: "ti-scale",
    title: "Rigueur réglementaire",
    desc: "Chaque recommandation s’inscrit dans le cadre légal en vigueur. Aucune zone grise.",
  },
  {
    icon: "ti-eye",
    title: "Lisibilité",
    desc: "Des restitutions écrites, chiffrées et compréhensibles par un dirigeant non financier.",
  },
  {
    icon: "ti-hand-stop",
    title: "Engagement de suivi",
    desc: "Les recommandations sont suivies dans le temps, pas livrées puis abandonnées.",
  },
  {
    icon: "ti-lock",
    title: "Confidentialité",
    desc: "Vos documents restent internes au cabinet. Aucune sous-traitance sans votre accord.",
  },
];

export const CLIENTS = [
  "Porteurs de projets",
  "TPE",
  "PME",
  "Sociétés commerciales",
  "Commerçants",
  "Professions libérales",
  "Associations",
  "Investisseurs",
  "Import / export",
  "Entreprises nouvelles",
  "Restructuration",
];

export const STEPS = [
  {
    num: "01",
    title: "Diagnostic",
    desc: "Nous auditons votre situation fiscale, comptable et organisationnelle. Sans engagement.",
  },
  {
    num: "02",
    title: "Plan d’action",
    desc: "Priorités, calendrier des obligations et formule d’accompagnement adaptée à votre taille.",
  },
  {
    num: "03",
    title: "Mise en œuvre",
    desc: "Déclarations, tenue comptable, dossiers de financement, formalités : nous exécutons.",
  },
  {
    num: "04",
    title: "Suivi continu",
    desc: "Tableaux de bord, veille réglementaire et point périodique avec votre consultant dédié.",
  },
];

export const STATS = [
  { icon: "ti-list-check", value: "120 prestations", label: "sur huit domaines d’intervention" },
  { icon: "ti-user-check", value: "1 interlocuteur", label: "dédié, qui connaît votre dossier" },
  { icon: "ti-clock-hour-4", value: "48 h", label: "pour votre premier diagnostic" },
  { icon: "ti-scale", value: "Conformité", label: "obligations fiscales, sociales et douanières" },
  { icon: "ti-trending-up", value: "Performance", label: "rentabilité et pilotage par tableaux de bord" },
  { icon: "ti-lock", value: "Confidentialité", label: "vos données ne quittent jamais le cabinet" },
];

export interface PricingPlan {
  title: string;
  featured: boolean;
  desc: string;
  items: string[];
  cta: string;
}

export const PLANS: PricingPlan[] = [
  {
    title: "Assistance ponctuelle",
    featured: false,
    desc: "Pour une opération précise : contrôle fiscal, dossier bancaire, dédouanement, création de société.",
    items: [
      "Intervention à la demande",
      "Diagnostic du besoin",
      "Traitement du dossier",
      "Compte rendu écrit",
      "Facturation à la mission",
    ],
    cta: "Décrire mon besoin",
  },
  {
    title: "Accompagnement mensuel",
    featured: true,
    desc: "La formule de référence pour les TPE et PME qui veulent dormir tranquilles.",
    items: [
      "Tenue comptable mensuelle",
      "Déclarations fiscales suivies",
      "Tableau de bord de gestion",
      "Assistance en cas de contrôle",
      "Consultant dédié joignable",
      "Veille fiscale et sociale",
    ],
    cta: "Demander un devis",
  },
  {
    title: "Direction financière externalisée",
    featured: false,
    desc: "Pour les structures en croissance ou en restructuration qui ont besoin d’un bras droit financier.",
    items: [
      "Comptabilité complète et clôture",
      "Contrôle de gestion et budgets",
      "Ingénierie financière et financements",
      "Missions d’audit interne",
      "Accompagnement RH et organisation",
      "Comité de pilotage trimestriel",
    ],
    cta: "Planifier un entretien",
  },
];

export const TESTIMONIALS = [
  {
    text: "Notre premier contrôle fiscal s’est réglé sans redressement. Le diagnostic initial avait déjà identifié les deux points sensibles.",
    name: "Direction générale",
    role: "PME de distribution · 34 salariés",
  },
  {
    text: "Le business plan produit par le cabinet nous a ouvert la ligne de financement que deux banques avaient refusée.",
    name: "Fondateur",
    role: "Société de transport",
  },
  {
    text: "Comptabilité, déclarations et dossiers du personnel sur un seul interlocuteur : nous avons arrêté de courir après trois prestataires.",
    name: "Gérante",
    role: "Cabinet de services · Douala",
  },
];

export const NEEDS = [
  "Fiscalité",
  "Comptabilité",
  "Management",
  "Ingénierie financière",
  "Audit",
  "Douane & transit",
  "Ressources humaines",
  "Création d’entreprise",
];

export const OBJECTIVES = [
  "Accompagner les entreprises dans leur gestion comptable et fiscale",
  "Assurer le respect des obligations fiscales et administratives",
  "Conseiller les entreprises dans leurs décisions financières",
  "Réaliser des missions d’audit et de contrôle selon les habilitations requises",
  "Accompagner les opérations d’importation et d’exportation",
  "Conseiller les dirigeants en matière de management et d’organisation",
  "Assister les entreprises dans la gestion de leurs ressources humaines",
  "Accompagner la création et la formalisation des entreprises",
  "Améliorer la rentabilité et la performance des entreprises clientes",
  "Proposer des solutions adaptées aux difficultés rencontrées",
];

export const ABOUT_FIGURES = [
  { value: "8", label: "domaines d’intervention réunis" },
  { value: "120", label: "prestations couvertes" },
  { value: "48 h", label: "pour le premier diagnostic" },
];
