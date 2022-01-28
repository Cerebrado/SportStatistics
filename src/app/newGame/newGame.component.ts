import { Component, EventEmitter, VERSION } from '@angular/core';
import { Game } from '../Game';
import { Player } from '../Player';

@Component({
  selector: 'new-game',
  templateUrl: './newGame.component.html',
})
export class newGameComponent {
  public SaveChanges: EventEmitter<Game> = new EventEmitter<Game>();

  public playersList: Player[];

  ngOnIinit() {
    this.playersList = [
      new Player('Edu', 'Eduardo'),
      new Player('Diego', 'Diego P'),
      new Player('Javi', 'Javi N'),
      new Player('Juan', 'Juan N'),
      new Player('KKK', 'Eduardo'),
      new Player('CCC', 'Diego P'),
      new Player('LLL', 'Javi N'),
      new Player('XXX', 'Juan N'),
    ];
  }
}
