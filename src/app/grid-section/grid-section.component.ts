import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.css']
})
export class GridSectionComponent implements OnInit {

  griddata={};
  galleryimage={};
  trendingLooksImages={};
  lateststorydata={};

  constructor(private config:ConfigService) { }

  ngOnInit(): void {
    this.griddata = this.getdata();
    this.galleryimage = this.getgallerydata();
    this.trendingLooksImages = this.trendingLooks();
    this.lateststorydata = this.lateststory();
  }

  getdata(){
    return this.config.getgriddtata().griddata;
  }

  getgallerydata(){
    return this.config.getgriddtata().galleryimage;

  }
  trendingLooks(){
    return this.config.getgriddtata().trendingLooksImages;
  }
  lateststory(){
    return this.config.getgriddtata().lateststories;
  }

}
