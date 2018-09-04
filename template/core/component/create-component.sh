COMPONENT_NAME=$1

if [ "$COMPONENT_NAME" == "" ]
  then
  echo "Error: Please provide valid component name"
  echo "./create-component [COMPONENT_NAME]"
  exit 1
fi

echo "=== Creating new component: $COMPONENT_NAME ===" 

UI_DIR=packages/core/ui
WORKDIR=$UI_DIR/src/components/$COMPONENT_NAME
mkdir $WORKDIR

cat > $WORKDIR/$COMPONENT_NAME.css  << EndOfMessage 
.button {
  color: red;
  background-color: hotpink;
}

.button:hover {
  color: 'lightgreen',
}

EndOfMessage

cat > $WORKDIR/$COMPONENT_NAME.story.tsx << EndOfMessage
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import withInfo from '../../utils/withInfo';
import { $COMPONENT_NAME } from './$COMPONENT_NAME';

(storiesOf('Components/$COMPONENT_NAME', module) as any).addWithJSX(
  'Sample $COMPONENT_NAME',
  withInfo(\`
  ### Notes
  This is an $COMPONENT_NAME

  ### Usage
  ~~~js
  <$COMPONENT_NAME
    text="Hello World!"
  />
  ~~~\`)(() => (
    <div>
      <$COMPONENT_NAME text="Hello World!" disabled={true} />

      <$COMPONENT_NAME text="Hello World!" disabled={false} />
    </div>
  ))
);

EndOfMessage

cat > $WORKDIR/$COMPONENT_NAME.test.tsx << EndOfMessage
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { $COMPONENT_NAME } from './$COMPONENT_NAME';

it('renders button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<$COMPONENT_NAME />, div);
  ReactDOM.unmountComponentAtNode(div);
});

EndOfMessage

cat > $WORKDIR/$COMPONENT_NAME.tsx << EndOfMessage
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as React from 'react';

import * as style from './$COMPONENT_NAME.css';

interface IProps {
  /**
   * Text Description
   */
  text: string;
  /** Hello */
  disabled?: boolean;
}

interface IContext {
  context?: any;
}

export class $COMPONENT_NAME extends React.Component<IProps, IContext> {
  static defaultProps: Partial<IProps> = {
    text: 'Hello',
  };

  render() {
    return (
      <div>
        <button className={style.button} disabled={this.props.disabled}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default withStyles(style)($COMPONENT_NAME);

EndOfMessage

echo "export { default as $COMPONENT_NAME } from './components/$COMPONENT_NAME/$COMPONENT_NAME';" >> $UI_DIR/src/index.ts

echo "=== Success Creating $COMPONENT_NAME, it lives at $WORKDIR ==="
