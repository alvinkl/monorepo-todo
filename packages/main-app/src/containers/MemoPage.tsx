import * as React from 'react';

import { Memo as M } from '@alvin/datasource';

import { Memo } from '@alvin/memo';

export class MemoPage extends React.Component {
  store = new M.MemoStore('Memo Text');

  render() {
    return <Memo store={this.store} />;
  }
}

export default MemoPage;
