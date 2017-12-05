import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'cp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
