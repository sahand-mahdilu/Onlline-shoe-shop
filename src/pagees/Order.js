import { baseURL } from "../API/API";
import { App } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";
import { navBar } from "./Home";


function order(){
    App.innerHTML=`
    
    
      <div class="order_container p-2">



        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="img_container size-7">
              <img
                class="w-full h-full"
                src="./public/shoeimage/imges/logo.png"
                alt=""
              />
            </div>
            <span class="font-Sahand text-2xl">My Orders</span>
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

        <div class="flex items-center justify-center gap-2 mt-3">
          <div class="w-[50%]">
          <div class="active  flex flex-col items-center justify-center">
            <span class="activeBtn cursor-pointer">Active</span>
            <div class="active_bar h-[3px] w-full  bg-black"></div>
          </div>
         
        </div>


        <div class="w-[50%]" >
          <div class="completed  flex flex-col items-center justify-center">
            <span class="completeBtn">Completed</span>
            <div class="completed_bar h-[3px] w-full bg-gray-300"></div>
          </div>
          
        </div>
        </div>


        <div class="product_container mb-16">
          
        </div>






      </div>



       
        ${navigationBar()}
    
    `

    const navButtons = document.querySelectorAll(".navigation");
    const homeBtn = document.querySelector("#home");
    const orderBtn = document.querySelector("#order");

    console.log(orderBtn);
    navBar(navButtons);
    activeButton(orderBtn,homeBtn)
    activeOrcomplete()
    getActiveData()
 
}

function activeButton(orderElem, homeElem) {
    orderElem.src = "./shoeimage/imges/shoppi1.png";
    homeElem.src = "./shoeimage/imges/white-home.png";
  }


  async function getActiveData(){

    try{

        let res = await fetch(`${baseURL}/uncompleted`,{
            method:"GET"
        })

        let data = await res.json()//array
        console.log(data);
        showData(data)

    }catch(err){
        console.log(err);
    }



  }


  
  async function getCompleteData(){

    try{

        let res = await fetch(`${baseURL}/completed`,{
            method:"GET"
        })

        let data = await res.json()//array
        console.log(data);
        showData(data)

    }catch(err){
        console.log(err);
    }



  }


  function showData(products){

    const productContainer= document.querySelector(".product_container")
    console.log(productContainer);


    if(products.length===0){

        productContainer.innerHTML=`  <div class="mt-3 max-w-[350px] mx-auto h-[300px]">
      <img class="w-full h-full" src="./public/shoeimage/imges/notfound.png" alt="">
    
    </div>
    <P class="mt-2 text-center text-xl font-Sahand">You dont have an order yet ☹️</P> `

    }else{

        products.forEach(product=>{

            productContainer.insertAdjacentHTML("afterbegin",`<div class="cart product_cart  flex items-center mt-5 rounded-3xl bg-green-100">
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
          <span class="status text-[13px] bg-black text-white  rounded-xl px-2 ">active</span>
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
          `)
    
    
          
          
          const status= document.querySelector(".status")
          if(!product.status){
    
            status.textContent="active"
        }else{
            
            status.textContent="completed"
            
          }
          
        })
        

    }

   

  


  }

  


  





  function activeOrcomplete(){
    const activeBtn =document.querySelector('.activeBtn')
    const completeBtn =document.querySelector('.completeBtn')
    const activeBar=document.querySelector(".active_bar")
    const completeBar=document.querySelector(".completed_bar")
    const productContainer= document.querySelector(".product_container")


    activeBtn.addEventListener("click",function(){

        activeBar.classList.add("bg-black")
        activeBar.classList.remove("bg-gray-300")
        completeBar.classList.remove("bg-black")
        completeBar.classList.add("bg-gray-300")
        productContainer.innerHTML=""


        getActiveData()

    })

    completeBtn.addEventListener("click",function(){

        activeBar.classList.remove("bg-black")
        activeBar.classList.add("bg-gray-300")
        completeBar.classList.add("bg-black")
        completeBar.classList.remove("bg-gray-300")
        productContainer.innerHTML=""


        getCompleteData()
    })

   
  }



 

export{order}