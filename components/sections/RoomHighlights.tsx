import { Maximize, Eye, BedDouble, Users } from 'lucide-react';

interface RoomHighlightsProps {
  size: string;
  view: string;
  bed: string;
  occupancy: string;
  isDarkTheme?: boolean;
}

export default function RoomHighlights({ size, view, bed, occupancy, isDarkTheme = false }: RoomHighlightsProps) {
  const textColor = isDarkTheme ? '#ccc' : '#555';
  const labelColor = isDarkTheme ? '#888' : '#888';
  const iconColor = '#C9A030';
  const borderColor = isDarkTheme ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

  return (
    <div className={`highlights-container ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <style>{`
        .highlights-container {
          padding: 60px 0;
          border-top: 1px solid ${borderColor};
          border-bottom: 1px solid ${borderColor};
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .highlight-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid ${borderColor};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .highlight-text h5 {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${labelColor};
          margin-bottom: 4px;
        }
        .highlight-text p {
          font-size: 15px;
          color: ${textColor};
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .highlights-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="highlights-grid">
        <div className="highlight-item">
          <div className="highlight-icon-wrapper">
            <Maximize size={20} color={iconColor} strokeWidth={1.5} />
          </div>
          <div className="highlight-text">
            <h5>ROOM SIZE</h5>
            <p>{size}</p>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="highlight-icon-wrapper">
            <Eye size={20} color={iconColor} strokeWidth={1.5} />
          </div>
          <div className="highlight-text">
            <h5>VIEW</h5>
            <p>{view}</p>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="highlight-icon-wrapper">
            <BedDouble size={20} color={iconColor} strokeWidth={1.5} />
          </div>
          <div className="highlight-text">
            <h5>BED TYPE</h5>
            <p>{bed}</p>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="highlight-icon-wrapper">
            <Users size={20} color={iconColor} strokeWidth={1.5} />
          </div>
          <div className="highlight-text">
            <h5>OCCUPANCY</h5>
            <p>{occupancy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
