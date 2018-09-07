/* tslint:disable:jsx-no-lambda */
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import Dropdown from './Dropdown';
(storiesOf('Dropdown', module) as any).addWithJSX(
  'Dropdown',
  wInfo(`

  ### Usage
  ~~~js
  let optionTitle = []
    optionTitle.push({ title: '+62', description: 'Indonesia' })
    optionTitle.push({ title: '+63', description: 'Somewhere' })
    optionTitle.push({ title: '+64', description: 'Far far away' })
    optionTitle.push({ title: '+65', description: 'Singapore' })

  <Dropdown
    source={optionTitle}
    label="Titel"
    onChange={() => {}}
    value={optionTitle[0].title} //default value
    name="Phone Country Code" />
  ~~~`)(() => {
    // let value1 = 'MR'
    const optionTitle: any[] = [];
    optionTitle.push({ title: '+62', description: 'Indonesia' });
    optionTitle.push({ title: '+63', description: 'Somewhere' });
    optionTitle.push({ title: '+64', description: 'Far far away' });
    optionTitle.push({ title: '+65', description: 'Singapore' });

    return (
      <div style={{ margin: '20px 20px', width: '30%' }}>
        <Dropdown
          source={optionTitle}
          onChange={() => {}}
          value={optionTitle[0].title}
          name="Phone Country Code"
        />
      </div>
    );
  })
);
