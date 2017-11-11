import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Card } from '../../shared/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    {
      title: 'アベ政治を許すな',
      body: 'こめさん炊くぞ'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
