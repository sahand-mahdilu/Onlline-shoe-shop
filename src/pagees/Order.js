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


        <div class="product_container">
          
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

    }catch(err){
        console.log(err);
    }



  }


  





  function activeOrcomplete(){
    const activeBtn =document.querySelector('.activeBtn')
    const completeBtn =document.querySelector('.completeBtn')
    const activeBar=document.querySelector(".active_bar")
    const completeBar=document.querySelector(".completed_bar")


    activeBtn.addEventListener("click",function(){

        activeBar.classList.add("bg-black")
        activeBar.classList.remove("bg-gray-300")
        completeBar.classList.remove("bg-black")
        completeBar.classList.add("bg-gray-300")

    })

    completeBtn.addEventListener("click",function(){

        activeBar.classList.remove("bg-black")
        activeBar.classList.add("bg-gray-300")
        completeBar.classList.add("bg-black")
        completeBar.classList.remove("bg-gray-300")
    })

   
  }






export{order}