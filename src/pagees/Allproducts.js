import { baseURL } from "../API/API";
import { App, router } from "../main";
import { scrollBarChangeColor, showRandomProduct } from "./Home";

function allProducts() {
  App.innerHTML = `<div class="all_products_container p-2">
        
        <div class="flex items-center gap-2 mb-4">
          <svg id="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
            <p class="text-xl font-Sahand">All Products</p>

        </div>
     
      <div class="flex gap-2 overflow-x-scroll mt-2">
        <div id="all" class="scrollBar border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 bg-black text-white ">All</div>
          <div id="Nike" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Nike</div>
          <div id="Adidas" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Adidas</div>
          <div id="Asics" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Asics</div>
          <div id="Puma" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Puma</div>
          <div id="Converse" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Converse</div>
          <div id="NewBalance" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Newbalance</div>
          <div id="Reebok" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Reebok</div>
        </div>
        <div class="w-full product_container mb-4 mt-6 gap-4 grid grid-cols-2 justify-center items-center">

          


          </div>


          </div>`;

  const backIconElem = document.querySelector("#backIcon");
  const productContainer = document.querySelector(".product_container")
  const scrollBarElements =document.querySelectorAll(".scrollBar")



  goBack(backIconElem)
  getAllProducts(productContainer)
  scrollBarChangeColor(scrollBarElements,productContainer)
}
//  go back
function goBack(button) {
  button.addEventListener("click", function () {
    router.navigate("/home");
  });
}
// get all Products
async function getAllProducts(container){
    try{
        let res = await fetch(`${baseURL}/products`,{
            method:"GET"
        })
        let products= await res.json()// all products
        showRandomProduct(products,container)
        console.log(products);
    }catch(err){
        console.log(err);
    }
    
}

export { allProducts ,getAllProducts };
