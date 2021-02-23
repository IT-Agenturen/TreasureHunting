import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  freecoins;
  gold_coins = 0;
  constructor(private router:Router
    ,private location: Location) { }

  ngOnInit(): void {
    this.freecoins = Math.floor(Math.random() * 260) + 25;
    
    this.gold_coins = parseInt(localStorage.getItem(environment.gold_coins));

    this.gold_coins = this.gold_coins + this.freecoins;

    localStorage.setItem(environment.gold_coins, this.gold_coins.toString());
    
  }

  Onback(){
    this.location.back();
  }

}
