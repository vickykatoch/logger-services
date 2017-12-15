import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';






@Component({
  selector: 'favorite-instruments',
  templateUrl: './favorite-instruments.component.html',
  styleUrls: ['./favorite-instruments.component.scss']
})
export class FavoriteInstrumentsComponent implements OnInit {
  @Input() favorites : string[];
  @Input() activeItem : string;
  @Output() activeChanged = new EventEmitter<string> ();
  @ViewChild('container') container : ElementRef;

  constructor() { }

  ngOnInit() {

  }
  onLeft() {
    const el = this.container.nativeElement;
    debugger;
    el.scrollTo(100,0);
    console.log(this.container);
  }

}
