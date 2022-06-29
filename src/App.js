import './App.css';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;