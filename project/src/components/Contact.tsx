import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Code2, Camera } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Get in touch with me for collaboration, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:sameerkumar10122004@gmail.com" 
                    className="text-teal-500 hover:underline"
                  >
                    sameerkumar10122004@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400">+91 9129194850</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/kumarsameer23" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-500 transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/sameer-kumar-14385a258" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-500 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href="https://leetcode.com/u/ashxcode/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-500 transition-colors duration-300"
                  aria-label="LeetCode Profile"
                >
                  <Code2 size={20} />
                </a>

                <a 
                  href="https://www.instagram.com/delusional_eyes_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-500 transition-colors duration-300"
                  aria-label="Photography Instagram"
                >
                  <Camera size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};