export interface TeamMember {
  slot: string;
  name: string;
  role: string;
  desc: string;
  skills?: string[];
  hint: string;
}

// Bandeau "équipe" de l'accueil (4 profils).
export const HOME_TEAM: TeamMember[] = [
  {
    slot: "ac-team-1",
    name: "Expert-comptable associé",
    role: "Comptabilité & audit",
    desc: "Supervise la tenue comptable, les clôtures et les missions d’audit du cabinet.",
    hint: "Portrait du consultant (600×760)",
  },
  {
    slot: "ac-team-2",
    name: "Conseil fiscal",
    role: "Fiscalité & contentieux",
    desc: "Déclarations, contrôles fiscaux, régularisations et veille réglementaire.",
    hint: "Portrait du consultant (600×760)",
  },
  {
    slot: "ac-team-3",
    name: "Analyste financier",
    role: "Ingénierie financière",
    desc: "Business plans, plans de financement et dossiers bancaires.",
    hint: "Portrait du consultant (600×760)",
  },
  {
    slot: "ac-team-4",
    name: "Consultant douane & RH",
    role: "Transit & ressources humaines",
    desc: "Dédouanement, classement tarifaire, contrats et dossiers du personnel.",
    hint: "Portrait du consultant (600×760)",
  },
];

// Page Équipe : les 6 profils détaillés.
export const FULL_TEAM: TeamMember[] = [
  {
    slot: "ac-eq-1",
    name: "Expert-comptable associé",
    role: "Comptabilité & audit",
    desc: "Supervise la tenue comptable, les clôtures et les missions d’audit du cabinet.",
    skills: ["États financiers", "Audit interne", "Procédures"],
    hint: "Portrait professionnel — homme ou femme en tenue de bureau, fond neutre clair, regard caméra (600×760)",
  },
  {
    slot: "ac-eq-2",
    name: "Conseil fiscal",
    role: "Fiscalité & contentieux",
    desc: "Déclarations, contrôles fiscaux, régularisations et veille réglementaire.",
    skills: ["Contrôle fiscal", "Régularisation", "Veille"],
    hint: "Portrait professionnel — même cadrage et même fond que les autres membres (600×760)",
  },
  {
    slot: "ac-eq-3",
    name: "Analyste financier",
    role: "Ingénierie financière",
    desc: "Business plans, plans de financement et dossiers bancaires.",
    skills: ["Business plan", "Trésorerie", "Financement"],
    hint: "Portrait professionnel — même cadrage et même fond que les autres membres (600×760)",
  },
  {
    slot: "ac-eq-4",
    name: "Consultant douane & transit",
    role: "Commerce extérieur",
    desc: "Dédouanement, classement tarifaire et suivi des opérations de transit.",
    skills: ["Dédouanement", "Tarif douanier", "Import/export"],
    hint: "Portrait professionnel — même cadrage et même fond que les autres membres (600×760)",
  },
  {
    slot: "ac-eq-5",
    name: "Responsable RH",
    role: "Ressources humaines",
    desc: "Contrats, dossiers du personnel, recrutement et politiques internes.",
    skills: ["Contrats", "Recrutement", "Droit du travail"],
    hint: "Portrait professionnel — même cadrage et même fond que les autres membres (600×760)",
  },
  {
    slot: "ac-eq-6",
    name: "Chargée de clientèle",
    role: "Relation client & formalités",
    desc: "Point d’entrée du cabinet : formalités de création et suivi des dossiers.",
    skills: ["Formalités", "Immatriculation", "Suivi"],
    hint: "Portrait professionnel — même cadrage et même fond que les autres membres (600×760)",
  },
];
