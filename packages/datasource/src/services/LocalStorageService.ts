export class LocalStorageService {
  private key: string;

  constructor(key) {
    this.key = key;
  }

  addItem = (item: any, key?: string) => {
    localStorage.setItem(key || this.key, JSON.stringify(item));
  };

  getItems = (key?: string): any[] => {
    const storageValue: string = localStorage.getItem(key || this.key) || '';
    const obj: string = JSON.parse(storageValue) || '';

    return JSON.parse(obj);
  };
}

export default LocalStorageService;
