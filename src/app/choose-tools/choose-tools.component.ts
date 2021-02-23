import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-choose-tools',
  templateUrl: './choose-tools.component.html',
  styleUrls: ['./choose-tools.component.css']
})
export class ChooseToolsComponent implements OnInit {

  title = "Choose your tools";
  characterimage = "../assets/images/character/Characters/Lily.png";  
  id;
  characters;
  SelectedCharacter;
  gold_coins;
  Trinket = 0;
  Weapon = 0;
  Armor = 0;

  trinket_tools = {
    gold_coins:20,
    luck : 10,
    hit_points:0
  }

  weapon_tools = {
    gold_coins:60,
    luck : 10,
    hit_points:15
  }

  armor_tools = {
    gold_coins:40,
    luck : 5,
    hit_points:10
  }

  constructor(private _Activatedroute:ActivatedRoute
    ,private router:Router) {     
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.characters = JSON.parse(localStorage.getItem(environment.characters));    
    this.SelectedCharacter = this.characters.find(t=>t.id == this.id);
    this.gold_coins = parseInt(localStorage.getItem(environment.gold_coins));
  }

  OnCharacter(){
    this.router.navigate(['/characters']);
  }

  OnRemoveTool(id){
    if(id == "1"){
      if(0 < this.Trinket){
        this.gold_coins = this.gold_coins + this.trinket_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck - this.trinket_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points - this.trinket_tools.hit_points;
        this.Trinket = this.Trinket - 1;
      }else{
        Swal.fire("Invalid Action");
      }
    }else if(id == "2"){
      if(0 < this.Weapon){
        this.gold_coins = this.gold_coins + this.weapon_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck - this.weapon_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points - this.weapon_tools.hit_points;
        this.Weapon = this.Weapon -  1;
      }else{
        Swal.fire("Invalid Action");
      }
    }else if(id == "3"){
      if(0 < this.Armor){
        this.gold_coins = this.gold_coins + this.armor_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck - this.armor_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points - this.armor_tools.hit_points;
        this.Armor = this.Armor -  1;
      }else{
        Swal.fire("Invalid Action");
      }
    }else{
      Swal.fire("Id not found");
    }
  }

  OnAddTool(id){
    if(id == "1"){
      if(this.trinket_tools.gold_coins <= this.gold_coins){
        this.gold_coins = this.gold_coins - this.trinket_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck + this.trinket_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points + this.trinket_tools.hit_points;
        this.Trinket = this.Trinket +  1;
      }else{
        Swal.fire("Sorry! You don't have any enough coins");
      }
    }else if(id == "2"){
      if(this.weapon_tools.gold_coins <= this.gold_coins){
        this.gold_coins = this.gold_coins - this.weapon_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck + this.weapon_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points + this.weapon_tools.hit_points;
        this.Weapon = this.Weapon +  1;
      }else{
        Swal.fire("Sorry! You don't have any enough coins");
      }
    }else if(id == "3"){
      if(this.armor_tools.gold_coins <= this.gold_coins){
        this.gold_coins = this.gold_coins - this.armor_tools.gold_coins;
        this.SelectedCharacter.luck = this.SelectedCharacter.luck + this.armor_tools.luck;
        this.SelectedCharacter.hit_points = this.SelectedCharacter.hit_points + this.armor_tools.hit_points;
        this.Armor = this.Armor + 1;
      }else{
        Swal.fire("Sorry! You don't have any enough coins");
      }
    }else{
      Swal.fire("Id not found");
    }
  }

  OnConfirm(){
    if(this.Trinket == 0 && this.Weapon == 0 && this.Armor == 0){
      Swal.fire("Please select any equipment");
      return;
    }
    localStorage.setItem(environment.selected_character, JSON.stringify(this.SelectedCharacter));
    localStorage.setItem(environment.gold_coins, this.gold_coins);
    this.router.navigate(['/congratulations']);
    
  }
}
