import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

const Header = () => {
  return (
    <>
    <header id="header" className="flex flex-row items-center align-center gap-10 p-5 w-full">
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
      <nav className="xl:block hidden">
        <ul className="flex gap-5">
          <li>
          <Link href={"/contacts"} className="btn-primary">Contacts</Link>
          </li>
          <li>
          <Link href={"/about"}  className="btn-primary">About</Link>
          </li>
          <li>
          <Link href={"/portfolio"}  className="btn-primary">Portfolio</Link>
          </li>
          <li>
          <Link href={"/blog"}  className="btn-primary">Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row ml-auto gap-3">
        <nav id="burger" className="xl:hidden">
          <button type="button" className="h-full"><span className="burger bg-primary-content before:bg-primary-content after:bg-primary-content"></span></button>
        </nav>
        <div>
        <button type="button" className="language">FR</button>
        </div>
        <div className="max-h-full">
        <ThemeSwitch />
        </div>
      </div>
    </header>
    </>
  )
}

export default Header