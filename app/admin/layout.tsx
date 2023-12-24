
import { getServerSession } from 'next-auth'
import Footer from '../components/Footer'
import '../globals.css'
import AdminHeader from './components/AdminHeader'
import { authOptions } from '../api/auth/[...nextauth]/route'


export async function generateMetadata() {

  return {
    title: "Cyril Maranber Admin",//"Cyril Maranber | Web Developer",
    robots: {
      index: false,
      follow: false,
      googleBot: {
          index:false,
          follow:false
      }
    }
  }
  }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {
  const session = await getServerSession(authOptions)

  console.log(session)
  return (
    <html lang="fr">
      
      <body className='flex flex-row'>
        <AdminHeader />

          {children}
       
        <Footer />
      </body>
    </html>
  )
}
