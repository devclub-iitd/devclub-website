import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';

export default function Keshav() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Keshav Page */}
      <section className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Keshav</h1>
          <img 
            src="/events/keshav.jpg" 
            alt="Keshav" 
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
