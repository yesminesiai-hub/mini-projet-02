import { Component, OnInit } from '@angular/core';
import { ChansonService } from '../services/chanson';
import { Chansons } from '../model/chanson.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchFilterPipe } from '../search-filter-pipe';
import { Auth } from '../services/auth';

@Component({
  imports: [FormsModule, CommonModule, RouterLink, SearchFilterPipe],
  selector: 'app-recherche-par-titre',
  styles: ``,
  templateUrl: './recherche-par-titre.html',
})
export class RechercheParTitre implements OnInit {

  chansons!: Chansons[];
  searchTerm!: string;

  constructor(private chansonService: ChansonService, public authService: Auth) {}

  supprimerChanson(med: Chansons) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chansonService.supprimerChanson(med);
    }
  }

  ngOnInit(): void {
    this.chansons = this.chansonService.listeChansons();
  }
}