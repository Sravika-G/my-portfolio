
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="section-spacing bg-card/30">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground leading-relaxed"
          >
            <p>
              I'm a dedicated Computer Science graduate student with a passion for leveraging 
              technology to solve real-world problems. My journey in tech has been driven by 
              curiosity and a desire to create meaningful impact through innovative solutions.
            </p>

            <p>
              Currently pursuing my Master's degree at California State University, San Bernardino, 
              I specialize in artificial intelligence, machine learning, and cloud computing. 
              My experience spans from developing ML models for customer churn prediction to 
              creating educational games and implementing robust cloud infrastructure.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8"
            >
              <blockquote className="text-xl font-medium text-primary italic">
                "The best way to predict the future is to create it."
              </blockquote>
              <p className="text-muted-foreground mt-2">- My personal mantra</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-semibold text-primary"
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
