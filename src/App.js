import { useState } from 'react';
import Main from './components/pages/Main/Main';
import Header from './components/Header/Header';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Main />;
      case 'login':
        return <Login />;
      case 'registration':
        return <Registration />;

      default:
        return <Main />;
    }
  };
  return (
    <div className="App">
      <Container>
        <Header setActiveComponent={setActiveComponent}></Header>
        {renderComponent()}
      </Container>

    </div>
  );
}

export default App;
