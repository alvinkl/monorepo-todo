import { ILocalStorage } from '../interfaces';

export class LocalStorageService implements ILocalStorage {
  private key: string;

  constructor(key) {
    this.key = key;
  }

  addItem = (item: any, key?: any) => {
    localStorage.setItem(
      key || this.key,
      typeof item !== 'string' ? JSON.stringify(item) : item
    );
  };

  getItems = (key?: string): any => {
    const storageValue: any = localStorage.getItem(key || this.key) || null;
    const obj: any = storageValue ? JSON.parse(storageValue) : null;

    return obj;
  };
}

export default LocalStorageService;
