import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { OperationalCoverage } from './components/OperationalCoverage';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { TripticoChatbot } from './components/TripticoChatbot';

export function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f1f6f6] text-[#0a2336] flex flex-col font-sans selection:bg-[#009f63] selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section with Quick WhatsApp Quote */}
        <Hero />

        {/* ¿Quiénes Somos? (Misión, Visión, Valores, Fortalezas) */}
        <AboutSection />

        {/* Nuestros 6 Servicios Oficiales */}
        <ServicesSection />

        {/* Cobertura en Puertos y Aeropuertos */}
        <OperationalCoverage />

        {/* Marcas que confían en nosotros */}
        <PartnersSection />

        {/* Contacto Directo y Formulario */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Sleek Floating Assistant Button */}
      <WhatsAppFloat onOpenAssistant={() => setIsAssistantOpen(true)} />

      {/* Interactive Assistant Modal */}
      <TripticoChatbot 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
    </div>
  );
}

export default App;
