import { Component, EventEmitter, VERSION } from '@angular/core';
import { Game } from '../Game';
import { Player } from '../Player';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
})
export class newGameComponent {
  public SaveChanges: EventEmitter<Game> = new EventEmitter<Game>();

  _playersList: Player[];
  _selectedPlayers: Player[];
  _game: Game;
  // constructor(){
  //   this._game=new Game();
  // }

  ngOnInit() {
    //TODO: Get list from repository
    this._playersList = [
      new Player('Edu', 'Eduardo'),
      new Player('Diego', 'Diego P'),
      new Player('Javi', 'Javi N'),
      new Player('Juan', 'Juan N'),
      new Player('KKK', 'Eduardo'),
      new Player('CCC', 'Diego P'),
      new Player('LLL', 'Javi N'),
      new Player('XXX', 'Juan N'),
    ];

    this._selectedPlayers = [null, null, null, null];
  }

  AddPlayer(i: number) {
    for (let j = 0; j < 4; i++) {
      if (!this._selectedPlayers[j])
        this._selectedPlayers[j] = this._playersList[i];
    }
  }
  RemovePlayer(i: number) {
    this._selectedPlayers[i] = null;
  }
}
