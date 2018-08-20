import * as React from 'react';

import { MemoStore } from '@alvin/datasource';

import { Memo } from '@alvin/memo';

export class MemoPage extends React.Component {
  store = new MemoStore('Memo Text');

  render() {
    return <Memo store={this.store} />;
  }
}

export default MemoPage;
