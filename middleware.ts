import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import langMiddleware from './app/middelware/langMiddleware'
import authMiddleware from './app/middelware/authMiddeleware'
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"

let auth: boolean = true;

export default withAuth ( function middleware(request: NextRequestWithAuth) {
  const pathname = request.nextUrl.pathname
  if (pathname.search("/admin") === -1) {
    auth = true
    return langMiddleware(request)
  } else if (request.nextauth.token) {
      auth = request.nextauth.token?.role != "admin" ? false : true
      return
    } else {
      // const url = request.nextUrl.clone()
      // url.pathname = '/admin'
      const url = new URL('/login', request.url)
      console.log(url)
      return NextResponse.redirect(url)
    
  }
}, {
  callbacks : {
    authorized : ({token}) => auth
  }
}
)

  export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|img).*)'],
  }