import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import Avatar from './Avatar';
(storiesOf('Avatar', module) as any).addWithJSX(
  'Avatar',
  wInfo(`
  ### Notes
  This is an avatar icon. Name is passed with Array. Array with PETITE props can contain and show more than 1 name.

  ### Usage
  ~~~js
  <Avatar
    name=["Put Name Here",...]
    petite={true | false}
  />
  ~~~

  ### Source Code of Example Shown
  ~~~js
  <Avatar name={[ 'John Doe' ]} petite={false} status="ACTIVE" />

  <Avatar name={[ 'John Doe', 'Mary Jane', 'Andhika Prakasiwi', 'Brigita Maria', 'Vannia Ferdina', 'Andarias Silvanus', 'Rizky Darmawan' ]} petite={true} />

  ~~~
  `)(() => (
    <div>
      <h3> Big Avatar with Full Name (name provided is more than 1 word)</h3>
      <Avatar name={['John Doe']} petite={false} status="ACTIVE" />
      <h3> Big Avatar with First Name (name provided is only 1 word)</h3>
      <Avatar name={['John']} petite={false} status="PENDING" />
      <h3>Small Avatar with Full Name (name provided is more than 1 word)</h3>
      <Avatar name={['John Doe']} petite={true} />
      <h3> Small Avatar with First Name (name provided is only 1 word)</h3>
      <Avatar name={['John']} petite={true} />

      <h3>Small Avatar with Many Names (array of name contains 1-4 name(s))</h3>
      <Avatar
        name={['John Doe', 'Mary Jane', 'Andhika Prakasiwi']}
        petite={true}
      />

      <h3>
        Small Avatar with More than 5 Names (array of name contains more than 4
        names)
      </h3>
      <Avatar
        name={[
          'John Doe',
          'Mary Jane',
          'Andhika Prakasiwi',
          'Brigita Maria',
          'Vannia Ferdina',
          'Andarias Silvanus',
          'Rizky Darmawan',
        ]}
        petite={true}
      />
    </div>
  ))
);
