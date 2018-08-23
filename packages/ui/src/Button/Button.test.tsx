import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './Button';

it('renders button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
