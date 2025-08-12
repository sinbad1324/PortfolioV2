import { PrimaryButton } from "./buttons/primaryButtons"
import Arrow from "../assets/Arrow.svg?react"
export const ProjectBlock = ({ img, title, descriptions }) => {

    return <div className=" min-w-[300px]  group xl:w-[70%] md:w-[90%] w-[95%] h-fit overflow-hidden rounded-xl relative">
        <img src={img} className=" min-h-[200px] w-full h-auto " alt="" />
        <h3 className=" hidden md:block absolute top-3 left-4 text-3xl font-semibold backdrop-blur-2xl bg-black/20 text-white dark:text-black p-0.5 pl-1 pr-1 dark:bg-white/20 rounded-[5px]">{title}</h3>
        <div className=" absolute bottom-[20px]  left-0 w-full h-fit flex flex-row justify-center gap-20 p-3">
            <Box description={descriptions[0]} />
            <Box description={descriptions[1]} />
        </div>
        <div className=" md:opacity-0 flex flex-col p-5 justify-between  absolute top-0  left-0 w-full h-full bg-stone-900/50  backdrop-blur-[3px] rounded-xl text-[16px] dark:text-white">
            <h3 className="text-3xl font-semibold">{title}</h3>

            <div className="w-full flex flex-row justify-end">
                <PrimaryButton text={"See Project"} className={"max-w-[120px] h-[40px] text-sm "}> </PrimaryButton>
            </div>
        </div>
    </div>
}


const Box = ({ descriptions }) => {
    return <div className=" hidden md:block max-w-[368px] w-[50%] min-w-[150px] h-[215px] bg-stone-900/30  backdrop-blur-[23px] rounded-xl text-[16px] dark:text-white p-3 ">
        <p>
            descriptions        
        </p>
    </div>
}