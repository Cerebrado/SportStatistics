import { Game } from './Game';
import { Player } from './Player';
import { PlayEvent } from './PlayEvent';

export class PaddleStats {
  history: Game[] = new Array<Game>();
  currentGame: Game = new Game();
  playersList: Player[] = new Array<Player>();
  playEventsList: PlayEvent[] = new Array<PlayEvent>();
}
