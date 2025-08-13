import { useEffect, useRef, useState } from 'react'
import { Carre } from '../jsxIcon/carre';
import { Circle } from '../jsxIcon/circle';
import { Triangle } from '../jsxIcon/triangle';
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
 const getRandomPos = (parentSize,center=false) => {
    let diviseur = center?2:4
    if (Math.random() * 1 <= .5 && leftCount < maxForms / 2) {
        return { left: getRandomArbitrary(5, (parentSize.width / diviseur) - 50) }
    }
    if (rightCoun < maxForms / 2) {
        return { right: getRandomArbitrary(5, (parentSize.width / diviseur) - 50) }
    }
    getRandomPos(parentSize)
}
export const CreateForm = ({ getRef, className ,center=false }) => {
    const [parentSize, setParentSize] = useState(null);

    useEffect(() => {
        if (getRef.current) {
            setParentSize(getRef.current.getBoundingClientRect());
        }
    }, [getRef]);

    if (!parentSize) {
        return null; 
    }

    const RandomForm = Images[Math.floor(Math.random() * Images.length)];
    const color = generateRandomColor();

    let style = {
        fill: color,
        stroke: color,
        strokeWidth: "0px"
    };

    if (Math.random() <= 0.5) {
        style = {
            fill: "none",
            stroke: color,
            strokeWidth: "1px"
        };
    }

    return (
        <div
            className={className}
            style={{
                position: "absolute",
                ...getRandomPos(parentSize,center),
                top: getRandomArbitrary(0, parentSize.height - 50) + "px",
                rotate: Math.random() * 20
            }}
        >
            <RandomForm
                style={{ width: "100%", height: "100%", ...style }}
                fill={style.fill}
                stroke={style.stroke}
                strokeWidth={style.strokeWidth}
            />
        </div>
    );
};