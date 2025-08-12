import { SuccessMessage } from "./successes"
import { ErrorMessage } from "./error"
import { WarnMessage } from "./warn"
import { InfoMessage } from "./info"

export const Message=({message , life=3000 , type})=>{
    console.log(type);
    
   if (type == "warn") {
        return <WarnMessage message={message} life={life}></WarnMessage>
   }else if (type == "info") {
        return <InfoMessage message={message} life={life}></InfoMessage>
   }else if (type == "error") {
        return <ErrorMessage message={message} life={life}></ErrorMessage>
   }
   else if (type == "success") {
        return <SuccessMessage message={message} life={life}></SuccessMessage>
   }else {
    return <></>
   }
}