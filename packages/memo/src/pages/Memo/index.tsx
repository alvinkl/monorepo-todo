import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { MemoStore } from './store/MemoStore';

import ComponentA from './components/ComponentA';

@observer
export class Memo extends React.Component {
  @observable
  store = new MemoStore('Hello');

  onSubmit = (text: string) => {
    this.store.changeText(text);
  };

  render() {
    const {
      store: { text },
    } = this;

    return (
      <div>
        <ComponentA text={text} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Memo;
