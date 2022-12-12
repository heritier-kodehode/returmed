import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home';

export const Context = createContext();

function App() {
  return (
    <Context.Provider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
