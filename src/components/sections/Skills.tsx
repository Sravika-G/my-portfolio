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
      <div className="max-w-6xl mx-auto" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 glow-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
