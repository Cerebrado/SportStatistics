import { Component, Input, Output, VERSION } from '@angular/core';
import { Model } from './Model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Model: Model;

  ngOnInit() {
    this.Model = this.LoadModel();
  }

  menuOption: number = 0;

  public startNewGame() {
    this.menuOption = 1;
  }
  public statistics() {
    this.menuOption = 2;
  }
  public settings() {
    this.menuOption = 3;
  }

  public StatEntry: string = '';

  SaveModel() {
    localStorage.setItem('3TStats', JSON.stringify(this.Model));
  }

  LoadModel(): Model {
    let model: Model;
    var storageData = localStorage.getItem('3TStats');
    if (storageData === null) {
      model = new Model();
      this.SaveModel();
    } else {
      model = JSON.parse(storageData);
    }
    return model;
  }

  public btnSettingsConfirmClick($event) {
    this.Model.Settings = $event;
    this.SaveModel();
    this.menuOption = 0;
  }

  public newGameCreated($event) {
    this.Model.History.push(this.Model.CurrentMatch);
    this.Model.CurrentMatch = $event;
    this.SaveModel();
    this.menuOption = 0;
  }

  public btnCancelClick($event) {
    this.menuOption = 0;
  }
}
