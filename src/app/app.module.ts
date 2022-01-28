import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { newGameComponent } from './newGame/newGame.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, newGameComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
