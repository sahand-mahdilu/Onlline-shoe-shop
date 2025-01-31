export function navigationBar() {
   let content=  `

    <div class="fixed bg-green-200 bottom-0 left-0 right-0  z-40 border-t-2 border-green-500 border-dotted">



       <div class="flex justify-between px-4 py-1">

          <div class="navigation flex flex-col items-center justify-center">
            <div  class="img_container size-6">
              <img id="home" class="w-full h-full object-cover" src="./shoeimage/imges/home.png" alt="home">
            </div>
            <span class="text-center text-[12px] font-bold">home</span>
          </div>

          <div  class="navigation flex flex-col items-center justify-center">
            <div class="img_container size-6">
              <img id="cart" class="w-full h-full object-cover" src="./shoeimage/imges/cart.png" alt="cart">
            </div>
            <span class="text-center text-[12px] font-bold">Cart</span>
          </div>


          <div class="navigation flex flex-col items-center justify-center">
            <div class="img_container size-6">
              <img class="w-full h-full object-cover" src="./shoeimage/imges/shoppi.png" alt="orders">
            </div>
            <span class="text-center text-[12px] ml-1 font-bold">Orders</span>
          </div>


          <div class="navigation flex flex-col items-center justify-center">
            <div class="img_container size-6">
              <img class="w-full h-full object-cover" src="./shoeimage/imges/wallet.png" alt="wallet">
            </div>
            <span class="text-center text-[12px] font-bold">Wallet</span>
          </div>


          <div class="navigation flex flex-col items-center justify-center">
            <div class="img_container size-6">
              <img class="w-full h-full object-cover" src="./shoeimage/imges/profile.png" alt="profile">
            </div>
            <span class="ml-1 text-center text-[12px] font-bold">Profile</span>
          </div>
          
          

        </div>

        </div>
    
    `

    return content
}

