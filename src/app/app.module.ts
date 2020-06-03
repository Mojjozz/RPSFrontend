import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { dataService } from './dataService';
import { JoinGameComponent } from './join-game/join-game.component';
import { MakeMoveComponent } from './make-move/make-move.component';
import { CheckGameComponent } from './check-game/check-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateGameComponent,
    JoinGameComponent,
    MakeMoveComponent,
    CheckGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
