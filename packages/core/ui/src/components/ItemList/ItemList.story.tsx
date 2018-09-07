/* tslint:disable:no-console jsx-no-lambda */

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils/withInfo';
import ItemList from './ItemList';

(storiesOf('ItemList', module) as any).addWithJSX(
  'ItemList',
  wInfo(`
  ### Notes
  By default, ItemList component has an absolute position. Parent component should have a relative position.

  ### Usage
  ~~~js
  const source = [
    { title: 'Aldi', description: 'aldi@airyrooms.com' },
    { title: 'Alvin Gunawan', description: 'alvin.gunawan@airyrooms.com' },
    { title: 'Andarias Silvanus', description: 'andarias.silvanus@airyrooms.com' },
    { title: 'Angelica', description: 'angelica-int@airyrooms.com' },
    { title: 'Andhika Prakasiwi', description: 'andhika.prakasiwi@airyrooms.com' },
    { title: 'Brigita Maria', description: 'brigita.maria@airyrooms.com' },
    { title: 'Rizky Darmawan', description: 'rizky.darmawan@airyrooms.com' },
    { title: 'Vannia Ferdina', description: 'vannia.ferdina@airyrooms.com' },
    { title: 'Monica Natasha', description: 'monica.natasha@airyrooms.com' }
  ]

  const source2 = [
    { title: 'Aldi' },
    { title: 'Alvin Gunawan' },
    { title: 'Andarias Silvanus' },
    { title: 'Angelica' },
    { title: 'Andhika Prakasiwi' },
    { title: 'Brigita Maria' },
    { title: 'Rizky Darmawan' },
    { title: 'Vannia Ferdina' },
    { title: 'Monica Natasha' }
  ]

  <ItemList source={source} onClick={()=>{}} />
  ~~~`)(() => {
    const source = [
      { title: 'Aldi', description: 'aldi@airyrooms.com' },
      { title: 'Alvin Gunawan', description: 'alvin.gunawan@airyrooms.com' },
      {
        title: 'Andarias Silvanus',
        description: 'andarias.silvanus@airyrooms.com',
      },
      { title: 'Angelica', description: 'angelica-int@airyrooms.com' },
      {
        title: 'Andhika Prakasiwi',
        description: 'andhika.prakasiwi@airyrooms.com',
      },
      { title: 'Brigita Maria', description: 'brigita.maria@airyrooms.com' },
      { title: 'Rizky Darmawan', description: 'rizky.darmawan@airyrooms.com' },
      { title: 'Vannia Ferdina', description: 'vannia.ferdina@airyrooms.com' },
      { title: 'Monica Natasha', description: 'monica.natasha@airyrooms.com' },
    ];

    const source2 = [
      { title: 'Aldi' },
      { title: 'Alvin Gunawan' },
      { title: 'Andarias Silvanus' },
      { title: 'Angelica' },
      { title: 'Andhika Prakasiwi' },
      { title: 'Brigita Maria' },
      { title: 'Rizky Darmawan' },
      { title: 'Vannia Ferdina' },
      { title: 'Monica Natasha' },
    ];
    return (
      <div style={{ margin: '20px' }}>
        <div style={{ width: '40%', float: 'left' }}>
          <p style={{ margin: '10px 20px' }}>Double Row</p>
          <div
            style={{
              margin: '0px 20px',
              border: '1px solid #e5e8e8',
              height: '200px',
              overflowY: 'auto',
            }}
          >
            <ItemList
              source={source}
              onClick={(idx: number) => {
                console.log('idxx', idx);
              }}
            />
          </div>
        </div>
        <div style={{ width: '40%', float: 'left' }}>
          <p style={{ margin: '10px 20px' }}>Single Row</p>
          <div
            style={{
              margin: '0px 20px',
              border: '1px solid #e5e8e8',
              height: '200px',
              overflowY: 'auto',
            }}
          >
            <ItemList
              source={source2}
              onClick={(idx: number) => {
                console.log('idxx', idx);
              }}
            />
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  })
);
