import { router } from "../main"


 export function getCookie(){


    let token= document.cookie

    if(token){

        router.navigate("/home")
    }
        




}

