import { Game } from './Game';

export class PaddleStats {
  games: Game[];

  constructor() {
    this.games = [new Game()];
  }
}
