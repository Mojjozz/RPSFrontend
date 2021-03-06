import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { JoinGameComponent } from './join-game/join-game.component';
import { MakeMoveComponent } from './make-move/make-move.component';
import { CheckGameComponent } from './check-game/check-game.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createGame', component: CreateGameComponent},
  {path: 'joingame', component: JoinGameComponent},
  {path: 'makemove', component: MakeMoveComponent},
  {path: 'checkgame', component: CheckGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
