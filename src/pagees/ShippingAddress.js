import { App, router } from "../main";

function shippingAddress() {
  App.innerHTML = `
       <div class="shipping_address_container p-2">


        <form class="" action="">

          <div class="flex gap-3 pt-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 goBack">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
            <h2 class="text-xl font-Sahand">Shipping Address</h2>
            
          </div>




        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">Home</span> 
                <span class="text-[10px] bg-gray-300 p-1 rounded-lg px-1">Default</span>
              </div>
              <span class="text-gray-500 text-[14px]">tehran tajrish razi str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4" name="address"  type="radio">
          </div>
        </div>




        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="font-semibold">Office</span>
              <span class="text-gray-500 text-[14px]">Tehran velenjak esteghlal str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4" name="address"  type="radio">
          </div>
        </div>






        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="font-semibold">Apartment</span>
              <span class="text-gray-500 text-[14px]">tehran shahriar zeitun str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4" name="address"  type="radio">
          </div>
        </div>






        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="font-semibold">Parent House</span>
              <span class="text-gray-500 text-[14px]">tehran shahriar kaj str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4" name="address" type="radio">
          </div>
        </div>


        <div class="flex justify-center mt-10">
          <input class="bg-black text-white p-2 w-[90%]  rounded-3xl" type="submit" value="Apply">

        </div>



      </form>






      </div>
    
    `
    
    goBack()
}


function goBack(){
    const goBackButton= document.querySelector(".goBack")

    goBackButton.addEventListener("click",function(){

        router.navigate("/checkout")
    })

}

export { shippingAddress };
