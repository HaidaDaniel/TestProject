import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/pages/Main/Main';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
