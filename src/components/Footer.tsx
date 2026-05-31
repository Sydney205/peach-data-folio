import { Database } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Database className="text-accent-foreground w-5 h-5" />
            </div>
            <span className="font-bold tracking-tighter">SYDNEY<span className="text-accent">205</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sydney205. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}