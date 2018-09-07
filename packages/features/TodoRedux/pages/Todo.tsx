import * as React from 'react';
import { Provider } from 'react-redux';
import Todo from '../src/Todo';

import { default as configureStore } from '../src/store';

import { services as S } from '@organizations/datasource/todo';

function initService() {
  if (process.env.NODE_ENV === 'testing') return new S.MockTodoService();

  return new S.TodoService();
}

const services = {
  todo: initService(),
};

const store = configureStore({}, { services }, []);

/*
  The structure is following Next JS structure
  where /pages/ folder contains pages level component
  therefore Store and Services should be initialized here
  and pass it to component
  --------------------------------------------
  Next.js' lifecycle also works here,
  like getInitialProps() can be called here.
  --------------------------------------------
  Challenge:
    - Build Todo Page that is pleasing to the eye ;)
    - Todo page must use data (fetched or post) from service
    - Todo page must be able to add new todo, check uncheck
    - Add Unit testing for page level component
  Hint:
    - You can use those awesome component with awesome documentation from @organizations/ui
    - Code the component first on src/<page-component>/<component>.tsx
    - Code the presentational component and css needed to display todo at src/<page-component>/components
    - Do redux stuff.....
*/

export default class extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
