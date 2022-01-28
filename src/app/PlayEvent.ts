export class PlayEvent {
  public Short: string;
  public Long: string;
  public Value: number;

  constructor(short: string, long: string, value: number) {
    this.Short = short;
    this.Long = long;
    this.Value = value;
  }
}
