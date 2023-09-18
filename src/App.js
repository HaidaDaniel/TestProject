import { ThemeProvider } from 'styled-components';
import theme from './theme'
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import ProductPage from './components/pages/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProducts, fetchProductById } from './api';
import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
fonts: {
    body: 'Arial, sans-serif',
    heading: 'Helvetica, sans-serif',
},
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
`


function App() {
  const [productsData, setProductsData] = useState([]);
  const [productData, setProductData] = useState('');

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => {
        console.error('Error in fetchProducts:', error);
      });
  }, []);

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
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Main productsData={productsData} onProductClick={onProductClick} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path="/products/:id" element={<ProductPage data={productData} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;