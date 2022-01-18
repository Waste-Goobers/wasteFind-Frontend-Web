import Footer from './components/Footer/Footer';
import ZipcodeSearch from './components/ZipcodeSearch/ZipcodeSearch';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { Row } from 'antd';

function App() {
  return (
    <div className="App">
      <Row justify="center">
        <NavBar />
      </Row>
      <ZipcodeSearch />

      <Footer />
    </div>
  );
}

export default App;
