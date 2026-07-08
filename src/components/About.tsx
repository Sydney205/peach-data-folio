import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4"
          >
            <span className="text-accent">01.</span> WHO AM I
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Main Bio Text */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-medium text-background/80 leading-tight">
                  Hello, call me{" "}
                  <span className="text-accent font-black text-3xl md:text-4xl">
                    Sydney
                  </span>
                </h3>
                <span className="text-xs md:text-sm font-mono tracking-wider text-background/70 block mt-1">
                  [ CHINEDU DIEKE ]
                </span>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mt-4 text-background/80">
                  I am a Data Scientist and Web Developer who believes{" "}
                  <span className="text-accent font-semibold">
                    insights are meant to be engineered into action.
                  </span>
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed text-background/60 space-y-4"
              >
                <span>
                  I bridge the gap between raw statistical analysis and functional production software. 
                  Currently completing my BSc in Data Science at Miva Open University, my practice spans 
                  training intelligent models and building full-stack web architectures (MERN & Next.js) 
                  to operationalize data. From deploying predictive ML interfaces to engineering regional 
                  hydrological data workflows, I focus on building software that solves concrete problems.
                </span>
                <br /><br />
                <span>
                  Beyond training models and writing code, I am deeply committed to technical writing—translating 
                  dense documentation and complex machine learning pipelines into clean, accessible concepts.
                </span>
              </motion.p>
            </div>

            {/* CV Download */}
            <div className="md:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 border border-background/10 rounded-2xl bg-background/5 flex flex-col justify-between h-full group hover:border-accent/30 transition-colors duration-300"
              >
                <div>
                  <div className="p-3 bg-background/5 rounded-xl w-fit mb-6 text-accent">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-background/90">
                    Curriculum Vitae
                  </h3>
                  <p className="text-sm text-background/50 mb-8 leading-relaxed">
                    Explore my academic history, certified technical milestones, and complete full-stack toolset.
                  </p>
                </div>

                <a
                  href="/CHINEDU SYDNEY DIEKE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-5 py-4 bg-background text-foreground font-bold rounded-xl hover:bg-accent hover:text-background transition-all duration-300 shadow-sm"
                >
                  <span>View CV</span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
