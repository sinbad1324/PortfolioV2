import { useTheme } from '../../contexts/themeContext'
import { PrimaryButton } from '../buttons/primaryButtons'
import { CreateForm } from '../createFromes'
import { Line } from '../style/line'
import { useEffect, useRef } from 'react'

const TealText = ({ children }) => {
    return <span className='dark:text-d-accent-11 text-l-accent-11 font-base'>{children}</span>
}

export const Contact = ({ }) => {
    const { theme } = useTheme()
    const FormsContainer = useRef()
    return <section
        id='Contact'
        className=" shrink-0 relative flex flex-col  justify-between items-center w-full h-fit gap-20 md:gap-30 overflow-hidden dark:text-white pt-20"
    >
        <h2 className='relative z-10 font-bold dark:text-white  xl:text-8xl md:text-6xl text-5xl '>Contact</h2>
        <div className='z-10 w-full h-fit flex flex-col lg:flex-row justify-around p-5'>
            <div className='lg:w-1/2 w-full flex flex-col justify-start items-center lg:items-start gap-2'>
                <h3 className='dark:text-d-accent-11 text-l-accent-11 text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold'>Do you need help?</h3>
                <p className='md:font-bold font-semibold dark:text-d-gray-11 text-l-gray-11 text-sm md:text-xl'>
                    Contact me via the <TealText>social networks</TealText> or send me an <TealText>email</TealText>.
                </p>
            </div>
            <div className='lg:w-1/2 w-full '>
                <form action="" className='w-full h-full flex flex-col justify-start items-start gap-4'>
                    <div className='flex w-full h-fit flex-col justify-start items-start gap-0.5'>
                        <label htmlFor="Name" className='text-xl  font-bold dark:text-d-accent-11 text-l-accent-11'>Name:</label>
                        <input type="text" placeholder='Your name...' id='Name' name='Name' className=' dark:placeholder-d-gray-12 placeholder-l-gray-12 w-full h-[60px]  outline-0 border-2 dark:border-d-accent-6 border-l-accent-7 dark:bg-d-gray-4 bg-l-gray-4 rounded-sm p-2 font-semibold dark:focus:bg-d-gray-5 dark:focus:border-d-accent-5 focus:bg-l-gray-5 focus:border-l-accent-5' />
                    </div>
                    <div className='flex w-full h-fit flex-col justify-start items-start gap-0.5'>
                        <label htmlFor="Email" className='text-xl  font-bold dark:text-d-accent-11 text-l-accent-11'>Email:</label>
                        <input type="text" id='Email' placeholder='Your email...' name='Email' className=' dark:placeholder-d-gray-12 placeholder-l-gray-12 w-full h-[60px]  outline-0 border-2 dark:border-d-accent-6 border-l-accent-7 dark:bg-d-gray-4 bg-l-gray-4 rounded-sm p-2 font-semibold dark:focus:bg-d-gray-5 dark:focus:border-d-accent-5 focus:bg-l-gray-5 focus:border-l-accent-5' />
                    </div>
                    <div className='flex w-full h-fit flex-col justify-start items-start gap-0.5'>
                        <label htmlFor="Email" className='text-xl  font-bold dark:text-d-accent-11 text-l-accent-11'>Message:</label>
                        <textarea type="text" id='Email' placeholder='Your email...' name='Email'
                            className=' dark:placeholder-d-gray-12 placeholder-l-gray-12 w-full h-[250px]  outline-0 border-2 dark:border-d-accent-6 border-l-accent-7 dark:bg-d-gray-4 bg-l-gray-4 rounded-sm p-2 font-semibold dark:focus:bg-d-gray-5 dark:focus:border-d-accent-5 focus:bg-l-gray-5 focus:border-l-accent-5' />
                    </div>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <a href="mailto:mohammad@mohaizad.com" className='dark:text-d-accent-12 text-l-accent-12 underline'>mohammad@mohaizad.com</a>
                        <PrimaryButton className="md:w-[120px]  w-[100px] font-light text-lg " >Send</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
         <div className='flex absolute top-0 left-0 w-full h-full z-0 backdrop-blur-xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5'></div>
        <div className='flex absolute top-0 left-0 w-full h-full -z-10 '>
            <div ref={FormsContainer} className="  relative top-0 left-0 w-full h-full ">
                {Array.from({ length: 25 }, (_, i) => {
                    return <CreateForm  center={true} className="w-20 h-20 hover:scale-110 cursor-pointer contrast-200" getRef={FormsContainer} key={i} />;
                })}
            </div>
        </div>
        <div className=' relative w-full h-fit flex flex-col items-center justify-center  md:pt-10'>
            <Line></Line>
        </div>
    </section>
}
