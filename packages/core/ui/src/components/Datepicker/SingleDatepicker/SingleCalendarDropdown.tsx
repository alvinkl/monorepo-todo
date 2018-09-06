import * as React from 'react';

interface ISingleCalendarDropdown {
  contents: Array<[number, string]>;
  onChange: any;
  name: string;
  style: React.CSSProperties;
}

export class SingleCalendarDropdown extends React.Component<
  ISingleCalendarDropdown,
  any
> {
  constructor(props: ISingleCalendarDropdown) {
    super(props);
    this.state = {
      isOpened: false,
      selected: props.contents[0],
    };
    this.handleClickDropdown = this.handleClickDropdown.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
  }

  handleClickDropdown() {
    this.setState({
      isOpened: true,
    });
  }

  handleClickOption(e: any, content: [number, string]) {
    this.setState({
      isOpened: false,
      selected: content,
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div style={this.props.style}>
        <div
          className="singleDatepicker__select__header"
          onClick={this.handleClickDropdown}
        >
          <div className="singleDatepicker__select__header__text">
            {this.state.selected[1]}
          </div>
          <img
            className="singleDatepicker__select__header__icon"
            src={
              'https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/calendar_dropdown.svg'
            }
          />
          <div style={{ clear: 'both' }} />
        </div>
        {this.state.isOpened && (
          <ul className="singleDatepicker__select__body">
            {this.props.contents.map((content, i) => {
              return (
                <div key={content[0]}>
                  {i !== 0 && (
                    <div
                      style={{
                        margin: '0px 10px',
                        borderTop: 'solid 1px rgb(151, 151, 151, 0.17)',
                      }}
                    />
                  )}
                  <li
                    className="singleDatepicker__select__body__content"
                    value={content[0]}
                    onClick={this.handleClickOption.bind(this, content)}
                  >
                    {content[1]}
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default SingleCalendarDropdown;
