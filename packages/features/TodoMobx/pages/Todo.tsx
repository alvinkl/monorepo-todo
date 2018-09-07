import { Provider } from 'mobx-react';
import * as React from 'react';

import { services as S } from '@organizations/datasource/todo';
import Todo from '../src/Todo';
import { initStore, TodoStore } from '../src/Todo/store/TodoStore';

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
    - Todo page must use data (fetched) from service
    - Add Unit testing for page level component
  Hint:
    - You can use those awesome component with awesome documentation from @organizations/ui
    - Code the component first on src/<page-component>/<component>.tsx
    - Code the presentational component and css needed to display todo at src/<page-component>/components
    - Build store that expects Service to be passed as parameter during initializations
    - Import Service from @organizatons/datasource/todo
      (
        import { services } from '@organizations/datasource/todo';
        to access service simply do services.TodoService
      )
    - Pass the store that has service initialized to the component
*/
export default class extends React.Component {
  store: TodoStore;

  constructor(props) {
    super(props);
    this.store = initStore(S.TodoService);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Todo />
      </Provider>
    );
  }
}
