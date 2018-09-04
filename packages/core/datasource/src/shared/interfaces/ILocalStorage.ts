export interface ILocalStorage {
  addItem: (item: any, key?: any) => void;
  getItems: (key?: string) => void;
}

export default ILocalStorage;
