import { useLangContext } from "../../contexts/langContext";

export const DropMenu = ({ visible = false,setVisible ,  onChoice = (v) => { }, className, elements = [] }) => {
    const {Lang,toggleLang} = useLangContext();
    const handleClick =(v)=>{
        onChoice(v);
        setVisible(false);
        toggleLang(v);        
    }
    return <>
        {
            visible ? <div className={className + " text-l-accent-12 dark:text-d-accent-12 h-fit w-[170px] cursor-pointer overflow-hidden rounded-xl backdrop-blur-md dark:bg-d-accent-4/50 bg-l-accent-4/50 dark:border-d-accent-5 border-l-accent-5 border-2 "}>
                {
                    elements.map(v => {
                        return <div
                            onClick={()=>handleClick(v.value)}
                            key={v.text}
                            className=" flex flex-row p-5 justify-start gap-4 items-center  w-full h-11 dark:bg-d-accent-4 bg-l-accent-4 hover:dark:bg-d-accent-5 hover:bg-l-accent-5 active:bg-l-accent-7 dark:active:bg-d-accent-7 ">
                            {v.icon} | <p className="w-[25px]">{v.text}</p>
                        </div>
                    })
                }
            </div> : ""
        }
    </>
}


