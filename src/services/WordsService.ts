export class WordsService {
  private num: number;

  constructor() {
    this.num = 11;
  }

  public getNum = (): number => this.num;
}
