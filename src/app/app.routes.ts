import { Routes } from '@angular/router';
import { Chanson } from './chanson/chanson';
import { AddChanson } from './add-chanson/add-chanson';
import { UpdateChanson } from './update-chanson/update-chanson';
import { RechercheParGenre } from './recherche-par-genre/recherche-par-genre';
import { RechercheParTitre } from './recherche-par-titre/recherche-par-titre';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { ListeGenres } from './liste-genres/liste-genres';
import { chansonGuard } from './services/chanson-guard';

export const routes: Routes = [
    {path : "chanson", component: Chanson},
    {path : "add-chanson", component: AddChanson, canActivate:[chansonGuard]},
    {path : "updateChanson/:id", component: UpdateChanson, canActivate:[chansonGuard]},
    {path: "rechercheParGenre", component : RechercheParGenre},
    {path: "rechercheParTitre", component : RechercheParTitre},
    {path: "listeGenres", component : ListeGenres},
    {path: 'login', component: Login},
    {path: 'app-forbidden', component: Forbidden},
    {path : "", redirectTo: "chanson", pathMatch: "full"}
];