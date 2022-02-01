import { Component, OnInit } from '@angular/core';
import { PaddleStats } from '../PaddleStats';
import { Player } from '../Player';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  paddleStats: PaddleStats;
  constructor() {}

  ngOnInit() {
    this.paddleStats = JSON.parse(localStorage.getItem('3TStats'));
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
  }
}
