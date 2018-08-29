import * as React from 'react';

import { storiesOf } from '@storybook/react';
import withInfo from '../../utils/withInfo';
import { Button } from './Button';

(storiesOf('Components/Button', module) as any).addWithJSX(
  'Sample Button',
  withInfo(`
  ### Notes
  This is a button

  ### Usage
  ~~~js
  <MyButton
    text="Hello World!"
  />
  ~~~`)(() => (
    <div>
      <Button text="Hello World!" disabled={true} />

      <Button text="Hello World!" disabled={false} />
    </div>
  ))
);
