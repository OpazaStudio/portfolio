/**
 * Contenu bilingue de la page.
 *
 * Transcrit mot pour mot depuis le design source (`Portfolio Ethan Huot.dc.html`) :
 * ponctuation, accents, espaces insécables typographiques et séparateurs `·`
 * sont volontairement conservés tels quels.
 */

export type Lang = "fr" | "en";

export type Proof = { name: string; role: string };
export type Service = { title: string; body: string; price: string };
export type Project = {
  n: string;
  name: string;
  type: string;
  status: string;
  body: string;
  tags: string;
  /**
   * Page de détail ou site en ligne. Tant qu'elle est absente, la carte est
   * rendue en `<article>` : ni flèche, ni soulèvement, ni curseur de lien —
   * l'affordance ne promet pas une destination qui n'existe pas.
   */
  url?: string;
};
export type MethodStep = { n: string; title: string; body: string };

export type Copy = {
  /** Nom de la langue dans sa propre langue, pour le sélecteur. */
  langName: string;
  metaTitle: string;
  metaDescription: string;
  skipLink: string;
  navLabel: string;
  langLabel: string;
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
  introLabel: string;
  avail: string;
  hero1: string;
  hero2: string;
  heroMark: string;
  hero3: string;
  heroSub: string;
  emailCta: string;
  workCta: string;
  cdiChip: string;
  proofKicker: string;
  proof: Proof[];
  proofNote: string;
  doorsLabel: string;
  doorALabel: string;
  doorATitle: string;
  doorABody: string;
  doorALink: string;
  doorBLabel: string;
  doorBTitle: string;
  doorBBody: string;
  doorBLink: string;
  /** Repli quand `SITE.cvHref` est absent : la porte garde un appel à l'action. */
  doorBLinkAlt: string;
  doorBSubject: string;
  s1Label: string;
  s2Label: string;
  s3Label: string;
  s4Label: string;
  s5Label: string;
  services: Service[];
  projects: Project[];
  method: MethodStep[];
  worksNote: string;
  aboutBody: string;
  contactLine: string;
  contactNote: string;
  cvLink: string;
  /** Page 404. */
  nfMetaTitle: string;
  nfLabel: string;
  nfTitle: string;
  nfBody: string;
  nfHome: string;
  /** Lien vers l'autre langue, écrit dans cette autre langue. */
  nfOther: string;
};

export const COPY: Record<Lang, Copy> = {
  fr: {
    langName: "Français",
    metaTitle:
      "Ethan Huot — Plateformes pour jeux de société et jeux de cartes",
    metaDescription:
      "Développeur full-stack indépendant, basé à La Rochelle. Tournois, boutiques, back-offices, applications mobiles — du premier écran à la mise en production.",
    skipLink: "Aller au contenu",
    navLabel: "Navigation principale",
    langLabel: "Langue du site",
    nav1: "Services",
    nav2: "Travaux",
    nav3: "Méthode",
    nav4: "Contact",
    introLabel: "Bonjour",
    avail: "Disponible pour de nouveaux projets",
    hero1: "Je conçois et développe",
    hero2: "des plateformes pour",
    heroMark: "jeux de société",
    hero3: "et jeux de cartes à collectionner.",
    heroSub:
      "Développeur full-stack indépendant, basé à La Rochelle. Tournois, boutiques, back-offices, applications mobiles — du premier écran à la mise en production.",
    emailCta: "Écrivez-moi",
    workCta: "Voir les travaux",
    cdiChip: "Également ouvert à un poste en CDI.",
    proofKicker: "Plateformes à fort trafic livrées pour",
    proof: [
      { name: "FIM Speedway Grand Prix", role: "Championnat du monde" },
      { name: "FIM Endurance World Championship", role: "Championnat du monde" },
      { name: "UCI Mountain Bike", role: "Fédération internationale" },
    ],
    proofNote:
      "3 ans d'expérience · Chef de projet & développeur full-stack · Laravel / Next.js / Expo",
    doorsLabel: "Deux portes",
    doorALabel: "Vous avez un projet",
    doorATitle: "Faire construire",
    doorABody:
      "Un site, une application, un produit à sortir. Devis et planning sous 48 h.",
    doorALink: "contact@opaza.fr",
    doorBLabel: "Vous recrutez",
    doorBTitle: "Rejoindre une équipe",
    doorBBody:
      "Je suis aussi ouvert à un CDI full-stack ou mobile, en France ou à distance.",
    doorBLink: "Voir mon CV",
    doorBLinkAlt: "Écrivez-moi",
    doorBSubject: "Opportunité de poste",
    s1Label: "Services",
    s2Label: "Travaux",
    s3Label: "Méthode",
    s4Label: "À propos",
    s5Label: "Contact",
    services: [
      {
        title: "Plateforme de jeu",
        body: "Moteur de tournois, boutique, back-office, application mobile. Conçue, développée, livrée.",
        price: "dès 4 000 €",
      },
      {
        title: "Conseil & accompagnement",
        body: "Cadrage technique, choix d'architecture, revue de code, montée en compétence de votre équipe.",
        price: "750 € / jour",
      },
      {
        title: "Maintenance & évolutions",
        body: "Un produit déjà en ligne à faire vivre : correctifs, nouvelles fonctionnalités, SEO, surveillance.",
        price: "forfait mensuel",
      },
    ],
    projects: [
      {
        n: "001",
        name: "Ignite",
        type: "Plateforme TCG",
        status: "En développement",
        body: "Une plateforme complète pour un jeu de cartes à collectionner : back-office, boutique et moteur de tournois.",
        tags: "Laravel · Filament · Next.js",
      },
      {
        n: "002",
        name: "Boutique fleuriste",
        type: "E-commerce",
        status: "En ligne",
        body: "Boutique en ligne livrée de la conception à la mise en production.",
        tags: "Next.js",
      },
      {
        n: "003",
        name: "Coinhouse",
        type: "Plateforme crypto",
        status: "En ligne",
        body: "Développement de plusieurs pages et intégration des recommandations SEO.",
        tags: "Next.js · SEO",
      },
      {
        n: "004",
        name: "Weeks-Off",
        type: "Application web",
        status: "En ligne",
        body: "Corrections de fonctionnalités et intégration des recommandations SEO.",
        tags: "SEO",
      },
    ],
    method: [
      {
        n: "1",
        title: "On cadre",
        body: "Un appel, puis un document court : ce qu'on fait, ce qu'on ne fait pas, combien, et quand.",
      },
      {
        n: "2",
        title: "On construit",
        body: "Livraison par tranches. Vous voyez le produit tourner chaque semaine, pas seulement à la fin.",
      },
      {
        n: "3",
        title: "On passe la main",
        body: "Code documenté, déploiement automatisé. Vous restez autonome, avec ou sans moi.",
      },
    ],
    // Le design source annonçait « Chaque projet mène à une page détaillée » ;
    // ces pages n'existent pas. La promesse est ramenée à ce qui est vrai.
    worksNote:
      "Le problème, ce que j'ai construit, ce que ça a changé : détails et captures d'écran sur demande.",
    aboutBody:
      "Je connais les règles du jeu : classements, appariements, decks, collections, éditions limitées. C'est ce qui change tout quand il faut construire la plateforme qui va autour. Peu de projets à la fois, une seule personne à qui parler, et du code que votre équipe pourra reprendre.",
    contactLine: "Dites-moi ce que vous voulez construire.",
    contactNote:
      "Réponse sous 24 h ouvrées. Un premier appel de 30 minutes, sans engagement.",
    cvLink: "Télécharger le CV",
    nfMetaTitle: "Page introuvable — Ethan Huot",
    nfLabel: "Erreur 404",
    nfTitle: "Cette page n’existe pas.",
    nfBody: "Le lien est peut-être ancien, ou l’adresse comporte une faute.",
    nfHome: "Retour à l’accueil",
    nfOther: "English version",
  },
  en: {
    langName: "English",
    metaTitle: "Ethan Huot — Platforms for board games and trading card games",
    metaDescription:
      "Independent full-stack developer, based in La Rochelle, France. Tournaments, shops, back-offices, mobile apps — from the first screen to production.",
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    langLabel: "Site language",
    nav1: "Services",
    nav2: "Work",
    nav3: "Method",
    nav4: "Contact",
    introLabel: "Hello",
    avail: "Available for new projects",
    hero1: "I design and build",
    hero2: "platforms for",
    heroMark: "board games",
    hero3: "and trading card games.",
    heroSub:
      "Independent full-stack developer, based in La Rochelle, France. Tournaments, shops, back-offices, mobile apps — from the first screen to production.",
    emailCta: "Get in touch",
    workCta: "See the work",
    cdiChip: "Also open to a full-time role.",
    proofKicker: "High-traffic platforms delivered for",
    proof: [
      { name: "FIM Speedway Grand Prix", role: "World championship" },
      { name: "FIM Endurance World Championship", role: "World championship" },
      { name: "UCI Mountain Bike", role: "International federation" },
    ],
    proofNote:
      "3 years' experience · Project lead & full-stack developer · Laravel / Next.js / Expo",
    doorsLabel: "Two doors",
    doorALabel: "You have a project",
    doorATitle: "Build something",
    doorABody:
      "A site, an app, a product to ship. Quote and schedule within 48 hours.",
    doorALink: "contact@opaza.fr",
    doorBLabel: "You are hiring",
    doorBTitle: "Join a team",
    doorBBody:
      "I am also open to a full-time full-stack or mobile role, in France or remote.",
    doorBLink: "See my résumé",
    doorBLinkAlt: "Get in touch",
    doorBSubject: "Role opportunity",
    s1Label: "Services",
    s2Label: "Work",
    s3Label: "Method",
    s4Label: "About",
    s5Label: "Contact",
    services: [
      {
        title: "Game platform",
        body: "Tournament engine, shop, back-office, mobile app. Scoped, built, delivered.",
        price: "from €4,000",
      },
      {
        title: "Consulting",
        body: "Technical scoping, architecture decisions, code review, levelling up your team.",
        price: "€750 / day",
      },
      {
        title: "Maintenance & iteration",
        body: "A live product to keep alive: fixes, new features, SEO, monitoring.",
        price: "monthly retainer",
      },
    ],
    projects: [
      {
        n: "001",
        name: "Ignite",
        type: "TCG platform",
        status: "In development",
        body: "A complete platform for a trading card game: back-office, shop and tournament engine.",
        tags: "Laravel · Filament · Next.js",
      },
      {
        n: "002",
        name: "Florist shop",
        type: "E-commerce",
        status: "Live",
        body: "Online shop delivered from design to production.",
        tags: "Next.js",
      },
      {
        n: "003",
        name: "Coinhouse",
        type: "Crypto platform",
        status: "Live",
        body: "Built several pages and implemented SEO recommendations.",
        tags: "Next.js · SEO",
      },
      {
        n: "004",
        name: "Weeks-Off",
        type: "Web app",
        status: "Live",
        body: "Feature fixes and SEO recommendations implemented.",
        tags: "SEO",
      },
    ],
    method: [
      {
        n: "1",
        title: "We scope",
        body: "A call, then a short document: what we do, what we don't, how much, and when.",
      },
      {
        n: "2",
        title: "We build",
        body: "Delivered in slices. You see the product running every week, not only at the end.",
      },
      {
        n: "3",
        title: "We hand over",
        body: "Documented code, automated deploys. You stay independent, with or without me.",
      },
    ],
    worksNote:
      "The problem, what I built, what it changed: details and screenshots on request.",
    aboutBody:
      "I know the rules of the game: standings, pairings, decks, collections, limited editions. That is what changes everything when you have to build the platform around them. Few projects at a time, one person to talk to, and code your team can pick up.",
    contactLine: "Tell me what you want to build.",
    contactNote:
      "Reply within one business day. A first 30-minute call, no strings.",
    cvLink: "Download résumé",
    nfMetaTitle: "Page not found — Ethan Huot",
    nfLabel: "Error 404",
    nfTitle: "This page does not exist.",
    nfBody: "The link may be out of date, or the address has a typo.",
    nfHome: "Back to home",
    nfOther: "Version française",
  },
};

export const STACK = [
  "Laravel",
  "Next.js",
  "React Native",
  "Expo",
  "TypeScript",
  "PostgreSQL",
  "Filament",
  "WordPress",
  "SEO",
];
