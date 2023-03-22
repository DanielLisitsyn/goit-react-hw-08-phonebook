import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../modules/Header/Header';
import { store, persistor } from '../redux/store';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Header />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
