import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Footer from "./components/Footer"
import Header from './components/Header'
import { Locale, i18n } from '@/i18n-config'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
 

const inter = Inter({ subsets: ['latin'] })
// const [theme, setTheme]= useState<boolean>(true)

export async function generateStaticParams() { //internationalization param
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// const { isDarkMode, toggle } =useDarkMode();

// const theme = "light"
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {lang:Locale}
}) {
  return (
    <html lang={params.lang}>
    {/* Google analytics script Has to be tested */}
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-M4QVX2EWTN"/>
    <Script id="GA">
      {
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M4QVX2EWTN');`}
      </Script>
      <body className={inter.className + " bg-primary flex flex-col min-h-screen "}>
        <div id="background">
          <Providers>
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
