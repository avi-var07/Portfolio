import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Prof. Dr. Ashok Kumar',
      role: 'Senior Faculty - CSE',
      organization: 'Lovely Professional University',
      text: 'Aviral demonstrates exceptional problem-solving skills and a genuine passion for technology. His contributions to academic projects showcase maturity and innovation.',
      avatar: '👨‍🏫',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Project Manager',
      organization: 'Tech Startup',
      text: 'Working with Aviral on the driveSutra project was a pleasure. He delivered quality code, met deadlines, and went above expectations. Highly recommended!',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rahul Patel',
      role: 'Peer Developer',
      organization: 'Coding Community',
      text: 'Aviral\'s approach to DSA and system design is impressive. He\'s always willing to help and share knowledge. A true collaborative developer.',
      avatar: '👨‍💻',
      rating: 5,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    text: '',
    avatar: '😊',
  });

  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.organization || !formData.text) {
      alert('Please fill all fields');
      return;
    }

    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
      rating: 5,
    };

    setTestimonials(prev => [newTestimonial, ...prev]);
    setFormData({ name: '', role: '', organization: '', text: '', avatar: '😊' });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">// TESTIMONIALS</span>
            <h2 className="sec-title">KIND <span>WORDS</span></h2>
            <div className="sec-line" />
          </div>
        </Reveal>

        <div className="testimonials-layout">
          {/* Testimonials Grid */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 80}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                      <div className="author-org">{testimonial.organization}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add Testimonial Form */}
          <Reveal delay={200}>
            <div className="testimonial-form-container">
              <h3 className="form-title">✨ Add Your Testimonial</h3>
              <p className="form-subtitle">Let me know what you think!</p>

              {submitted && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i> Thank you! Your testimonial has been added.
                </div>
              )}

              <form onSubmit={handleSubmit} ref={formRef} className="testimonial-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="avatar-input">Choose Avatar</label>
                    <div className="avatar-picker">
                      {['😊', '👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🏫', '👩‍🏫', '🎓'].map(emoji => (
                        <button
                          key={emoji}
                          type="button"
                          className={`avatar-btn ${formData.avatar === emoji ? 'selected' : ''}`}
                          onClick={() => setFormData(prev => ({ ...prev, avatar: emoji }))}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Your Role *</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      placeholder="e.g., Manager, Developer"
                      value={formData.role}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Company or University"
                    value={formData.organization}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="text">Your Message *</label>
                  <textarea
                    id="text"
                    name="text"
                    rows={4}
                    placeholder="Share your thoughts about working with Aviral..."
                    value={formData.text}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Submit Testimonial
                </button>
              </form>

              <p className="form-note">
                <i className="fas fa-info-circle"></i> All testimonials are displayed publicly
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
