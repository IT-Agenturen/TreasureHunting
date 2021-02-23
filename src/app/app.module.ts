import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//External modules

//Components
import { CharactersComponent } from './characters/characters.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { ChooseToolsComponent } from './choose-tools/choose-tools.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CongratulationsComponent } from './congratulations/congratulations.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ChooseToolsComponent,
    HomeComponent,
    CongratulationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule ,
    Angular2UsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
