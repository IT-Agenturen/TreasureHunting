import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ChooseToolsComponent } from './choose-tools/choose-tools.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"characters", component:CharactersComponent},
  {path:"choose-tools/:id", component:ChooseToolsComponent},
  {path:"congratulations", component: CongratulationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
