export interface ChambreCard {
  slug: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

export const CHAMBRES_LIST: ChambreCard[] = [
  {
    slug: 'standard',
    image: 'assets/images/chambres/chambre-standard.jpg',
    title: 'Chambre Standard',
    description: 'La simplicité élégante. Parfaite pour un court séjour.',
    features: [
      'Lit confortable',
      'Climatisation & TV',
      'Wifi haut débit',
      'Salle de bain privative',
    ],
  },
  {
    slug: 'deluxe',
    image: 'assets/images/chambres/chambre-deluxe.jpg',
    title: 'Chambre Deluxe',
    description:
      'Espace généreux, décor soigné et confort supérieur, terrasse privée avec vue sur la cour',
    features: ['Grand lit & Espace travail', 'TV HD & Clim moderne', 'Salle de bain équipée'],
  },
  {
    slug: 'prestige',
    image: 'assets/images/chambres/suite-prestige.jpg',
    title: 'Suite Prestige',
    description: 'Le summum du confort pour les séjours exigeants.',
    features: ['Salon + Chambre King-size', 'Smart TV & WiFi Pro', 'Espace détente'],
  },
];

export function getChambreBySlug(slug: string | null | undefined): ChambreCard | undefined {
  if (!slug) return undefined;
  return CHAMBRES_LIST.find((c) => c.slug === slug);
}
