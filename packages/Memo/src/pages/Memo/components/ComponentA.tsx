import * as React from 'react';
import { observer } from 'mobx-react';

export const ComponentA = observer(({ text }) => <h1>{text}</h1>);

export default ComponentA;
