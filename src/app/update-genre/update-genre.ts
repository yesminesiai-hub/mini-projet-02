import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Genre } from '../model/genre.model';

@Component({
  imports: [FormsModule],
  selector: 'app-update-genre',
  styles: ``,
  templateUrl: './update-genre.html',
})
export class UpdateGenre implements OnInit {

  @Input()
  genre!: Genre;

  @Input()
  ajout!: boolean;

  @Output()
  genreUpdated = new EventEmitter<Genre>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre ", this.genre);
  }

  saveGenre() {
    this.genreUpdated.emit(this.genre);
  }
}