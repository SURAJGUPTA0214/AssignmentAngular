import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [{'image': 'https://picsum.photos/200'}, {'image': 'https://picsum.photos/201'},{'image': 'https://picsum.photos/203'},];

}
