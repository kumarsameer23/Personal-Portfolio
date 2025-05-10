import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-8 dark:bg-slate-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-teal-500 mb-2">
              Sameer Kumar
            </h2>
            <p className="text-slate-400">
              MERN Stack Developer | Final Year BTech Student
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-slate-400 mb-2">
              &copy; {currentYear} Sameer Kumar. All rights reserved.
            </p>
            
            <a 
              href="#home"
              className="inline-flex items-center justify-center p-2 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};