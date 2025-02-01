import { App } from "../main";
import { goBack,  } from "./ShippingAddress";

function shipping(){
    App.innerHTML=`
    
      <div class="choose_shipping_container p-2">


        <form class="" action="">

          <div class="flex gap-3 pt-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 goBack">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
            <h2 class="text-xl font-Sahand">Choose Shipping </h2>
            
          </div>




        <div class="shipping_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/chooseshipping/1.png" alt="location">
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">Economy</span> 
    
              </div>
              <span class="Arrival text-gray-500 text-[14px]"> Arrival, Dec-20-23</span>
              
            </div>
          
          </div>
          <div class="flex items-center gap-2 ">
            <span class="text-[18px] font-bold shipping_price">$10</span>
            <input  class="input size-4" name="price"  type="radio">
          </div>
        </div>


        
        <div class="shipping_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/chooseshipping/2.png" alt="location">
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">Regular</span> 
    
              </div>
              <span class="Arrival text-gray-500 text-[14px]"> Arrival, jan-20-23</span>
              
            </div>
          
          </div>
          <div class="flex items-center gap-2 ">
            <span class="text-[18px] font-bold shipping_price">$15</span>
            <input  class="input size-4" name="price"  type="radio">
          </div>
        </div>


        
        <div class="shipping_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/chooseshipping/3.png" alt="location">
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">Cargo</span> 
    
              </div>
              <span class="Arrival text-gray-500 text-[14px]"> Arrival, feb-20-23</span>
              
            </div>
          
          </div>
          <div class="flex items-center gap-2 ">
            <span class="text-[18px] font-bold shipping_price">$20</span>
            <input  class="input size-4" name="price"  type="radio">
          </div>
        </div>


        
        <div class="shipping_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/chooseshipping/4.png" alt="location">
            </div>
            <div class="flex flex-col">
              <div>
                <span class="font-semibold">Express</span> 
    
              </div>
              <span class="Arrival text-gray-500 text-[14px]"> Arrival, apl-20-23</span>
              
            </div>
          
          </div>
          <div class="flex items-center gap-2 ">
            <span class="text-[18px] font-bold shipping_price">$30</span>
            <input  class="input size-4" name="price"  type="radio">
          </div>
        </div>




      




   





     




        <div class="flex justify-center mt-10">
          <input class="apply bg-black text-white p-2 w-[90%]  rounded-3xl" type="submit" value="Apply">

        </div>



      </form>






      </div>




    
      <div class=" transition-all duration-300 opacity-0 invisible  modal_parent fixed inset-0 bg-black/70">

        <div class=" w-full h-full relative flex  items-center justify-center">

            <div class=" modal transition-all duration-300 absolute left-[-100%] font-semibold rounded-xl bg-white p-3 flex flex-col items-center justify-center ">
              Dear user your Address Changed
              <span>😊</span>
            </div>



`   

goBack()

setLocalStorage()
}

function setLocalStorage() {
    let formElem = document.querySelector("form");
  
    formElem.addEventListener("submit", function (e) {
      e.preventDefault();
      let selectedPrice = document.querySelector(".input:checked");
  
      if (selectedPrice) {
         
        let addresContainer = selectedPrice.closest(".shipping_container");
  
        let price = addresContainer.querySelector(".shipping_price").textContent.slice(1);
        
        console.log(price);
  
        localStorage.setItem("shippingPrice", price);
        showModal()
      }
    });
  }


    function showModal(){

        const modalParent =document.querySelector(".modal_parent")
    const modal =document.querySelector(".modal")


    modalParent.classList.remove("opacity-0","invisible")
    modalParent.classList.add("opacity-100","visible")



    
    
    modal.classList.add("left-[-100%]")
    modal.classList.remove("left-[-100%]")
    modal.classList.add("left-[5%]")
    modal.classList.add("right-[5%]")
    
    setTimeout(async function(){
        modal.classList.remove("left-[5%]")
        modal.classList.remove("right-[5%]")
        modal.classList.add("right-[-100%]")
        modalParent.classList.remove("opacity-100","visible")
        modalParent.classList.add("opacity-0","invisible")
        
        
        
        setTimeout(function(){
            
            modal.classList.remove("right-[-100%]")
            modal.classList.add("left-[-100%]")
            
        },200)
        
    },2000)




    }

export{shipping}