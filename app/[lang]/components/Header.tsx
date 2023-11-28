import Image from "next/image"
import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import LocaleSwitcher from './locale-switcher'
import Menu from "./Menu"
import MenuModal from "./MenuModal"
import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n-config"

const Header = async ({
  lang } : 
  {lang : Locale
  }) => {
    const dictionary = await getDictionary(lang);

  return (
    <>
    <header id="header" className="flex flex-row items-end align-center gap-10 p-5 w-full bg-secondary shadow-lg">
      <Link href={`/${lang}`} className="">
        <div id="logo">
            <Image 
              // src={"cyrilMaranberlogo.svg"}
              src={"/img/logo.svg"}
              alt="cyril maranber web developer logo"
              width={250}
              height={77}
              />
        </div>
      </Link>
      <nav className="md:block hidden">
        <ul className="flex gap-5">
         <Menu dictionary={dictionary}/>
        </ul>
      </nav>
      <div className="flex flex-row ml-auto gap-3">
        <nav id="burger" className="md:hidden">
          <MenuModal />
        </nav>
        <div>
          <LocaleSwitcher lang={lang}/>

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