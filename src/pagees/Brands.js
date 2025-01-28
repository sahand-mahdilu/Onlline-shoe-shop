import { App } from "../main";
import { goBack } from "./Allproducts";
import { fetchData } from "./Home";

function brands(match) {
  let productBrand = match.data.id;
  console.log(productBrand);

  App.innerHTML = `

        <div class="all_products_container p-2">
        
        <div class="flex items-center gap-2 mb-4">
          <svg id="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
            <p class="text-xl font-Sahand">${productBrand}</p>

        </div>
     
    
        <div class="w-full product_container mb-4 mt-6 gap-4 grid grid-cols-2 justify-center items-center">

          


          </div>


          </div>
    
        
    `;
  const goBackElem = document.querySelector("#backIcon");
  const containerElem = document.querySelector(".product_container");
  fetchData(productBrand, containerElem);
  goBack(goBackElem);
}

export { brands };
