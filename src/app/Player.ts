export class Player {
  public Nick: string;
  public Name: string;
  public Color: string;
  public ServiceOrder: number;

  constructor(
    nick: string,
    name: string,
    color: string,
    serviceOrder: number = 0
  ) {
    this.Nick = nick;
    this.Name = name;
    this.Color = color;
    this.ServiceOrder = serviceOrder;
  }
}
