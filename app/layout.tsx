import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'


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
          {/* <button onClick={toggle}>Toggle</button> */}
            {children}
          <footer className='fixed bottom-0'>
            Here is the footer
          </footer>
          </Providers>
        </div>
      </body>

    </html>
  )
}
