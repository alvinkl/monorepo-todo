import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import RangeDatepicker from './RangeDatepicker/RangeDatepicker';
import SingleDatepicker from './SingleDatepicker/SingleDatepicker';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const constraintDate = {
  firstConstraint: today,
  secondConstraint: new Date(year + 1, month, day),
};

const constraintDateReversed = {
  firstConstraint: new Date(year - 150, month + 1, day),
  secondConstraint: today,
};
(storiesOf('Datepicker', module) as any).addWithJSX(
  'Datepicker',
  wInfo(`
  ### Notes
  There are two types of datepicker provided (Single and Range).

  ### Single Datepicker Example
  ~~~js
  <SingleDatepicker
    constraintDate={constraintDate}
    initialDate={new Date(year, 11, 31)}
  />

  ~~~

  ### Single Datepicker Reversed Example
  ~~~js
  <SingleDatepicker constraintDate={constraintDate} reversed={true} />

  ~~~

  ### Range Datepicker Example
  ~~~js
  <RangeDatepicker constraintDate={constraintDate} />
  ~~~
  `)(() => (
    <div style={{ padding: '20px' }}>
      <h3>
        Single Datepicker which active dates are between today and next year
      </h3>
      <SingleDatepicker
        constraintDate={constraintDate}
        initialDate={new Date(year, 11, 31)}
      />
      <br />
      <h3>
        Single Datepicker Reversed - can be used as datepicker for birthdate
        (active dates used as the constraint are days between today and 150
        years and 11 months ago
      </h3>
      <SingleDatepicker
        constraintDate={constraintDateReversed}
        reversed={true}
      />
      <br />
      <h3>
        Range Datepicker which active dates are between today and next year
      </h3>
      <RangeDatepicker constraintDate={constraintDate} />
    </div>
  ))
);
