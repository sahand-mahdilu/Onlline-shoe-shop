
import { App, router } from "../main"; 
export function loader(){

    App.innerHTML=`
    <P>loader</P> <button id="next">next</button>`

    document.querySelector("#next").addEventListener("click",function(){

        router.navigate("/register")
    })

}