import { useEffect, useState } from "react"
import InfoIcon from "../../assets/infoIcon.svg?react"
import { motion, scale } from "framer-motion"
import { createPortal } from "react-dom";

const start = {}

export const InfoMessage = ({ message, life = 3000 }) => {
    const [isVisible, setVisible] = useState(true);
    useEffect(()=>{
        let time= setTimeout(()=>{
           setVisible(false); 
           clearTimeout(time);
        },life)
        return ()=>clearTimeout(time);
    },[])
    return (
        <>
            {
                isVisible ?   createPortal(
                    <motion.div
                    className="w-fit h-[50px] min-w-[300px] max-h-[50px] text-xs font-normal cursor-pointer text-[#96BAFF]  rounded-sm  bg-blue-800/40 border-1 border-[#005296] backdrop-blur-md flex flex-row justify-start items-center pl-2.5 pt-2 pb-2 pr-2.5 gap-2.5"
                    whileTap={{ scale: .95 }}
                    whileHover={{ scale: 1.05 }}
                    initial={{opacity:0}}
                    animate={{opacity:100}}
                    transition={{duration:.5}}
                    onClick={()=>{setVisible(false)}}
                >
                    <InfoIcon width="25" height="25" />
                    {message}
                </motion.div> ,document.querySelector("#messageContainer")) : ""
            }
        </>
    )
}