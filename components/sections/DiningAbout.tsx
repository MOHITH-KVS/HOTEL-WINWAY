import Image from 'next/image';

interface DiningAboutProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function DiningAbout({ title, description, imageSrc, imageAlt }: DiningAboutProps) {
  return (
    <section className="dining-about-section">
      <style>{`
        .dining-about-section {
          background-color: #FAF9F6;
          padding: 80px 0;
        }

        .dining-about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .dining-about-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .dining-about-image img {
          object-fit: cover;
          transition: transform 1s ease-out;
        }

        .dining-about-image:hover img {
          transform: scale(1.05);
        }

        .dining-about-text {
          padding: 40px 0;
        }

        .dining-about-label {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 3px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
          font-weight: 600;
        }

        .dining-about-title {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 300;
          color: #111;
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .dining-about-desc {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
        }

        @media (max-width: 900px) {
          .dining-about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .dining-about-image {
            aspect-ratio: 16/9;
          }
          .dining-about-title {
            font-size: 32px;
          }
        }
      `}</style>
      
      <div className="dining-about-container">
        <div className="dining-about-image">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 900px) 90vw, 50vw" />
        </div>
        <div className="dining-about-text">
          <span className="dining-about-label">OVERVIEW</span>
          <h2 className="dining-about-title">{title}</h2>
          <div className="dining-about-desc">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
