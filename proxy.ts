import { NextRequest, NextResponse } from 'next/server'
 
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/proxy-redirect') {
    return NextResponse.redirect(new URL('/', request.url))
  }
 
  return NextResponse.next()
}