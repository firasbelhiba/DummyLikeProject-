import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']

})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() changeStatus = new EventEmitter();
  @Input() numberOfLikes = 200;

  constructor() { }

  ngOnInit(): void {
  }

  onClickFavorite() {
    this.isFavorite = !this.isFavorite;
    this.changeStatus.emit();
    this.numberOfLikes += (!this.isFavorite) ? -1 : 1;


  }


}
