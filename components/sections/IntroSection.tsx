'use client';

export default function IntroSection() {
  return (
    <section style={{
      width: '100%',
      background: '#FFFFFF',
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: '"Libre Baskerville", serif',
        fontSize: '32px',
        letterSpacing: '0.2em',
        color: '#8B6914',
        textTransform: 'uppercase',
        lineHeight: '1.4'
      }}>
        <span style={{ fontWeight: 300 }}>WHERE THE LEGACY OF INDORE </span>
        <span style={{ fontWeight: 800 }}>MEETS THE PULSE OF INNOVATION</span>
      </h2>
      
      <p style={{
        marginTop: '16px',
        marginBottom: '0',
        fontFamily: 'Lato, sans-serif',
        fontWeight: '400',
        color: '#666666',
        fontSize: '16px',
        maxWidth: '640px',
        lineHeight: '1.8'
      }}>
        Nestled in the heart of Indore, where history and modernity collide, Wow Crest offers an unforgettable stay. This 5-star hotel in Indore exudes the dy...››
      </p>
    </section>
  );
}
