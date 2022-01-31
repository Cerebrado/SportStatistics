import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';
import { Game } from '../Game';
import { Player } from '../Player';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
})
export class newGameComponent {
  @Output() onNewGameCreated: EventEmitter<Game> = new EventEmitter<Game>();

  _playersList: Player[];
  _selectedPlayers: Player[];
  constructor() {
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
  }

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
    for (let j = 0; j < 4; j++) {
      if (
        this._selectedPlayers[j] !== null &&
        this._selectedPlayers[j].Nick == this._playersList[i].Nick &&
        this._selectedPlayers[j].Name == this._playersList[i].Name
      ) {
        alert(this._playersList[i].Nick + ' is already playing');
        return;
      }
      if (this._selectedPlayers[j] === null) {
        this._selectedPlayers[j] = this._playersList[i];
        return;
      }
    }
  }
  RemovePlayer(i: number) {
    this._selectedPlayers[i] = null;
  }

  ConfirmNewGame() {
    for(let i=0; i< 4; i++)
    {
      if (this._selectedPlayers[i] === null) {
        alert('There must be 4 people to play. Get some friends');
        return;
      }
    }

    var game = new Game();
    game.Teams[0].Players.push(
      new Player(this._selectedPlayers[0].Nick, this._selectedPlayers[0].Name)
    );
    game.Teams[0].Players.push(
      new Player(this._selectedPlayers[1].Nick, this._selectedPlayers[1].Name)
    );
    game.Teams[1].Players.push(
      new Player(this._selectedPlayers[2].Nick, this._selectedPlayers[2].Name)
    );
    game.Teams[1].Players.push(
      new Player(this._selectedPlayers[3].Nick, this._selectedPlayers[3].Name)
    );
    this.onNewGameCreated.emit(game);
  }
}
