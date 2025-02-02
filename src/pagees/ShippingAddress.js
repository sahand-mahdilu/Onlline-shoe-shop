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
                <span class="place font-semibold">Home</span> 
                <span class="text-[10px] bg-gray-300 p-1 rounded-lg px-1">Default</span>
              </div>
              <span class="address text-gray-500 text-[14px]">tehran tajrish razi str</span>
              
            </div>
          
          </div>
          <div class="">
            <input checked class="input size-4" name="address"  type="radio">
          </div>
        </div>




        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="place font-semibold">Office</span>
              <span class="address text-gray-500 text-[14px]">Tehran velenjak esteghlal str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4 input" name="address"  type="radio">
          </div>
        </div>






        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="place font-semibold">Apartment</span>
              <span class="address text-gray-500 text-[14px]">tehran shahriar zeitun str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4 input" name="address"  type="radio">
          </div>
        </div>






        <div class="address_container my-4 bg-blue-200 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="place font-semibold">Parent House</span>
              <span class="address text-gray-500 text-[14px]">tehran shahriar kaj str</span>
              
            </div>
          
          </div>
          <div class="">
            <input class="size-4 input" name="address" type="radio">
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

    
    `;

  goBack();
  setLocalStorage();
  showModal();
}

function goBack() {
  const goBackButton = document.querySelector(".goBack");

  goBackButton.addEventListener("click", function () {
    router.navigate("/checkout");
  });
}

function setLocalStorage() {
  let formElem = document.querySelector("form");

  formElem.addEventListener("submit", function (e) {
    e.preventDefault();
    let selectedAddress = document.querySelector(".input:checked");

    if (selectedAddress) {
      let addresContainer = selectedAddress.closest(".address_container");

      let place = addresContainer.querySelector(".place").textContent;
      let address = addresContainer.querySelector(".address").textContent;

      localStorage.setItem("place", place);
      localStorage.setItem("address", address);
    }
  });
}

function showModal() {
  const applyBtn = document.querySelector(".apply");
  const modalParent = document.querySelector(".modal_parent");
  const modal = document.querySelector(".modal");

  applyBtn.addEventListener("click", function () {
    modalParent.classList.remove("opacity-0", "invisible");
    modalParent.classList.add("opacity-100", "visible");

    modal.classList.add("left-[-100%]");
    modal.classList.remove("left-[-100%]");
    modal.classList.add("left-[5%]");
    modal.classList.add("right-[5%]");

    setTimeout(async function () {
      modal.classList.remove("left-[5%]");
      modal.classList.remove("right-[5%]");
      modal.classList.add("right-[-100%]");
      modalParent.classList.remove("opacity-100", "visible");
      modalParent.classList.add("opacity-0", "invisible");

      setTimeout(function () {
        modal.classList.remove("right-[-100%]");
        modal.classList.add("left-[-100%]");
      }, 200);
    }, 2000);
  });
}

export { shippingAddress, goBack };
