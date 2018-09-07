/* tslint:disable:jsx-no-lambda no-console */
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import Checkbox from './Checkbox';
(storiesOf('Checkbox', module) as any).addWithJSX(
  'Checkbox',
  wInfo(`
  ### Usage
  ~~~js
  <Checkbox
    defaultChecked={true}
    onChange={(value: string) => {
      console.log('checkbox', value)
    }}
  />
  ~~~`)(() => {
    return (
      <div style={{ margin: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Checkbox
            defaultChecked={true}
            itemKey="Sky"
            onChange={(key: string, value: string) => {
              console.log('checkbox', `${key} ${value}`);
            }}
          >
            Airy Sky
          </Checkbox>
        </div>
        <Checkbox
          // defaultChecked={true}
          itemKey="Rooms"
          onChange={(key: string, value: string) => {
            console.log('checkbox', `${key} ${value}`);
          }}
        >
          Airy Rooms
        </Checkbox>
      </div>
    );
  })
);
