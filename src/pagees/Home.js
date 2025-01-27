import { App } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";

function home(){

    App.innerHTML=`
      <div class="home-container p-2">
        <div class="nav border-b-2 border-green-500 border-dotted fixed z-50 top-0 left-0 right-0 p-2 bg-green-200">
          <div class="flex items-center justify-between p-1">
            <div class="right-content flex items-center gap-2">
              <div class="img-container size-12 rounded-full overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  src="./shoeimage/imges/sahand.jpg"
                  alt="sahand"
                />
              </div>
              <div>
                <p class="text-[16px] text-gray-500">Good Morning 👋</p>
                <p class="text-[16px] font-Sahand">Sahand Mahdilu</p>
              </div>
            </div>
            <div class="right-content">
              <img src="./public/shoeimage/imges/header.png" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-between bg-green-100 p-1 mt-2">
            <div class="logos flex gap-1">
              <span class="text-[12px] font-bold"> your browser:</span>
              <img
                class="chrome size-5"
                src="./shoeimage/imges/chrome.png"
                alt="chrome"
                title="Google Chrome"
              />
              <img
                class="firefox size-5"
                src="./shoeimage/imges/firefox.png"
                alt="firefox"
                title="Mozilla Firefox"
              />
              <img
                class="edge size-5"
                src="./shoeimage/imges/edge.png"
                alt="edge"
                title="Microsoft Edge"
              />
              <img
                class="opera size-5"
                src="./shoeimage/imges/opera.png"
                alt="opera"
                title="Opera"
              />
              <img
                class="safari size-5"
                src="./shoeimage/imges/safari.png"
                alt="safari"
                title="Apple Safari"
              />
            </div>
            <div class="flex items-center">
              <img
                class="size-6"
                src="./shoeimage/imges/battery.webp"
                alt="battery"
              />
              <span class="battery">10%</span>
            </div>
          </div>
        </div>

        <section class="brands-section">
          <div class="relative mt-28">
            <input
              class="bg-gray-100 px-7 p-2 w-full"
              placeholder="search"
              type="text"
            />
            <img
              class="absolute bottom-2"
              src="./shoeimage/imges/icons8-search-24.png"
              alt="search"
            />
          </div>
          <div class="brands-container grid grid-cols-4 mt-3 gap-3">
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/nikelikepic.png" alt="nike" />
              <span class="text-[12px] font-semibold">Nike</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/adidaspic.png" alt="adidas" />
              <span class="text-[12px] font-semibold">Adidas</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/Asicspic.png" alt="asics" />
              <span class="text-[12px] font-semibold">Asics</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/converspic.png" alt="converse" />
              <span class="text-[12px] font-semibold">Converse</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/newbalpic.png" alt="newBal" />
              <span class="text-[12px] font-semibold">Newbalance</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/pumapic.png" alt="puma" />
              <span class="text-[12px] font-semibold">Puma</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/reebokpic.png" alt="reeebok" />
              <span class="text-[12px] font-semibold">Reebok</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/morpicc.png" alt="more" />
              <span class="text-[12px] font-semibold">more</span>
            </div>
          </div>
        </section>
        <section class="products-section mt-3">
          <div class="flex justify-between">
            <p class="font-bold">Most popular</p>
            <p class="font-bold">See All</p>
          </div>
          <div class="flex gap-2 overflow-x-scroll mt-2">
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Nike</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Adidas</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Asics</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Puma</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Converse</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Newbalance</div>
            <div class="border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Reebok</div>
          </div>
          <div class="w-full product_container mt-4 gap-4 grid grid-cols-2 justify-center items-center">

            <div class="">
              <div class="img-container rounded-3xl overflow-hidden">
                <img class="w-full h-full object-cover" src="./shoeimage/imges/nike/nike-1.jpg" alt="">
              </div>
              <h2 class="name text-[18px] font-bold">Nike-samba</h2>
              <span class="price">$85</span>
            </div>

            <div class="">
              <div class="img-container rounded-3xl overflow-hidden">
                <img class="w-full h-full object-cover" src="./shoeimage/imges/nike/nike-1.jpg" alt="">
              </div>
              <h2 class="name text-[18px] font-bold">Nike-samba</h2>
              <span class="price">$85</span>
            </div>


          </div>

        </section>
      </div>
      ${navigationBar()}
    `
}









export{home}