
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

  return (
    <section id="skills" className="section-spacing bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 md:px-0">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-xl p-6 glow-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex-shrink-0 w-80 min-h-[280px]"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.15) + (skillIndex * 0.05) }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-foreground text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Fade Effects */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-background/50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Mobile Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-6 md:hidden"
        >
          Swipe to explore all skill categories →
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
