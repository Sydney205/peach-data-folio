import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Binary, BrainCircuit } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for New Projects
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter mb-6">
            CORE <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              CODE
            </span> DECODED <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              DATA
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Data Scientist and Web Developer specializing in building predictive
            models and high-performance web applications. I engineer the raw
            data pipelines, train the models, and design the user interfaces
            that bring analytics to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-accent/10 border border-accent/20 text-foreground rounded-full font-bold hover:bg-accent/20 transition-colors"
            >
              My Story
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2">
              <Binary size={24} />
              <span className="font-bold text-sm">DATA MODELING</span>
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit size={24} />
              <span className="font-bold text-sm">FULL-STACK ENG</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={24} />
              <span className="font-bold text-sm">ANALYTICS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl">
            <img
              src="/Sydney205.png"
              alt="Sydney - Data Scientist & Web Developer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl z-0"></div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-12 z-20 bg-background/90 backdrop-blur-lg border border-border p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <BarChart3 className="text-accent-foreground" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">
                  Accuracy
                </p>
                <p className="text-xl font-black">98.4%</p>
              </div>
            </div>
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98.4%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-accent h-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
