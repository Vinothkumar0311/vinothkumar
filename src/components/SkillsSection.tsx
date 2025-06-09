
import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Coffee, Smartphone, Database, Users, Target, FolderOpen } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technicalSkills = [
    { name: 'REACTJS', percentage: 60, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'NODEJS', percentage: 70, icon: Server, color: 'from-green-500 to-emerald-500' },
    { name: 'JAVA', percentage: 70, icon: Coffee, color: 'from-orange-500 to-red-500' },
    { name: 'FLUTTER', percentage: 75, icon: Smartphone, color: 'from-blue-600 to-indigo-600' },
    { name: 'MYSQL', percentage: 40, icon: Database, color: 'from-yellow-500 to-orange-500' },
  ];

  const softSkills = [
    { name: 'Team Work', percentage: 80, icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Project Management', percentage: 70, icon: Target, color: 'from-indigo-500 to-purple-500' },
    { name: 'Organization', percentage: 70, icon: FolderOpen, color: 'from-teal-500 to-cyan-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
    const IconComponent = skill.icon;
    
    return (
      <div 
        className="mb-8 animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-r ${skill.color} p-2 rounded-lg`}>
              <IconComponent className="text-white" size={20} />
            </div>
            <span className="text-foreground font-semibold text-lg">{skill.name}</span>
          </div>
          <span className="text-primary font-bold text-lg">{skill.percentage}%</span>
        </div>
        
        <div className="relative">
          <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
            <div
              className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out ${
                isVisible ? 'animate' : ''
              }`}
              style={{ 
                '--progress-width': `${skill.percentage}%`,
                width: isVisible ? `${skill.percentage}%` : '0%'
              } as any}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-30" />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and soft skills that enable me 
            to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-left">
            <div className="glass-effect rounded-2xl p-8 hover-scale h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <Code className="text-primary" size={24} />
                </div>
                Technical Skills
              </h3>
              <div>
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in-right">
            <div className="glass-effect rounded-2xl p-8 hover-scale h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <Users className="text-primary" size={24} />
                </div>
                Soft Skills
              </h3>
              <div>
                {softSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 animate-fade-in">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Node.js', 'JavaScript', 'TypeScript', 'Java', 'Flutter',
                'MySQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Figma'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
