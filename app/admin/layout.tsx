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
          <div className="flex flex-col w-full max-w-[2048px] items-center p-3 ml-[200px] pb-12">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
