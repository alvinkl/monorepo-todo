import * as React from 'react';
import { styleHelper } from '../../utils/styleHelper';

interface IItemList {
  /**  onClick function, receive index as param */
  onClick: any;
  /** list source [{title:'', description:''}] or source [{title: ''}] */
  source: object[];
}

export class ItemList extends React.Component<IItemList, any> {
  constructor(props: IItemList) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(idx: number) {
    this.props.onClick(idx);
  }

  renderList() {
    const arr = this.props.source;

    return arr.map((e: any, i: number) => {
      return (
        <div
          className="itemList--row"
          key={i}
          onClick={this.onItemClick.bind(this, i)}
        >
          <div className="itemList--row-title">{e.title}</div>
          {e.description && (
            <div className="itemList--row-description ">{e.description}</div>
          )}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const styles = [require('./itemList.css?raw')];

export default styleHelper(ItemList, styles);
