import Footer from './components/Footer/Footer';
import PinGoogleMaps from './components/PinGoogleMaps/PinGoogleMaps';
import ZipcodeSearch from './components/ZipcodeSearch/ZipcodeSearch';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ZipcodeSearch />

      <PinGoogleMaps />

      <Footer />
    </div>
  );
}

export default App;
