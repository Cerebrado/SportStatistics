import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';
import { Game } from '../Game';
import { Player } from '../Player';
import {PaddleStats } from '../PaddleStats';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
})
export class NewGameComponent {
  @Output() onNewGameCreated: EventEmitter<Game> = new EventEmitter<Game>();

  
  _selectedPlayers: Player[];
  paddleStats: PaddleStats;

  ngOnInit() {
    this.paddleStats = JSON.parse( localStorage.getItem('3TStats'));
    

    //TODO: Get list from repository
    this.paddleStats.playersList = [
      new Player('Edu', 'Eduardo'),
      new Player('Diego', 'Diego P'),
      new Player('Javi', 'Javi N'),
      new Player('Juan', 'Juan N'),
      new Player('KKK', 'Eduardo'),
      new Player('CCC', 'Diego P'),
      new Player('LLL', 'Javi N'),
      new Player('XXX', 'Juan N'),
    ];


    this._selectedPlayers = [
      this.paddleStats.currentGame.Teams[0].Players[0],
      this.paddleStats.currentGame.Teams[0].Players[1],
      this.paddleStats.currentGame.Teams[1].Players[0],
      this.paddleStats.currentGame.Teams[1].Players[1]
    ];
  }

  AddPlayer(i: number) {
    for (let j = 0; j < 4; j++) {
      if (
        this._selectedPlayers[j] !== null &&
        this._selectedPlayers[j].Nick == this.paddleStats.playersList[i].Nick &&
        this._selectedPlayers[j].Name == this.paddleStats.playersList[i].Name
      ) {
        alert(this.paddleStats.playersList[i].Nick + ' is already playing');
        return;
      }
      if (this._selectedPlayers[j] === null) {
        this._selectedPlayers[j] = this.paddleStats.playersList[i];
        return;
      }
    }
  }
  RemovePlayer(i: number) {
    this._selectedPlayers[i] = null;
  }

  ConfirmNewGame() {
    for (let i = 0; i < 4; i++) {
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
