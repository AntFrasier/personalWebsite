
import LoginButton from '@/app/admin/components/LoginButton'




const Admin = async () => {

  return (
    <>
    <main className="flex flex-row-reverse justify-end flex-wrap lg:p-24 2xl:ml-80 xl:ml-48 md:ml-24 lg:mt-24 p-12 mt-12">
    
    <div className="flex flex-col ">
    <h1> Log in </h1>
    <LoginButton />
    </div>
    </main>
    </>
  )
}

export default Admin;