import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'angular2-useful-swiper';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y   
} from 'swiper/core';
import { environment } from 'src/environments/environment';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ]);
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit{
  
  title = 'Treasure Hunter';
  name = "Richard";
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  config : SwiperOptions;
  slideData = [];

  constructor(private auth: AuthenticationService,private router:Router) {
     this.auth.GetCharacters().subscribe((res : any)=>{
      if(!!res){      
        this.slideData = res;        
        localStorage.setItem(environment.characters,JSON.stringify(this.slideData));       
      }
     });           
  }

  ngOnInit() {    
    this.inItSwiper();
  }

  inItSwiper(){
    this.config = {
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },                  
      autoHeight: true,      
      allowTouchMove: true,                     
      autoplay: {
        delay: 6000,
        disableOnInteraction: true
      },    
      breakpoints: {
        1024: {
          slidesPerView: 1
        },
        500: {
          slidesPerView: 1
        },
        400: {
          slidesPerView: 1
        },
        300: {
          slidesPerView: 1
        }
      },     
      loop: true
    }; 
  }

  next() {         
    var charid = this.slideData[this.usefulSwiper.swiper.realIndex].id;
     this.router.navigate(["/choose-tools",charid]);
  }


}



