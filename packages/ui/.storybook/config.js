import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';

// import '../src/assets/styles/reset.css';
// import '../src/assets/styles/global.css';

addDecorator(withKnobs);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
