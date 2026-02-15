
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "JPMorgan Chase & Co. Software Engineering Job Simulation",
      provider: "Forage",
      description: "Gained hands-on experience with financial technology and software development in enterprise environments",
      skillsGained: [
        "Kafka Integration and Event Streaming",
        "REST API Development", 
        "H2 Database",
        "Microservice Project Setup"
      ]
    },
    {
      title: "Skyscanner Software Engineering Job Simulation",
      provider: "Forage", 
      description: "Completed virtual internship program focusing on software engineering practices and real-world project development",
      skillsGained: [
        "React.js (Backpack Design System)",
        "Microservice Development",
        "Mobile UI Development",
        "User-Centered Design and UX Principles"
      ]
    }
  ];

  return (
    <section id="certifications" className="section-spacing">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional development and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-lg p-6 glow-border hover:shadow-[0_0_25px_hsl(142.1_76.2%_36.3%/0.4)] transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-foreground font-semibold text-sm">
                    {cert.provider}
                  </p>
                </div>
              </div>

              <p className="text-foreground mb-6 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary">
                  Skills Gained:
                </h4>
                <ul className="space-y-2">
                  {cert.skillsGained.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      className="flex items-start text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
