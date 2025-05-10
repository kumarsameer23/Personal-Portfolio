import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Netflix Clone',
      description: 'A frontend clone of Netflix landing page built with React and Tailwind CSS. Features responsive design and modern UI components.',
      image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://papaya-wisp-a5c4c9.netlify.app/',
      githubLink: 'https://github.com/kumarsameer23',
      featured: true
    },
    {
      id: 2,
      title: 'Java Calculator',
      description: 'A GUI-based calculator application built with Java Swing. Supports basic arithmetic operations with a clean user interface.',
      image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Java', 'Swing', 'AWT'],
      githubLink: 'https://github.com/kumarsameer23'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'A responsive personal portfolio website developed for a client during my internship at CodSoft.',
      image: 'https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/kumarsameer23'
    },
    {
      id: 4,
      title: 'Gym Landing Page',
      description: 'A responsive landing page for a gym, developed during my internship at CodSoft.',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/kumarsameer23'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'react', label: 'React' },
    { id: 'java', label: 'Java' },
    { id: 'html', label: 'HTML/CSS' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'react') return project.technologies.includes('React');
    if (activeFilter === 'java') return project.technologies.includes('Java');
    if (activeFilter === 'html') return project.technologies.includes('HTML') || project.technologies.includes('CSS');
    return true;
  });

  return (
    <section id="projects" className="section bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A collection of projects I've built during my academic journey and professional experience.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-teal-500 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Project */}
        {filteredProjects.some(p => p.featured) && (
          <div className="mb-16">
            {filteredProjects
              .filter(p => p.featured)
              .map(project => (
                <div key={project.id} className="card overflow-hidden">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                            <Star size={14} className="mr-1" /> Featured
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        )}
                        
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                          >
                            <Github size={16} className="mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter(p => !p.featured)
            .map(project => (
              <div key={project.id} className="card overflow-hidden group">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      <Github size={14} className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};