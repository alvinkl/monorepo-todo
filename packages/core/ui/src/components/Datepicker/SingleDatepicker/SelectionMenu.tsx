import * as React from 'react';
import SingleCalendarDropdown from './SingleCalendarDropdown';

export class SelectionMenu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleSelectionMenuChange = this.handleSelectionMenuChange.bind(this);
    this.handleSelectionMonthChange = this.handleSelectionMonthChange.bind(
      this
    );
    this.handleSelectionYearChange = this.handleSelectionYearChange.bind(this);
    this.state = {
      minDate: props.minDate,
      maxDate: props.maxDate,
      month: props.reversed
        ? props.maxDate.getMonth()
        : props.minDate.getMonth(),
      year: props.reversed
        ? props.maxDate.getFullYear()
        : props.minDate.getFullYear(),
      selectedDay: props.selectedDay,
    };
  }

  handleSelectionMonthChange(e: number) {
    this.setState(
      {
        month: e,
      },
      () => {
        this.handleSelectionMenuChange();
      }
    );
  }

  handleSelectionYearChange(e: number) {
    this.setState(
      {
        year: e,
      },
      () => {
        this.handleSelectionMenuChange();
      }
    );
  }

  handleSelectionMenuChange() {
    const { year, month } = this.state;
    this.props.onChange(new Date(year, month));
  }

  render() {
    const months: Array<[number, string]> = [
      [0, 'January'],
      [1, 'February'],
      [2, 'March'],
      [3, 'April'],
      [4, 'May'],
      [5, 'June'],
      [6, 'July'],
      [7, 'August'],
      [8, 'September'],
      [9, 'October'],
      [10, 'November'],
      [11, 'December'],
    ];

    const years: any = [];
    const renderedMonths: any = [];
    const { minDate, maxDate } = this.state;
    const monthInterval = 11; // a year has 12 months; to show loop of month names without redundancy, set interval to 11

    if (minDate && maxDate) {
      // for (var i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
      //   const content: [number, string] = [ i, i + '' ]
      //   years.push(content)
      // }
      // for (var j = minDate.getMonth(); j <= minDate.getMonth() + monthInterval; j++) {
      //   renderedMonths.push(months[j % 12])
      // }
      if (this.props.reversed) {
        for (let i = maxDate.getFullYear(); i >= minDate.getFullYear(); i--) {
          const content: [number, string] = [i, `${i}`];
          years.push(content);
        }
        for (
          let j = maxDate.getMonth();
          j <= maxDate.getMonth() + monthInterval;
          j++
        ) {
          renderedMonths.push(months[j % 12]);
        }
      } else {
        for (let i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
          const content: [number, string] = [i, `${i}`];
          years.push(content);
        }
        for (
          let j = minDate.getMonth();
          j <= minDate.getMonth() + monthInterval;
          j++
        ) {
          renderedMonths.push(months[j % 12]);
        }
      }
    }

    return (
      <div style={{ display: 'table-caption', marginBottom: '12px' }}>
        <SingleCalendarDropdown
          name="month"
          contents={renderedMonths}
          onChange={this.handleSelectionMonthChange}
          style={{ display: 'inline-block' }}
        />
        <SingleCalendarDropdown
          name="year"
          contents={years}
          onChange={this.handleSelectionYearChange}
          style={{ display: 'inline-block', marginLeft: '16px' }}
        />
      </div>
    );
  }
}

export default SelectionMenu;
