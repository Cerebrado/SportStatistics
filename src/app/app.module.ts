import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { newGameComponent } from './new-game/new-game.component';
import { gameComponent } from './game/game.component';

@NgModule({
  imports: [BrowserModule
    , FormsModule
    , CommonModule
    ],
  declarations: [AppComponent, newGameComponent, gameComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
