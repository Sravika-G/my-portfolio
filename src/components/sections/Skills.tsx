
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cloud, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "SQL", "Java", "Scala", "C++", "JavaScript", "HTML", "CSS", "Bash"]
    },
    {
      title: "Technologies",
      icon: Cloud,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "REST APIs", "React", "Unity", "PyTorch"]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Tableau", "Excel", "GitHub", "VS Code", "Azure DevOps", "Wireshark", "Postman", "JIRA"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Server", "MongoDB", "SQLite"]
    },
    {
      title: "Concepts",
      icon: Brain,
      skills: ["Data Analysis", "CI/CD", "Agile", "ML Pipelines", "Cloud-Native Architecture"]
    }
  ];

  // Duplicate the skills array for seamless scrolling
  const duplicatedSkills = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Auto-scrolling Skills Container */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex animate-scroll hover:pause-animation"
          >
            {duplicatedSkills.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="bg-card rounded-xl p-4 md:p-6 glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex-shrink-0 w-72 md:w-80 min-h-[250px] md:min-h-[280px] mx-3"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-2 md:p-3 bg-primary/10 rounded-lg mr-3 md:mr-4">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground text-sm md:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Fade Effects */}
          <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-card/30 via-card/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-card/30 via-card/30 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Mobile/Tablet Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-xs md:text-sm text-muted-foreground mt-6 lg:hidden"
        >
          Skills auto-scroll continuously ↔
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
