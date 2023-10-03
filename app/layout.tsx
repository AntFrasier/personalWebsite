import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Footer from "./components/Footer"
import Header from './components/Header'


const inter = Inter({ subsets: ['latin'] })
// const [theme, setTheme]= useState<boolean>(true)

// const { isDarkMode, toggle } =useDarkMode();
const lg:string = "en"
// const theme = "light"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={`${lg}`}>
      {/* header */}

      <body className={inter.className + " bg-primary flex flex-col min-h-screen "}>
        <div id="background">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>

    </html>
  )
}
