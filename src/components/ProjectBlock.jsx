import { PrimaryButton } from "./buttons/primaryButtons"
import Arrow from "../assets/Arrow.svg?react"
import { useLangContext } from "../contexts/langContext";
import { GetLang } from '../utils/getCurrentLang'
export const ProjectBlock = ({ img, title, descriptions ,link}) => {    
    const {Lang} = useLangContext();
   const currentLang = GetLang(Lang)
    return <div className=" min-w-[300px]  group xl:w-[70%] md:w-[90%] w-[95%] h-fit overflow-hidden rounded-xl relative">
        <img src={img} className="  w-full h-auto " alt="" />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center p-1">
            <div className="relative flex flex-row p-5 justify-start w-full h-fits">
                <h3 className=" z-30  text-3xl font-semibold backdrop-blur-2xl bg-black/20 text-white dark:text-black p-0.5 pl-1 pr-1 dark:bg-white/20 rounded-[5px]">{title}</h3>
            </div>
            <div className="  hidden md:flex relative w-full h-fit  flex-row justify-center gap-20 p-2">
                <Box>{descriptions[0]}</Box>
                <Box>{descriptions[1]}</Box>
            </div>
            <div className=" relative flex flex-row justify-end w-full h-fits text-[16px] dark:text-white pb-4 pr-4">
                <a href={link} target="_blank" rel="noopener noreferrer"><PrimaryButton text={currentLang.Project.btn} className={"max-w-[320px] h-[40px] text-sm "}><Arrow className="hidden md:block w-[40px] -rotate-90" /></PrimaryButton></a>
            </div>
        </div>
    </div>
}


const Box = ({ children }) => {
    return <div className=" hidden md:block max-w-[368px] w-[50%] min-w-[150px] h-[190px] lg:h-[215px] bg-stone-900/30  backdrop-blur-[23px] rounded-xl text-[16px] dark:text-white p-3 ">
            {children}
    </div>
}