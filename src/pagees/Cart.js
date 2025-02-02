import { baseURL } from "../API/API";
import { App, router } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";
import { navBar } from "./Home";

function cart() {
  App.innerHTML = `
  
          
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
        <div class="product_container mb-32">

          















        </div>


        <div class=" pb-2 px-2 z-40 bg-green-200 fixed bottom-12 left-0 right-0 w-full pt-1 border-t-2 border-black mt-3  flex items-center justify-between">
          <div >
            <p class="text-[12px] text-gray-500">Total price</p>
            <span class="totalProductPrice font-Sahand text-[18px] ">$0</span>
          </div>
          <div>
            <button class="CheckOut flex items-center justify-center   bg-black text-white p-[6px] min-w-48 rounded-2xl text-[14px]">
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


    `;
  const navButtons = document.querySelectorAll(".navigation");
  const cartBtn = document.querySelector("#cart");
  const homeBtn = document.querySelector("#home");
  const productContainerElem = document.querySelector(".product_container");

  navBar(navButtons);
  activeButton(cartBtn, homeBtn);
  getCartData(productContainerElem);
  addToCheckOut();
}

function activeButton(cartElem, homeElem) {
  cartElem.src = "./shoeimage/imges/cart-2.png";
  homeElem.src = "./shoeimage/imges/white-home.png";
}

async function getCartData(container) {
  try {
    let res = await fetch(`${baseURL}/cart`, {
      method: "GET",
    });
    let data = await res.json(); //array

    if (data.length === 0) {
      let totalElem = document.querySelector(".totalProductPrice");
      totalElem.innerHTML = `$0`;

      container.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="mt-3 max-w-[350px] mx-auto h-[300px]">
      <img class="w-full h-full" src="./public/shoeimage/imges/notfound.png" alt="">
    
    </div>
    <P class="mt-2 text-center text-xl font-Sahand">Cart is emptey ☹️</P>
    `
      );
    } else {
      showProduct(data, container);
    }
  } catch (err) {
    console.log(err);
  }
}

function showProduct(productArray, container) {
  productArray.forEach((product) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="cart product_cart  flex items-center mt-5 rounded-3xl bg-green-100">
            <div class="img_container w-[150px] rounded-3xl overflow-hidden">
              <img class="image w-full h-full" src=${product.image} alt="">
            </div>
            <div class="w-full p-2">
              <div class="flex items-center justify-between px-2">
                <p class="name text-lg font-bold">${product.name}</p>
                <img id=${product.id}   data-product-name=${product.name} data-product-color=${product.color} data-product-size=${product.size} data-product-image=${product.image}   class="trash size-10" src="./public/shoeimage/imges/recycle.webp">

                
                

              </div>

              <div class="flex gap-2 mt-4">
                <div style= background-color:${product.color} ; class="color size-6  rounded-full"></div>
                <span class="color text-[13px] text-gray-500">${product.color}</span>
                <div class="h-4 border w-0 border-gray-300"></div>
                <span class="size text-gray-500 text-[13px]">size = ${product.size}</span>
              </div>
              <div class="priceSection flex items-center justify-between mt-4 px-2">
                <span class="price productPrice font-bold data-base-price=${product.price}">
                  $${product.price}
                </span>
                <div class="bg-gray-200 w-16 rounded-md px-2 flex items-center justify-between ">
                  <button class="minus" >-</button>
                  <span class="Quantity count">${product.count}</span>
                  <button class="plus" >+</button>
                </div>
              </div>
            </div>
          </div>
          


          
           
      <div class=" modal_container transition-all fixed inset-0 z-50 w-screen opacity-0 invisible h-screen bg-black/70">

        <div class=" relative w-full h-full">
          <div class=" modal transition-all duration-300 absolute bg-white left-0 right-0 bottom-[-100%]  rounded-t-3xl">
            <p class="text-center   text-xl font-bold mt-4 mb-2" >Remove from cart?</p>
            <div class="h-px  border-[1px] border-gray-300 mb-2"></div>
            <div class="p-2">
              <div class="product_cart flex items-center mt-5 rounded-3xl bg-green-100">
                <div class="img_container w-[150px] rounded-3xl overflow-hidden">
                  <img class="p_img w-full h-full" src=${product.image} alt="">
                </div>
                <div class="w-full p-2">
                  <div class="flex items-center justify-between px-2">
                    <p class="p_name text-lg font-bold">${product.name}</p>
                    <img id=${product.id} class=" size-10" src="./public/shoeimage/imges/recycle.webp">
    
                    
                    
    
                  </div>
    
                  <div class="flex gap-2 mt-4">
                    <div style= background-color:${product.color} ; class="color p_color size-6  rounded-full"></div>
                    <span class="c_text color text-[13px] text-gray-500">${product.color}</span>
                    <div class="h-4 border w-0 border-gray-300"></div>
                    <span class="p-size text-gray-500 text-[13px]">size = ${product.size}</span>
                  </div>
                  <div class="priceSection flex items-center justify-between mt-4 px-2">
                   
                   
                  </div>
                </div>
              </div>



              <div class="h-px  border-[1px] border-gray-300 mb-2 mt-4"></div>
              <div class="flex justify-center gap-4 py-4">
                <button class="cancel p-[6px] w-28 rounded-2xl bg-gray-400">Cancel</button>
                <button class=" remove_p p-[6px] w-28 rounded-2xl bg-black text-white">Yes,Remove</button>
              </div>
            </div>
          </div>

        </div>

       </div>

          
          `
    );
  });

  const trashbtn = document.querySelectorAll(".trash");
  const plusBtn = document.querySelectorAll(".plus");
  const minusBtn = document.querySelectorAll(".minus");
  const productPrice = document.querySelectorAll(".productPrice");
  const quantityElemm = document.querySelectorAll(".Quantity");

  // upDateCartData();
  console.log("hi");

  PriceCalculater(plusBtn, minusBtn, quantityElemm, productPrice);
  removeProduct(trashbtn, container);
}

function removeProduct(deleteButtons, container) {
  const modalContainer = document.querySelector(".modal_container");
  const modalElemr = document.querySelector(".modal");
  const cancelButton = document.querySelector(".cancel");
  const removeButton = document.querySelector(".remove_p");
  let id;

  cancelButton.addEventListener("click", function () {
    modalContainer.classList.remove("opacity-100", "visible");
    modalContainer.classList.add("opacity-0", "invisible");

    modalElemr.classList.remove("bottom-0");
    modalElemr.classList.add("bottom-[-100%]");
  });

  for (let delButton of deleteButtons) {
    delButton.addEventListener("click", function (e) {
      id = e.target.id;
      deleteProduct(id, removeButton, container);

      let productName = e.target.dataset.productName;
      let productImage = e.target.dataset.productImage;
      let productSize = e.target.dataset.productSize;
      let productColor = e.target.dataset.productColor;

      document.querySelector(".p_img").src = productImage;
      document.querySelector(".p_name").textContent = productName;
      document.querySelector(".p_color").style.backgroundColor = productColor;
      document.querySelector(".c_text").innerHTML = productColor;
      document.querySelector(".p-size").innerHTML = `size=${productSize}`;

      modalContainer.classList.remove("opacity-0", "invisible");
      modalContainer.classList.add("opacity-100", "visible");
      modalElemr.classList.remove("bottom-[-100%]");
      modalElemr.classList.add("bottom-0");
    });
  }

  /////////////////////////////////////////////////////////////////
}

function deleteProduct(id, delButton, container) {
  delButton.addEventListener("click", async function (e) {
    try {
      let res = await fetch(`${baseURL}/cart/${id}`, {
        method: "DELETE",
      });

      console.log(res);
      if (res.ok) {
        console.log("ok");
        container.innerHTML = "";

        getCartData(container);
        // upDateCartData();
      }
    } catch (err) {
      console.log(err);
    }
  });
}

function PriceCalculater(plusbtns, minusbtns, quantities, prices) {
  const trash = document.querySelector(".trash");

  for (let plusButton of plusbtns) {
    plusButton.addEventListener("click", function () {
      let parent = plusButton.closest(".priceSection");

      let priceElem = parent.querySelector(".productPrice");

      let price = Number(priceElem.textContent.trim().slice(1));
      let quantity = Number(plusButton.previousElementSibling.textContent);

      let basePrice = price / quantity;

      let sum = price;
      plusButton.previousElementSibling.textContent++;

      sum += basePrice;
      priceElem.textContent = `$${sum}`;

      ///////////////////////////////////////////////////////////////////

      totalPriceHandler(prices);
      // upDateCartData();
    });
  }
  for (let minusButton of minusbtns) {
    minusButton.addEventListener("click", function () {
      let parent = minusButton.closest(".priceSection");

      let priceElem = parent.querySelector(".productPrice");

      let price = Number(priceElem.textContent.trim().slice(1));
      let quantity = Number(minusButton.nextElementSibling.textContent);

      let basePrice = price / quantity;

      console.log(price);

      let sum = price;

      let content = minusButton.nextElementSibling.textContent;
      console.log(content);
      if (content > 1) {
        minusButton.nextElementSibling.textContent--;

        sum -= basePrice;
        console.log(sum);
        priceElem.textContent = `$${sum}`;
      }

      totalPriceHandler(prices);
      // upDateCartData();
    });
  }
  totalPriceHandler(prices);
}

function totalPriceHandler(prices) {
  let priceArray = [];
  for (let price of prices) {
    let productprice = Number(price.textContent.trim().slice(1));
    priceArray.push(productprice);
  }

  let totalElem = document.querySelector(".totalProductPrice");

  let totalPrice = priceArray.reduce((acc, current) => {
    return acc + current;
  }, 0);

  totalElem.innerHTML = `$${totalPrice}`;
}

function upDateCartData() {
  let products = [];
  const cartElems = document.querySelectorAll(".cart");

  for (let cart of cartElems) {
    let name = cart.querySelector(".name").textContent;
    let color = cart.querySelector(".color").style.backgroundColor;
    let size = cart.querySelector(".size").textContent.slice(7);
    let price = cart.querySelector(".price").textContent.trim().slice(1);
    let count = cart.querySelector(".count").textContent;
    let image = cart.querySelector(".image").src;

    let product = {
      name,
      color,
      size,
      price,
      count,
      image,
    };

    products.push(product);
  }

  console.log(products);
  postData(products);
}

function addToCheckOut() {
  const CheckOutBtn = document.querySelector(".CheckOut");

  CheckOutBtn.addEventListener("click", function () {
    upDateCartData();
  });
}

function postData(products) {
  products.forEach(async (product) => {
    console.log(product);

    try {
      let res = await fetch(`${baseURL}/checkout`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        router.navigate("/checkout");
      }
    } catch (err) {
      console.log(err);
    }
  });
}

export { cart,activeButton };
