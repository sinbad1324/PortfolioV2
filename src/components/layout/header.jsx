import { PrimaryButton } from "../buttons/primaryButtons"
import TranslateLogo from "../../assets/Translate.svg?react"
import SunLogo from "../../assets/sun.svg?react"
import MoonLogo from "../../assets/moon.svg?react"
import ArrowLogo from "../../assets/Arrow.svg?react"

import { ToggleButton } from "../buttons/Togglebutton"
import { SecondaryButton } from "../buttons/SecondaryButton"
import { useTheme } from "../../contexts/themeContext"
import { useEffect } from "react"
const classNameIcon = "min-w-[15px] min-h-[15px] w-[30px]"
const className = "min-w-[60px] max-w-[100px] w-[15%]  hidden md:flex"
export const Header = ({ }) => {
  const { theme, ChangeTheme } = useTheme();
  useEffect(ChangeTheme, []);
  const handleClick = (v) => {
    v ? ChangeTheme("light") : ChangeTheme("dark")
  }
  return <>
    <header className="z-100 flex w-full h-fit justify-center items-center fixed bottom-0 md:top-0 pr-2 pl-2 pb-[50px] md:pt-[30px] ">
      <nav
        className="md:w-full w-[50%] min-w-[250px] max-w-[800px] rounded-full h-[65px] p-[15px] flex flex-row-reverse md:flex-row justify-center md:justify-around items-center border-1 gap-5 md:gap-[15px] dark:border-d-accent-6 border-l-accent-6 dark:bg-d-accent-3/20 bg-l-accent-3/20  backdrop-blur-[20px]"
      >
        <PrimaryButton className={className} text={"Home"}></PrimaryButton>
        <PrimaryButton className={className} text={"About"}></PrimaryButton>
        <PrimaryButton className={className} text={"Skills"}></PrimaryButton>
        <PrimaryButton className={className} text={"Projects"}></PrimaryButton>
        <PrimaryButton className={className} text={"Contact"}></PrimaryButton>
        <PrimaryButton className={" min-w-[60px] max-w-[100px] w-[100px] md:w-[15%]  flex-row-reverse  gap-[17px]"} text={"EN"}><TranslateLogo className="min-w-[15px] min-h-[15px]" /></PrimaryButton>
        <ToggleButton className={" max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px] p-2.5"} icon1={<SunLogo className={classNameIcon} />} icon2={<MoonLogo className={classNameIcon} />} handleClick={handleClick}></ToggleButton>
        <ToggleButton className={" md:hidden max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px] p-2.5"} icon1={<ArrowLogo className={classNameIcon} />} icon2={<ArrowLogo className={classNameIcon+" rotate-180"} />} ></ToggleButton>

      </nav>
    </header>
  </>

}