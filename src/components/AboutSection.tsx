
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 w-80 h-80 mx-auto glass-effect rounded-2xl flex items-center justify-center text-6xl font-bold text-white -rotate-3 hover:rotate-0 transition-transform duration-500">
                VK
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in-right space-y-6">
            <div className="glass-effect rounded-2xl p-8 hover-scale">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Who Am I?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a web and app developer with experience in building websites and applications 
                for businesses of all types. I enjoy turning complex problems into simple, beautiful, 
                and intuitive designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My job is to build functional, user-friendly, and attractive digital solutions 
                that convey your identity in the most creative way. I believe in the power of 
                clean code, innovative design, and seamless user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
