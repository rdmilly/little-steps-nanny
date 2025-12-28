import { useState } from 'react'

export default function App() {
  const [showPortal, setShowPortal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      id: 1,
      icon: '🌟',
      title: 'Full-Day Care',
      price: '$25/hr',
      description: 'Comprehensive care from morning through evening, including meals, activities, and naptime.',
      features: ['8+ hours', 'Meals included', 'Educational activities', 'Daily report']
    },
    {
      id: 2,
      icon: '🌙',
      title: 'Evening Care',
      price: '$22/hr',
      description: 'Perfect for date nights or evening events. Includes dinner, bath time, and bedtime routine.',
      features: ['4-6 hours', 'Dinner prep', 'Bedtime routine', 'Light housekeeping']
    },
    {
      id: 3,
      icon: '📚',
      title: 'After School',
      price: '$20/hr',
      description: 'Homework help, snacks, and supervised play until parents get home.',
      features: ['3-5 hours', 'Homework help', 'Healthy snacks', 'Activity planning']
    },
    {
      id: 4,
      icon: '🎉',
      title: 'Special Events',
      price: '$30/hr',
      description: 'Birthday parties, holidays, or any special occasion requiring extra care.',
      features: ['Flexible hours', 'Party assistance', 'Multiple children', 'Weekend available']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mother of 2',
      text: 'Finding Little Steps was the best decision we made. Our kids absolutely adore their caregiver!',
      avatar: '👩‍🦰'
    },
    {
      name: 'David & Lisa',
      role: 'Parents of toddler',
      text: 'The daily reports and photos give us such peace of mind. Professional and caring service.',
      avatar: '👨‍👩‍👦'
    },
    {
      name: 'Jennifer K.',
      role: 'Working mom',
      text: 'Flexible scheduling that actually works with my unpredictable hours. A lifesaver!',
      avatar: '👩‍💼'
    }
  ]

  return (
    <div style={{ 
      fontFamily: "'Quicksand', sans-serif",
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFBEB 0%, #FFF 50%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Gradient Orbs - Hidden on mobile for performance */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .floating-orb {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        
        .orb-1 {
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,217,61,0.3) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        
        .orb-2 {
          bottom: -150px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(110,207,189,0.25) 0%, transparent 70%);
          animation: float 10s ease-in-out infinite reverse;
        }
        
        .orb-3 {
          top: 40%;
          left: 60%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,143,163,0.2) 0%, transparent 70%);
          animation: float 12s ease-in-out infinite;
        }
        
        .service-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(255,143,163,0.4);
        }
        
        .btn-secondary:hover {
          background: #FFD93D !important;
          color: #2D3047 !important;
        }
        
        /* Desktop nav */
        .desktop-nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        
        /* Mobile menu button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          padding: 8px;
        }
        
        /* Mobile menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,251,235,0.98);
          z-index: 200;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
        
        .mobile-menu.open {
          display: flex;
        }
        
        .mobile-menu a, .mobile-menu button {
          font-size: 20px;
          padding: 16px 32px;
        }
        
        .close-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          cursor: pointer;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 968px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          
          .hero-title {
            font-size: 42px !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        
        @media (max-width: 640px) {
          .floating-orb {
            display: none;
          }
          
          .hero-section {
            padding: 40px 20px 60px !important;
          }
          
          .hero-title {
            font-size: 32px !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .hero-buttons a {
            width: 100%;
            text-align: center;
          }
          
          .hero-emoji-grid {
            display: none !important;
          }
          
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          
          .section-title {
            font-size: 28px !important;
          }
          
          .booking-card {
            padding: 32px 20px !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          
          .trust-badge {
            font-size: 12px !important;
            padding: 6px 14px !important;
          }
          
          .rating-badge {
            display: none !important;
          }
        }
      `}</style>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setMobileMenuOpen(false)}>✕</button>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Services</a>
        <a href="#booking" onClick={() => setMobileMenuOpen(false)} style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Book Now</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Reviews</a>
        <button 
          onClick={() => { setShowPortal(true); setMobileMenuOpen(false); }}
          style={{
            background: 'linear-gradient(135deg, #FF8FA3, #FF6B8A)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif"
          }}
        >
          Client Portal
        </button>
      </div>

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,251,235,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        padding: '12px 20px'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '28px' }}>👣</span>
            <span style={{ 
              fontFamily: "'Nunito', sans-serif",
              fontSize: '20px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF8FA3, #FFD93D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Little Steps
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <a href="#services" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Services</a>
            <a href="#booking" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Book Now</a>
            <a href="#testimonials" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Reviews</a>
            <button 
              onClick={() => setShowPortal(true)}
              style={{
                background: 'linear-gradient(135deg, #FF8FA3, #FF6B8A)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                transition: 'all 0.3s ease'
              }}
              className="btn-primary"
            >
              Client Portal
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            ☰
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="trust-badge" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #C4B5FD, #A78BFA)',
              color: 'white',
              padding: '8px 18px',
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '20px'
            }}>
              ✨ Trusted by 100+ families
            </div>
            <h1 className="hero-title" style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '48px',
              fontWeight: 800,
              color: '#2D3047',
              lineHeight: 1.1,
              marginBottom: '20px'
            }}>
              Caring for your
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #FF8FA3, #FFD93D, #6ECFBD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                little ones
              </span>
            </h1>
            <p className="hero-subtitle" style={{
              fontSize: '18px',
              color: '#6B7280',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}>
              Professional, loving childcare that fits your family's needs. 
              Flexible scheduling, transparent pricing, and a nanny who 
              becomes part of your family.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="#booking"
                style={{
                  background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                  color: 'white',
                  padding: '16px 28px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '16px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(110,207,189,0.3)'
                }}
                className="btn-primary"
              >
                Book a Meet & Greet
              </a>
              <a 
                href="#services"
                style={{
                  background: 'transparent',
                  color: '#2D3047',
                  padding: '16px 28px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '16px',
                  border: '2px solid #2D3047',
                  transition: 'all 0.3s ease'
                }}
                className="btn-secondary"
              >
                View Services
              </a>
            </div>
          </div>
          
          <div className="hero-emoji-grid" style={{ 
            position: 'relative',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFD93D, #FF8FA3)',
              borderRadius: '24px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}>
                {['👶', '🧸', '🎨', '📖'].map((emoji, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    animation: `bounce 2s ease-in-out ${i * 0.2}s infinite`
                  }}>
                    <span style={{ fontSize: '40px' }}>{emoji}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Rating badge */}
            <div className="rating-badge" style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'white',
              padding: '12px 18px',
              borderRadius: '14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '20px' }}>⭐</span>
              <div>
                <div style={{ fontWeight: 700, color: '#2D3047', fontSize: '14px' }}>5.0 Rating</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>50+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        background: 'white',
        padding: '80px 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title" style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '36px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '12px'
            }}>
              Services that fit your life
            </h2>
            <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '500px', margin: '0 auto' }}>
              From regular weekly care to date night coverage, I'm here to help your family thrive.
            </p>
          </div>
          
          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}>
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ 
                  fontSize: '40px', 
                  display: 'block', 
                  marginBottom: '16px' 
                }}>
                  {service.icon}
                </span>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#2D3047',
                  marginBottom: '6px'
                }}>
                  {service.title}
                </h3>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '12px'
                }}>
                  {service.price}
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#6B7280',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{
                      fontSize: '12px',
                      color: '#2D3047',
                      padding: '5px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ color: '#6ECFBD' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{
        background: 'linear-gradient(180deg, #FFFBEB 0%, #FFF 100%)',
        padding: '80px 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="booking-card" style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          background: 'white',
          borderRadius: '28px',
          padding: '48px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 className="section-title" style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '36px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '12px'
            }}>
              Book Your Care
            </h2>
            <p style={{ fontSize: '16px', color: '#6B7280' }}>
              Schedule a free meet & greet or book your first session
            </p>
          </div>

          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '6px',
              marginBottom: '20px'
            }}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#6B7280',
                  fontSize: '12px',
                  padding: '6px'
                }}>
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2;
                const isValid = day > 0 && day <= 31;
                const isAvailable = isValid && ![6, 7, 13, 14, 20, 21, 27, 28].includes(day);
                return (
                  <div 
                    key={i}
                    style={{
                      textAlign: 'center',
                      padding: '10px 4px',
                      borderRadius: '10px',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: isAvailable ? 'pointer' : 'default',
                      background: isAvailable ? 'white' : 'transparent',
                      color: isValid ? (isAvailable ? '#2D3047' : '#D1D5DB') : 'transparent',
                      border: isAvailable ? '2px solid #E5E7EB' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isValid ? day : ''}
                  </div>
                );
              })}
            </div>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '13px', 
              color: '#6B7280' 
            }}>
              🟢 Available &nbsp;&nbsp; ⚪ Booked
            </p>
          </div>

          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #FF8FA3, #FF6B8A)',
            color: 'white',
            border: 'none',
            padding: '18px',
            borderRadius: '14px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif",
            transition: 'all 0.3s ease'
          }}
          className="btn-primary"
          >
            Schedule Free Consultation →
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'white',
        padding: '80px 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="section-title" style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '36px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '12px'
            }}>
              What families are saying
            </h2>
          </div>
          
          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {testimonials.map((testimonial, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #FFFBEB, #FFF)',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(255,217,61,0.3)'
              }}>
                <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>
                  {testimonial.avatar}
                </span>
                <p style={{
                  fontSize: '15px',
                  color: '#2D3047',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#2D3047', fontSize: '14px' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '13px', color: '#6B7280' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#2D3047',
        color: 'white',
        padding: '48px 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="footer-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>👣</span>
              <span style={{ 
                fontFamily: "'Nunito', sans-serif",
                fontSize: '20px',
                fontWeight: 800
              }}>
                Little Steps
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '14px' }}>
              Professional, loving childcare that becomes part of your family. 
              Serving families with flexible, transparent, and caring service.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Full-Day Care', 'Evening Care', 'After School', 'Special Events'].map((item, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  <a href="#services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>📧 hello@littlesteps.com</li>
              <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>📱 (555) 123-4567</li>
              <li style={{ marginBottom: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>📍 Your Local Area</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Follow Along</h4>
            <div style={{ display: 'flex', gap: '14px' }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <span key={i} style={{ 
                  fontSize: '22px', 
                  cursor: 'pointer',
                  opacity: 0.8,
                  transition: 'opacity 0.2s'
                }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '13px'
        }}>
          <span>© 2025 Little Steps Nanny. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>

      {/* Client Portal Modal */}
      {showPortal && (
        <div 
          onClick={() => setShowPortal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)',
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '36px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '12px' }}>👣</span>
              <h3 style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '24px',
                fontWeight: 800,
                color: '#2D3047',
                marginBottom: '6px'
              }}>
                Client Portal
              </h3>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>Sign in to access your family dashboard</p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px', 
                  fontWeight: 600,
                  color: '#2D3047',
                  fontSize: '14px'
                }}>
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '2px solid #E5E7EB',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px', 
                  fontWeight: 600,
                  color: '#2D3047',
                  fontSize: '14px'
                }}>
                  Password
                </label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '2px solid #E5E7EB',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>
              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                  color: 'white',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif"
                }}
              >
                Sign In
              </button>
            </form>
            
            <p style={{ 
              textAlign: 'center', 
              marginTop: '20px', 
              color: '#6B7280',
              fontSize: '13px' 
            }}>
              New family? <a href="#booking" onClick={() => setShowPortal(false)} style={{ color: '#FF8FA3', fontWeight: 600 }}>Book a consultation</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
