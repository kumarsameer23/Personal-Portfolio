import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      institution: 'Babu Banarasi Das University',
      location: 'Lucknow, Uttar Pradesh',
      year: 'Present',
      details: 'Currently pursuing final year of Bachelor of Technology.'
    },
    {
      id: 2,
      degree: 'Senior Secondary (12th) - PCM',
      institution: 'Avadh Collegiate',
      board: 'CBSE',
      percentage: '80%',
      location: 'Lucknow, Uttar Pradesh',
      year: '2021',
      details: 'Completed 12th standard with Physics, Chemistry, and Mathematics specialization.'
    },
    {
      id: 3,
      degree: 'Secondary (10th)',
      institution: 'Central Public School',
      board: 'CBSE',
      percentage: '77%',
      location: 'Lucknow, Uttar Pradesh',
      year: '2019',
      details: 'Completed 10th standard with focus on core subjects.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            My academic journey and educational qualifications.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 md:translate-x-px"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="card ml-8 md:ml-0">
                    <div className="flex items-center mb-3 justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="text-teal-500" size={20} />
                        <h3 className="text-lg font-bold">{item.degree}</h3>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar size={16} className="mr-1" />
                        {item.year}
                      </div>
                    </div>
                    
                    <h4 className="text-base font-medium">{item.institution}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.location}</p>
                    
                    {(item.percentage || item.board) && (
                      <div className="mb-3">
                        {item.board && (
                          <span className="text-sm bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 rounded mr-2">
                            {item.board}
                          </span>
                        )}
                        
                        {item.percentage && (
                          <span className="text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2.5 py-0.5 rounded">
                            {item.percentage}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};