import * as React from 'react';
import { observer } from 'mobx-react';

import { TextBox } from '@alvin/ui';

export const ComponentA = observer(({ text, onSubmit }) => (
  <div>
    <TextBox onSubmit={onSubmit} />
    <h1>{text}</h1>
  </div>
));

export default ComponentA;
