'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { TERMS_SECTIONS } from './termsData';

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState<string>('reservations');

  useEffect(() => {
    const handleScroll = () => {
      // Scroll spy logic
      if (!TERMS_SECTIONS) return;
      const sectionElements = TERMS_SECTIONS.map(s => s?.id ? document.getElementById(s.id) : null);
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            const currentSection = TERMS_SECTIONS[i];
            if (currentSection?.id) {
              setActiveSection(currentSection.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!TERMS_SECTIONS || !Array.isArray(TERMS_SECTIONS) || TERMS_SECTIONS.length === 0) {
    return (
      <section style={{ padding: '100px 5%', textAlign: 'center', minHeight: '400px' }}>
        <h2>Terms & Conditions</h2>
        <p>Information currently unavailable. Please contact the front desk.</p>
      </section>
    );
  }

  return (
    <section className="terms-container">
      <style>{`
        .terms-container {
          background-color: #FAF9F6;
          padding: 80px 5%;
          position: relative;
        }

        .terms-layout {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        /* SIDEBAR NAVIGATION */
        .terms-sidebar {
          flex: 0 0 320px;
          position: sticky;
          top: 120px;
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          border: 1px solid rgba(201, 160, 48, 0.1);
        }

        .sidebar-title {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 60vh;
          overflow-y: auto;
          padding-right: 10px;
        }

        .sidebar-nav::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background-color: #ddd;
          border-radius: 4px;
        }

        .sidebar-link {
          background: none;
          border: none;
          text-align: left;
          padding: 12px 16px;
          font-size: 14px;
          color: #555;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .sidebar-link:hover {
          background: #fdfbf7;
          color: #111;
        }

        .sidebar-link.active {
          background: #C9A030;
          color: #fff;
          box-shadow: 0 4px 12px rgba(201, 160, 48, 0.3);
        }

        /* MAIN CONTENT */
        .terms-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .policy-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid #f0f0f0;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .policy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.05);
          border-color: rgba(201, 160, 48, 0.2);
        }

        .policy-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .policy-icon-wrapper {
          width: 56px;
          height: 56px;
          background: #fdfbf7;
          border: 1px solid rgba(201, 160, 48, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A030;
          flex-shrink: 0;
        }

        .policy-title {
          font-family: var(--font-serif);
          font-size: 28px;
          color: #111;
          font-weight: 400;
        }

        .policy-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(to right, rgba(201, 160, 48, 0.4), transparent);
          margin-bottom: 24px;
        }

        .policy-intro {
          font-size: 16px;
          color: #444;
          font-weight: 500;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .policy-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .policy-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #666;
          line-height: 1.7;
        }

        .policy-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background-color: #C9A030;
          border-radius: 50%;
        }



        @media (max-width: 1024px) {
          .terms-layout {
            flex-direction: column;
          }
          .terms-sidebar {
            position: static;
            width: 100%;
            flex: none;
          }
          .sidebar-nav {
            max-height: 300px;
          }
        }

        @media (max-width: 600px) {
          .policy-card {
            padding: 30px 20px;
          }
          .policy-title {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="terms-layout">
        <aside className="terms-sidebar">
          <div className="sidebar-title">POLICY NAVIGATION</div>
          <nav className="sidebar-nav">
            {TERMS_SECTIONS?.map((section) => {
              if (!section || !section.id) return null;
              return (
                <button
                  key={section.id}
                  className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title || 'Untitled Section'}
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="terms-content">
          {TERMS_SECTIONS?.map((section) => {
            if (!section || !section.id) return null;
            const Icon = section.icon;
            
            return (
              <div key={section.id} id={section.id} className="policy-card">
                <div className="policy-header">
                  <div className="policy-icon-wrapper">
                    {Icon ? <Icon size={24} strokeWidth={1.5} /> : null}
                  </div>
                  <h2 className="policy-title">{section.title || 'Policy Section'}</h2>
                </div>
                
                <div className="policy-divider"></div>
                
                {section.intro && <p className="policy-intro">{section.intro}</p>}
                
                <ul className="policy-list">
                  {section.items && Array.isArray(section.items) ? (
                    section.items.map((item, idx) => (
                      <li key={`item-${section.id}-${idx}`}>{item}</li>
                    ))
                  ) : null}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
