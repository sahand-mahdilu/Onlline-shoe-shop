import { baseURL } from "../API/API";
import { App, router } from "../main";

function Payment(){
App.innerHTML=`

       <div class="payment_contaner p-2 ">
           <div class="flex items-center justify-between pt-1">
            <div class="flex items-center gap-3">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="goBack size-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="text-2xl font-Sahand">Payment</p>
          </div>
          <div class="img_container size-6">
            <img
              class="w-full h-full"
              src="./public/shoeimage/imges/top-more.png"
              alt="img"
            />
          </div>
        </div>
        <p class="text-center mt-3 text-[14px] text-gray-400">
          Select the payment method you want to use
        </p>

        <div class="flex flex-col items-center justify-center mt-3">

          <div class="flex items-center justify-between w-full px-4">
          <div class="flex items-center font-bold">
            <div class="img_container size-20">
              <img
              class="w-full h-full"
              src="./public/shoeimage/imges/mywallet.png"
              alt="wallet"
              />
            </div>
            <span>My Wallet</span>
          </div>
            <input class="size-4" checked name="pay" type="radio">
          </div>
          
      
          </div>


          <div class="flex flex-col items-center justify-center ">

            <div class="flex items-center justify-between w-full px-4">
            <div class="flex items-center font-bold">
              <div class="img_container size-20">
                <img
                class="w-full h-full"
                src="./public/shoeimage/imges/paypal.png"
                alt="wallet"
                />
              </div>
              <span>Pay Pal</span>
            </div>
              <input class="size-4" name="pay" type="radio">
            </div>
            
        
            </div>


            <div class="flex flex-col items-center justify-center">

              <div class="flex items-center justify-between w-full px-4">
              <div class="flex items-center font-bold">
                <div class="img_container size-20">
                  <img
                  class="w-full h-full"
                  src="./public/shoeimage/imges/googlepay.png"
                  alt="wallet"
                  />
                </div>
                <span>Google Pay</span>
              </div>
                <input class="size-4" name="pay" type="radio">
              </div>
              
          
              </div>


              <div class="flex flex-col items-center justify-center">

                <div class="flex items-center justify-between w-full px-4">
                <div class="flex items-center font-bold">
                  <div class="img_container size-20">
                    <img
                    class="w-full h-full"
                    src="./public/shoeimage/imges/applepay.png"
                    alt="wallet"
                    />
                  </div>
                  <span>Apple Pay</span>
                </div>
                  <input class="size-4" name="pay" type="radio">
                </div>
                
            
                </div>
        
        


                <div class=" flex justify-center m-9">
                <button class="confirm bg-black w-full   text-white p-2 rounded-3xl">Confirm Payment</button>

                </div>

        </div>



           <div class="transition-all duration-200 modal_parent opacity-0 invisible fixed inset-0 bg-black/70">

        <div class="relative w-full h-full flex justify-center items-center">

          <div class="absolute transition-all duration-200  modal top-[-100%] p-5 bg-white rounded-[30px] ">
            <div class="img_container">
              <img src="./public/shoeimage/imges/ordersuccess.png" alt="order">
            </div>
  
            <h2 class="text-center mt-5 text-xl font-Sahand">Order successful!</h2>
            <p class="text-center ">You have successfuly made order</p>
  
            <div class=" flex justify-center mt-6">
              <button class="view_order rounded-3xl w-[75%] bg-black text-white p-2 ">View order</button>
  
            </div>
  
          </div>

        </div>
    


      </div>


`


    goBack()
    confirmOrder()
   
}

function goBack(){
    const backBtn= document.querySelector(".goBack")

    backBtn.addEventListener("click",function(){


        router.navigate("/checkout")
    })

}


function confirmOrder(){

  const confirmBtn= document.querySelector(".confirm")
  const modalContainer= document.querySelector(".modal_parent")
  const modal= document.querySelector(".modal")
  const viewOrderBtn= document.querySelector(".view_order")

  confirmBtn.addEventListener("click",function(){
    getData()

    modalContainer.classList.remove("opacity-0","invisible")
    modalContainer.classList.add("opacity-100","visible")
    modal.classList.remove("top-[-100%]")
    modal.classList.add("top-[10%]")
    modal.classList.add("button-[20%]")

    emptyCart()
    emptyCheckOut()



    

  })

  viewOrderBtn.addEventListener("click",function(){

    router.navigate("/order")

  })

}

async function getData(){

  try{
    let res = await fetch(`${baseURL}/checkout`,{
      method:"GET"
    })
    let data =await res.json()
    console.log(data);//array
    createOrderData(data)
  }catch(err){
    console.log(err);
  }
}


  function createOrderData(products){

    let productsArray=[] 

    products.forEach((product,index)=>{

      console.log(index);


      if(index.length===1){

        let productInfo={
          name:product.name,
          color:product.color,
          size:product.size,
          price:product.price,
          count:product.count,
          image:product.image,
          status: false
        }
        productsArray.push(productInfo)

      }else{


        if(index%2===0){

          let productInfo={
            name:product.name,
            color:product.color,
            size:product.size,
            price:product.price,
            count:product.count,
            image:product.image,
            status: false
          }
          productsArray.push(productInfo)
  
        }else{
  
  
          let productInfo={
            name:product.name,
            color:product.color,
            size:product.size,
            price:product.price,
            count:product.count,
            image:product.image,
            status: true
          }
          productsArray.push(productInfo)
        }

      }

      

      

      
    })

    console.log(productsArray);
    postDataTobackend(productsArray)

  }

  function postDataTobackend(products){

    products.forEach(async product=>{

      if(product.status){
        
       try{
        let res = await fetch(`${baseURL}/completed`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(product)
          
          

        })
        console.log(res);
       }catch(err){
        console.log(err);
       }

      }else{

        try{
          let res = await fetch(`${baseURL}/uncompleted`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(product)
          })
          console.log(res);
        }catch(err){
          console.log(err);
        }
        
      }

    })
  }



  async function emptyCart(){

    try{

        let res = await fetch(`${baseURL}/cart`)
        let products = await res.json()//array
        

        products.forEach(async product=>{

            try{
                let res =await fetch(`${baseURL}/cart/${product.id}`,{
                    method:"DELETE"
                })
                console.log(res);
            }catch(err){
                console.log(err);
            }
        })



    }catch(err){
        console.log(err);
    }
}




async function emptyCheckOut(){

    try{

        let res = await fetch(`${baseURL}/checkout`)
        let products = await res.json()//array
        

        products.forEach(async product=>{

            try{
                let res =await fetch(`${baseURL}/checkout/${product.id}`,{
                    method:"DELETE"
                })
                console.log(res);
            }catch(err){
                console.log(err);
            }
        })



    }catch(err){
        console.log(err);
    }
}


export{Payment}

