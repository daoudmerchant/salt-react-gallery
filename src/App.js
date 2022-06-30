import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";

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

  a {
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
        <Header />

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='search' element={<Search />}/>
            <Route path='about' element={<About />}/>
            <Route path='error' element={<Error />}/>
            <Route path='/:invalid' element={<Error />}/>
          </Routes>
          
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;