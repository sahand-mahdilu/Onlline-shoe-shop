import { baseURL } from "../API/API";
import { App, } from "../main";

async function singleProduct(match){

    let productId=match.data.id
    console.log(productId);
 let  item= await getData(productId)//array
 let product=item[0]
 console.log(product);


    App.innerHTML=`
        
      <div class="single_product_container ">
        <div class="img-container max-w-[340px]   relative h-[220px]">
          <img class="w-full h-full " src=.${product.images} alt="img">
          <svg id="backIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 absolute top-1 left-1">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
          </svg>
        </div>
        <div>
          <div class="flex justify-between px-2">
            <p class="text-lg font-Sahand">${product.name}</p>
            <div class="img_container size-6">
              <img class="w-full h-full object-cover" src="../shoeimage/imges/like.png" alt="like">
            </div>
          </div>
          <div class="px-2 flex items-center gap-3 mt-2">
            <div class="p-1 bg-slate-200 w-max px-2 rounded-md text-[12px] font-semibold">${product.sold} sold</div>
            <div class="img_container size-5">
              <img class="w-full h-full object-cover" src="../public/shoeimage/imges/star.png" alt="">
            </div>
            <span class="rate text-[13px]">${product.rate} (5.359 reviews)</span>
          </div>
          <div class="px-2 mt-5">
            <p class="text-lg font-semibold">Description</p>
            <p class="description text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, labore quasi! Quia ad sed porro?</p>
          </div>
          <div class="px-2 flex items-center justify-between ">
            <div>
              <span class=" font-semibold text-[17px]">size</span>
            <div class="size flex gap-1">
              <div class="sizeBtn flex items-center justify-center size-6 border border-black rounded-full text-[12px] text-white bg-black ">${product.sizes[0]}</div>
              <div class="sizeBtn flex items-center justify-center size-6 border border-black rounded-full text-[12px] ">${product.sizes[1]}</div>
              <div class="sizeBtn flex items-center justify-center size-6 border border-black rounded-full text-[12px] ">${product.sizes[2]}</div>
            </div>
          </div>

            <div>
              <span class="font-semibold text-[17px]">color</span>
              <div class="colors flex gap-1">
                <div style=background-color:${product.colors[0]} class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div style=background-color:${product.colors[1]}  class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div style=background-color:${product.colors[2]} class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div style=background-color:${product.colors[3]} class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white">
                  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div style=background-color:${product.colors[4]}  class="flex items-center justify-center size-6 border border-black rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 text-white">
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
              <span class="quantity text-[14px]">1</span>
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
                  <img  src="../public/shoeimage/imges/carticon.png" alt=""> <span>
                    Add to cart
                  </span>
                 </div> </button>
              </div>


            </div>
        </div>



      </div>

`
    const backBtn= document.querySelector("#backIcon")
    const sizeButtons= document.querySelectorAll(".sizeBtn")
    console.log(sizeButtons);

    goBack(backBtn)
    sizeButtonColor(sizeButtons)

}

async function getData(id){

    try{
        let res =  await fetch(`${baseURL}/products?id=${id}`)
        let  data=await res.json()
        console.log(data);
        return data
    }catch(err){
        console.log(err);
    }
}
// go previous page

function goBack(elem){
    elem.addEventListener("click",function(){
       window.history.back()
    })
} 

// size buttons background color

function sizeButtonColor(buttons){
    for(let button of buttons){

        button.addEventListener("click",function(){

            for(let button of buttons){
                button.style.backgroundColor="white"
                button.style.color="black"
            }
            button.style.backgroundColor="black"
            button.style.color="white"
        })

    }
}



export{singleProduct}