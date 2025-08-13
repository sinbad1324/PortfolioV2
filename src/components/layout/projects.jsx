import { useTheme } from '../../contexts/themeContext'
import { ProjectBlock } from '../ProjectBlock';
import { Line } from '../style/line'
import { useEffect, useRef, useState } from 'react'
import img from "../../assets/ExampleSite.png";
import { CreateForm } from '../createFromes';
const classNameCircle = "w-[50vw] lg:w-[40vw] aspect-square"


export const Project = ({ }) => {
    const { theme } = useTheme()
    return <section
        id='Projects'
        className=" shrink-0 relative flex flex-col  justify-start items-center w-full h-fit gap-30 overflow-hidden "
    >
        <div className='  z-10  top-0 left-0 w-full h-full flex flex-col justify-around items-center'>
            <h2 className=' xl:text-8xl md:text-6xl text-5xl font-bold   dark:text-white ' >Prjects</h2>
            <div className=' w-full h-full flex flex-col justify-start items-center pt-50 gap-20'>
                <ProjectBlock img={img} title={"Wix"} descriptions={["ee","eewf"]}></ProjectBlock>
                <ProjectBlock img={img} title={"Wix"} descriptions={["ee","eewf"]}></ProjectBlock>
                <ProjectBlock img={img} title={"Wix"} descriptions={["ee","eewf"]}></ProjectBlock>
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