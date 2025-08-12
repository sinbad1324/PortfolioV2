import moi2 from '../../assets/moi2.jpg'
import AbouteMeBtn from "../../assets/AbouteMeCircle.svg?react"
import PorgrammingLogo1 from "../../assets/PorgrammingLogo.svg?react"
import PorgrammingLogo1Light from "../../assets/PorgrammingLogoLight.svg?react"
import PorgrammingLogo2 from "../../assets/ProgrammingLogo2.svg?react"
import PorgrammingLogo2Light from "../../assets/ProgrammingLogo2Light.svg?react"

import AbouteMeBtnLight from "../../assets/AbouteMeCircleLight.svg?react"
import { useTheme } from '../../contexts/themeContext'
import { Line } from '../style/line'
import { ScrollTo } from '../../utils/scollTo'
import { useEffect, useRef } from 'react'
const RoseText = ({ children }) => {
    return <span className='dark:text-[#DF8282] text-[#811111] font-mono'>{children}</span>
}
const handleClickScrollTo = () => {
    ScrollTo("#About");
}
const iconClassName = "max-w-[200px] w-[50vw] md:w-[20vw] h-auto cursor-pointer"
export const Home = ({ }) => {
    const { theme } = useTheme()

    return <section
        id='Home'
        className=" shrink-0 relative flex flex-col  justify-between items-center w-full h-fit gap-30 overflow-hidden "
    >
        {theme=="dark"?<PorgrammingLogo1 className=" absolute lg:top-[46%] top-[65%] md:top-[70%] right-[20%]  md:right-[25%]" />:<PorgrammingLogo1Light className=" absolute lg:top-[46%] top-[65%] md:top-[70%] right-[20%]  md:right-[25%]" />}
        <div className='w-full h-fit relative flex flex-col lg:flex-row justify-center gap-10 items-center '>
            <div className='w-fit h-fit relative '>
                {theme=="dark"?<PorgrammingLogo1 className=" absolute top-[32%] md:top-[35%] sm:left-[1%] md:left-[3%] " />:<PorgrammingLogo1Light className=" absolute top-[32%] md:top-[35%] sm:left-[1%] md:left-[3%] " />}
                {theme=="dark"?<PorgrammingLogo2 className=" absolute bottom-[0%] md:bottom-[2%] xl:bottom-[5%] right-[18%]" />:<PorgrammingLogo2Light className=" absolute bottom-[0%] md:bottom-[2%] xl:bottom-[5%] right-[18%]" />}
                <img src={moi2} className='mask max-w-[600px] h-auto lg:w-[40vw] w-[70vw] min-w-75 ' alt="Izadpanah Mohammad image" />
            </div>
            <div className='flex flex-col flex-wrap font-mono font-normal text-lg dark:text-white  text-black gap-3.5 p-2.5 pl-5'>
                <p className='w-full'><RoseText>{"<span>"}</RoseText>Hey, I'm Mohammad<RoseText>{"</span>"}</RoseText></p>
                <div className='w-fit h-fit relative '>                
                    <p className='w-full text-2xl md:text-3xl  lg:text-4xl xl:text-6xl font-mono'>Mid-Level <span className='text-[#195522]'>{"{Full Stack}"}</span><br /> Web Developper_ {theme=="dark"?<PorgrammingLogo2 className=" inline" />:<PorgrammingLogo2Light className=" inline" />}</p>
                </div>                
                <p className='w-full dark:text-[#B3B3B3] text-[#363636]'><RoseText>{"<p>"}</RoseText> with expertise in cutting-endge technologies sush as <br /><RoseText>NodeJS, React, Taillwind</RoseText> and <RoseText>Slim4</RoseText>... I deliver <br /> web solutions tath both innovative ad robust.<RoseText>{"</p>"}</RoseText></p>
            </div>
        </div>
        <div className=' w-full h-[200px] flex flex-col items-center justify-center'>
            <button type="button" className=' w-fit h-fit' onClick={handleClickScrollTo}>
                {
                    theme == "dark" ?
                        <AbouteMeBtn className={iconClassName} /> : <AbouteMeBtnLight className={iconClassName} />
                }
            </button>

        </div>
        <div className=' relative w-full h-fit flex flex-col items-center justify-center  md:pt-10'>
            <Line></Line>
        </div>
    </section>
}
