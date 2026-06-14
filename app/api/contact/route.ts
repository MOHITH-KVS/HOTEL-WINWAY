import { NextRequest, NextResponse } from 'next/server';

const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const limit = 3;
  const record = submissions.get(ip) || [];
  const recent = record.filter(t => now - t < windowMs);
  if (recent.length >= limit) return true;
  submissions.set(ip, [...recent, now]);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // CSRF Protection
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'https://hotel-winway.vercel.app', 
      'http://localhost:3000', 
      'https://www.hotelwinway.com',
      process.env.NEXT_PUBLIC_SITE_URL
    ].filter(Boolean);
    
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    // Parse JSON
    const body = await request.json();
    const { name, email, phone, subject, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      // Silently reject bots, return success so they don't know
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Sanitization & Validation
    const sanitize = (str: string) => (str ? str.replace(/<[^>]*>/g, '').trim() : '');
    const cleanName = sanitize(name).slice(0, 100);
    const cleanEmail = sanitize(email).slice(0, 254);
    const cleanPhone = sanitize(phone).slice(0, 15);
    const cleanSubject = sanitize(subject).slice(0, 100);
    const cleanMessage = sanitize(message).slice(0, 2000);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json({ error: 'Invalid phone format' }, { status: 400 });
    }

    // In a real implementation, send the email here.
    // Example: sendEmail(process.env.CONTACT_EMAIL, cleanSubject, cleanMessage)
    
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Internal contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
