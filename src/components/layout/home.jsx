import moi2 from '../../assets/moi2.jpg'
import AbouteMeBtn from "../../assets/AbouteMeCircle.svg?react"
import AbouteMeBtnLight from "../../assets/AbouteMeCircleLight.svg?react"
import { useTheme } from '../../contexts/themeContext'
import { Line } from '../style/line'
import { ScrollTo } from '../../utils/scollTo'

const RoseText = ({ children }) => {
    return <span className='dark:text-[#DF8282] text-[#811111] font-mono'>{children}</span>
}
const handleClickScrollTo = () => {
    ScrollTo("#About");
}
const iconClassName = "max-w-[200px] w-[20vw] h-auto cursor-pointer"
export const Home = ({ }) => {
    const { theme } = useTheme()
    return <section
        id='Home'
        className=" shrink-0 relative flex flex-col  justify-between items-center w-full h-fit gap-30 overflow-hidden "
    >
        <div className='w-full h-fit relative flex flex-col lg:flex-row justify-center gap-10 items-center '>
            <img src={moi2} className='mask max-w-[600px] h-auto lg:w-2/5 w-[70%] min-w-75 ' alt="Izadpanah Mohammad image" />
            <div className='flex flex-col flex-wrap font-mono font-normal text-lg dark:text-white  text-black gap-3.5 p-2.5 pl-5'>
                <p className='w-full'><RoseText>{"<span>"}</RoseText>Hey, I'm Mohammad<RoseText>{"</span>"}</RoseText></p>
                <p className='w-full text-2xl  md:text-6xl font-mono'>Mid-Level <span className='text-[#195522]'>{"{Full Stack}"}</span><br /> Web Developper_</p>
                <p className='w-full dark:text-[#B3B3B3] text-[#363636]'><RoseText>{"<p>"}</RoseText> with expertise in cutting-endge technologies sush as <br /><RoseText>NodeJS, React, Taillwind</RoseText> and <RoseText>Slim4</RoseText>... I deliver <br /> web solutions tath both innovative ad robust.<RoseText>{"</p>"}</RoseText></p>
            </div>
        </div>
        <div className=' w-full h-[200px] flex flex-col items-center justify-center'>
            <button type="button" className=' w-fit h-fit' onClick={handleClickScrollTo}>
                {
                    theme == "dark" ?
                        <AbouteMeBtn className={iconClassName} />: <AbouteMeBtnLight className={iconClassName} />
                }
            </button>

        </div>
        <div className=' relative w-full h-fit flex flex-col items-center justify-center pt-10'>
            <Line></Line>
        </div>
    </section>
}
