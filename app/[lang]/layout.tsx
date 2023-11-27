import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Footer from "./components/Footer"
import Header from './components/Header'
import { i18n } from '@/i18n-config'
 

const inter = Inter({ subsets: ['latin'] })
// const [theme, setTheme]= useState<boolean>(true)

export async function generateStaticParams() { //internationalization param
  return i18n.locales.map((locale) => ({ lang: locale }))
}

// const { isDarkMode, toggle } =useDarkMode();
const lg:string = "en"
// const theme = "light"
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {lang:string}
}) {
  return (
    <html lang={params.lang}>
      {/* header */}

      <body className={inter.className + " bg-primary flex flex-col min-h-screen "}>
        <div id="background">
          <Providers>
            <Header lang={params.lang} />
            {children}
            <Footer lang={params.lang} />
          </Providers>
        </div>
      </body>

    </html>
  )
}
