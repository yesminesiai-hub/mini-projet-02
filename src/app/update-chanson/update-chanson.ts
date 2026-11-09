import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChansonService } from '../services/chanson';
import { ActivatedRoute, Router } from '@angular/router';
import { Chansons } from '../model/chanson.model';
import { Genre } from '../model/genre.model';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-update-chanson',
  styles: ``,
  templateUrl: './update-chanson.html',
})
export class UpdateChanson implements OnInit {

  currentChanson = new Chansons();
  genre! : Genre[];
  updateFormId! : number;

  constructor(private activeRoute: ActivatedRoute,private router : Router,private chansonService: ChansonService) {

  }

  updateChanson() {
    //console.log(this.currentChanson);
    this.currentChanson.genre = this.chansonService.consulterGenre(this.updateFormId);
    this.chansonService.updateChanson(this.currentChanson);
    this.router.navigate(['chanson']);
  }


  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.params['id']);
    this.genre = this.chansonService.listeGenre();
    this.currentChanson = this.chansonService.consulterChanson(this.activeRoute.snapshot.params['id']);
    this.updateFormId = this.currentChanson.genre.idGenre;
    console.log(this.currentChanson);
  }

}