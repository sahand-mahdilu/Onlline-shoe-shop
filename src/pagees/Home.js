import { baseURL } from "../API/API";
import { App, router } from "../main";
import { navigationBar } from "../NavigationBar/NavigationBar";
import { getAllProducts } from "./Allproducts";

function home() {
  App.innerHTML = `
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
                class="chrome size-5 opacity-30"
                src="./shoeimage/imges/chrome.png"
                alt="chrome"
                title="Google Chrome"
              />
              <img
                class="firefox size-5 opacity-30"
                src="./shoeimage/imges/firefox.png"
                alt="firefox"
                title="Mozilla Firefox"
              />
              <img
                class="edge size-5 opacity-30"
                src="./shoeimage/imges/edge.png"
                alt="edge"
                title="Microsoft Edge"
              />
              <img
                class="opera size-5 opacity-30"
                src="./shoeimage/imges/opera.png"
                alt="opera"
                title="Opera"
              />
              <img
                class="safari size-5 opacity-30"
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
              <span class="battery pl-[2px]">10%</span>
            </div>
          </div>
        </div>

        <section class="brands-section">
          <div class="relative mt-28">
            <input
              class="bg-gray-100 pr-8 p-2 w-full"
              placeholder="search"
              type="text"
            />
            <img
              class="absolute bottom-2 right-2"
              src="./shoeimage/imges/icons8-search-24.png"
              alt="search"
            />
          </div>
          <div class="brands-container grid grid-cols-4 mt-3 gap-3">
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/nikelikepic.png" alt="nike" />
              <span class="text-[12px] font-semibold">Nike</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/adidaspic.png" alt="adidas" />
              <span class="text-[12px] font-semibold">Adidas</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/Asicspic.png" alt="asics" />
              <span class="text-[12px] font-semibold">Asics</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/converspic.png" alt="converse" />
              <span class="text-[12px] font-semibold">Converse</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/newbalpic.png" alt="newBal" />
              <span class="text-[12px] font-semibold">Newbalance</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
              <img src="./shoeimage/imges/pumapic.png" alt="puma" />
              <span class="text-[12px] font-semibold">Puma</span>
            </div>
            <div class="brandBTN flex flex-col justify-center items-center">
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
            <button id="seeAll" class="font-bold">See All</button>
          </div>
          <div class="flex gap-2 overflow-x-scroll mt-2">
          
            <div id="Nike" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Nike</div>
            <div id="Adidas" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Adidas</div>
            <div id="Asics" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Asics</div>
            <div id="Puma" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Puma</div>
            <div id="Converse" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Converse</div>
            <div id="NewBalance" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Newbalance</div>
            <div id="Reebok" class="scrollBar  border-2 border-black rounded-[20px] text-[14px] font-semibold p-1 px-2 ">Reebok</div>
          </div>
          <div class="w-full product_container mb-14 mt-4 gap-4 grid grid-cols-2 justify-center items-center">

          


          </div>

        </section>
      </div>
      ${navigationBar()}
 
      `;
  const batteryElem = document.querySelector(".battery");
  const productContainer = document.querySelector(".product_container");
  const scrollBarbuttons = document.querySelectorAll(".scrollBar");
  const seeAllElem = document.querySelector("#seeAll");
  const brandButtons=document.querySelectorAll(".brandBTN")

  goToSeeAll(seeAllElem);
  showBrowser();
  showBaterry(batteryElem);
  getProduct(productContainer);
  scrollBarChangeColor(scrollBarbuttons, productContainer);
  goTobrandPge(brandButtons)
}
function goToSeeAll(button) {
  button.addEventListener("click", function () {
    router.navigate("/allProducts");
  });
}

function showBrowser() {
  let userAgent = navigator.userAgent;

  let userBrowser = null;

  if (userAgent.match(/edg/i)) {
    userBrowser = "edge";
  } else if (userAgent.match(/firefox/i)) {
    userBrowser = "firefox";
  } else if (userAgent.match(/opr/i)) {
    userBrowser = "opera";
  } else if (userAgent.match(/chrome/i)) {
    userBrowser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    userBrowser = "safari";
  }

  console.log("Your Browser is:", userBrowser);
  let userBrowserImageElem = document.querySelector(`.${userBrowser}`);

  if (userBrowserImageElem) {
    userBrowserImageElem.style.opacity = "1";
  }
}

function showBaterry(battery) {
  if (navigator.getBattery) {
    window.navigator.getBattery().then((batteryInfo) => {
      battery.innerHTML = `${batteryInfo.level * 100}%`;

      batteryInfo.addEventListener("levelchange", function () {
        battery.innerHTML = `${batteryInfo.level * 100}%`;
      });
    });
  }
}

// get random product product

async function getProduct(container) {
  try {
    let res = await fetch(`${baseURL}/products`, {
      method: "GET",
    });
    let data = await res.json(); //array
    let shuffledArray = data.sort(() => 0.5 - Math.random());

    let randomProducts = shuffledArray.slice(0, 8); //8 random products to show

    showRandomProduct(randomProducts, container);
  } catch (err) {
    console.log(err);
  }
}
//show random product

function showRandomProduct(productArray, container) {
  container.innerHTML = "";
  productArray.forEach((p) => {
    container.insertAdjacentHTML(
      "afterbegin",
      `  <div class="">
              <div class="img-container min-h-36 min-w-36  rounded-3xl overflow-hidden">
                <img class="w-full h-full object-cover" src=${p.images} alt="image">
              </div>
              <h2 class="name text-[18px] font-bold">${p.name}</h2>
              <span class="price">${p.price}$</span>
            </div>`
    );
  });
}

// scrool bar

function scrollBarChangeColor(scrollBarElems, container) {
  for (let value of scrollBarElems) {
    value.addEventListener("click", function (e) {
      for (let value of scrollBarElems) {
        value.style.backgroundColor = "white";
        value.style.color = "black";
      }
      console.log(e.target.id);

      e.target.style.backgroundColor = "black";
      e.target.style.color = "white";

      if (e.target.id === "all") {
        getAllProducts(container);
      } else {
        fetchData(e.target.id, container);
      }
    });
  }
}
/////////////////////////////

async function fetchData(id, container) {
  try {
    let res = await fetch(`${baseURL}/products`);
    let data = await res.json(); //array
    console.log(data);
    let uniqueProducts = data.filter((p) => {
      return p.brand === id;
    });

    showRandomProduct(uniqueProducts, container);
    console.log(uniqueProducts);
  } catch (err) {
    console.log(err);
  }
}


function goTobrandPge(buttons){

  for(let btn of buttons){
    btn.addEventListener("click",function(){
     console.log(btn);
     let spanElem= btn.querySelector("span").textContent
     router.navigate(`/brands/${spanElem}`)

    })

  }

}


export { home, showRandomProduct, scrollBarChangeColor };
