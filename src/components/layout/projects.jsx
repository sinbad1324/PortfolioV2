import { ProjectBlock } from '../ProjectBlock';
import { Line } from '../style/line'
import { useEffect, useRef, useState } from 'react'
import projectOne from "../../assets/ProjectOne.png";
import { CreateForm } from '../createFromes';
const classNameCircle = "w-[50vw] lg:w-[40vw] aspect-square"
import { useLangContext } from "../../contexts/langContext";
import { GetLang } from '../../utils/getCurrentLang'

export const Project = ({ }) => {
    const { Lang } = useLangContext();
    const currentLang = GetLang(Lang)
    return <section
        id='Projects'
        className=" shrink-0 relative flex flex-col  justify-start items-center w-full h-fit gap-30 overflow-hidden "
    >
        <div className='  z-10  top-0 left-0 w-full h-full flex flex-col justify-around items-center pt-[70px]'>
            <h2 className=' xl:text-8xl md:text-6xl text-5xl font-bold   dark:text-white ' >{currentLang.header[3]}</h2>
            <div className=' w-full h-full flex flex-col justify-start items-center pt-50 gap-20'>
                <ProjectBlock img={projectOne} title={"SpriteSort"} descriptions={
                    [<div className=' lg:p-3  w-full h-full felx flex-col justify-start  items-start'>
                        <svg width={"25px"} fill="#3d0082" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM4,4H20V6H4ZM20,20H4V8H20ZM6,12a1,1,0,0,1,1-1H17a1,1,0,0,1,0,2H7A1,1,0,0,1,6,12Zm0,4a1,1,0,0,1,1-1h5a1,1,0,0,1,0,2H7A1,1,0,0,1,6,16Z"></path></g></svg>
                        <p className='pt-1 lg:pt-5'>
                            {currentLang.Project.list[0].descripton}
                        </p>
                    </div>,
                    <div className=' lg:p-3  w-full h-full felx flex-col justify-start  items-start'>
                        <svg width={"25px"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#7d9902" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="50.4" y1="24.38" x2="58.3" y2="23.14"></line><line x1="47.93" y1="17.11" x2="52.87" y2="14.2"></line><line x1="42.89" y1="11.73" x2="46.21" y2="4.51"></line><line x1="33.45" y1="10.69" x2="33.41" y2="4.96"></line><line x1="24.29" y1="12.09" x2="21.62" y2="4.51"></line><line x1="17.99" y1="17.03" x2="12.96" y2="14.29"></line><line x1="15.78" y1="23.97" x2="8.03" y2="22.66"></line><path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3"></path><path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3"></path><rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12"></rect><rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12"></rect><path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84"></path><path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11"></path></g></svg>
                        <p className='pt-1 lg:pt-5'>
                            {currentLang.Project.list[0].idee}
                        </p>
                    </div>
                    ]
                }></ProjectBlock>
            </div>
        </div>
        <Formes />
        <div className='absolute z-0 top-0 left-0 w-full h-fit flex flex-row justify-center items-start' >
            <div className={classNameCircle + ' relative  aspect-square'}>
                <div className={classNameCircle + ' absolute top-[-50%] left-0  dark:bg-d-accent-11  bg-l-accent-11 blur-[60px]  md:blur-[100px] lg:blur-[160px] xl:blur-[200px]  rounded-full '} ></div>
            </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 backdrop-blur-[5px] dark:bg-d-accent-6/10 bg-l-accent-6/10'></div>

        <div className=' relative w-full h-fit flex flex-col items-center justify-center  md:pt-10'>
            <Line></Line>
        </div>
    </section>
}




const Formes = () => {
    const FormsContainer = useRef()
    const [reRender, setRender] = useState(false);
    useEffect(() => {
        !FormsContainer.current ? setRender(v => !v) : null

    }, [FormsContainer.current])
    return <div className='flex absolute top-0 left-0 w-full h-full'>
        <div ref={FormsContainer} className="  relative top-0 left-0 w-full h-full ">
            {Array.from({ length: 45 }, (_, i) => {
                return <CreateForm className="w-16 h-16 hover:scale-110 cursor-pointer" getRef={FormsContainer} key={i} />;
            })}
        </div>
    </div>

}