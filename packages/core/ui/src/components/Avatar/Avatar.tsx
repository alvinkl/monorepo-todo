import * as React from 'react';
import { styleHelper } from '../../utils/styleHelper';

interface IAvatar {
  name: string[];
  petite: boolean;
  status?: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  style?: React.CSSProperties;
}

export class Avatar extends React.Component<IAvatar, {}> {
  static defaultProps: Partial<IAvatar> = {
    name: [''],
    petite: false,
  };

  getInitial(name: string): string {
    const temp = name.split(' ');

    if (temp.length > 1) {
      return temp[0].charAt(0) + temp[1].charAt(0);
    }
    return temp[0].charAt(0);
  }

  renderSmallAvatar(name: string, i: number) {
    return (
      <div
        key={i}
        className={
          i === 0 ? 'avatar--petite' : 'avatar--petite avatar__listOfAvatars'
        }
      >
        <p>{this.getInitial(name)}</p>
      </div>
    );
  }

  renderStatus(status: string) {
    let color;
    if (status === 'INACTIVE') {
      color = 'rgba(189, 195, 199, 0.7)';
    } else if (status === 'ACTIVE') {
      color = '#93c92c';
    } else {
      color = '#f0a253';
    }
    return color;
  }

  render() {
    if (this.props.petite) {
      const len = this.props.name.length;
      let offset = 0;

      if (len > 4) {
        offset = len - 4;
      }

      if (offset > 0) {
        const fourInitialNames = this.props.name.slice(0, 4);
        return (
          <div style={{ display: 'inline-block', minWidth: '176px' }}>
            {fourInitialNames.map((name, i) => {
              return this.renderSmallAvatar(name, i);
            })}
            <span className="avatar__more">+{offset} more </span>
          </div>
        );
      }

      return this.props.name.map((name, i) => this.renderSmallAvatar(name, i));
    }

    return (
      <div className={'avatar--big'} style={this.props.style}>
        {this.props.status && (
          <div
            className={'avatar__status'}
            style={{ backgroundColor: this.renderStatus(this.props.status) }}
          />
        )}
        <p>{this.getInitial(this.props.name[0])}</p>
      </div>
    );
  }
}

const styles = [require('./avatar.css?raw')];

export default styleHelper(Avatar, styles);
