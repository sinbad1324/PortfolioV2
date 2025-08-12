import { useEffect, useRef } from "react"

export const SkillShape = ({ logo, title, className }) => {
    const textTarget = useRef()
    const rayon = 200
    useEffect(() => {
        const ev = window.addEventListener("mousemove", (event) => {            
            if (textTarget.current) {
                const element = textTarget.current
                const mouseX = event.clientX
                const mouseY = event.clientY
                const elementRect = element.getBoundingClientRect()
                let newPos = {
                    x: mouseX - elementRect.x,
                    y: mouseY - elementRect.y
                }
                if (newPos.x >= 1000 || newPos.y >= 1000) {
                    newPos = {
                        x: 2000,
                        y: 2000
                    }
                }
                    element.style.WebkitMaskImage = `radial-gradient(${rayon}px at ${newPos.x}px ${newPos.y}px, white, transparent)`
                    element.style.maskImage = `radial-gradient(${rayon}px  at ${newPos.x}px ${newPos.y}px, white, transparent)`
            }
        })
        return ()=> removeEventListener(window , ev)
    }, [])
    return <div className={className + ' shrink-0 min-w-[270px] md:min-w-[320px] min-h-[90px]  group cursor-pointer relative bg-transparent border-3 dark:border-d-accent-7 border-l-accent-7 max-w-[320px] max-h-60 w-[30%] h-[180px] md:h-[200px]'}>
        {/* left TOP */}
        <div className=' absolute w-[40px] h-[3px] dark:bg-d-accent-11 bg-l-accent-11  left-[-22px] top-[-3px]'></div>
        <div className=' absolute w-[3px] h-[40px] dark:bg-d-accent-11 bg-l-accent-11  left-[-3px] top-[-22px]'></div>
        {/* TOP RIGHT */}
        <div className=' absolute w-[40px] h-[3px] dark:bg-d-accent-11 bg-l-accent-11  right-[-22px] top-[-3px]'></div>
        <div className=' absolute w-[3px] h-[40px] dark:bg-d-accent-11 bg-l-accent-11  right-[-3px] top-[-22px]'></div>
        {/* left Bottom */}
        <div className=' absolute w-[40px] h-[3px] dark:bg-d-accent-11 bg-l-accent-11  left-[-22px] bottom-[-3px]'></div>
        <div className=' absolute w-[3px] h-[40px] dark:bg-d-accent-11 bg-l-accent-11  left-[-3px] bottom-[-22px]'></div>
        {/* Bottom RIGHT */}
        <div className=' absolute w-[40px] h-[3px] dark:bg-d-accent-11 bg-l-accent-11  right-[-22px] bottom-[-3px]'></div>
        <div className=' absolute w-[3px] h-[40px] dark:bg-d-accent-11 bg-l-accent-11  right-[-3px] bottom-[-22px]'></div>
        <div className='absolute top-0 left-0 w-full h-full flex  justify-center items-center' >
            <div className='w-[50%] group-hover:block hidden rounded-full blur-xl aspect-square dark:bg-d-accent-7 bg-l-accent-7 '></div>
        </div>
        <ul className=' absolute top-0 left-0 w-full h-full flex flex-col  justify-start pt-4 gap-4 items-center font-semibold dark:text-white text-black text-3xl md:text-5xl pb-5' >
            <li><h3>{title ?? ""}</h3></li>
            <li>{logo ?? ""}</li>
        </ul>
        <div className=' -z-10 absolute top-0 left-0 w-full rounded-xl p-2  h-full flex flex-col  justify-start items-center font-semibold dark:text-white text-black text-3xl md:text-5xl ' >
            <div
                ref={textTarget}
                style={{
                    WebkitMaskImage: `radial-gradient(${rayon}px at20px 20px, white, transparent)`,
                    maskImage: `radial-gradient(${rayon}px at  20px 20px, white, transparent)`
                }}
                className='w-full rounded-xl  h-full  flex flex-col  justify-start pt-4 gap-4 items-center font-semibold bg-gradient-to-r dark:from-blue-700 dark:via-violet-400 dark:to-green-200 dark:text-white from-blue-700 via-violet-800 to-green-700  text-black text-3xl md:text-5xl ' >
            </div>
        </div>
    </div>
}