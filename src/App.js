import { useState, createContext } from 'react';
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';
import Partners from './pages/partners/Partners';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Context = createContext();

function App() {
  return (
    <Context.Provider value={''}>
      <AppContainer className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/partners' element={<Partners />} />
        </Routes>

        <Footer />
      </AppContainer>
    </Context.Provider>
  );
}

export default App;
