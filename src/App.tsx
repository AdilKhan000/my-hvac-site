import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection />
      <div className="container mt-5">
        <ProductSection />
      </div>
      <TestimonialsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
