import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import Menu from "./Menu"
import MenuModal from "./MenuModal"

const Header = () => {
  return (
    <>
    <header id="header" className="flex flex-row items-end align-center gap-10 p-5 w-full bg-secondary shadow-lg">
      <Link href={"/"} className="">
        <div id="logo">
            <Image 
              // src={"cyrilMaranberlogo.svg"}
              src={"logo.svg"}
              alt="cyril maranber web developer logo"
              width={250}
              height={77}
              />
        </div>
      </Link>
      <nav className="md:block hidden">
        <ul className="flex gap-5">
         <Menu />
        </ul>
      </nav>
      <div className="flex flex-row ml-auto gap-3">
        <nav id="burger" className="md:hidden">
          <MenuModal />
        </nav>
        <div>
          <button type="button" className="language">FR</button>
        </div>
        <div className="flex">
          <ThemeSwitch />
        </div>
      </div>
    </header>
    </>
  )
}

export default Header