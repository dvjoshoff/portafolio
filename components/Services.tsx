import { motion } from 'framer-motion';
import { Code, Palette, PencilRuler, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y responsivos utilizando las últimas tecnologías.',
  },
  {
    icon: <Palette size={40} />,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
  },
  {
    icon: <PencilRuler size={40} />,
    title: 'Diseño Grafico',
    description: '  enfocado en mejorar la experiencia del usuario y optimizar la visibilidad online a través de un diseño intuitivo y accesible.',
  },
  {
    icon: <Rocket size={40} />,
    title: 'Rendimiento',
    description: 'Optimización de velocidad y rendimiento para una experiencia fluida.',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Servicios Profesionales</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-red-900/10 to-transparent 
                         border border-red-900/20 hover:border-red-600/40 transition-all
                         backdrop-blur-sm shadow-lg shadow-red-900/5"
            >
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;