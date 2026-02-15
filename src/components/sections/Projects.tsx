
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "SmartFlow Scheduler",
      github: "https://github.com/Sravika-G/smartflow-scheduler",
      description: [
        "Intelligent task prioritization and scheduling system",
        "Built scalable backend with clean modular architecture",
        "Designed responsive UI with smooth interactions"
      ],
      technologies: ["React", "AI", "Scheduling Algorithms", "REST APIs"]
    },
    {
      title: "Lyrics Mood AI",
      github: "https://github.com/Sravika-G/lyrics-mood-ai",
      description: [
        "NLP-based mood detection system from song lyrics",
        "Implemented text preprocessing and classification models",
        "Visualized predictions with interactive frontend"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Predictive Analytics for E-Commerce Sales",
      github: "https://github.com/Sravika-G/predictive-analytics-for-e-commerce-sales",
      description: [
        "Built time-series forecasting model using Python and Facebook Prophet",
        "Developed end-to-end data pipeline and cleaned large sales datasets",
        "Created interactive dashboards using Tableau and Streamlit"
      ],
      technologies: ["Python", "Prophet", "Time Series", "Tableau", "Streamlit", "Data Analytics"]
    },
    {
      title: "Customer Churn Prediction",
      github: "https://github.com/Sravika-G/Customer-Churn-Prediction",
      description: [
        "Developed ML model achieving 76.5% accuracy using Python and scikit-learn",
        "Created interactive Streamlit dashboard for data visualization",
        "Implemented feature engineering and model optimization techniques"
      ],
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Machine Learning"]
    },
    {
      title: "Math Pawzle",
      github: "https://github.com/Sravika-G/Team2_dog_math",
      description: [
        "Unity-based educational game focused on mathematics learning",
        "Deployed on Azure with CI/CD pipeline implementation",
        "Designed engaging user interface with gamification elements"
      ],
      technologies: ["Unity", "C#", "Azure", "Game Development", "CI/CD"]
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card rounded-lg p-4 md:p-6 glow-border hover:shadow-[0_0_25px_hsl(142.1_76.2%_36.3%/0.4)] hover:border-primary transition-all duration-300"
            >
              <div className="space-y-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors duration-200 inline-block"
                >
                  {project.title}
                </a>

                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
