
import React from 'react';
import { Monitor, Code, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'High-quality, modern, responsive designs that capture your brand essence and provide exceptional user experiences.',
      features: ['Responsive Design', 'Modern UI/UX', 'Brand Identity', 'User-Centered']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Scalable and efficient site development using cutting-edge technologies and best practices.',
      features: ['React/Node.js', 'Database Design', 'API Integration', 'Performance Optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Android application development using Flutter for cross-platform compatibility and native performance.',
      features: ['Flutter Development', 'Cross-Platform', 'Native Performance', 'Play Store Ready']
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in creating digital solutions that are not only visually stunning 
            but also highly functional and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 hover-scale hover-glow group animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-primary/10 p-4 rounded-2xl inline-block border border-primary/20">
                    <IconComponent size={48} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
