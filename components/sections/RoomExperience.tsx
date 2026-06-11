import Image from 'next/image';

interface RoomExperienceProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  isDarkTheme?: boolean;
}

export default function RoomExperience({ title, description, imageSrc, imageAlt, reverse = false, isDarkTheme = false }: RoomExperienceProps) {
  const bgColor = isDarkTheme ? '#1a1a1a' : '#FAF9F6';
  const textColor = isDarkTheme ? '#ccc' : '#666';
  const headingColor = isDarkTheme ? '#fff' : '#111';

  return (
    <section className={`room-experience-section ${isDarkTheme ? 'theme-dark' : 'theme-light'}`}>
      <style>{`
        .room-experience-section {
          background-color: ${bgColor};
          padding: 120px 0;
          overflow: hidden;
        }
        
        .experience-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .experience-container.reverse {
          grid-template-areas: "text image";
        }
        
        .experience-container.normal {
          grid-template-areas: "image text";
        }

        .experience-image-panel {
          grid-area: image;
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .experience-image-panel img {
          object-fit: cover;
          transition: transform 0.8s ease-out;
        }

        .experience-image-panel:hover img {
          transform: scale(1.05);
        }

        .experience-text-panel {
          grid-area: text;
          padding: 40px 0;
        }

        .experience-sub {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 3px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
          font-weight: 600;
        }

        .experience-title {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 300;
          color: ${headingColor};
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .experience-desc {
          font-size: 15px;
          line-height: 1.8;
          color: ${textColor};
        }

        .experience-desc p {
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .experience-container {
            grid-template-columns: 1fr;
            grid-template-areas: "image" "text" !important;
            gap: 40px;
          }
          .experience-image-panel {
            aspect-ratio: 16/9;
          }
          .experience-title {
            font-size: 32px;
          }
        }
      `}</style>
      
      <div className={`experience-container ${reverse ? 'reverse' : 'normal'}`}>
        <div className="experience-image-panel">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 900px) 90vw, 50vw" />
        </div>
        <div className="experience-text-panel">
          <span className="experience-sub">THE EXPERIENCE</span>
          <h2 className="experience-title">{title}</h2>
          <div className="experience-desc">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}
