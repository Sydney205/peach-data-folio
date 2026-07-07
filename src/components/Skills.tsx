import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Code2, 
  LineChart, 
  Layers, 
  Cpu, 
  PieChart, 
  Zap,
  Monitor
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-accent" />,
      skills: ["Python", "SQL", "Javascript", "Typescript", "Rust", "Lua"],
    },
    {
      title: "Web Development",
      icon: <Layers className="text-accent" />, 
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    },
    {
      title: "Data Science & Stats",
      icon: <Zap className="text-accent" />,
      skills: ["Pandas", "NumPy", "A/B Testing", "Time Series", "Hypothesis", "NLP"],
    },
    {
      title: "Visualization",
      icon: <PieChart className="text-accent" />,
      skills: ["Tableau", "PowerBI", "Matplotlib", "Seaborn", "D3.js"],
    },
    {
      title: "ML Frameworks",
      icon: <Cpu className="text-accent" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "Keras"],
    },
    {
      title: "AI Agents & Intelligence",
      icon: <Database className="text-accent" />,
      skills: ["Gemini API", "Google AI Studio"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">TECH TOOLKIT</h2>
          <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border hover:border-accent/40 transition-colors group bg-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-background border hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
