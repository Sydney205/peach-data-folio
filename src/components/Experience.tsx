import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Senior Data Scientist",
      company: "Insight Analytics Corp",
      period: "2021 - Present",
      description: "Leading a team of 5 data scientists in developing predictive maintenance models for industrial manufacturing clients.",
    },
    {
      role: "Machine Learning Engineer",
      company: "Neural Systems Lab",
      period: "2018 - 2021",
      description: "Designed and implemented computer vision algorithms for autonomous drone navigation and obstacle avoidance.",
    },
    {
      role: "Data Analyst",
      company: "Global Retail Solutions",
      period: "2016 - 2018",
      description: "Built customer segmentation models and real-time dashboarding systems for retail inventory management.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center"
          >
            JOURNEY
          </motion.h2>

          <div className="relative border-l-2 border-accent/20 ml-4 md:ml-0 space-y-12 pb-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background z-10 hidden md:block" style={{ left: 'calc(50% - 8px)' }}></div>
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 md:hidden"></div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className={`md:text-right md:pr-12 ${index % 2 === 0 ? "md:order-1" : "md:order-2 md:text-left md:pl-12"}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-black uppercase">{exp.role}</h3>
                    <p className="text-accent font-bold mb-4">{exp.company}</p>
                  </div>
                  <div className={`${index % 2 === 0 ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12 md:text-right"}`}>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}