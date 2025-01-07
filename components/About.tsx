import { motion } from "framer-motion";
import { Award, Users, Coffee } from "lucide-react";
import aaImage from './imagen/aa.jpg';

const About = () => {
  return (
    <section id="Conóceme" className="py-20 bg-gradient-to-b from-black/50 to-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Quién Soy</h2>
            <p className="text-gray-300 mb-6">
              Soy un desarrollador web apasionado por crear experiencias
              digitales excepcionales, fusionando creatividad y tecnología. Con
              años de experiencia en el desarrollo web, diseño UI/UX, y la
              producción de contenido visual y multimedia, me especializo en
              construir soluciones web modernas y escalables que integran
              elementos de diseño gráfico impactantes, videos interactivos y
              sonido envolvente. Mi objetivo es crear plataformas inmersivas que
              no solo sean funcionales, sino que también ofrezcan una
              experiencia estética, auditiva y visual completamente atractiva
              para el usuario.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-red-900/50">
                <Award className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Años de experiencia</div>
              </div>
              <div className="p-4 rounded-lg bg-red-900/50">
                <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">
                  Clientes satisfechos
                </div>
              </div>
              <div className="p-4 rounded-lg bg-red-900/50">
                <Coffee className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">
                  Proyectos completados
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aaImage}  // Usar la imagen importada
              alt="Developer working"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
