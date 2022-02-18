import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { Model } from './Model';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [AppComponent, Model],
  bootstrap: [AppComponent],
})
export class AppModule {}
