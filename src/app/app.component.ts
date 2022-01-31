import { Component, Input, Output, VERSION } from '@angular/core';
import { Game } from './Game';
import { PlayEvent } from './PlayEvent';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  game: Game = new Game();


  public statsLoV: PlayEvent[] = [
    new PlayEvent('Ace', 'Ace', 1),
    new PlayEvent('Pass', 'Passing shot', 1),
    new PlayEvent('Sma', 'Smash', 1),
    new PlayEvent('Drop', 'Drop', 1),
    new PlayEvent('DblF', 'Doble Falta', -1),
    new PlayEvent('ENF', 'Error no forzado', -1),
    new PlayEvent('EF', 'Error forzado', -1),
    new PlayEvent('Vend', 'Vendida', 0),
    new PlayEvent('Salv', 'Salvada', 0),
  ];

  menuOption: number = 0;
  public startNewGame() {
    this.menuOption = 1;
  }
  public cancel() {
    this.menuOption = 2;
  }
  public statistics() {
    this.menuOption = 3;
  }
  public help() {
    this.menuOption = 4;
  }
  public settings() {
    this.menuOption = 5;
  }

  public StatEntry: string = '';

  public newGameCreated($event) {
    this.game = $event;
    this.menuOption = 0;
  }
}
