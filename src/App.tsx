/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from 'styled-components'

import { Main, Login, Registration, ProductPage } from './components/index'

import GlobalStyles from './styled/GlobalStyles'
import theme from './theme'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/products/:productId' element={<ProductPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App