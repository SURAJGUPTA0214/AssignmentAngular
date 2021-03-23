import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { DividerComponent } from './divider/divider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridSectionComponent } from './grid-section/grid-section.component';
import {ConfigService} from './config.service';
import { CardComponent } from './card/card.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DividerComponent,
    CarouselComponent,
    ImageGalleryComponent,
    GridSectionComponent,
    CardComponent,
    SocialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCarouselModule.forRoot(),
    MatGridListModule,
    NgbModule

   
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
