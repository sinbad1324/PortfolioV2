
export const UnActiveButton=({text,children , className, ...props})=>{
    return <button
        className={className+" bg-d-gray-2 text-d-gray-10 font-semibold border-d-gray-5   border-2 rounded-full min-w-[70px] min-h-[45px] w-fit h-fit p-2.5 pl-5 pr-5 cursor-not-allowed flex justify-center items-center gap-2 "}
    {...props}
    >
        {text}
        {children}
    </button>
}