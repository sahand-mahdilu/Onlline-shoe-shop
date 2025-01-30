import { baseURL } from "../API/API";
import { App } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";
import { navBar } from "./Home";


function cart(){
    App.innerHTML=`
  
          
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
        <div class="product_container mb-16">

          















        </div>


        <div class=" pb-2 px-2 z-50 bg-green-200 fixed bottom-12 left-0 right-0 w-full pt-1 border-t-2 border-black mt-3  flex items-center justify-between">
          <div >
            <p class="text-[12px] text-gray-500">Total price</p>
            <span class="totalProductPrice font-Sahand text-[18px] ">$0</span>
          </div>
          <div>
            <button class="addToCart flex items-center justify-center   bg-black text-white p-[6px] min-w-48 rounded-2xl text-[14px]">
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


    `
    const navButtons = document.querySelectorAll(".navigation");
    const cartBtn=document.querySelector("#cart")
    const homeBtn=document.querySelector("#home")
    const productContainerElem= document.querySelector(".product_container")
    
  

    

    navBar(navButtons)
    activeButton(cartBtn,homeBtn)
    getCartData(productContainerElem)
}

function activeButton (cartElem,homeElem){

    cartElem.src="./shoeimage/imges/cart-2.png"
    homeElem.src="./shoeimage/imges/white-home.png"
}


async function getCartData(container){
    try{

        let res = await fetch(`${baseURL}/cart`,{
            method:"GET"
        })
        let data= await res.json()//array
        console.log("sahand");

        if(data.length===0){
             let totalElem = document.querySelector(".totalProductPrice")
        totalElem.innerHTML=`$0`

 container.insertAdjacentHTML("afterbegin",`
    <div class="mt-3 max-w-[350px] mx-auto h-[300px]">
      <img class="w-full h-full" src="./public/shoeimage/imges/notfound.png" alt="">
    
    </div>
    <P class="mt-2 text-center text-xl font-Sahand">Cart is emptey ☹️</P>
    `)
        }else{

            showProduct(data,container)
        }
    }catch(err){
        console.log(err);
    }
    

}

 function showProduct(productArray,container){

     productArray.forEach((product)=>{
        container.insertAdjacentHTML("afterbegin",`<div class="product_cart flex items-center mt-5 rounded-3xl bg-green-100">
            <div class="img_container w-[150px] rounded-3xl overflow-hidden">
              <img class="w-full h-full" src=${product.image} alt="">
            </div>
            <div class="w-full p-2">
              <div class="flex items-center justify-between px-2">
                <p class="text-lg font-bold">${product.name}</p>
                <img id=${product.id} class="trash size-10" src="./public/shoeimage/imges/recycle.webp">

                
                

              </div>

              <div class="flex gap-2 mt-4">
                <div style= background-color:${product.color} ; class="color size-6  rounded-full"></div>
                <span class="color text-[13px] text-gray-500">${product.color}</span>
                <div class="h-4 border w-0 border-gray-300"></div>
                <span class="text-gray-500 text-[13px]">size = ${product.size}</span>
              </div>
              <div class="priceSection flex items-center justify-between mt-4 px-2">
                <span class="productPrice font-bold data-base-price=${product.price}">
                  $${product.price}
                </span>
                <div class="bg-gray-200 w-16 rounded-md px-2 flex items-center justify-between ">
                  <button class="minus" >-</button>
                  <span class="Quantity">${product.count}</span>
                  <button class="plus" >+</button>
                </div>
              </div>
            </div>
          </div>`)

        

    })

    const trashbtn= document.querySelectorAll(".trash")
    const plusBtn=document.querySelectorAll(".plus")
    const minusBtn=document.querySelectorAll(".minus")
    const productPrice=document.querySelectorAll(".productPrice")
    const quantityElemm=document.querySelectorAll(".Quantity")

    
    removeProduct(trashbtn,container)
    PriceCalculater(plusBtn,minusBtn,quantityElemm,productPrice)
}

  function removeProduct(deleteButtons,container){

    for(let button of deleteButtons){

         button.addEventListener("click",async function(e){
            let id=e.target.id
            console.log(id);
                
            try{
                let res = await fetch(`${baseURL}/cart/${id}`,{
                    method:"DELETE"
                })
                
                
                console.log(res);
                if(res.ok){
                    console.log("ok");
                     container.innerHTML = ''

                    getCartData(container)
                }
            }catch(err){
                console.log(err);
            }
            
        })
    }

   

    

}


function PriceCalculater(plusbtns,minusbtns,quantities,prices){
    console.log(prices);

    for(let plusButton of plusbtns){


           
        plusButton.addEventListener("click",function(){
            let parent= plusButton.closest(".priceSection")

            let priceElem = parent.querySelector(".productPrice")
    
            let price =  Number(priceElem.textContent.trim().slice(1))
            let quantity = Number(plusButton.previousElementSibling.textContent)
            
            let basePrice=price/quantity
                
         
    
    
            let sum = price     
            plusButton.previousElementSibling.textContent++

            sum+=basePrice
            console.log(sum);
            priceElem.textContent=`$${sum}` 



            totalPriceHandler(prices)
        
        })


      
    }
    for(let minusButton of minusbtns){
        
       

        minusButton.addEventListener("click",function(){
            let parent= minusButton.closest(".priceSection")

            let priceElem = parent.querySelector(".productPrice")
    
            let price =  Number(priceElem.textContent.trim().slice(1))
            let quantity = Number(minusButton.nextElementSibling.textContent)
            
            let basePrice=price/quantity
    
            console.log(price);
                
         
    
    
            let sum = price  

            let content= minusButton.nextElementSibling.textContent
            console.log(content);
            if(content>1){
                minusButton.nextElementSibling.textContent--
                sum-=basePrice
                console.log(sum);
                priceElem.textContent=`$${sum}` 
            }

            totalPriceHandler(prices)
        })
    }
    totalPriceHandler(prices)

}

function totalPriceHandler(prices){

   console.log();
    console.log(prices);

   

        let priceArray=[]
        for(let price of prices){
    
            let productprice=Number(price.textContent.trim().slice(1))
            priceArray.push(productprice)
    
            
            
        }
    
        let totalElem = document.querySelector(".totalProductPrice")
        
        
        let totalPrice= priceArray.reduce((acc,current)=>{
            return acc+current
        },0)
        
        totalElem.innerHTML=`$${totalPrice}`
        
        console.log(totalPrice)
   
        
    
   

}




export{cart}