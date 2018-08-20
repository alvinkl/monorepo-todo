import * as React from "react";

import { MemoStore } from "@alvin/datasource";

import Memo from "../src/containers/MemoPage";

export default class MemoPage extends React.Component {
  store = new MemoStore("Memo Text");

  render() {
    return <Memo store={this.store} />;
  }
}
