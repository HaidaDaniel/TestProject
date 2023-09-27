import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux'

import store from '../redux/store';
import theme from '../theme';

import GlobalStyles from '../styled/GlobalStyles';
import rootReducer from '../redux/rootReducer';

function wrapComponentInAllProviders(component, initialState,) {
  const useMockStore = !!initialState;
  const setupStore = () => {
    return createStore(
      rootReducer,
      initialState,
    );
  };
  const storeToUse = useMockStore ? setupStore() : store;

  return (
    <Provider store={storeToUse}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default wrapComponentInAllProviders;






