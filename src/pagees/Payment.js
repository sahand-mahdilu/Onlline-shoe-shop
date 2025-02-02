import { App } from "../main";

function Payment(){
App.innerHTML=`

       <div class="payment_contaner p-2 ">
           <div class="flex items-center justify-between pt-1">
            <div class="flex items-center gap-3">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="goBack size-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="text-2xl font-Sahand">Payment</p>
          </div>
          <div class="img_container size-6">
            <img
              class="w-full h-full"
              src="./public/shoeimage/imges/top-more.png"
              alt="img"
            />
          </div>
        </div>
        <p class="text-center mt-3 text-[14px] text-gray-400">
          Select the payment method you want to use
        </p>

        <div class="flex flex-col items-center justify-center mt-3">

          <div class="flex items-center justify-between w-full px-4">
          <div class="flex items-center font-bold">
            <div class="img_container size-20">
              <img
              class="w-full h-full"
              src="./public/shoeimage/imges/mywallet.png"
              alt="wallet"
              />
            </div>
            <span>My Wallet</span>
          </div>
            <input class="size-4" checked name="pay" type="radio">
          </div>
          
      
          </div>


          <div class="flex flex-col items-center justify-center ">

            <div class="flex items-center justify-between w-full px-4">
            <div class="flex items-center font-bold">
              <div class="img_container size-20">
                <img
                class="w-full h-full"
                src="./public/shoeimage/imges/paypal.png"
                alt="wallet"
                />
              </div>
              <span>Pay Pal</span>
            </div>
              <input class="size-4" name="pay" type="radio">
            </div>
            
        
            </div>


            <div class="flex flex-col items-center justify-center">

              <div class="flex items-center justify-between w-full px-4">
              <div class="flex items-center font-bold">
                <div class="img_container size-20">
                  <img
                  class="w-full h-full"
                  src="./public/shoeimage/imges/googlepay.png"
                  alt="wallet"
                  />
                </div>
                <span>Google Pay</span>
              </div>
                <input class="size-4" name="pay" type="radio">
              </div>
              
          
              </div>


              <div class="flex flex-col items-center justify-center">

                <div class="flex items-center justify-between w-full px-4">
                <div class="flex items-center font-bold">
                  <div class="img_container size-20">
                    <img
                    class="w-full h-full"
                    src="./public/shoeimage/imges/applepay.png"
                    alt="wallet"
                    />
                  </div>
                  <span>Apple Pay</span>
                </div>
                  <input class="size-4" name="pay" type="radio">
                </div>
                
            
                </div>
        
        


                <div class=" flex justify-center m-10">
                <button class="bg-black w-full mx-auto  text-white p-2 rounded-3xl">Continue Payment</button>

                </div>

        </div>


`

}


export{Payment}

