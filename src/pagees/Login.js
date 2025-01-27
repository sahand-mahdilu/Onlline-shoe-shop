import { baseURL } from "../API/API";
import { App, router } from "../main";


 function login(){
             App.innerHTML = `   <div class="register-container flex flex-col items-center justify-center max-h-screen">
                    <div class="mt-4 image-container">
                      <img src="./public/shoeimage/imges/logo.png" alt="logo">
                    </div>
                    <p class="text-[32px] font-semibold text-center">Login</p>
                    <form class="flex flex-col w-full h-screen" action="">
                      <div class="flex flex-col w-full items-center mt-auto">
                        <div class="relative  w-[85%] flex items-center justify-center">
                          <input id="email" placeholder="Enter Email" class="w-full px-7 p-2 bg-yellow-50 rounded-lg" type="email" name="user-email">
                          <img class="absolute left-0" src="./shoeimage/imges/Email icon.png" alt="email">
                        </div>
                        <div id="password-container" class="relative w-[85%] flex items-center justify-center">
                          <input min="4" id="password" placeholder="Enter password" class="px-7 p-2 mt-5 w-full bg-yellow-50 rounded-lg" type="password" name="user-password">
                          <img class="absolute left-0 bottom-2" src="./shoeimage/imges/passLock icon.png" alt="lock">
                          <img id="eye" class="absolute right-1 bottom-2 size-5" src="./shoeimage/imges/eye.png" alt="">
                        </div>
                      </div>
                      <div class="w-full flex justify-center mt-auto">
                        <input id="submit-btn" disabled  class=" mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]" type="submit" value="Login">
                      </div>
                    </form>
                  </div>`;
                  
              const eyeElem = document.querySelector("#eye");
              const passwordInput = document.querySelector("#password");
              const emailElem = document.querySelector("#email");
              const submitBtn = document.querySelector("#submit-btn");
              const passwordContainer = document.querySelector("#password-container");
            
              showPassword(eyeElem, passwordInput);
              enableButton(emailElem, passwordInput, submitBtn);
              registering(emailElem, passwordInput, submitBtn, passwordContainer);
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
                } else {
                  singUpBtn.classList =
                    "mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]";
                  singUpBtn.setAttribute("disabled", "true");
                }
              });
            
              passwordElem.addEventListener("keyup", function () {
                passwordvalue = passwordElem.value;
            
                if (passwordvalue && emailValue) {
                  singUpBtn.removeAttribute("disabled");
                  singUpBtn.classList.remove("bg-gray-500");
                  singUpBtn.classList.add("bg-black");
                } else {
                  singUpBtn.classList =
                    "mb-4 p-2 w-[85%] bg-gray-500 text-white rounded-[30px]";
                  singUpBtn.setAttribute("disabled", "true");
                }
              });
            }
            
            function registering(emailElem, passwordElem, submitBtn, passwordContainer) {
              submitBtn.addEventListener("click", function (e) {
                e.preventDefault();
            
                addUser(passwordElem);
            
                async function addUser(passwordElem) {
                  let userInfo = {
                    email: emailElem.value,
                    password: passwordElem.value,
                  };
            
                  try {
                    let res = await fetch(`${baseURL}/login`, {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(userInfo),
                    });
                    console.log(res);
                    if (res.ok) {
                    //   let data = await res.json();
                     
                        router.navigate("/home");
            
                    //   console.log(data);
                      // add to cookie
                     
                    } else {
                      //error handling
                      showError(passwordContainer);
                      passwordElem.value = "";
                    }
                  } catch (err) {
                    showAPIerror(passwordContainer, err);
                    console.log(err.message);
                    emailElem.value=""
                    passwordElem.value=""
            
                  }
                }
              });
            }
            
            // function setCookie(token) {
            //   let now = new Date();
            //   console.log(now);
            
            //   now.setTime(now.getTime() + 1 * 24 * 60 * 60 * 1000);
            
            //   console.log(now);
            
            //   document.cookie = `accessToken=${token};path=/;expires=${now}`;
            // }
            
            function showError(passwordElem) {
              if (
                passwordElem.nextElementSibling &&
                passwordElem.nextElementSibling.tagName === "P"
              ) {
                passwordElem.nextElementSibling.remove();
              }
            
              passwordElem.insertAdjacentHTML(
                "afterend",
                "<p class='text-red-500 mt-2'>Password must be at least 4 charecters</p>"
              );
            }
            function showAPIerror(passwordElem, error) {
              if (
                passwordElem.nextElementSibling &&
                passwordElem.nextElementSibling.tagName === "P"
              ) {
                passwordElem.nextElementSibling.remove();
              }
            
              passwordElem.insertAdjacentHTML(
                "afterend",
                `<P class="text-red-500 mt-2">${error.message}</P> <p class='text-red-500 '>  some thing went wrong! try again</p>
                  `
              );
              
            }
    
    





export {login}