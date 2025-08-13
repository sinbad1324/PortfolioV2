import { useState } from 'react'
import Logo from "./assets/js.svg?react"
import './App.css'
import { PrimaryButton } from './components/buttons/primaryButtons'
import { SecondaryButton } from './components/buttons/SecondaryButton'
import { UnActiveButton } from './components/buttons/unActiveButton'
import { Message } from './components/messages/message'
import { Line } from './components/style/line'
import { Header } from './components/layout/header'
import { Home } from './components/layout/home'
import { About } from './components/layout/About'
import { Skills } from './components/layout/skills'
import { Project } from './components/layout/projects'
import { Contact } from './components/layout/contact'
import { Footer } from './components/layout/footer'

function App() {
  return (
    <>

      <div className=' -z-100 absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b dark:from-d-accent-3 from-transparent to-transparent'>
      </div>
      <div className='h-[2000px]'></div>
      <Header></Header>
      <main className='  w-full h-full absolute top-0 left-0 flex flex-col justify-start items-center shrink-0 '>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </main>
      <div className="fixed bottom-0 ml-2 mb-2  text-2xl text-white font-bold">
        <span className="md:hidden sm:visible">sm</span>
        <span className="hidden lg:hidden md:block">md</span>
        <span className="hidden xl:hidden lg:block">lg</span>
        <span className="hidden 2xl:hidden xl:block">xl</span>
        <span className="hidden 2xl:block">2xl</span>
        <span className="hidden 3xl:block">3xl</span>
        <span className="hidden 4xl:block">4xl</span>
        <span className="hidden 5xl:block">5xl</span>

      </div>
    </>
  )
}

export default App
