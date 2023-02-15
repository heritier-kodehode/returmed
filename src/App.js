import { useState, createContext } from 'react';
import './App.css';
import { langDataEng, langDataNok } from './data/lang';

import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';
import Partners from './pages/partners/partners';
import Vision from './pages/vision/vision';
import Returnunit from './pages/returnunit/returnunit';
import Contactus from './pages/contactus/contactus';
import Blog from './pages/blog/blog';
import About from './pages/about/about';
import Blogpost from './components/blogpost/blogpost';
import Error from './pages/error/error';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Context = createContext();

function App() {
  const [langData, setLangData] = useState(langDataEng);

  function handleLanguage(e) {
    if (e.target.id === 'engLang') {
      setLangData(langDataEng);
    } else if (e.target.id === 'nokLang') {
      setLangData(langDataNok);
    }
  }
  return (
    <Context.Provider value={{ langData, handleLanguage }}>
      <AppContainer className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/our-vision' element={<Vision />} />
          <Route path='/about' element={<About />} />
          <Route path='/return-unit' element={<Returnunit />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<Blogpost />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </AppContainer>
    </Context.Provider>
  );
}

export default App;
