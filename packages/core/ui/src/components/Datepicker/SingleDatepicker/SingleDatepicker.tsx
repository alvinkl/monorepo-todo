import * as React from 'react';
import { DayModifiers, default as DayPicker } from 'react-day-picker';

import SelectionMenu from './SelectionMenu';

// import 'reareactDayPickercker/lib/style.css';
import '../datepicker.css';

interface ISingleDatepicker {
  constraintDate: {
    /**
     * put minimum date here
     */
    firstConstraint: Date;
    /**
     * put maximum date here
     */
    secondConstraint: Date;
  };
  /**
   * pre-defined selected day
   */
  initialDate?: Date;
  /**
   * if set as true, then date shown should be current to past, not current to future
   */
  reversed?: boolean;
  onSelect?: (date: Date) => void;
}

export class SingleDatepicker extends React.Component<ISingleDatepicker, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      minDate: props.constraintDate.firstConstraint,
      maxDate: props.constraintDate.secondConstraint,
      focusedDate: props.initialDate,
      month: !props.reversed
        ? props.constraintDate.firstConstraint
        : props.constraintDate.secondConstraint,
    };
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(
    day: Date,
    modifiers: DayModifiers
    // e: React.MouseEvent<HTMLDivElement>
  ) {
    if (modifiers.disabled) {
      return;
    }

    this.setState({
      focusedDate: day,
    });

    const { onSelect } = this.props;
    if (onSelect) {
      onSelect(day);
    }
  }

  handleYearMonthChange(month: any) {
    this.setState({ month });
  }

  render() {
    const date = new Date();
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

    let selectedDate =
      typeof date !== 'undefined' && date != null ? date : null;

    if (typeof maxDate !== 'undefined' && maxDate != null) {
      selectedDate =
        selectedDate == null
          ? new Date(
              maxDate.getFullYear(),
              maxDate.getMonth(),
              maxDate.getDate()
            )
          : selectedDate;
    }

    const captionElement = (
      <SelectionMenu
        selectedDay={this.state.focusedDate}
        minDate={minMonth}
        maxDate={maxMonth}
        onChange={this.handleYearMonthChange}
        reversed={this.props.reversed}
      />
    );

    return (
      <div className="singleDatepicker">
        <DayPicker
          month={this.state.month}
          fromMonth={minMonth}
          toMonth={maxMonth}
          captionElement={captionElement}
          selectedDays={this.state.focusedDate}
          onDayClick={this.handleDayClick}
          disabledDays={{ before: minDate, after: maxDate }}
        />
      </div>
    );
  }
}

export default SingleDatepicker;
