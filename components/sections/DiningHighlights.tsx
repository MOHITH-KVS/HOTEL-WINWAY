import { CheckCircle2 } from 'lucide-react';

interface DiningHighlight {
  label: string;
}

interface DiningHighlightsProps {
  highlights: DiningHighlight[];
}

export default function DiningHighlights({ highlights }: DiningHighlightsProps) {
  return (
    <section className="dining-highlights-section">
      <style>{`
        .dining-highlights-section {
          background-color: #1a1a1a;
          color: #fff;
          padding: 60px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .dining-highlights-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: center;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          width: 100%;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .highlight-icon {
          color: #C9A030;
          flex-shrink: 0;
        }

        .highlight-card p {
          font-family: var(--font-sans);
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 500;
          color: #ddd;
        }

        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px 20px;
          }
        }
      `}</style>
      
      <div className="dining-highlights-container">
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <CheckCircle2 size={24} className="highlight-icon" strokeWidth={1.5} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
