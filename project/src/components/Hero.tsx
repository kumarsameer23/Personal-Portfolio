import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Code2, Camera } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                <span className="block text-slate-500 text-xl mb-2">Hello, I'm</span>
                Sameer Kumar
                <span className="block mt-2 text-teal-500">MERN Stack Developer</span>
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                A passionate final year BTech student with expertise in web development 
                and a strong foundation in Data Structures and Algorithms.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                >
                  Get In Touch
                </a>
                
                <a 
                  href="#projects" 
                  className="btn btn-outline"
                >
                  View Projects
                </a>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://github.com/kumarsameer23" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:border-teal-500 transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <GitHub size={20} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/sameer-kumar-14385a258" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:border-teal-500 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href="https://leetcode.com/u/ashxcode/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:border-teal-500 transition-colors duration-300"
                  aria-label="LeetCode Profile"
                >
                  <Code2 size={20} />
                </a>

                <a 
                  href="https://www.instagram.com/delusional_eyes_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:border-teal-500 transition-colors duration-300"
                  aria-label="Photography Instagram"
                >
                  <Camera size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-lg shadow-xl overflow-hidden max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-80"></div>
              <img 
                src="/sameer.jpg" 
                alt="Profile of Sameer Kumar"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="text-teal-500" size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};