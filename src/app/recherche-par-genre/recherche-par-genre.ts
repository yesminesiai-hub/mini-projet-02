import { Component, OnInit } from '@angular/core';
import { Chansons } from '../model/chanson.model';
import { ChansonService } from '../services/chanson';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Genre } from '../model/genre.model';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  imports: [CommonModule, RouterLink, FormsModule],
  selector: 'app-recherche-par-genre',
  styles: ``,
  templateUrl: './recherche-par-genre.html',
})
export class RechercheParGenre implements OnInit {

  chansons!: Chansons[];
  genre!: Genre[];
  IdGenre!: number;

  constructor(private chansonService: ChansonService, public authService: Auth) {}

  supprimerChanson(med: Chansons) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chansonService.supprimerChanson(med);
      if (this.IdGenre) this.onChange();
    }
  }

  onChange() {
    this.chansons = this.chansonService.rechercherParGenre(this.IdGenre);
  }

  ngOnInit(): void {
    this.chansons = this.chansonService.listeChansons();
    this.genre = this.chansonService.listeGenre();
  }
}