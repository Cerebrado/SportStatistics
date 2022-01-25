import { Component, VERSION } from '@angular/core';
import { Game } from './Game';
import { Player } from './Player';
import { Stat } from './Stat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public game: Game = new Game();

  public playersLoV: Player[] = [
    new Player('Edu', 'Eduardo', 'green'),
    new Player('Diego', 'Diego P', 'green'),
    new Player('Javi', 'Javi N', 'blue'),
    new Player('Juan', 'Juan N', 'blue'),
  ];
  public statsLoV: Stat[] = [
    new Stat('ENF', 'Error no forzado', -1),
    new Stat('EF', 'Error forzado', -1),
    new Stat('DblF', 'Doble Falta', -1),
    new Stat('Vend', 'Vendida', 0),
    new Stat('Ace', 'Ace', 1),
    new Stat('Pass', 'Passing shot', 1),
    new Stat('Col', 'Colocada', 1),
  ];
}
