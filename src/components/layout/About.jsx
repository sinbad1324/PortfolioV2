import moi from '../../assets/moi.jpg'
import { useTheme } from '../../contexts/themeContext'
import { Line } from '../style/line'
import CadreDeco from '../../assets/Cadre.svg?react'
import CadreDecoLight from '../../assets/CadreLight.svg?react'
import CadreMobile from '../../assets/CadreMobile.svg?react'
import CadreMobileLight from '../../assets/CadreMobileLight.svg?react'
import CVBtn from "./../../assets/CVBtn.svg?react"
import CVBtnLight from "./../../assets/CVBtnLight.svg?react"
import TraitLight from '../../assets/traitAboutMeLight.svg?react'
import Trait from '../../assets/traitAboutMe.svg?react'
import { useEffect, useState } from 'react'
import { useLangContext } from "../../contexts/langContext";
import { GetLang } from '../../utils/getCurrentLang'
const iconClassName = "max-w-[200px] w-[20vw] h-auto cursor-pointer"
export const About = ({ }) => {
    const { theme } = useTheme()
    const {Lang} = useLangContext();
   const currentLang = GetLang(Lang)
    return <section
        id='About'
        className=" overflow-hidden shrink-0  relative flex flex-col  justify-center items-center w-full h-fit gap-30 pt-[100px] mr-1.5"
    >
        <div className='relative w-full h-fit flex flex-col gap-20 lg:flex-row justify-around items-center dark:text-white text-md md:text-lg pt-20'>
            <div className='w-fit h-fit relative '>
                <img src={moi} alt="deuxime photo de mohammad" className=' rounded-sm  w-[60vw] md:w-[40vw] h-auto max-w-[500px]' />
                <CadreMobile className="absolute top-0 left-0 w-full h-full scale-[1.22] lg:hidden" />
                {
                    theme == "dark" ?
                        <CadreMobile className="absolute top-0 left-0 w-full h-full scale-[1.22] lg:hidden" /> :
                        <CadreMobileLight className="absolute top-0 left-0 w-full h-full scale-[1.22] lg:hidden" />}
            </div>
            <div className='flex flex-col w-2/3 lg:w-2/5 items-center justify-start xl:gap-[200px] gap-[70px] lg:gap-[100px] '>
                <div className=' relative w-fit flex flex-col justify-center items-center gap-3.5'>
                    <h2 className='z-0 xl:text-8xl md:text-6xl text-5xl font-bold '>{currentLang.header[1]}</h2>
                    {
                        theme == "dark" ?
                            <Trait className="w-full h-auto z-10" /> : <TraitLight className="z-10 w-full h-auto" />
                    }
                </div>
                <div className='z-30 flex flex-col w-full items-center justify-start gap-4' >
                    <p dangerouslySetInnerHTML={{__html:currentLang.about.paragraphes[0]}}></p>
                    <p dangerouslySetInnerHTML={{__html:currentLang.about.paragraphes[1]}}></p>
                    <p dangerouslySetInnerHTML={{__html:currentLang.about.paragraphes[2]}}></p>
                    <div className='w-full flex  justify-end pt-20'>
                        <button type="button" className=' w-fit h-fit' onClick={() => { }}>
                            {
                                theme == "dark" ?
                                    <CVBtn className={iconClassName} /> : <CVBtnLight className={iconClassName} />
                            }
                        </button>
                    </div>
                </div>
            </div>
                <Decoration></Decoration>
        </div>
        <div className=' w-full h-fit flex flex-col items-center justify-center pt-6'>
            <Line></Line>
        </div>
    </section>
}


const Decoration = () => {
        const { theme } = useTheme()
    const [state , setState] =useState(true)
    useEffect(() => {
       const event= window.addEventListener("resize", () => {
            (window.innerWidth > 1900) && (window.innerWidth < 2100) ? setState(true) : setState(false)
        })
        return ()=>removeEventListener(window,event);
    },[])
    return <>
        {
            state?theme=="dark"?<CadreDeco className="w-full absolute top-5 hidden xl:block"/>:<CadreDecoLight className="w-full absolute top-5 hidden xl:block"/>:""
        }
    
    </>
}