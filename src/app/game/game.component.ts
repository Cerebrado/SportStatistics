import { Component, Input, VERSION } from '@angular/core';
import { Game } from '../Game';
import { Player } from '../Player';
import { PlayEvent } from '../PlayEvent';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
})
export class gameComponent {
  @Input() game: Game;

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

  public newGame() {}
  public cancel() {}
  public statistics() {}
  public help() {}
  public settings() {}

  public StatEntry: string = '';
}
