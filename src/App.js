import { ThemeProvider } from 'styled-components';
import theme from './theme'
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import ProductPage from './components/pages/ProductPage';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProductById } from './api';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store'






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