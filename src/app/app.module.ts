import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    NewGameComponent,
    StatisticsComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
