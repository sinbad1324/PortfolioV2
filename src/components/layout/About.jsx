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
const iconClassName = "max-w-[200px] w-[20vw] h-auto cursor-pointer"
const TealText = ({ children }) => {
    return <span className='dark:text-d-accent-11 text-l-accent-11 font-base'>{children}</span>
}

export const About = ({ }) => {
    const { theme } = useTheme()

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
                <div className=' relative w-fit flex flex-col justify-center items-center'>
                    <h2 className='xl:text-8xl md:text-6xl text-5xl font-bold '>About Me</h2>
                    {
                        theme == "dark" ?
                            <Trait className="w-full h-auto" /> : <TraitLight className="w-full h-auto" />
                    }
                </div>
                <div className='flex flex-col w-full items-center justify-start gap-4'>
                    <p className=''>
                        My name is <TealText>Izaspanah Mohammad</TealText>, and I am passionate about <TealText>programming</TealText>. Although my current expertise <TealText>focuses</TealText> on <TealText>web development</TealText>, I am very interested in machine learning, a field I aspire to work in the future.
                    </p>
                    <p>
                        Currently, I am a computer science student with a specialization in <TealText>programming</TealText>, and I have already gained two years of practical experience in <TealText>web development</TealText>. This experience has allowed me to <TealText>strengthen</TealText> my <TealText>technical skills</TealText>, enhance my creativity, and develop a methodical approach to problem-solving.
                    </p>
                    <p>
                        At only 18 years old, I am a motivated, fast, and efficient person in my work. I am always ready to take on new challenges, learn, and grow to give my best in every project I participate in.
                    </p>
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