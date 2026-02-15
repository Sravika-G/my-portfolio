
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
              I'm a software engineer with a strong focus on AI, machine learning, and scalable cloud systems. 
              I enjoy building intelligent applications that solve real-world problems, from predictive analytics 
              platforms to spatial data visualization tools. My work combines research-driven development with 
              production-ready engineering.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary/10 border border-primary/20 rounded-lg p-4 md:p-6 mt-6 md:mt-8"
            >
              <blockquote className="text-lg md:text-xl font-medium text-primary italic">
                "The best way to predict the future is to create it."
              </blockquote>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">- My personal mantra</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-semibold text-primary text-sm md:text-base"
            >
              Current Focus: Building scalable machine learning pipelines and cloud-native 
              applications while contributing to the academic community through research 
              and teaching assistance.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
