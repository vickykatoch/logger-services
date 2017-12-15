import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public instruments : string[] = [];
  public activeFav = '';

  constructor() { }

  ngOnInit() {
    this.instruments.push('2 YEAR');
    this.instruments.push('3 YEAR');
    this.instruments.push('5 YEAR');
    this.instruments.push('7 YEAR');
    this.instruments.push('10 YEAR');
    this.instruments.push('30 YEAR');
    this.activeFav = this.instruments[1];
  }

  onActiveFavoriteChanged(favorite: string) {
    this.activeFav = favorite;
  }
}
