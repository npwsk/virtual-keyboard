class Observable {
  #observers = [];

  state;

  addObserver(observer) {
    if (this.#observers.includes(observer)) {
      return;
    }
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.#observers.indexOf(observer);
    if (index < 0) {
      return;
    }
    this.#observers.splice(index, 1);
  }

  notify(state) {
    for (const observer of this.#observers) {
      observer.update(state);
    }
  }
}

export default Observable;
