
import React from 'react';
import { 
  Code, 
  Server, 
  Coffee, 
  Smartphone, 
  Database,
  Users,
  Target,
  FolderOpen
} from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'REACTJS', percentage: 60, icon: Code },
    { name: 'NODEJS', percentage: 70, icon: Server },
    { name: 'JAVA', percentage: 70, icon: Coffee },
    { name: 'FLUTTER', percentage: 75, icon: Smartphone },
    { name: 'MYSQL', percentage: 40, icon: Database },
  ];

  const softSkills = [
    { name: 'Team Work', percentage: 80, icon: Users },
    { name: 'Project Management', percentage: 70, icon: Target },
    { name: 'Organization', percentage: 70, icon: FolderOpen },
  ];

  const SkillBar = ({ skill }: { skill: any }) => {
    const IconComponent = skill.icon;
    return (
      <div className="mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <IconComponent className="text-primary" size={20} />
            <span className="text-foreground font-medium">{skill.name}</span>
          </div>
          <span className="text-muted-foreground text-sm">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Code className="mr-3 text-primary" />
              Technical Skills
            </h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Users className="mr-3 text-primary" />
              Soft Skills
            </h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
