
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg border border-border animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I am a web and app developer with experience in developing websites and applications 
            for all kinds of businesses. I enjoy turning complex problems into simple, beautiful, 
            and intuitive designs. My job is to build websites and applications that are functional, 
            user-friendly, and attractive. My goal is to deliver your message and identity in the 
            most creative way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
