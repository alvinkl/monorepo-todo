import * as React from 'react';

const wrapper: React.CSSProperties = {
  padding: '18px 24px',
  position: 'absolute',
};

const floatRight: React.CSSProperties = { float: 'right' };
const floatLeft: React.CSSProperties = { float: 'left' };
const clear: React.CSSProperties = { clear: 'both' };

export class CustomNavbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { onPreviousClick, onNextClick } = this.props;

    return (
      <div className="rangeDatepicker__navbarContainer" style={wrapper}>
        <span style={floatLeft} onClick={onPreviousClick()}>
          <img
            className="rangeDatepicker__navbarContainer__icon"
            src="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/calendar_prev.svg"
          />
        </span>
        <span style={floatRight} onClick={onNextClick()}>
          <img
            className="rangeDatepicker__navbarContainer__icon"
            src="https://s3-ap-southeast-1.amazonaws.com/airy-assets/airy-thanos/calendar_next.svg"
          />
        </span>
        <div style={clear} />
      </div>
    );
  }
}

export default CustomNavbar;
