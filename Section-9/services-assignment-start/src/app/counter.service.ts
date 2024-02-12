export class CounterService {
  private counter: number = 0;

  increaseCounter(): number {
    return ++this.counter;
  }
}
