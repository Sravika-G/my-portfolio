import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    {
      title: "Skyscanner Software Engineering Virtual Experience",
      provider: "Forage",
      description: "Completed virtual internship program focusing on software engineering practices and real-world project development",
      skills: ["Software Engineering", "Problem Solving", "Project Management"]
    },
    {
      title: "JPMorgan Chase Software Engineering Virtual Experience",
      provider: "Forage",
      description: "Gained hands-on experience with financial technology and software development in enterprise environments",
      skills: ["Financial Technology", "Software Development", "Enterprise Solutions"]
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
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg p-6 glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    {cert.provider}
                  </p>
                </div>
              </div>

              <p className="text-foreground mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
