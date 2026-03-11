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
    year: '2023 – 2027',
    cgpa: '8.64 / 10',
    milestone: 'Current',
    icon: '🎓',
    highlights: [
      'Ranked Top 50 in college on Codolio',
      'CGPA: 8.64 / 10',
      'Active in coding clubs & competitions',
    ],
  },
  {
    degree: 'Intermediate (XII)',
    field: 'ISC',
    school: "St. Mary's Convent School",
    location: 'Hinauli, Mughalsarai',
    year: '2022 – 2023',
    cgpa: '91.75 %',
    milestone: 'Completed',
  },
  {
    degree: 'Secondary (X)',
    field: 'ICSE',
    school: "St. Mary's Convent School",
    location: 'Hinauli, Mughalsarai',
    year: '2020 – 2021',
    cgpa: '95 %',
    milestone: 'Completed',
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
                      <span>{item.icon || '🎓'}</span>
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

                      {item.highlights && (
                        <ul className="edu-highlights">
                            {item.highlights.map((h, i) => (
                                <li key={i}>
                                    <span className="highlight-dot">✓</span>
                                    {h}</li>
                                ))}
                                </ul>
                            )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
