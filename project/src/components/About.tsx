import React from 'react';
import { MapPin, Calendar, BookOpen, Camera } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
              <p className="text-slate-600 dark:text-slate-400">
                I'm a final year BTech student at Babu Banarasi Das University with a passion for 
                web development and software engineering. I specialize in creating responsive 
                and user-friendly web applications using the MERN stack.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-4">
                With a strong foundation in Data Structures and Algorithms, having solved over 150+ 
                problems, I approach development with both technical proficiency and a keen eye for user experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 card">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-teal-500" size={20} />
                  <h4 className="font-medium">Location</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">Lucknow, Uttar Pradesh</p>
              </div>
              
              <div className="flex-1 card">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="text-teal-500" size={20} />
                  <h4 className="font-medium">Age</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">20 Years</p>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="text-teal-500" size={20} />
                <h4 className="font-medium">Current Education</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Bachelor of Technology, Final Year<br />
                Babu Banarasi Das University
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-2">
                <Camera className="text-teal-500" size={20} />
                <h4 className="font-medium">Hobbies</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Photography and Cinematography<br />
                <a 
                  href="https://www.instagram.com/delusional_eyes_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  Check out my photography work
                </a>
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Personal Strengths</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Leadership</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Demonstrated strong leadership abilities during various events and training periods 
                    at Learnovate Enterprises, effectively guiding teams to achieve collective goals.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Adaptability</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Quick to learn and adapt to new technologies and workflows, enabling me to stay 
                    relevant in the rapidly evolving tech landscape.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Time Efficiency</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Proven ability to manage time effectively, meeting project deadlines while 
                    maintaining high-quality standards across all deliverables.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Web Development', 'Data Structures', 'Algorithms', 'Problem Solving', 'UI/UX Design', 'Open Source', 'Photography', 'Cinematography'].map(interest => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};