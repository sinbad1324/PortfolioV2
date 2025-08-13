import { motion } from "framer-motion";
import clickSound from  "./../../assets/click.mp3"

const audio = new Audio(clickSound);
export const PrimaryButton=({text,children , className,handleClick=()=>null, ...props})=>{
    return <motion.button
        className={className+" dark:bg-d-accent-9 text-white font-semibold dark:border-d-accent-10   dark:hover:bg-d-accent-10 dark:hover:border-d-accent-8 dark:active:bg-d-accent-5 dark:active:border-d-accent-7 bg-l-accent-9 border-l-accent-10   hover:bg-l-accent-10 hover:border-l-accent-8 active:bg-l-accent-5 active:border-l-accent-7 border-2 rounded-full min-w-[70px] min-h-[45px]  p-2.5 pl-5 pr-5 cursor-pointer flex justify-center items-center gap-2 "}
    whileHover={{scale:1.05}}
    whileTap={{scale:.95}}
    onClick={()=>{
        audio.play();
        handleClick ? handleClick():null
    }}
    >
        {text}
        {children}
    </motion.button>
}