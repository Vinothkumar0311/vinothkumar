
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
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 5 + 's',
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.3 + 0.1,
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
                <p className="text-primary text-xl font-medium tracking-wide animate-fade-in uppercase">
                  Hello, I'm
                </p>
                <h1 className="text-hero gradient-text animate-fade-in-up pb-2">
                  VinothKumar Sakthivel
                </h1>
                <div className="h-12 flex items-center">
                  <span className="text-2xl text-muted-foreground mr-2 font-light">I'm a </span>
                  <span className="text-3xl font-bold text-primary min-w-0">
                    {displayText}
                    <span className="animate-pulse ml-1 text-primary/70">|</span>
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in font-light">
                Turning complex problems into simple, beautiful, and <span className="text-primary font-medium">intuitive digital solutions</span> that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in pt-4">
              <Button 
                size="lg" 
                className="hover-scale hover-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-xl shadow-primary/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-scale border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm"
                asChild
              >
                <a href="/autoCV__1_ (1).pdf" download="VinothKumar_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="animate-fade-in-right">
            <div className="glass-effect rounded-[2.5rem] p-10 hover-glow animate-float border border-white/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700"></div>
              
              <div className="text-center mb-10 relative z-10">
                <div className="w-40 h-40 bg-gradient-to-br from-primary via-primary to-accent rounded-3xl mx-auto mb-6 flex items-center justify-center text-5xl font-black text-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  VK
                </div>
                <h3 className="text-2xl font-bold text-foreground">Contact Details</h3>
                <div className="w-12 h-1 bg-primary/30 mx-auto mt-3 rounded-full"></div>
              </div>
              
              <div className="space-y-5 relative z-10">
                <div className="flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-inner">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Email Me</p>
                    <p className="text-foreground font-medium truncate">svinothkumar0301@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-inner">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Call Me</p>
                    <p className="text-foreground font-medium">+91 6382169091</p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-inner">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Location</p>
                    <p className="text-foreground font-medium">Namakkal, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-inner">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Available From</p>
                    <p className="text-foreground font-medium">Monday — Friday</p>
                  </div>
                </div>
              </div>
            </div>
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
