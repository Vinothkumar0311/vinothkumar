
import React from 'react';
import { Monitor, Code, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'The most modern and high-quality design made at a professional level.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-quality development of websites at the professional level.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Professional development of Android applications.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What I'm Doing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg border border-border hover-scale animate-fade-in group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
