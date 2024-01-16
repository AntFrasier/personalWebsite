import Footer from '../components/Footer'
import '../globals.css'
import AdminHeader from '../components/admin/AdminHeader'
import AdminSideBar from '../components/admin/AdminSideBar'



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

  return (
    <html lang="fr">
      <body className='flex flex-row relative bg-blue-50'>
        <AdminSideBar />
          <div className="flex flex-col w-full">
            <AdminHeader />
            <div className='pb-12'>
              {children}
            </div>
            
          </div>
        <Footer />
      </body>
    </html>
  )
}
