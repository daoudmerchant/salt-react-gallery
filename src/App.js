import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Header from './components/Header';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .App {
    position: relative;
    & > * {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  body, .root, .App {
    height: 100vh;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;