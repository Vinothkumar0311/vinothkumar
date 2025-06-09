
import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      type: 'education',
      title: 'B.E. (Computer Science and Engineering)',
      institution: 'Sri Shanmugha College of Engineering and Technology',
      period: '2018–2022',
      icon: GraduationCap,
    },
    {
      type: 'education',
      title: 'HSC (Computer Science)',
      institution: 'Gandhi Matriculation Higher Secondary School',
      period: '2017–2018',
      icon: GraduationCap,
    },
    {
      type: 'education',
      title: 'SSLC',
      institution: 'Gandhi Matriculation Higher Secondary School',
      period: '2015–2016',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      type: 'certification',
      title: 'Software Engineer',
      institution: 'Aakam360',
      period: 'August 2024 – Present',
      icon: Briefcase,
    },
    {
      type: 'certification',
      title: 'Web Development Internship',
      institution: 'Internshala',
      period: 'Nov 24, 2021 – Feb 21, 2022',
      icon: Award,
    },
    {
      type: 'certification',
      title: 'App Development Internship',
      institution: 'Internshala',
      period: 'Aug 1, 2021 – Oct 21, 2021',
      icon: Award,
    },
    {
      type: 'certification',
      title: 'Java & J2EE',
      institution: 'Greens Technology',
      period: 'Jan 2023 – Apr 2023',
      icon: Award,
    },
    {
      type: 'certification',
      title: 'Internship',
      institution: 'E2 InfoSystem',
      period: 'Mar 2023 – Jul 2023',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-lg border border-border hover-scale"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {item.institution}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="mr-3 text-primary" />
              Certifications & Experience
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-lg border border-border hover-scale"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {item.institution}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
