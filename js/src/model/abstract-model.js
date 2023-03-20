import {Observer} from '../utils/observer.js';

export class AbstractModel {
  constructor() {
    if (new.target === AbstractModel) {
      throw new Error(`Нельзя создать экземпляр абстрактного класса.`);
    }

    this.observer = new Observer();
  }

  addSubscriber(subscriber) {
    this.observer.subscribe(subscriber);
  }
}
