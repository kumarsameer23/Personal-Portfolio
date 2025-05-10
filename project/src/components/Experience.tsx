import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
};

type CertificationItem = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
};

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Web Developer Intern',
      company: 'CodSoft',
      duration: 'Summer 2023',
      description: 'Worked as a web developer intern at CodSoft, focusing on frontend development and responsive design.',
      responsibilities: [
        'Developed a landing page for a gym using modern frontend technologies',
        'Created a personal portfolio for a client with responsive design',
        'Collaborated with the design team to implement user interface components',
        'Participated in code reviews and team discussions'
      ]
    }
  ];

  const certifications: CertificationItem[] = [
    {
      id: 1,
      name: 'Professional Soft Skills Training',
      issuer: 'Learnovate Enterprise',
      date: '2023',
      description: 'Comprehensive soft skills development program focusing on communication, teamwork, and leadership skills.'
    },
    {
      id: 2,
      name: 'Young Professional Soft Skills Program',
      issuer: 'TCS iON',
      date: '2022',
      description: 'Professional development program aimed at enhancing workplace readiness and soft skills for young professionals.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My professional experience and certifications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            
            {experiences.length > 0 ? (
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="card relative border-l-4 border-teal-500">
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <Briefcase size={12} className="text-white" />
                    </div>
                    
                    <div className="pl-4">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">{exp.company}</p>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                      
                      <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                        {exp.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card">
                <p className="text-slate-600 dark:text-slate-400">
                  Currently focusing on academic projects and building my portfolio.
                </p>
              </div>
            )}
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications & Training</h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="card">
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  
                  <div className="flex justify-between mb-3">
                    <p className="text-teal-600 dark:text-teal-400 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400">{cert.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              
              <div className="card">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Leadership', 'Adaptability', 'Time Management', 'Communication', 'Teamwork', 'Problem Solving'].map((skill) => (
                    <div 
                      key={skill}
                      className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-center hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300"
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};