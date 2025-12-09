import React from 'react';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Story from './sections/Story';
import MenuSection from './sections/MenuSection';
import LocationsSection from './sections/LocationsSection';
import ReviewsSection from './sections/ReviewsSection';
import QRMenuSection from './sections/QRMenuSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Story />
        <MenuSection />
        <LocationsSection />
        <ReviewsSection />
        <QRMenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
