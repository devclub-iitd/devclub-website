
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      <section className="flex flex-col items-center justify-center py-24">
        <h1 
          className="text-9xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-white to-white/20 tracking-widest mb-8"
        >
          4
          <span className="inline-block w-[300px] h-[300px] align-middle">
            {/* Embed the sphere as an iframe (example) */}
            <iframe
              src="/sphere.html"
              className="w-full h-full border-0"
              title="3D Sphere"
            />
          </span>
          4
        </h1>
        <p className="text-gray-400 text-xl">Oops! The page you’re looking for doesn’t exist.</p>
      </section>
      
      <Footer />
    </div>
  );
}