import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
      title: "Global Supply Chain Optimizer",
      description: "Deep learning model for optimizing logistics and reducing carbon footprint across multi-continent supply routes.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/645b5e8d-fc75-434f-889e-dfbd82380699/machine-learning-project-9eb5dc62-1780244075124.webp",
      tags: ["Deep Learning", "PyTorch", "Logistics"],
      github: "#",
      demo: "#"
    },
    {
      title: "FinTech Market Sentiment",
      description: "NLP engine analyzing millions of social media posts and news articles to predict stock market volatility.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/645b5e8d-fc75-434f-889e-dfbd82380699/data-analysis-project-75f692f6-1780244075969.webp",
      tags: ["NLP", "Transformers", "Finance"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Fraud Detection",
      description: "Anomaly detection system processing 10k transactions/sec with 99.9% accuracy using streaming data architectures.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/645b5e8d-fc75-434f-889e-dfbd82380699/data-visualization-project-e3ae5a02-1780244075495.webp",
      tags: ["Spark", "Kafka", "Security"],
      github: "#",
      demo: "#"
    }
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

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-background border-none shadow-xl group hover:-translate-y-2 transition-transform duration-500">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
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