# Portfolio — Ethan Huot

Implémentation du design **« Portfolio Ethan Huot.dc.html »**
(projet Claude Design *Refonte portfolio freelance*,
`ae497b30-0336-429f-92a5-957ec789fb7b`).

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript.

## Démarrer

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
app/
  layout.tsx      polices (EB Garamond, JetBrains Mono), métadonnées
  page.tsx        entrée serveur
  globals.css     jetons de design, keyframes, classes composées
  icon.svg        favicon (la feuille du logo)
components/
  portfolio.tsx   page complète, état de langue (client)
  site-header.tsx en-tête collant + sélecteur FR/EN
  section-label.tsx
  icons.tsx       feuille du logo + pictogrammes « face de dé »
  use-reveal.ts   apparition au défilement
  sections/       hero, proof-band, doors, services, work, method, about, contact
lib/
  copy.ts         tout le contenu FR/EN
  site.ts         réglages globaux
  cn.ts
```

## Réglages

`lib/site.ts` reprend les props du design source, figées sur leurs valeurs par
défaut :

| Réglage       | Valeur     | Effet                                                                        |
| ------------- | ---------- | ---------------------------------------------------------------------------- |
| `cdiMode`     | `double`   | `discret` : rien · `mention` : une ligne sous l'accroche · `double` : le bloc « deux portes » |
| `showPricing` | `true`     | Affiche les pastilles de prix dans Services                                  |
| `defaultLang` | `fr`       | Langue du rendu serveur (le sélecteur FR/EN bascule ensuite côté client)      |
| `motion`      | `true`     | Coupe l'apparition au défilement si `false`                                   |

C'est aussi là que se trouvent l'adresse e-mail, le lien du CV et les profils
GitHub / LinkedIn.

Le contenu bilingue vit dans `lib/copy.ts` — un seul objet par langue, transcrit
mot pour mot depuis le design.

## À compléter

- **`public/cv-ethan-huot.pdf` est absent.** Les deux liens « CV » pointent
  dessus et renvoient un 404 tant que le fichier n'y est pas déposé.
- **GitHub et LinkedIn** pointent sur `https://github.com` et
  `https://linkedin.com` (les placeholders du design).
- **Les cartes projet** renvoient toutes vers `#travaux`, alors que la note sous
  la liste annonce une page détaillée par projet.

## Écarts assumés par rapport au design

- Le `::after` des liens de navigation n'était jamais déclenché dans le design
  (`scaleX(0)` sans règle de survol) : l'intention est rétablie sur `:hover` et
  `:focus-visible`.
- Le design n'a aucun point de rupture. En dessous de ~700 px l'en-tête passe
  sur trois lignes (≈ 165 px) ; collant, il mangerait un cinquième de l'écran
  d'un téléphone. Il ne devient donc collant qu'à partir de `md` (768 px).
- La flèche des cartes projet reçoit `ml-auto` — sans effet sur grand écran,
  elle reste ainsi à droite quand elle passe seule à la ligne sur mobile.
- `prefers-reduced-motion: reduce` neutralise animations et transitions.
- `app/icon.svg` (favicon repris de la feuille du logo) remplace le
  `favicon.ico` du starter ; le design n'en prévoyait pas.
