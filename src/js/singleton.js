let instance = null;
export default class Singleton {
  constructor() {
    this.data = null;
    this.url = 'http://localhost:1234';

    if (!instance) {
      instance = this;
    }
    return instance;
  }

  async loadData() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.data = data;
  }

  get getData() {
    return this.data;
  }
}
