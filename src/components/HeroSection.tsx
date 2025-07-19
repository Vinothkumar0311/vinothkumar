
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Web Developer', 'App Developer', 'Problem Solver', 'UI/UX Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    setDisplayText('');

    const typingInterval = setInterval(() => {
      if (index < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 3 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary text-lg font-medium animate-fade-in">
                  Hello, I'm
                </p>
                <h1 className="text-hero gradient-text animate-fade-in-up">
                  VinothKumar Sakthivel
                </h1>
                <div className="h-12 flex items-center">
                  <span className="text-2xl text-muted-foreground mr-2">I'm a </span>
                  <span className="text-2xl font-semibold text-primary min-w-0">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in">
                Turning complex problems into simple, beautiful, and intuitive digital solutions 
                that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="hover-scale hover-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-scale border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="animate-fade-in-right">
            {/* <div className="glass-effect rounded-2xl p-8 hover-scale hover-glow"> */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                  VK
                </div>
                <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">svinothkumar0301@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 6382169091</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Namakkal, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Birthday</p>
                    <p className="text-foreground font-medium">November 3, 2001</p>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
