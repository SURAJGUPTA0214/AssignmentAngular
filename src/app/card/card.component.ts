import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardsdata = {};

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.cardsdata = this.getcardsdata();
  }

  getcardsdata(){
    return this.config.getgriddtata().cardsdata;
  }

}
