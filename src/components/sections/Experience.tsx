
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Research Assistant",
      company: "California State University, San Bernardino",
      period: "Sep 2025 – Present",
      location: "San Bernardino, CA",
      description: [
        "Working on Unreal Engine 5 + ArcGIS integration for archaeological spatial visualization",
        "Built C++ and Blueprint workflows to automate data ingestion from CSV/SQL",
        "Optimized rendering performance and data handling for large terrain datasets"
      ]
    },
    {
      title: "Graduate Research Assistant",
      company: "California State University, San Bernardino",
      period: "Oct 2023 – May 2025",
      location: "San Bernardino, CA",
      description: [
        "Designed Docker and Kubernetes-based ML pipeline environments",
        "Built CI/CD workflows using GitHub Actions and Jenkins",
        "Improved GPU/CPU resource utilization for machine learning workloads"
      ]
    },
    {
      title: "Instructional Student Assistant",
      company: "California State University, San Bernardino",
      period: "Sep 2024 – Dec 2024",
      location: "San Bernardino, CA",
      description: [
        "Tutored C++ and debugging techniques (GDB, Visual Studio)",
        "Conducted hands-on workshops on memory management and OOP",
        "Mentored students on clean code practices"
      ]
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-card/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            My journey in academia and industry
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20 bg-card rounded-lg p-6 glow-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-base md:text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
