import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from '../modules/Header/Header';
import { store } from '../redux/store';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Header />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
};
