import React from 'react';
import Navbar from './components/navbar';
import Index from './page/index';
import About from './page/about';
import Crud from './page/crud';

function App() {
  return (
    <>
      <Navbar />
      <Index />
      <About />
      <Crud />
    </>
  );
}

export default App;