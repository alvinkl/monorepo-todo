import * as React from 'react';
import { observer } from 'mobx-react';

import { IComponentStoreA } from './interfaces/IComponentStoreA';

import ComponentA from './components/ComponentA';

interface IComponentProps {
  store: IComponentStoreA;
}

@observer
export class Memo extends React.Component<IComponentProps, {}> {
  onSubmit = (text: string) => {
    const {
      store: { changeText },
    } = this.props;

    changeText(text);
  };

  render() {
    const {
      store: { text },
    } = this.props;

    return (
      <div>
        <ComponentA text={text} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Memo;
