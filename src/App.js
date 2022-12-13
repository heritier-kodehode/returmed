import { useState, createContext } from 'react';
import './App.css';
import { langDataEng, langDataNok } from './data/lang';

import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';
import Partners from './pages/partners/Partners';
import Vision from './pages/vision/vision';
import Returnunit from './pages/returnunit/returnunit';
import Contactus from './pages/contactus/contactus';
import Climatecompensation from './pages/climatecompensation/climatecompensation';
import About from './pages/about/about';

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
          <Route
            path='/climate-compensation'
            element={<Climatecompensation />}
          />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>

        <Footer />
      </AppContainer>
    </Context.Provider>
  );
}

export default App;
