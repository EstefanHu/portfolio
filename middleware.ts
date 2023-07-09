import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
  const middleware = (req: NextRequest) => {
  const authCookie = req.cookies.get('portfolioAuth');
  console.log('WAAAAAAA')
  const { pathname } = req.nextUrl;

  console.log({ pathname });

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

// export const config = {
//   matcher: ['/dsh', '/nbx', '/prfl', '/wrt']
// }

export default middleware;