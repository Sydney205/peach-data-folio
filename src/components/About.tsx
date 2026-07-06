import { motion } from "framer-motion";

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
            <span className="text-accent">01.</span> THE MISSION
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-background/80"
              >
                I am a Data Scientist who believes
                <span className="text-accent">
                  {" "}
                  insights are meant to be acted upon. {" "}
                </span>
                I bridge the gap between analysis and action by using AI
                agents to execute decisions derived from data workflows. Beyond
                engineering solutions, I’m passionate about technical writing,
                breaking down complex systems into clear, accessible concepts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed text-background/60"
              >
                gh
              </motion.p>
            </div>
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-background/10 rounded-2xl bg-background/5"
              >
                <h3 className="text-accent font-black text-4xl mb-2">5+</h3>
                <p className="font-bold text-sm tracking-widest text-background/40">
                  YEARS OF RESEARCH
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 border border-background/10 rounded-2xl bg-background/5"
              >
                <h3 className="text-accent font-black text-4xl mb-2">50+</h3>
                <p className="font-bold text-sm tracking-widest text-background/40">
                  MODELS DEPLOYED
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
