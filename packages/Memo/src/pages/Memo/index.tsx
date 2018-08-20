import * as React from "react";
import { observer } from "mobx-react";

import { IComponentStoreA } from "./interfaces/IComponentStoreA";

import ComponentA from "./components/ComponentA";

interface IComponentProps {
  store?: IComponentStoreA;
}

@observer
export class Memo extends React.Component<IComponentProps, {}> {
  render() {
    return (
      <div>
        <ComponentA text={this.props.store.text} />
      </div>
    );
  }
}

export default Memo;
