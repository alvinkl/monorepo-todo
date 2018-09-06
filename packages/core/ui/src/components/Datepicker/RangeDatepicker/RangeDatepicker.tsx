import * as React from 'react';
import { DayModifiers, default as DayPicker } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import '../datepicker.css';

import CustomNavbar from './CustomNavbar';

interface IRangeDatepicker {
  constraintDate?: {
    firstConstraint: Date;
    secondConstraint?: Date;
  };
  /**
   * predefined first selected date
   */
  startFrom?: Date;
  /**
   * predefined second selected date
   */
  initialDate?: Date;
  onSelect?: (date: Date) => void;
}

export class RangeDatepicker extends React.Component<IRangeDatepicker, any> {
  constructor(props: any) {
    super(props);
    this.state = this.getInitialState();
    this.state = {
      from: props.startFrom ? props.startFrom : null,
      to: null,
      enteredTo: null,
      maxDate: props.constraintDate
        ? props.constraintDate.secondConstraint
          ? props.constraintDate.secondConstraint
          : null
        : null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
    };
  }

  isSelectingFirstDay(from: any, to: any, day: any) {
    const isBeforeFirstDay = from && day < from;
    const isRangeSelected = from && to;

    return !from || isBeforeFirstDay || isRangeSelected;
  }

  handleChange(
    day: Date,
    modifiers: DayModifiers
    // e: React.MouseEvent<HTMLDivElement>
  ) {
    if (modifiers.disabled) {
      return;
    }

    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
      const { onSelect } = this.props;
      if (onSelect) {
        onSelect(day);
      }
    }
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleDayMouseEnter(day: Date) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }

  render() {
    const minDate = this.state.minDate ? this.state.minDate : new Date();
    const maxDate = this.state.maxDate ? this.state.maxDate : new Date();

    const minMonth = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate()
    );
    const maxMonth = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate()
    );

    const { from, enteredTo } = this.state;
    const modifiers = {
      start: from,
      end: this.props.initialDate
        ? new Date(this.props.initialDate)
        : enteredTo,
    };
    const disabledDays = { before: this.state.from, after: this.state.maxDate };
    const selectedDays = [
      from,
      {
        from,
        to: this.props.initialDate
          ? new Date(this.props.initialDate)
          : enteredTo,
      },
    ];

    return (
      <div className="rangeDatepicker" style={{ minWidth: 'max-content' }}>
        <DayPicker
          className="rangeDatepicker__datepicker"
          numberOfMonths={2}
          fromMonth={minMonth}
          toMonth={maxMonth}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleChange}
          onDayMouseEnter={this.handleDayMouseEnter}
          navbarElement={<CustomNavbar />}
        />
      </div>
    );
  }
}

export default RangeDatepicker;
