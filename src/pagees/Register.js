import { App, router } from "../main";

export function register(){

    App.innerHTML=`<p>register</p>  <button id="back">back</button>`

    document.querySelector("#back").addEventListener("click",function(){

        router.navigate("/")
    })
}