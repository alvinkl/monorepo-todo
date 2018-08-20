import * as React from 'react';

import { MemoStore } from '../../../datasource/lib';

import { Memo } from '../../../Memo/lib';

export class MemoPage extends React.Component {
  store = new MemoStore('Memo Text');

  render() {
    return <Memo store={this.store} />;
  }
}

export default MemoPage;
