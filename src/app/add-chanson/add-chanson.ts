import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Chansons} from '../model/chanson.model';
import { ChansonService } from '../services/chanson';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-chanson',
  templateUrl: './add-chanson.html',
})
export class AddChanson implements OnInit {

  newChanson = new Chansons();
  genre! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;

  constructor(private chansonService: ChansonService,private router : Router) {

  }

  addChanson() {
    //console.log("Nouveau chanson ajouté : ", this.newChanson);
    this.newGenre = this.chansonService.consulterGenre(this.newIdGenre);
    this.newChanson.genre = this.newGenre;
    this.chansonService.ajouterChanson(this.newChanson);
    this.router.navigate(['chanson']);
  }

  ngOnInit(): void {
    this.genre = this.chansonService.listeGenre();
  }

}