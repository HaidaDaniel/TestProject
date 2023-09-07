import Main from './components/pages/Main/Main';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import ProductPage from './components/pages/ProductPage/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [logged, setlogged] = useState(false)
  const [productsData, setproductsData] = useState('')
  useEffect(() => {
    fetch('http://demo5127360.mockable.io/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No response is not OK')
        }
        return response.json()
      })
      .then((data) => {
        setproductsData(data)
      })
      .catch((error) => {
        console.error('Error in response', error)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Main productsData={productsData} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path="/products/:id" component={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
