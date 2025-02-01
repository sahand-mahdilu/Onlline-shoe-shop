import { baseURL } from "../API/API";
import { App, router } from "../main";

function checkOut() {
  App.innerHTML = `  <div class="checkOut_container p-2 ">

        <div class="flex items-center justify-between pt-1"> 
     <div class="flex items-center gap-3">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="goBack size-6">
        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
      </svg>
      <p class="text-2xl font-Sahand">Checkout</p>
     </div>
        <div class="img_container size-6">
          <img class="w-full h-full " src="./public/shoeimage/imges/top-more.png" alt="img">
        </div>
        </div>
        



        <h2 class="text-lg font-bold mt-4">shipping Address</h2>
        <div class="address_container my-4 bg-green-300 p-3 rounded-xl flex items-center justify-between">

          <div class="flex gap-4   items-center">
            <div class="image_container size-10 rounded-full overflow-hidden">
              <img class=" w-full h-full" src="./public/shoeimage/imges/location.png" alt="location">
            </div>
            <div class="flex flex-col">
              <span class="place font-semibold">Home</span>
              <span class="address text-gray-500 text-[14px]">tehran tajrish razi str</span>
              
            </div>
          
          </div>
          <div class="img_container size-9">
            <img class="editAddress w-full h-full" src="./public/shoeimage/imges/edit-cryaon.png" alt="">
          </div>
        </div>

        <div class="h-px border-[1px] mb-4 border-gray-300"></div>

        <h2 class="text-[18px] font-semibold mb-4">Order List</h2>

        <div class="cart_container mb-5">




         


          


          












        </div>
        <!-- choose Shipping -->
         <div class="h-px border-[1px] border-gray-300 mb-6"></div>
         <h2 class="text-lg font-bold">Choose Shipping</h2>

         <div class="m-2 choose_shipping flex items-center justify-between bg-green-300 p-3 rounded-xl">
          <div class="flex items-center gap-3">
            <div class="rounded-full overflow-hidden img_container size-10">
              <img class="w-full h-full" src="./public/shoeimage/imges/chooseshipping/3.png" alt="ship">
            </div>
            <span class="font-bold text-[15px]">
              Choose Shipping Type
            </span>
          </div>
          <div class="img_container size-5">
            <img class="shipping w-full h-full" src="./public/shoeimage/imges/right-arrow.png" alt="arrow">
          </div>

         </div>

         <div class="h-px border-[1px] my-5 border-gray-300"></div>

         <h2 class="text-lg font-bold">Promo code</h2>
         <div class="flex gap-6 justify-center mt-3">
          <input class="w-[70%] code p-2 bg-gray-200 rounded-lg" placeholder="Enter promo code" type="text">

          <div class="promoBtn cursor-pointer rounded-full flex justify-center items-center size-12 text-white bg-black text-xl">+</div>


         </div>
         

         <div class="p-2 bg-green-300 my-5 rounded-lg">
            <div class="mt-3 text-lg font-semibold flex items-center justify-between px-5">
              <span>Amount</span>
              <span class="amount">$500</span>
            </div>
            <div class="mt-2 text-lg font-semibold flex items-center justify-between px-5">
              <span>Shipping</span>
              <span class="shipping_price">-</span>
            </div>
            <div class="h-px border-[1px] my-4 border-gray-500"></div>
            <div class="text-lg font-semibold flex items-center justify-between px-5">
              <span>Total</span>
              <span>-</span>
            </div>
         </div>


         <button class="mx-auto mb-2 bg-black text-white p-2 w-[90%] flex items-center justify-center rounded-3xl">
          <div class="flex items-center gap-1">
            <span>Continue to Payment</span>
            <img src="./public/shoeimage/imges/gocheckout.png" alt="check">
          </div>
         </button>

         
      </div>`;

  getData();
  goBack();
  editAddress();
  setAddress()
  goShipping()
  setShippingPrice()
}

async function getData() {
  try {
    let res = await fetch(`${baseURL}/checkout`, {
      method: "GET",
    });
    let data = await res.json(); //data array
    console.log(data);
    showData(data);
    totalPrice(data);
  } catch (err) {
    console.log(err);
  }
}

function showData(products) {
  const cartContainer = document.querySelector(".cart_container");
  console.log(cartContainer);
  
  products.forEach((product) => {
    cartContainer.insertAdjacentHTML(
      "afterbegin",
      ` <div class="cart product_cart  flex items-center mt-5 rounded-3xl bg-green-100">
      <div class="img_container w-[150px] rounded-3xl overflow-hidden">
      <img class="image w-full h-full" src=${product.image} alt="img">
      </div>
      <div class="w-full p-2">
      <div class="flex items-center justify-between px-2">
      <p class="name text-lg font-bold">${product.name}</p>
      
      
      
      
      
      </div>
      
      <div class="flex gap-2 mt-4">
      <div style= "background-color:${product.color} " class="color size-6  rounded-full"></div>
      <span class="color text-[13px] text-gray-500">${product.color}</span>
      <div class="h-4 border w-0 border-gray-300"></div>
      <span class="size text-gray-500 text-[13px]">size=${product.size}</span>
      </div>
      <div class="priceSection flex items-center justify-between mt-4 px-2">
      <span class="price productPrice font-bold ">
      $${product.price}
      </span>
      <div class="bg-gray-200 rounded-full size-8 font-semibold  px-2 flex items-center justify-center ">
      ${product.count}
      </div>
      </div>
      </div>
      </div>
      
      
      
      
      
      `
    );
  });
}

function goBack() {
  const backButton = document.querySelector(".goBack");
  backButton.addEventListener("click", function () {
    router.navigate("/cart")
  });
}

function totalPrice(products) {
  let totalPriceElem = document.querySelector(".amount");
  
  let sum = 0;
  products.forEach((product) => {
    sum += +product.price;
  });
  
  totalPriceElem.textContent = `$${sum}`;
}

function editAddress() {
  const editAddress = document.querySelector(".editAddress");
  editAddress.addEventListener("click", function () {
    router.navigate("/shippingaddress");
  });
}

function setAddress(){
  
  const place =document.querySelector(".place")
  const address =document.querySelector(".address")
  console.log(place);
  console.log(address);
  let placeValue= localStorage.getItem("place")
  let addressValue= localStorage.getItem("address")
  place.textContent=placeValue
  address.textContent=addressValue
  
}

function goShipping(){
  const shippingBtn=document.querySelector(".shipping")
  shippingBtn.addEventListener("click",function(){

    router.navigate("/shipping")
  })

    

}

function setShippingPrice(){

  const shippingPriceElem= document.querySelector(".shipping_price")
  let shippingPrice= localStorage.getItem("shippingPrice")
  shippingPriceElem.textContent=`$${shippingPrice}`
}

function calculateTotalPrice(){

  
} 

export { checkOut };
