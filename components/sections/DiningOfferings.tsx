import Image from 'next/image';

interface Offering {
  title: string;
  description: string;
  imageSrc: string;
}

interface DiningOfferingsProps {
  title: string;
  subtitle: string;
  offerings: Offering[];
}

export default function DiningOfferings({ title, subtitle, offerings }: DiningOfferingsProps) {
  return (
    <section className="dining-offerings-section">
      <style>{`
        .dining-offerings-section {
          padding: 80px 0;
          background-color: #fff;
        }

        .offerings-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 5%;
        }

        .offerings-subtitle {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 3px;
          color: #C9A030;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
          font-weight: 600;
        }

        .offerings-title {
          font-family: var(--font-serif);
          font-size: 36px;
          color: #111;
          font-weight: 300;
        }

        .offerings-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .offering-card {
          display: flex;
          flex-direction: column;
          background: #FAF9F6;
          transition: transform 0.4s ease;
        }

        .offering-card:hover {
          transform: translateY(-5px);
        }

        .offering-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .offering-image img {
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .offering-card:hover .offering-image img {
          transform: scale(1.05);
        }

        .offering-content {
          padding: 30px;
          text-align: center;
        }

        .offering-content h3 {
          font-family: var(--font-serif);
          font-size: 22px;
          color: #111;
          margin-bottom: 12px;
        }

        .offering-content p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .offerings-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="offerings-header">
        <span className="offerings-subtitle">{subtitle}</span>
        <h2 className="offerings-title">{title}</h2>
      </div>

      <div className="offerings-container">
        {offerings.map((item, idx) => (
          <div key={idx} className="offering-card">
            <div className="offering-image">
              <Image src={item.imageSrc} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </div>
            <div className="offering-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
