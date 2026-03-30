import React from 'react';

const techStacks = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="tech-grid">
        {techStacks.map((tech) => (
          <div key={tech.name} className="tech-card glass-card">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-section {
          padding: 60px 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          transition: var(--transition-smooth);
        }
        .tech-card:hover {
          transform: scale(1.05);
          border-color: var(--primary);
        }
        .tech-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 12px;
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.3));
        }
        .tech-name {
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}} />
    </section>
  );
};

export default TechStack;
