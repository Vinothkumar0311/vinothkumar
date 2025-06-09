
import React from 'react';
import { Mail, Phone, MapPin, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="text-primary">VinothKumar</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Web & App Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Turning complex problems into simple, beautiful, and intuitive digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hover-scale">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6 animate-fade-in lg:pl-12">
            <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">svinothkumar0301@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground">+91 6382169091</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Tiruchengode, Namakkal, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Birthday</p>
                    <p className="text-foreground">November 3, 2001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
