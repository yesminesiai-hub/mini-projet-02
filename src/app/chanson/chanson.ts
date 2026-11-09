import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chansons } from '../model/chanson.model';
import { ChansonService } from '../services/chanson';
import { RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-chanson',
  templateUrl: './chanson.html',
})
export class Chanson implements OnInit {

  chanson: Chansons[];

  constructor(private chansonService: ChansonService, public authService: Auth) {
    this.chanson = this.chansonService.listeChansons();
  }

  supprimerChanson(med: Chansons) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chansonService.supprimerChanson(med);
    }
  }

  ngOnInit(): void {}
}