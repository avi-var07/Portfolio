import { useInView } from 'react-intersection-observer';
import './Education.css';

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      school: 'Lovely Professional University (LPU)',
      location: 'Punjab, India',
      year: '2023 – 2026',
      cgpa: '8.64 / 10',
      milestone: 'Current',
      icon: '🎓',
      highlights: [
        'Ranked Top 50 in college',
        'CGPA: 8.64 / 10',
        'Active in coding clubs & competitions',
      ],
    },
    {
      degree: 'Senior Secondary (XII)',
      field: 'Science Stream',
      school: 'Delhi Public School (DPS)',
      location: 'Mohali, Punjab',
      year: '2021 – 2023',
      cgpa: '95.2 %',
      milestone: 'Passed',
      icon: '📘',
      highlights: [
        'Achieved 95.2% in 12th',
        'Physics: 96/100',
        'Developed problem-solving foundation',
      ],
    },
    {
      degree: 'Secondary (X)',
      field: 'CBSE',
      school: 'Delhi Public School (DPS)',
      location: 'Mohali, Punjab',
      year: '2019 – 2021',
      cgpa: '96 %',
      milestone: 'Passed',
      icon: '📗',
      highlights: [
        'Scored 96% (Grade A+)',
        'Mathematics: 98/100',
        'Strong foundation in STEM',
      ],
    },
  ];

  return (
    <section id="education" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">// EDUCATION</span>
            <h2 className="sec-title">MY LEARNING <span>JOURNEY</span></h2>
            <div className="sec-line" />
          </div>
        </Reveal>

        <div className="education-container">
          <div className="road-journey">
            {education.map((item, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="journey-item">
                  {/* Road marker */}
                  <div className="road-marker">
                    <div className="marker-dot">
                      <span>{item.icon}</span>
                    </div>
                    {index < education.length - 1 && <div className="road-line" />}
                  </div>

                  {/* Content card */}
                  <div className={`edu-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="edu-card-inner">
                      <div className="edu-year">
                        <span className="year-badge">{item.year}</span>
                        <span className="milestone-badge">{item.milestone}</span>
                      </div>

                      <div className="edu-main">
                        <h3 className="edu-degree">{item.degree}</h3>
                        <div className="edu-field">{item.field}</div>
                        <div className="edu-school">
                          <i className="fas fa-building"></i> {item.school}
                        </div>
                        <div className="edu-location">
                          <i className="fas fa-map-marker-alt"></i> {item.location}
                        </div>
                        {item.cgpa && <div className="edu-cgpa">CGPA/Grade: <strong>{item.cgpa}</strong></div>}
                      </div>

                      <ul className="edu-highlights">
                        {item.highlights.map((h, i) => (
                          <li key={i}>
                            <span className="highlight-dot">✓</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Journey stats */}
          <Reveal delay={300}>
            <div className="journey-stats">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Milestones</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%+</div>
                <div className="stat-label">Average</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Growth</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
