import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
const defaultLocale = 'en'
const locales = [defaultLocale, 'pt']

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/static|_next/image|favicon.ico|CV.pdf).*)',
  ] 
}

function getLocale(request) {
  let headers = { 'accept-language': request.headers.get('Accept-Language')}
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}