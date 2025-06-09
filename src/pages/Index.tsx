
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, Download, Menu, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
