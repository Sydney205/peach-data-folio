import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "OULAD Student Dropout Prediction",
      description: "Machine learning model that predicts student dropout risk in online learning using the OULAD dataset to enable early academic intervention.",
      image: "/Raw_App_Screenshot.png",
      tags: ["Python", "Scikit-Learn", "Education"],
      github: "https://github.com/Sydney205/oulad-student-dropout-prediction",
      demo: "https://oulad-student-dropout-prediction-fimjvpb9oevwbavuwniqx3.streamlit.app/"
    },
    {
      title: "Skeleton Project",
      description: "SkelPro is a fast command-line tool that creates project structures from reusable JSON templates. It helps developers avoid repetitive setup tasks by generating consistent development environments.",
      image: "/195749724.png",
      tags: ["Typescript", "Nodejs", "npm", "short-links"],
      github: "https://github.com/SkelPro/skelpro",
      demo: "https://npmjs.com/package/skelpro"
    },
    {
      title: "DashLink",
      description: "A simple and efficient URL shortener that transforms long URLs into compact, shareable links. Features include custom aliases and easy integration for streamlined link management.",
      image: "/6a5253abe494773e183ce34d.png",
      tags: ["pnpm", "vite", "Express", "short-links"],
      github: "https://github.com/Sydney205/DashLink",
      demo: "https://dashlink-5mnl.onrender.com"
    },
    {
      title: "Tico",
      description: "A real-time, browser-based chess platform that brings players together for instant matchmaking and competitive gameplay. Built for speed, accessibility, and smooth performance.",
      image: "/tico.png",
      tags: ["pnpm", "vite", "Express", "chess"],
      github: "https://github.com/Sydney205/Tico",
      demo: "https://tico-vw9b.onrender.com/"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-mono text-sm font-bold tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black">LATEST WORK.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-md text-lg"
          >
            A selection of projects where data transforms into strategic advantage.
          </motion.p>
        </div>

        <div
          aria-label="Project portfolio"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-6"
          role="region"
          tabIndex={0}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-[min(86vw,36rem)] shrink-0 snap-start sm:w-[min(72vw,36rem)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-background border-none shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} className="p-3 bg-background rounded-full hover:scale-110 transition-transform">
                      <Github size={24} />
                    </a>
                    <a href={project.demo} className="p-3 bg-background rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs font-bold uppercase tracking-wider">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-3xl font-black mb-4">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
