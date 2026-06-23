import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  github: string;
  liveDemo?: string;
  description: string[];
  technologies: string[];
  features?: string[];
  categories?: string[];
  featured?: boolean;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      title: "Glow Finger Draw",
      github: "https://github.com/Sravika-G/glow-finger-draw",
      liveDemo: "https://glow-finger-draw.netlify.app/",
      featured: true,
      description: [
        "Real-time AR drawing app using webcam-based hand tracking",
        "Draw glowing neon strokes in the air with your index finger",
        "Runs fully in-browser with computer vision and high-performance canvas rendering"
      ],
      features: [
        "Webcam hand tracking with MediaPipe",
        "Neon glow rendering & spark particles",
        "Speed-adaptive smoothing & magnetic cursor",
        "Eraser mode, PNG export, keyboard shortcuts"
      ],
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "MediaPipe", "HTML5 Canvas", "Netlify"],
      categories: ["Computer Vision", "AR", "Frontend"]
    },
    {
      title: "RAG Document Assistant",
      github: "https://github.com/Sravika-G/rag-document-assistant",
      liveDemo: "https://rag-document-assistant-app.onrender.com/",
      featured: true,
      description: [
        "Full-stack AI document intelligence app for PDF upload, summarization, and Q&A",
        "Uses Retrieval-Augmented Generation with Gemini for grounded answers",
        "Persistent storage of document chunks, embeddings, and chat history"
      ],
      features: [
        "PDF upload & text extraction",
        "AI summaries, key points, action items",
        "Gemini embeddings + vector similarity search",
        "JWT auth, dashboard, persistent chat history"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Gemini API", "JWT", "Docker", "Render"],
      categories: ["AI", "RAG", "Full Stack", "Gemini API", "PostgreSQL"]
    },
    {
      title: "FutureMe AI",
      github: "https://github.com/Sravika-G/futureme-ai",
      liveDemo: "https://futureme-ai-app.netlify.app/",
      featured: true,
      description: [
        "AI-powered personal reflection app generating a message from your future self",
        "Choose tones: Motivational, Brutally Honest, Calm Mentor, or CEO Mode",
        "Continue a contextual chat with your future identity"
      ],
      features: [
        "Personalized future-self reflections",
        "Structured blueprint: next steps, habit, warning",
        "Multiple tone personalities",
        "Premium dark glassmorphism UI"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Gemini API", "Netlify Functions", "serverless-http"],
      categories: ["AI", "Frontend", "Gemini API", "Serverless"]
    },
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden glow-border hover:shadow-[0_0_35px_hsl(142.1_76.2%_36.3%/0.5)] hover:border-primary transition-all duration-300 flex flex-col"
            >
              {/* Screenshot placeholder */}
              <div className="relative h-44 md:h-52 bg-gradient-to-br from-primary/10 via-card to-primary/5 border-b border-primary/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,hsl(142.1_76.2%_36.3%/0.4),transparent_70%)]" />
                <div className="relative flex flex-col items-center gap-2 text-primary">
                  <Sparkles className="w-10 h-10" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Preview</span>
                </div>
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                  Featured
                </span>
              </div>

              <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <a
                    href={project.liveDemo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {project.title}
                  </a>
                </div>

                <ul className="space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-foreground text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>

                {project.features && (
                  <div className="pt-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                      {project.features.map((f, i) => (
                        <div key={i} className="flex items-start text-xs md:text-sm text-foreground/90">
                          <span className="text-primary mr-2">▸</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.categories && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.categories.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  {project.liveDemo && (
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            More <span className="text-primary">Projects</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project, index) => (
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
