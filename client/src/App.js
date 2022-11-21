import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import PageNotFound from './components/PageNotFound';

const App = ()=> {
  return (
    <div >
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='*' element={ <PageNotFound /> } />
        </Routes>
        
      </BrowserRouter>
 
    </div>
  );
}

export default App;
