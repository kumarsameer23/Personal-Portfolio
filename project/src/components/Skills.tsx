import React from 'react';

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number; // 1-10
  }[];
};

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', level: 8 },
        { name: 'C', level: 7 },
        { name: 'Python', level: 7 },
        { name: 'JavaScript', level: 9 },
        { name: 'HTML', level: 9 },
        { name: 'CSS', level: 8 },
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 8 },
        { name: 'Express.js', level: 7 },
        { name: 'Node.js', level: 7 },
        { name: 'Tailwind CSS', level: 8 },
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', level: 7 },
        { name: 'MySQL', level: 7 },
      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Data Structures', level: 8 },
        { name: 'Algorithms', level: 8 },
        { name: 'Git & GitHub', level: 7 },
        { name: 'Problem Solving', level: 8 },
        { name: 'UI/UX Design', level: 6 },
      ]
    },
  ];

  // Function to render skill bar
  const renderSkillBar = (level: number) => {
    const percentage = level * 10;
    
    return (
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div 
          className="bg-teal-500 h-2.5 rounded-full relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-30 overflow-hidden animate-shimmer" style={{
            transform: 'translateX(-100%)'
          }}></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Technical competencies and professional capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card h-full">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b dark:border-slate-700">
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level * 10}%</span>
                    </div>
                    {renderSkillBar(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Technical Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'C', 'Python', 'Git', 'MySQL', 'Tailwind CSS', 'DSA'].map((tech) => (
              <div 
                key={tech}
                className="px-5 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:shadow-md transition-all duration-300"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block card px-8 py-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-teal-500">150+</span>
              <span className="text-xl font-medium">DSA Problems Solved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};