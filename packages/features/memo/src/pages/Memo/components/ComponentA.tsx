import { observer } from 'mobx-react';
import * as React from 'react';

import { TextBox } from '@organizations/ui';

export const ComponentA = observer(({ text, onSubmit }) => (
  <div>
    <TextBox onSubmit={onSubmit} />
    <h1>{text}</h1>
  </div>
));

export default ComponentA;