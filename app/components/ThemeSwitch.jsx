'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from 'react' 

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const {resolvedTheme, setTheme} = useTheme()

    useEffect( () => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return
    }

  return (
    <button type={"button"} className="dark-mode after:bg-primary-content" onClick={() => resolvedTheme == 'dark' ? setTheme("light") : setTheme("dark")}>
    </button>
  )
}

export default ThemeSwitch