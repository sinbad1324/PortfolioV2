import { motion } from "framer-motion";
import clickSound from  "./../../assets/click.mp3"
import { useState } from "react";

const audio = new Audio(clickSound);
export const ToggleButton=({icon1,icon2 ,startValue=false, className,handleClick=(v)=>v, ...props})=>{
    const [value,setValue] = useState(startValue);
    return <motion.button
        className={className+" dark:bg-d-accent-9 dark:text-white font-semibold dark:border-d-accent-10   dark:hover:bg-d-accent-10 dark:hover:border-d-accent-8 dark:active:bg-d-accent-5 dark:active:border-d-accent-7 bg-l-accent-9 border-l-accent-10   hover:bg-l-accent-10 hover:border-l-accent-8 active:bg-l-accent-5 active:border-l-accent-7 border-2 rounded-full min-w-[25px] h-auto  cursor-pointer flex justify-center items-center gap-2 relative "}
    whileHover={{scale:1.05}}
    whileTap={{scale:.95}}
    onClick={()=>{
        audio.play();
        setValue(v=>!v);
        handleClick ? handleClick(value):null
    }}
    type="button"
    {...props}>
        {
            value?icon2:icon1
        }
    </motion.button>
}