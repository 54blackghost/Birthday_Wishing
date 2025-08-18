import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Memories from './components/Memories';
import Wishes from './components/Wishes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Memories />
        <Wishes />
      </main>
      <Footer />
    </div>
  );
}

export default App;