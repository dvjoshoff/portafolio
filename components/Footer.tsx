import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-red-900/50 to-black text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-4">
              Creando experiencias digitales excepcionales que transforman ideas en realidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#Proyectos" className="text-gray-400 hover:text-white transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="#Conóceme" className="text-gray-400 hover:text-white transition-colors">Conóceme</a>
              </li>
              <li>
                <a href="https://wa.me/573242472601" className="text-gray-400 hover:text-white transition-colors">Contáctame</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Desarrollo Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Diseño UI/UX</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Diseño Grafico</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoría</a>
              </li>
            </ul>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;