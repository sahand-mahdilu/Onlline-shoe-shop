import { baseURL } from "../API/API";
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
              <input id="email" placeholder="Enter Email" class="w-full px-7 p-2 bg-yellow-50 rounded-lg" type="email" name="user-email">
              <img class="absolute left-0" src="./shoeimage/imges/Email icon.png" alt="email">
            </div>
            <div class="relative w-[85%] flex items-center justify-center">
              <input id="password" placeholder="Enter password" class="px-7 p-2 mt-5 w-full bg-yellow-50 rounded-lg" type="password" name="user-password">
              <img class="absolute left-0 bottom-2" src="./shoeimage/imges/passLock icon.png" alt="lock">
              <img id="eye" class="absolute right-1 bottom-2 size-5" src="./shoeimage/imges/eye.png" alt="">
            </div>
          </div>
          <div class="w-full flex justify-center mt-auto">
            <input id="submit-btn" disabled  class=" mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]" type="submit" value="Sign Up">
          </div>
        </form>
      </div>`;
  const eyeElem = document.querySelector("#eye");
  const passwordInput = document.querySelector("#password");
  const emailElem = document.querySelector("#email");
  const submitBtn = document.querySelector("#submit-btn");

  showPassword(eyeElem, passwordInput);
  enableButton(emailElem, passwordInput, submitBtn);
  registering(emailElem,passwordInput,submitBtn)
}

function showPassword(eyeElement, PasswordElem) {
  let flag = true;

  eyeElement.addEventListener("click", function () {
    if (flag) {
      PasswordElem.type = "text";
      eyeElement.src = "./shoeimage/imges/invisible.png";
      flag = false;
    } else {
      PasswordElem.type = "password";
      eyeElement.src = "./shoeimage/imges/eye.png";

      flag = true;
    }
  });
}

function enableButton(emailElem, passwordElem, singUpBtn) {
  let passwordvalue;
  let emailValue;

  emailElem.addEventListener("keyup", function () {
    emailValue = emailElem.value;
    if (passwordvalue && emailValue) {
      singUpBtn.removeAttribute("disabled");
      singUpBtn.classList.remove("bg-gray-500");
      singUpBtn.classList.add("bg-black");
    }else{
      singUpBtn.classList="mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]"
      singUpBtn.setAttribute("disabled","true")
    }
  });

  passwordElem.addEventListener("keyup", function () {
    passwordvalue = passwordElem.value;

    if (passwordvalue && emailValue) {
      singUpBtn.removeAttribute("disabled");
      singUpBtn.classList.remove("bg-gray-500");
      singUpBtn.classList.add("bg-black");
    }else{
      singUpBtn.classList="mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]"
      singUpBtn.setAttribute("disabled","true")
    }
  });
}

  function registering(emailElem,passwordElem,submitBtn){

    submitBtn.addEventListener("click",function(e){
      e.preventDefault()

      addUser()

        async function addUser(){
          
          let userInfo={
            email: emailElem.value,
            password:passwordElem.value
          }
          console.log(userInfo);

          try{
            let res = await fetch(`${baseURL}/register`,{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
              body:JSON.stringify(userInfo)
            })
            let data= await res.json()
            let accessToken=data.accessToken

            console.log(accessToken);
          }catch(err){
            console.log(err.message);
          }

        }
    })
  }