
import { App, router } from "../main";

export function register() {
  App.innerHTML = `   <div class="register-container flex flex-col items-center justify-center max-h-screen">
        <div class="mt-4 image-container">
          <img src="./public/shoeimage/imges/logo.png" alt="logo">
        </div>
        <p class="text-[32px] font-semibold text-center">Please register </p>
        <form class="flex flex-col w-full h-screen" action="">
          <div class="flex flex-col w-full items-center mt-auto">
            <div class="relative  w-[85%] flex items-center justify-center">
              <input placeholder="Enter Email" class="w-full px-7 p-2 bg-yellow-50 rounded-lg" type="email" name="user-email">
              <img class="absolute left-0" src="./shoeimage/imges/Email icon.png" alt="email">
            </div>
            <div class="relative w-[85%] flex items-center justify-center">
              <input id="password" placeholder="Enter password" class="px-7 p-2 mt-5 w-full bg-yellow-50 rounded-lg" type="password" name="user-password">
              <img class="absolute left-0 bottom-2" src="./shoeimage/imges/passLock icon.png" alt="lock">
              <img id="eye" class="absolute right-1 bottom-2 size-5" src="./shoeimage/imges/eye.png" alt="">
            </div>
          </div>
          <div class="w-full flex justify-center mt-auto">
            <input class=" mb-4 p-2 w-[85%] bg-black text-white rounded-[30px]" type="submit" value="Sign Up">
          </div>
        </form>
      </div>`


      

showPassword()
}


function showPassword(){

    const eyeElem= document.querySelector("#eye")
    const passwordInput= document.querySelector("#password")

    let flag=true

    eyeElem.addEventListener("click",function(){

        if(flag){
            passwordInput.type="text"
            flag=false

        }else{
            passwordInput.type="password"
            flag=true
        }


       
    })
}
