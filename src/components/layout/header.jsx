import { PrimaryButton } from "../buttons/primaryButtons"
import TranslateLogo from "../../assets/Translate.svg?react"
import SunLogo from "../../assets/sun.svg?react"
import MoonLogo from "../../assets/moon.svg?react"
import ArrowLogo from "../../assets/Arrow.svg?react"
import { ScrollTo } from '../../utils/scollTo'
import { ToggleButton } from "../buttons/Togglebutton"
import { useTheme } from "../../contexts/themeContext"
import { useEffect, useState } from "react"
import { DropMenu } from "../menu/DropMenu"
import { GB, FR, DE, ES, SA } from 'country-flag-icons/react/3x2'
import { useLangContext } from "../../contexts/langContext"
import { GetLang } from '../../utils/getCurrentLang'

const classNameIcon = "min-w-[15px] min-h-[15px] w-[30px]"
const className = "min-w-[60px] max-w-[110px] w-[18%] text-nowrap hidden md:flex"
export const Header = ({ }) => {
  const { theme, ChangeTheme } = useTheme();
  useEffect(ChangeTheme, []);
  const handleClick = (v) => {
    v ? ChangeTheme("light") : ChangeTheme("dark")
  }

  const { Lang } = useLangContext();
  const currentLang = GetLang(Lang)
  return <>
    <header className="z-100 flex w-full h-fit justify-center items-center fixed bottom-0 md:top-0 pr-2 pl-2 pb-[50px] md:pt-[30px] ">
      <nav
        className="md:w-full w-[50%] min-w-[250px] max-w-[850px] rounded-full h-[65px] border-2  dark:border-d-accent-6 border-l-accent-6 dark:bg-d-accent-3/20 bg-l-accent-3/20  backdrop-blur-[20px]"
      >
        <ul className="w-full h-full flex flex-row-reverse md:flex-row justify-center md:justify-around items-center gap-5 md:gap-[15px]  p-[15px] ">
          {
            ["Home", "About", "Skills", "Projects", "Contact"].map((v,i) => <PrimaryButton key={v} className={className} text={currentLang.header[i]} handleClick={() => ScrollTo("#" + v)}></PrimaryButton>)
          }
          <div className="w-fit h-fit relative flex flex-row md:justify-center justify-end items-center">
            <TranslateBtn />
          </div>
          <ToggleButton
            className={" max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px] p-2.5 overflow-visible"}
            icon1={<SunLogo className={classNameIcon} />}
            icon2={<MoonLogo className={classNameIcon} />}
            handleClick={handleClick}></ToggleButton>
          <ToggleButton
            className={" md:hidden max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px] p-2.5"}
            handleClick={(v) => { v ? ScrollTo("#Home") : ScrollTo("#Contact") }}
            icon1={<ArrowLogo className={classNameIcon} />}
            icon2={<ArrowLogo className={classNameIcon + " rotate-180"} />} ></ToggleButton>
        </ul>
      </nav>
    </header>
  </>

}



const TranslateBtn = () => {
  const { Lang } = useLangContext();
  const [dropMvisible, setVisible] = useState(false);
  return <>
    <PrimaryButton
      handleClick={() => setVisible(v => !v)}
      className={" min-w-[60px] max-w-[100px] w-[100px] md:w-[25vw]  flex-row-reverse  gap-[17px]"}
      text={Lang}>
      <TranslateLogo className="min-w-[15px] min-h-[15px]" />
    </PrimaryButton>
    <DropMenu
      visible={dropMvisible}
      setVisible={setVisible}
      className={"absolute bottom-[100px]  md:top-[100px]  "}
      elements={[
        { icon: <GB className="w-[25px]" />, text: "English", value: "EN" },
        { icon: <FR className="w-[25px]" />, text: "Français", value: "FR" },
        { icon: <ES className="w-[25px]" />, text: "Español", value: "ES" },
        { icon: <DE className="w-[25px]" />, text: "Deutsch", value: "DE" },
        { icon: <SA className="w-[25px]" />, text: "عربي", value: "AR" },
      ]}
    ></DropMenu>
  </>
}