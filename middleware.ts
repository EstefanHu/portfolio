import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  //   const authCookie = req.cookies.get('redlineAuth');
  //   const { pathname } = req.nextUrl;

  // if (Object.values(appRoutes).includes(pathname)) {
  //   if (!authCookie) {
  //     const url = req.nextUrl.clone();
  //     url.pathname = index;

  //     return NextResponse.redirect(url);
  //   }
  // } else if (Object.values(landingRoutes).includes(pathname)) {
  //   if (authCookie && pathname !== '/complete_profile') {
  //     const url = req.nextUrl.clone();
  //     url.pathname = home;

  //     return NextResponse.redirect(url);
  //   }
  // }

  return NextResponse.next();
}