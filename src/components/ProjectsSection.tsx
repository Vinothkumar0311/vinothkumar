
import React from 'react';
import { Github, ExternalLink, Layers, Code, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: "No Due Management System",
    description: "A full-stack web application that automates student clearance processes by tracking department approvals, COE verification, and hall ticket generation.",
    tech: ["React.js", "Node.js", "MySQL", "Sequelize ORM"],
    github: "https://github.com/Aakam360-5i/no-due-management-.git",
    icon: <Layers className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Mentor–Mentee Management System",
    description: "Built a centralized system for managing mentor–mentee assignments with Excel import/export, student data synchronization, and GSAP-based UI animations.",
    tech: ["React.js", "Node.js", "MySQL", "PostgreSQL", "GSAP"],
    github: "https://github.com/vinothkumar/mentor-system",
    icon: <Code className="w-6 h-6" />,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "MCQ and Coding Validation Platform",
    description: "An online assessment platform supporting MCQ quizzes and coding challenges with real-time validation and multi-language code execution.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    github: "https://github.com/Vinothkumar0311/mcq.git",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Flow Tracker Mobile & Web App",
    description: "A cross-platform productivity app to track daily workflows and habits. Features dynamic progress tracking and scalable AWS backend.",
    tech: ["React Native", "React", "AWS Cloud", "Lambda", "S3"],
    github: "https://github.com/aakam360/ndp.git",
    icon: <Globe className="w-6 h-6" />,
    color: "from-orange-500/20 to-red-500/20"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, ranging from full-stack web applications to cross-platform mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative glass-effect rounded-[2.5rem] p-10 hover-scale hover-glow transition-all duration-700 animate-fade-in-up border border-white/40 shadow-xl overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated background shape */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-5 rounded-2xl bg-gradient-to-br ${project.color} text-primary shadow-inner border border-white/20 group-hover:scale-110 transition-transform duration-500`}>
                  {project.icon}
                </div>
                {/* <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-all duration-300 shadow-sm"
                    title="View Source Code"
                  >
                    <Github size={22} />
                  </a>
                  <button 
                    className="p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-all duration-300 shadow-sm"
                    title="View Live Demo"
                  >
                    <ExternalLink size={22} />
                  </button>
                </div> */}
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-white/60 text-primary border border-primary/10 rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
