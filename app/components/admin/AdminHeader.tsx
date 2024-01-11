import Image from "next/image"
import AdminMenu from "./AdminMenu"


const AdminHeader = async () => {

  return (
    <>
    <header id="header" className="flex flex-col w-sm fixed h-[100vh] max-w-[200px] align-center gap-10 p-5 bg-secondary shadow-lg">
     
        <div id="logo">
            <Image 
              // src={"cyrilMaranberlogo.svg"}
              src={"/img/logo.svg"}
              alt="cyril maranber web developer logo"
              width={250}
              height={77}
              />
        </div>

      <nav className="md:block hidden">
        <ul className="flex flex-col gap-5">
         {/* <Menu dictionary={dictionary}/> */}
         <AdminMenu />
        </ul>
      </nav>
      <div className="flex flex-row ml-auto gap-3">
        <nav id="burger" className="md:hidden">
          {/* <MenuModal dictionary={dictionary}/> */}
          ADMIN
        </nav>
        <div>
          {/* <LocaleSwitcher lang={dictionary.lang}/> */}

        </div>
        <div className="flex">
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </header>
    </>
  )
}

export default AdminHeader