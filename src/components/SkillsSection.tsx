// import React, { useState, useEffect, useRef } from 'react';
// import { Code, Server, Coffee, Smartphone, Database, Users, Target, FolderOpen } from 'lucide-react';

// const SkillsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const technicalSkills = [
//     { name: 'REACTJS', percentage: 60, icon: Code, color: 'from-blue-400 to-blue-600' },
//     { name: 'NODEJS', percentage: 70, icon: Server, color: 'from-green-400 to-green-600' },
//     { name: 'JAVA', percentage: 70, icon: Coffee, color: 'from-orange-400 to-orange-600' },
//     { name: 'FLUTTER', percentage: 75, icon: Smartphone, color: 'from-blue-500 to-indigo-600' },
//     { name: 'MYSQL', percentage: 40, icon: Database, color: 'from-yellow-400 to-orange-500' },
//   ];

//   const softSkills = [
//     { name: 'Team Work', percentage: 80, icon: Users, color: 'from-purple-400 to-pink-500' },
//     { name: 'Project Management', percentage: 70, icon: Target, color: 'from-indigo-400 to-purple-500' },
//     { name: 'Organization', percentage: 70, icon: FolderOpen, color: 'from-teal-400 to-cyan-500' },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
//     const IconComponent = skill.icon;

//     return (
//       <div
//         className="mb-8 animate-fade-in-up"
//         style={{ animationDelay: `${index * 0.1}s` }}
//       >
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-3">
//             <div className={`bg-gradient-to-r ${skill.color} p-2 rounded-xl shadow-lg`}>
//               <IconComponent className="text-white" size={20} />
//             </div>
//             <span className="text-foreground font-semibold text-lg">{skill.name}</span>
//           </div>
//           <span className="text-primary font-bold text-lg">{skill.percentage}%</span>
//         </div>

//         <div className="relative">
//           <div className="w-full bg-secondary rounded-full h-3 overflow-hidden border border-primary/10">
//             <div
//               className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out ${
//                 isVisible ? 'animate' : ''
//               }`}
//               style={{
//                 '--progress-width': `${skill.percentage}%`,
//                 width: isVisible ? `${skill.percentage}%` : '0%'
//               } as any}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white" ref={sectionRef}>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-section-title gradient-text mb-6">
//             Skills & Expertise
//           </h2>
//           <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive overview of my technical skills and soft skills that enable me
//             to deliver exceptional digital solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Technical Skills */}
//           <div className="animate-fade-in-left">
//             <div className="glass-effect rounded-3xl p-8 hover-scale h-full">
//               <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
//                 <div className="bg-primary/10 p-2 rounded-xl mr-3 border border-primary/20">
//                   <Code className="text-primary" size={24} />
//                 </div>
//                 Technical Skills
//               </h3>
//               <div>
//                 {technicalSkills.map((skill, index) => (
//                   <SkillBar key={index} skill={skill} index={index} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Soft Skills */}
//           <div className="animate-fade-in-right">
//             <div className="glass-effect rounded-3xl p-8 hover-scale h-full">
//               <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
//                 <div className="bg-primary/10 p-2 rounded-xl mr-3 border border-primary/20">
//                   <Users className="text-primary" size={24} />
//                 </div>
//                 Soft Skills
//               </h3>
//               <div>
//                 {softSkills.map((skill, index) => (
//                   <SkillBar key={index} skill={skill} index={index} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Skills Summary */}
//         <div className="mt-12 animate-fade-in">
//           <div className="glass-effect rounded-3xl p-8 text-center">
//             <h3 className="text-xl font-semibold text-foreground mb-6">
//               Technology Stack
//             </h3>
//             <div className="flex flex-wrap justify-center gap-4">
//               {[
//                 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Java', 'Flutter',
//                 'MySQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Figma'
//               ].map((tech, index) => (
//                 <span
//                   key={index}
//                   className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300 border border-primary/20"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Server,
  Coffee,
  Smartphone,
  Database,
  Users,
  Target,
  FolderOpen,
} from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technicalSkills = [
    {
      name: "REACTJS",
      percentage: 60,
      icon: Code,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "NODEJS",
      percentage: 70,
      icon: Server,
      color: "from-green-400 to-green-600",
    },
    {
      name: "JAVA",
      percentage: 70,
      icon: Coffee,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "FLUTTER",
      percentage: 75,
      icon: Smartphone,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "MYSQL",
      percentage: 40,
      icon: Database,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const softSkills = [
    {
      name: "Team Work",
      percentage: 80,
      icon: Users,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Project Management",
      percentage: 70,
      icon: Target,
      color: "from-indigo-400 to-purple-500",
    },
    {
      name: "Organization",
      percentage: 70,
      icon: FolderOpen,
      color: "from-teal-400 to-cyan-500",
    },
  ];

  const techStack = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    // { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    // { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
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
            <div
              className={`bg-gradient-to-r ${skill.color} p-2 rounded-xl shadow-lg`}
            >
              <IconComponent className="text-white" size={20} />
            </div>
            <span className="text-foreground font-semibold text-lg">
              {skill.name}
            </span>
          </div>
          <span className="text-primary font-bold text-lg">
            {skill.percentage}%
          </span>
        </div>

        <div className="relative">
          <div className="w-full bg-secondary rounded-full h-3 overflow-hidden border border-primary/10">
            <div
              className={`progress-bar h-full bg-gradient-to-r ${
                skill.color
              } rounded-full transition-all duration-2000 ease-out ${
                isVisible ? "animate" : ""
              }`}
              style={
                {
                  "--progress-width": `${skill.percentage}%`,
                  width: isVisible ? `${skill.percentage}%` : "0%",
                } as any
              }
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and soft skills that
            enable me to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-left">
            <div className="glass-effect rounded-3xl p-8 hover-scale h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="bg-primary/10 p-2 rounded-xl mr-3 border border-primary/20">
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
            <div className="glass-effect rounded-3xl p-8 hover-scale h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="bg-primary/10 p-2 rounded-xl mr-3 border border-primary/20">
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

        {/* Technology Stack with Logos */}
        <div className="mt-12 animate-fade-in">
          <div className="glass-effect rounded-3xl p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                // <span
                //   key={index}
                //   className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-white hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 relative z-10"
                // >
                //   <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                //   {tech.name}
                // </span>
                <span
                  key={index}
                  className="flex flex-col items-center gap-2 bg-primary/10 text-primary px-4 py-3 rounded-xl text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-white hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 relative z-10 justify-center"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-center">{tech.name}</span>
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
