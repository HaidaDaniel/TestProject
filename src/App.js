import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import { ThemeProvider } from 'styled-components';

import { Main, Login, Registration, ProductPage } from './components/index';

import { fetchProductById } from './api';
import GlobalStyles from './styled/GlobalStyles';
import theme from './theme'
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {

  const [productData, setProductData] = useState('');


  const onProductClick = (id) => {
    fetchProductById(id)
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error in fetchProductById:', error);
      });
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route exact path='/' element={<Main onProductClick={onProductClick} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path="/products/:id" element={<ProductPage data={productData} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;