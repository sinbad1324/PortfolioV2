
import { createContext, useState, useContext, useEffect } from "react"

const LangContext = createContext()

const LangsSupport = [
    "FR",
    "EN",
    "ES",
    "DE",
    "AR"
]


const  LangContextProvider=({ children })=> {
    const [Lang, setLang] = useState("EN");
    const toggleLang = (newLang) => {
        setLang(newLang)
        localStorage.setItem("LocalLang", newLang)
    }

    useEffect(() => {
        const navLang = !LangsSupport.includes(navigator.language.toUpperCase()) ? "EN" : navigator.language
        const localLang = localStorage.getItem("LocalLang") != null ? localStorage.getItem("LocalLang") : navLang
        setLang(localLang)
    }, [])

    return (<LangContext.Provider value={{
        Lang,
        toggleLang
    }}>
        {children}
    </LangContext.Provider>)
}
const  useLangContext=()=> {
    return useContext(LangContext)
}

export { LangContextProvider, useLangContext } 