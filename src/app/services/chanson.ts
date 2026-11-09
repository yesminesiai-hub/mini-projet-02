import { Injectable } from '@angular/core';
import { Chansons } from '../model/chanson.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root',
})
export class ChansonService {

  chansons: Chansons[];
  chanson!: Chansons;
  genres: Genre[];
  medRecherche!: Chansons[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "Rap" },
      { idGenre: 2, nomGenre: "Rock" },
      { idGenre: 3, nomGenre: "Jazz" }
    ];
    this.chansons = [
      { idChanson: 1, titre: "Believer", artiste: "Imagine Dragons", duree: 3.24,
        dateCreation: new Date("2017-02-01"), genre: this.genres[1] },
      { idChanson: 2, titre: "Shape of You", artiste: "Ed Sheeran", duree: 3.53,
        dateCreation: new Date("2017-01-06"), genre: this.genres[0] },
      { idChanson: 3, titre: "Bohemian Rhapsody", artiste: "Queen", duree: 5.55,
        dateCreation: new Date("1975-10-31"), genre: this.genres[1] }
    ];
  }

  listeChansons(): Chansons[] {
    return this.chansons;
  }

  ajouterChanson(med: Chansons): void {
    this.chansons.push(med);
  }

  supprimerChanson(med: Chansons) {
    const index = this.chansons.indexOf(med, 0);
    if (index > -1) {
      this.chansons.splice(index, 1);
    }
  }

  consulterChanson(id: number): Chansons {
    this.chanson = this.chansons.find(med => med.idChanson == id)!;
    return this.chanson;
  }

  updateChanson(med: Chansons) {
    const index = this.chansons.indexOf(med, 0);
    if (index > -1) {
      this.chansons.splice(index, 1);
      this.chansons.splice(index, 0, med);
    }
  }

  listeGenre(): Genre[] {
    return this.genres;
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(form => form.idGenre == id)!;
  }

  ajouterGenre(g: Genre): void {
    const maxId = this.genres.length ? Math.max(...this.genres.map(x => x.idGenre)) : 0;
    g.idGenre = maxId + 1;
    this.genres.push(g);
  }

  updateGenre(g: Genre): void {
    const index = this.genres.findIndex(x => x.idGenre == g.idGenre);
    if (index > -1) {
      this.genres.splice(index, 1, g);
    }
    this.chansons.forEach(f => {
      if (f.genre.idGenre == g.idGenre) {
        f.genre = g;
      }
    });
  }

  rechercherParGenre(idForm: number): Chansons[] {
    this.medRecherche = [];
    this.chansons.forEach((cur) => {
      if (idForm == cur.genre.idGenre) {
        this.medRecherche.push(cur);
      }
    });
    return this.medRecherche;
  }
}