
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: [
        "Developed ML model achieving 76.5% accuracy using Python and scikit-learn",
        "Created interactive Streamlit dashboard for data visualization",
        "Implemented feature engineering and model optimization techniques"
      ],
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Machine Learning"],
      github: "#",
      live: "#"
    },
    {
      title: "Math Pawzle",
      description: [
        "Unity-based educational game focused on mathematics learning",
        "Deployed on Azure with CI/CD pipeline implementation",
        "Designed engaging user interface with gamification elements"
      ],
      technologies: ["Unity", "C#", "Azure", "Game Development", "CI/CD"],
      github: "#",
      live: "#"
    },
    {
      title: "DDoS Mitigation System",
      description: [
        "Real-time DDoS attack detection and mitigation system",
        "Integrated AWS Shield for enhanced security protection",
        "Network traffic analysis using Python and Wireshark"
      ],
      technologies: ["Python", "AWS Shield", "Wireshark", "Network Security", "Real-time Processing"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg p-6 glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
