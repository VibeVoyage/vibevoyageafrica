import { NextRequest, NextResponse } from 'next/server';

// Note: Middleware cannot access localStorage directly
// Auth state is managed on the client side via AuthProvider
// This middleware just allows navigation; client will handle redirects

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
