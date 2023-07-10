import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get('portfolioAuth');

  if (!authCookie) {
    const url = req.nextUrl.clone();
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/dsh', '/nbx', '/prfl', '/wrt']
}