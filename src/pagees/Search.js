import { baseURL } from "../API/API";
import { App } from "../main";

async function search(match) {
  let searchValue = match.data.id;


  let products=await  getSearchData(searchValue);//array




  App.innerHTML = `
            <div class="all_products_container p-2">
        
        <div class="flex items-center gap-2 mb-4">
          <svg id="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>

        </div>
        <div class="relative ">
          <input
            class="bg-gray-100 pr-8 p-2 w-full"
            placeholder="search"
            type="text"
          />
          <img
            class="absolute bottom-2 right-2"
            src="../shoeimage/imges/icons8-search-24.png"
            alt="search"
          />
        </div>
        
        <div class="flex items-center justify-between mt-2">
          <p class="search_text text-xl font-Sahand">results for "${match.data.id}"</p>
          <span class="count text-xl font-Sahand">${products.length} found</span>

        </div>


    
        <div class="w-full product_container mb-4 mt-6 gap-4 grid grid-cols-2 justify-center items-center">
            </div>
            </div>
    
    `;

  const productContainer = document.querySelector(".product_container");
  
}

async function getSearchData(searchValue) {
  try {
    let res = await fetch(`${baseURL}/products?q=${searchValue}`);
    let item = await res.json(); //array
    console.log(item);
    return item
  } catch (err) {
    console.log(err);
  }
}



function showProducts(productArray, container) {
  productArray.forEach((product) => {
    console.log(product);

    container.insertAdjacentHTML(
      "afterbegin",
      ` <div class="">
              <div class="relative img-container min-h-36 min-w-36  rounded-3xl overflow-hidden">
                <img class="w-full h-full object-cover" src=.${product.images} alt="image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 absolute right-2 top-2">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                
              </div>
              <h2 class="name text-[18px] font-bold">${product.name}</h2>
              <div class="flex gap-2 items-center">
                <div class="img_container size-6">
                  <img class="w-full h-full object-cover" src="../public/shoeimage/imges/star.png" alt="">
                </div >
                <span class="rate">${product.rate}</span>
                <div class="h-4 w-px bg-gray-500"></div>
                <div class="bg-gray-300 w-max px-2 pt-[2px] rounded-md text-[12px]"> ${product.sold} sold</div>
              </div>
              <span class="price text-lg font-bold">$40</span>
            </div>
`
    );
  });
}

export { search };
