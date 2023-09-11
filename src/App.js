import Main from './components/pages/Main/Main';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import ProductPage from './components/pages/ProductPage/ProductPage';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const [logged, setLogged] = useState(false)
  const [productsData, setProductsData] = useState('')
  const [commentData, setCommentData] = useState('')
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

  const onShowDetailClick = (id) => {
    fetch('http://demo5127360.mockable.io/product/' + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response is not OK');
        }
        return response.text();
      })
      .then((data) => {
        const jsonData = JSON.parse(data);
        setCommentData(jsonData.comments);
        console.log(jsonData)
      })
      .catch((error) => {
        console.error('Error in response:', error);
      });
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Main productsData={productsData} onShowDetailClick={onShowDetailClick} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path="/products/:id" element={<ProductPage data={productsData['0']} comments={commentData} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
