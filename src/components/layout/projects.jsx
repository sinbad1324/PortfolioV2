import { useTheme } from '../../contexts/themeContext'
import { Carre } from '../../jsxIcon/carre';
import { Circle } from '../../jsxIcon/circle';
import { Triangle } from '../../jsxIcon/triangle';
import { ProjectBlock } from '../ProjectBlock';
import { Line } from '../style/line'
import { useEffect, useRef, useState } from 'react'
import img from "../../assets/ExampleSite.png";
const classNameCircle = "w-[50vw] lg:w-[40vw] aspect-square"

function generateRandomColor() {
    let maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randomColor = randomNumber.toString(16);
    return `#${randomColor.padStart(6, 0)}`;
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const Images = [
    Carre,
    Circle,
    Triangle,
];


let leftCount = 0;
let rightCoun = 0;
const maxForms = 24;
const getRandomPos = (parentSize) => {
    if (Math.random() * 1 <= .5 && leftCount < maxForms / 2) {
        return { left: getRandomArbitrary(5, (parentSize.width / 4) - 50) }
    }
    if (rightCoun < maxForms / 2) {
        return { right: getRandomArbitrary(5, (parentSize.width / 4) - 50) }
    }
    getRandomPos(parentSize)
}
const CreateForm = ({ ref, className }) => {

    // console.log(ref.current);
    if (!ref.current) {
        return;
    }

    const RandomForm = Images[Math.floor(Math.random() * Images.length)];
    const color = generateRandomColor()

    let style = {
        fill: color,
        stroke: color,
        strokeWidth: "0px"
    }
    if (Math.random() * 1 <= .5) {
        style = {
            fill: "none",
            stroke: color,
            strokeWidth: "1px"
        }
    }

    const parentSize = ref.current.getBoundingClientRect();


    return (
        <div
            className={className}
            style={
                {
                    position: "absolute", ...getRandomPos(parentSize),
                    top: getRandomArbitrary(0, parentSize.height - 50) + "px",
                    rotate: Math.random() * 20
                }}>
            <RandomForm
                style={{ width: "100%", height: "100%", ...style }}
                fill={style.fill}
                stroke={style.stroke}
                strokeWidth={style.strokeWidth}
            />
        </div>
    );
};


export const Project = ({ }) => {
    const { theme } = useTheme()
    return <section
        id='Projects'
        className=" shrink-0 relative flex flex-col  justify-start items-center w-full h-fit gap-30 overflow-hidden "
    >
        <div className='  z-10  top-0 left-0 w-full h-full flex flex-col justify-around items-center'>
            <h2 className=' text-5xl  md:text-9xl  dark:text-white font-semibold' >Prjects</h2>
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
        <div className='w-full h-full absolute top-0 left-0 backdrop-blur-[5px]'></div>

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
                return <CreateForm className="w-16 h-16 hover:scale-110 cursor-pointer" ref={FormsContainer} key={i} />;
            })}
        </div>
    </div>

}