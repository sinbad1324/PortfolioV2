import FR from "../langs/FR.json"
import EN from "../langs/EN.json"
import ES from "../langs/ES.json"
import DE from "../langs/DE.json"
import AR from "../langs/AR.json"

export const GetLang=(lang)=>{
    if (lang == "FR") {
        return FR
    }else if (lang=="EN") {
        return EN
    }else if (lang=="AR") {
        return AR
    }else if (lang=="ES") {
        return ES
    }else if (lang=="DE") {
        return DE
    }
}