import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 console.log('Middleware called');
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Inside middleware')
    const path=request.nextUrl.pathname;
    const isPublicPath=path==='/lokesh' || path==='/lokesh'
    const token=request.cookies.get('OPAsession')?.value || '';
    if(isPublicPath && token){
      return NextResponse.redirect(new URL('/mdash', request.url));
    }
    if(!isPublicPath && !token){
      return NextResponse.redirect(new URL('/lokesh', request.url));
    }
  
//   return NextResponse.json({ message: 'Middleware running' });
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/mdash'],
}