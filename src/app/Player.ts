import { PlayEvent } from "./PlayEvent";

export class Player {
  public Nick: string;
  public Name: string;
  public ServiceOrder: number;
  public Stats: PlayEvent[];

  constructor(
    nick: string,
    name: string,
  ) {
    this.Nick = nick;
    this.Name = name;
    this.ServiceOrder = -1;
    this.Stats = new Array<PlayEvent>();
  }
}
