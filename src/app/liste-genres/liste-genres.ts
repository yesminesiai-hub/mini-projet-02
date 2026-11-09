import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from '../model/genre.model';
import { ChansonService } from '../services/chanson';
import { UpdateGenre } from '../update-genre/update-genre';

@Component({
  imports: [CommonModule, UpdateGenre],
  selector: 'app-liste-genres',
  styles: ``,
  templateUrl: './liste-genres.html',
})
export class ListeGenres implements OnInit {

  genres!: Genre[];
  updatedGenre: Genre = { idGenre: 0, nomGenre: "" };
  ajout: boolean = true;

  constructor(private chansonService: ChansonService) {}

  ngOnInit(): void {
    this.chargerGenres();
  }

  chargerGenres() {
    this.genres = this.chansonService.listeGenre();
  }

  genreUpdated(g: Genre) {
    console.log("Genre updated event", g);
    if (this.ajout) {
      this.chansonService.ajouterGenre({ ...g });
    } else {
      this.chansonService.updateGenre({ ...g });
    }
    this.chargerGenres();
    this.updatedGenre = { idGenre: 0, nomGenre: "" };
    this.ajout = true;
  }

  updateGenre(g: Genre) {
    this.updatedGenre = { ...g };
    this.ajout = false;
  }
}