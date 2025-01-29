import { App } from "../main";

function singleProduct(){

    App.innerHTML=`
        
      <div class="single_product_container ">
        <div class="img-container relative h-[220px]">
          <img class="w-full h-full object-cover" src="./shoeimage/imges/nike/nike-10.jpg" alt="img">
          <svg id="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 absolute top-1 left-1">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <div class="flex justify-between px-2">
            <p class="text-lg font-Sahand">name</p>
            <div class="img_container size-6">
              <img class="w-full h-full object-cover" src="./shoeimage/imges/like.png" alt="like">
            </div>
          </div>
          <div class="px-2 flex items-center gap-3 mt-2">
            <div class="p-1 bg-slate-200 w-max px-2 rounded-md text-[12px] font-semibold">5845 sold</div>
            <div class="img_container size-5">
              <img class="w-full h-full object-cover" src="./public/shoeimage/imges/star.png" alt="">
            </div>
            <span class="rate text-[13px]">4.3 (5.359 reviews)</span>
          </div>
          <div class="px-2 mt-5">
            <p class="text-lg font-semibold">Description</p>
            <p class="description text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, labore quasi! Quia ad sed porro?</p>
          </div>
          <div class="px-2 flex items-center justify-between ">
            <div>
              <span class=" font-semibold text-[17px]">size</span>
            <div class="size flex gap-1">
              <div class="flex items-center justify-center size-6 border border-black rounded-full text-[12px] text-white bg-black ">35</div>
              <div class="flex items-center justify-center size-6 border border-black rounded-full text-[12px] ">40</div>
              <div class="flex items-center justify-center size-6 border border-black rounded-full text-[12px] ">42</div>
            </div>
          </div>

            <div>
              <span class="font-semibold text-[17px]">color</span>
              <div class="colors flex gap-1">
                <div class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
              </div>

             

            </div>
            

          </div>

          <div class="px-2 flex items-center gap-4 mt-3">
            <span class="text-lg font-semibold">Quantity</span>
            <div class="bg-slate-200 w-20 flex justify-between items-center  px-2 rounded-md text-[15px]">
              <button class="text-[18px] font-semibold">-</button>
              <span class="quantity text-[14px]">100</span>
              <button class="text-[18px] font-semibold">+</button>
            </div>
          </div>

            <div class="px-2 w-full pt-1 border-t-2 border-black mt-3  flex items-center justify-between">
              <div >
                <p class="text-[12px] text-gray-500">Total price</p>
                <span class="totalPrice font-Sahand text-[18px] ">$250</span>
              </div>
              <div>
                <button class="flex items-center justify-center   bg-black text-white p-[6px] min-w-48 rounded-2xl text-[14px]">
                 <div class="flex items-center gap-1 mr-2">
                  <img  src="./public/shoeimage/imges/carticon.png" alt=""> <span>
                    Add to cart
                  </span>
                 </div> </button>
              </div>


            </div>
        </div>



      </div>

`
}