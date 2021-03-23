import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  gallerydata={};

  constructor(private config:ConfigService) {

   }

  ngOnInit(): void {
    this.gallerydata = this.getdata();
  }


  getdata(){
    return this.config.getgriddtata().galleryimage;
  }

  

}
