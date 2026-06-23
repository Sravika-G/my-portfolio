
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground leading-relaxed"
          >
            <p>
              I'm a Software Engineer with a Master's in Computer Science and experience building full-stack
              applications, distributed systems, cloud infrastructure, and AI-powered products. My background
              includes developing scalable data pipelines, deploying machine learning workloads on Kubernetes
              and HPC environments, building geospatial visualization systems in C++, and creating modern web
              applications using React and cloud technologies.
            </p>
            <p>
              I'm particularly interested in software engineering, AI-driven applications, distributed systems,
              and building products that combine strong technical foundations with great user experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
