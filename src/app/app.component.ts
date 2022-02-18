import { Component, Input, Output, VERSION } from '@angular/core';
import { PaddleStats } from './PaddleStats';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paddleStats: PaddleStats;

  ngOnInit() {
    var storageData = localStorage.getItem('3TStats');
    if (storageData === null) {
      this.paddleStats = new PaddleStats();
      localStorage.setItem('3TStats', JSON.stringify(this.paddleStats));
    } else {
      this.paddleStats = JSON.parse(storageData);
    }
  }

  menuOption: number = 0;

  back() {
    this.menuOption = 0;
  }

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
    this.paddleStats.history.push(this.paddleStats.currentGame);
    this.paddleStats.currentGame = $event;
    this.menuOption = 0;
  }

  public btnCancelClick($event){
    this.menuOption = 0;
  }


}
