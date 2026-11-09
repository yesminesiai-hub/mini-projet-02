# Correction – Atelier 08 : @Input() / @Output() (gestion des genres de chansons)

Projet : `Chanson` (idChanson, titre, artiste, duree, dateCreation, genre) et `Genre` (idGenre, nomGenre).
Genres : Rap, Rock, Jazz. Données en mémoire dans `ChansonService` (pas d'appel HTTP).

## Correspondance étapes de l'atelier -> fichiers

| Étapes | Contenu | Fichier |
|---|---|---|
| 1 – 2 | Composant liste + tableau des genres | `src/app/liste-genres/liste-genres.ts` / `.html` |
| 3 | Route `listeGenres` + lien dans la navbar | `src/app/app.routes.ts`, `src/app/app.html` |
| 5 – 6 | Composant `UpdateGenre` inséré avant la table | `src/app/update-genre/`, `liste-genres.html` |
| 7 – 8 | `@Input() genre` + transmission de `updatedGenre` | `update-genre.ts`, `liste-genres.ts` |
| 9 – 10 | `ngOnInit` + formulaire `[(ngModel)]` | `update-genre.ts` / `.html` |
| 11 – 13 | `@Output() genreUpdated` + `emit()` + `(genreUpdated)="genreUpdated($event)"` | `update-genre.ts`, `liste-genres.html` |
| 14 – 15 | `ajouterGenre` (service) + `genreUpdated` / `chargerGenres` | `services/chanson.ts`, `liste-genres.ts` |
| 16 – 17 | Bouton « Editer » + `updateGenre(g)` | `liste-genres.html` / `.ts` |
| 18 – 22 | `@Input() ajout` + libellé Ajouter / Modifier | `update-genre.ts` / `.html`, `liste-genres.ts` |
| Fin | Id caché lors d'un ajout : `[hidden]="ajout"` | `update-genre.html` |

## Lancer
```
npm install
ng serve
```
Comptes : `admin` / `123` (ADMIN), `user` / `123` (USER).
