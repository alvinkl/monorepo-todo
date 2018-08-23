import { observable, configure, action } from 'mobx';

configure({
  enforceActions: true,
});

export class MemoStore {
  @observable
  text: string = '';

  constructor(text: string) {
    this.text = text;
  }

  @action
  changeText = (text: string) => {
    this.text = text;
  };
}

export default MemoStore;
