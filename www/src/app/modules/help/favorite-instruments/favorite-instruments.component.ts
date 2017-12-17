import { Component, SimpleChanges, OnChanges, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IFavorite } from './model';
import { debug } from 'util';


const LEFT_OFFSET = 20;




@Component({
  selector: 'favorite-instruments',
  templateUrl: './favorite-instruments.component.html',
  styleUrls: ['./favorite-instruments.component.scss']
})
export class FavoriteInstrumentsComponent implements OnChanges {
  @Input() favorites: IFavorite[] = [];
  @Input() activeItem: IFavorite;
  @Output() activeChanged = new EventEmitter<string>();
  @ViewChild('container') container: ElementRef;

  isScollerVisible = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeItem']) {
      const change = changes['activeItem'];
      if (change) {
        console.log(change);
      }
      this.findIfScrollerRequired();
    }
  }
  ngAfterViewInit() {
    this.findIfScrollerRequired();
  }

  private findIfScrollerRequired() {
    setTimeout(() => {
      if (this.container) {
        const el = this.container.nativeElement;
        if (el) {
          this.isScollerVisible = el.scrollWidth > el.clientWidth;
          if (this.isScollerVisible) {
            this.bringActiveItemToView(el);
          }
        }
      }
    }, 0);
  }
  private bringActiveItemToView(el: any) {
    if (this.isScollerVisible) {
      const nodes = el.getElementsByClassName('capsule active');
      const activeNode = nodes && nodes.length > 0 ? nodes[0] : undefined;
      if (activeNode) {
        el.scrollLeft = activeNode.offsetLeft - LEFT_OFFSET;
      }
    }
  }
  onLeft() {
    const el = this.container.nativeElement;
    el.scrollLeft -= 30;
  }
  onRight() {
    const el = this.container.nativeElement;
    el.scrollLeft += 30;
  }
}
