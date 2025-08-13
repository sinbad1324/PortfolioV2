import { useTheme } from '../../contexts/themeContext'
import { Line } from '../style/line'
import Star from '../../assets/Stars15.svg?react'
import Points from '../../assets/Points.svg?react'
import ReactIcon from '../../assets/react.svg?react'
import Js from '../../assets/js.svg?react'
import Fimga from '../../assets/Figma.svg?react'
import NodeJs from '../../assets/nodeJS.svg?react'
import Php from '../../assets/php.svg?react'
import Html from '../../assets/html.svg?react'
import { SkillShape } from '../skillShape'
import { useLangContext } from "../../contexts/langContext";
import { GetLang } from '../../utils/getCurrentLang'
const classNameCircle = "w-[50vw] md:w-[40vw] aspect-square"
const classNameStar = "max-w-[1600px] max-h-[1600px] w-[120vw] h-[120vw] md:w-[100vw] md:h-[100vw]"
const classNamePoint = "h-[70vw] w-[70vw]  md:w-[60vw] md:h-[60vw]"
export const Skills = ({ }) => {
    const { Lang } = useLangContext();
    const currentLang = GetLang(Lang)
    const { theme } = useTheme()
    return <section
        id='Skills'
        className=" shrink-0 relative flex flex-col  justify-between items-center w-full h-fit gap-30 overflow-hidden "
    >
        <div className='z-20 w-full h-fit flex flex-col  justify-start items-center text-black dark:text-white pt-[20px] md:pt-[40px] lg:pt-[70px] gap-30 md:gap-72'>
            <h2 className='txl:text-8xl md:text-6xl text-5xl font-bold ' >{currentLang.header[2]}</h2>
            <ul className="lg:w-[70%] max-w-[1150px] w-full p-5 h-fit flex flex-row flex-wrap justify-center items-center gap-15 shrink-0">
                {
                    [
                        { logo: <ReactIcon />, title: "React" },
                        { logo: <NodeJs />, title: "NodeJS" },
                        { logo: <Php />, title: "Slim4" },
                        { logo: <Js />, title: "JavaScript" },
                        { logo: <Html />, title: "CSS/HTML" },
                        { logo: <Fimga />, title: "Figma" }
                    ].map(v => <li key={v.title}><SkillShape logo={v.logo} title={v.title} ></SkillShape></li>)
                }
            </ul>
        </div>
        <Effect />
        <div className=' relative w-full h-fit flex flex-col items-center justify-center  md:pt-10'>
            <Line></Line>
        </div>
    </section>
}


const Effect = () => {
    return <>
        <div className='absolute z-[2] top-[] left-0 w-full h-fit flex flex-row justify-center items-start' >
            <div className={classNamePoint + ' relative  aspect-square'}>
                <Points className={classNamePoint + " absolute top-[-25%]"} />
            </div>
        </div>
        <div className='absolute z-0 top-[] left-0 w-full h-fit flex flex-row justify-center items-start' >
            <div className={classNameStar + ' relative  aspect-square'}>
                <Star fillColor={"red"} className={classNameStar + " absolute top-[-40%] md:top-[-45%]  blur-[12px] md:blur-[25px] lg:blur-[35px]  xl:blur-[45px]  "} />
            </div>
        </div>
        <div className='absolute z-0 top-[] left-0 w-full h-fit flex flex-row justify-center items-start' >
            <div className={classNameCircle + ' relative  aspect-square'}>
                <div className={classNameCircle + ' absolute top-[-60%] left-0  dark:bg-d-accent-11/90  bg-l-accent-11/90  blur-[60px] lg:blur-[100px]  rounded-full '} ></div>
            </div>
        </div>
    </>
}


