import { motion } from "framer-motion";
import clickSound from  "./../../assets/click.mp3"
const audio = new Audio(clickSound);
export const SecondaryButton=({text,children , className,handleClick=()=>null, ...props})=>{
    return <motion.button
        className={className+" dark:bg-d-gray-4 dark:text-white font-semibold dark:border-d-gray-6   dark:hover:bg-d-gray-5 dark:hover:border-d-gray-8 dark:active:bg-d-gray-5 dark:active:border-d-gray-7 bg-l-gray-4 border-l-gray-6   hover:bg-l-gray-5 hover:border-l-gray-8 active:bg-l-gray-5 active:border-l-gray-7 border-2 rounded-full min-w-[70px] min-h-[45px] w-fit h-fit p-2.5 pl-5 pr-5 cursor-pointer flex justify-center items-center gap-2 "}
    whileHover={{scale:1.03}}
    whileTap={{scale:.98}}
        onClick={()=>{
        audio.play();
        handleClick ? handleClick():null
    }}
    >
        {text}
        {children}
    </motion.button>
}