import '../globals.css'
import { Inter } from 'next/font/google'
import Providers from '../providers'
import Footer from "../components/Footer"
import Header from '../components/Header'
import { Locale, i18n } from '@/i18n-config'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next'
import { Session } from 'next-auth'

 

const inter = Inter({ subsets: ['latin'] })
// const [theme, setTheme]= useState<boolean>(true)

export const metadata: Metadata = {
  applicationName: "Cyril Maranber Personal webSite",
  authors: [{ name: "Cyril Maranber" }],
  generator: 'Next.js',
  keywords: ['cyril maranber', 'code', 'web development', 'javascript', 'react', 'node.js', 'next.js', 'web dev', 'html', 'css', 'solidity', 'blockchain', 'web3'],
  referrer: 'origin-when-cross-origin',
  creator: 'Cyril Maranber',
  publisher: 'Cyril Maranber',
  metadataBase: new URL('https://cyril-maranber.com/'),
}


export async function generateStaticParams() { //internationalization param
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// const { isDarkMode, toggle } =useDarkMode();

// const theme = "light"
export default function RootLayout({
  children,
  params,
  session
}: {
  children: React.ReactNode,
  params: {lang:Locale},
  session : Session
}) {
  return (

    <html lang={params.lang}>
    {/* Google analytics script Has to be tested */}
    <Script defer src="https://www.googletagmanager.com/gtag/js?id=G-M4QVX2EWTN"/>
    <Script id="GA">
      {
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M4QVX2EWTN');`}
      </Script>
      <body className={inter.className + " bg-primary flex flex-col min-h-screen "}>
        <div id="background">
          <Providers session = {session}>
            <Header lang={params.lang} />
            {children}
            <Footer lang={params.lang} />
          </Providers>
        </div>
        {/* vercel analitics and speed insight */}
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  )
}
