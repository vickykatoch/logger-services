import { Component, OnInit } from '@angular/core';
import { IFavorite } from '../favorite-instruments/model';

@Component({
  selector: 'cp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public instruments : IFavorite[] = [];
  public activeFav : IFavorite;

  constructor() { }

  ngOnInit() {
    // this.instruments.push('2 YEAR');
    // this.instruments.push('3 YEAR');
    // this.instruments.push('5 YEAR');
    // this.instruments.push('7 YEAR');
    // this.instruments.push('10 YEAR');
    // this.instruments.push('30 YEAR');
    // this.activeFav = this.instruments[1];
  }
  private id =0;
  onAdd() {
    const item = {
      id : ++this.id,
      name : `ITEM : ${this.id}`
    };
    this.instruments.push(item);
    this.activeFav = item;
  }
  setActive() {
    const active = Math.floor(Math.random() * this.instruments.length);
    this.activeFav = this.instruments[active];
    console.log(active);
  }
  onActiveFavoriteChanged(favorite: IFavorite) {
    this.activeFav = favorite;
  }
}
