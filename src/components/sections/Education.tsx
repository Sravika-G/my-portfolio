import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, San Bernardino",
      period: "2023 – 2025",
      location: "San Bernardino, CA",
      courses: ["Artificial Intelligence", "Machine Learning", "Data Structures & Algorithms", "Distributed Computing"]
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      school: "Sreyas Institute of Engineering and Technology",
      period: "2019 – 2023",
      location: "Hyderabad, India",
      courses: ["Digital Signal Processing", "Computer Networks", "Programming Fundamentals", "Mathematics", "Embedded Systems"]
    }
  ];

  return (
    <section id="education" className="section-spacing">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic journey and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20 bg-card rounded-lg p-6 glow-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {edu.school}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
