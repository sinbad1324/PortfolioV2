export const ScrollTo=(elementId)=>{
    if (elementId) {
        const element = document.querySelector(elementId);
        if (element) {
            
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }
}