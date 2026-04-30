
import React from 'react';
import { GraduationCap, Award, Briefcase, Calendar, Smartphone } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      type: 'education',
      title: 'B.E. in Computer Science and Engineering',
      institution: 'Sri Shanmugha College of Engineering and Technology',
      period: '2018 – 2022',
      icon: GraduationCap,
      description: 'Focused on software engineering, data structures, and web technologies.'
    },
    {
      type: 'education',
      title: 'HSC (Computer Science)',
      institution: 'Gandhi Matriculation Higher Secondary School',
      period: '2017 – 2018',
      icon: GraduationCap,
      description: 'Specialized in computer science with mathematics and physics.'
    },
    {
      type: 'education',
      title: 'SSLC',
      institution: 'Gandhi Matriculation Higher Secondary School',
      period: '2015 – 2016',
      icon: GraduationCap,
      description: 'Built a strong foundation in science and mathematics.'
    },
  ];

  const experience = [
    {
      type: 'experience',
      title: 'Software Engineer',
      institution: 'Aakam360',
      period: 'Aug 2024 – Present',
      icon: Briefcase,
      description: 'Full-stack development involving modern technologies like React, Node.js, and cloud platforms. Worked on scalable web applications.'
    },
    {
      type: 'experience',
      title: 'Mobile App Development Intern',
      institution: 'Senchola Technology Solutions',
      period: 'Sep 2023 – Dec 2023',
      icon: Smartphone,
      description: 'Achieved a J1+ Grade. Recognized for enthusiasm, leadership, and self-motivation during the virtual internship.'
    },
    {
      type: 'experience',
      title: 'Software Development Intern',
      institution: 'E2 InfoSystem',
      period: 'Mar 2023 – Jul 2023',
      icon: Briefcase,
      description: 'Involved in full-stack projects, implementing REST APIs and managing SQL/NoSQL databases.'
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experience that shaped my expertise 
            in web and mobile development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="animate-fade-in-left">
            {/* <div className="glass-effect rounded-2xl p-8"> */}
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <GraduationCap className="mr-3 text-primary" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="timeline-item hover-scale">
                      <div className="glass-effect rounded-xl p-6 hover-glow">
                        <div className="flex items-start space-x-4">
                          <div className="text-primary mt-1">
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {item.title}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {item.institution}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <Calendar size={16} className="mr-2" />
                              {item.period}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            {/* </div> */}
          </div>

          {/* Experience Timeline */}
          <div className="animate-fade-in-right">
            {/* <div className="glass-effect rounded-2xl p-8"> */}
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Briefcase className="mr-3 text-primary" size={28} />
                Experience & Certifications
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="timeline-item hover-scale">
                      <div className="glass-effect rounded-xl p-6 hover-glow">
                        <div className="flex items-start space-x-4">
                          <div className="text-primary mt-1">
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                              {item.title}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {item.institution}
                            </p>
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <Calendar size={16} className="mr-2" />
                              {item.period}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
