
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="animate-fade-in-left relative">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
              
              <div className="relative w-80 h-[30rem] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 border-4 border-white">
                <img 
                  src="/photo.png" 
                  alt="Vinoth Kumar" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-medium tracking-widest uppercase mb-1 text-primary-light">Full-Stack Developer</p>
                  <h4 className="text-2xl font-bold">Vinoth Kumar</h4>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -right-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-float border border-white/50 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-tighter">Availability</p>
                    <p className="text-xs font-bold text-foreground">Ready for Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in-right space-y-8">
            <div className="glass-effect rounded-[2.5rem] p-10 hover-glow border border-white/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              
              <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <span className="w-10 h-1 bg-primary mr-4 rounded-full"></span>
                Who Am I?
              </h3>
              
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  I specialize in <span className="text-primary font-medium">web/app development and design</span>, creating user-friendly and visually appealing interfaces that solve real-world problems.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Proficient in <span className="text-foreground font-semibold italic">Reactjs, Flutter, Nextjs, MYSQL, and Node.js</span>. I focus on building functional, attractive digital solutions that convey your identity creatively.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-[2rem] p-6 text-center border border-primary/10 group hover:bg-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                  <div className="text-4xl font-black text-primary group-hover:text-white transition-colors duration-500 mb-2">20+</div>
                  <div className="text-sm font-bold text-muted-foreground group-hover:text-white/80 transition-colors duration-500 uppercase tracking-widest">Projects Done</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-[2rem] p-6 text-center border border-accent/10 group hover:bg-accent transition-all duration-500 hover:shadow-xl hover:shadow-accent/20">
                  <div className="text-4xl font-black text-accent group-hover:text-white transition-colors duration-500 mb-2">2+</div>
                  <div className="text-sm font-bold text-muted-foreground group-hover:text-white/80 transition-colors duration-500 uppercase tracking-widest">Years of Exp.</div>
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
