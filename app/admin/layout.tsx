import Footer from '../components/Footer'
import '../globals.css'
import AdminHeader from '../components/admin/AdminHeader'



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
      <body className='flex flex-row relative'>
        <AdminHeader />
          <div className="flex flex-col max-w-4xl items-center p-9 ml-[200px]">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
