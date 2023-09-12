import { ThemeProvider } from 'styled-components';
import theme from './theme'
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import ProductPage from './components/pages/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const [logged, setLogged] = useState(false)
  const [productsData, setProductsData] = useState([])
  const [productData, setProductData] = useState('')


  useEffect(() => {
    fetch('http://demo5127360.mockable.io/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No response is not OK')
        }
        return response.json()
      })
      .then((data) => {
        setProductsData(data)
      })
      .catch((error) => {
        console.error('Error is in response', error)
      })
  }, [])

  const onProductClick = (id) => {
    fetch('http://demo5127360.mockable.io/product/' + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response is not OK');
        }
        return response.text();
      })
      .then((data) => {
        const jsonData = JSON.parse(data);
        setProductData(jsonData.data);
      })
      .catch((error) => {
        console.error('Error in response:', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
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
