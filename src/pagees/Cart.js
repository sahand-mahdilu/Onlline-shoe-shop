import { App } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";
import { navBar } from "./Home";


function cart(){
    App.innerHTML=`
  
          
      <div class="cart_container p-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="img_container size-7">
              <img
                class="w-full h-full"
                src="./public/shoeimage/imges/logo.png"
                alt=""
              />
            </div>
            <span class="font-Sahand text-2xl">My cart</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-9"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div class="product_container mb-16">

          <div class="product_cart flex items-center mt-5 rounded-3xl bg-green-100">
            <div class="img_container w-[150px] rounded-3xl overflow-hidden">
              <img class="w-full h-full" src="./public/shoeimage/imges/nike/nike-10.jpg" alt="">
            </div>
            <div class="w-full p-2">
              <div class="flex items-center justify-between px-2">
                <p class="text-lg font-bold">name</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                

              </div>

              <div class="flex gap-2 mt-4">
                <div class="color size-6 bg-orange-400 rounded-full"></div>
                <span class="color text-[13px] text-gray-500">orange</span>
                <div class="h-4 border w-0 border-gray-300"></div>
                <span class="text-gray-500 text-[13px]">size = 42</span>
              </div>
              <div class="flex items-center justify-between mt-4 px-2">
                <span class="totalPrice font-bold">
                  $150
                </span>
                <div class="bg-gray-200 w-16 rounded-md px-2 flex items-center justify-between ">
                  <button>-</button>
                  <span class="Quantity">1</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>















        </div>


        <div class=" pb-2 px-2 z-50 bg-green-200 fixed bottom-12 left-0 right-0 w-full pt-1 border-t-2 border-black mt-3  flex items-center justify-between">
          <div >
            <p class="text-[12px] text-gray-500">Total price</p>
            <span class="totalPrice font-Sahand text-[18px] ">$100</span>
          </div>
          <div>
            <button class="addToCart flex items-center justify-center   bg-black text-white p-[6px] min-w-48 rounded-2xl text-[14px]">
             <div class="flex items-center gap-1 ml-2">
               Check Out
               <img  src="../public/shoeimage/imges/gocheckout.png" alt=""> <span>
              </span>
             </div> </button>
          </div>
  
  
          </div>

         </div>
 


      


         

        
         </div>
     


      
   ${navigationBar()}


    `
    const navButtons = document.querySelectorAll(".navigation");
    const cartBtn=document.querySelector("#cart")
    const homeBtn=document.querySelector("#home")



    navBar(navButtons)
    activeButton(cartBtn,homeBtn)
}

function activeButton (cartElem,homeElem){
    console.log(homeElem);

    cartElem.src="./shoeimage/imges/cart-2.png"
    homeElem.src="./shoeimage/imges/white-home.png"
}




export{cart}