import Footer from './components/Footer/Footer';
import ZipcodeSearch from './components/ZipcodeSearch/ZipcodeSearch';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { Row } from 'antd';
import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [page, setPage] = useState('home-page');

  function decidePage() {
    if (page === 'home-page') {
      return <HomePage />;
    } else if (page === 'map-page') {
      return <ZipcodeSearch />;
    }
  }

  return (
    <div className="App">
      <Row justify="center">
        <NavBar setPage={setPage} page={page} />
      </Row>

      {decidePage()}

      <Footer />
    </div>
  );
}

export default App;
