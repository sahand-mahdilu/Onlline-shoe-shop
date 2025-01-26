import { App } from "../main";

export function onBoarding(){


    App.innerHTML=`
      <div class="on-boarding-container w-full">
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <div class="h-[90vh]">
                <div class="img-container h-[70%]">
                  <img
                    class="object-cover w-full h-full"
                    src="./public/shoeimage/imges/slide1.png"
                    alt=""
                  />
                </div>
                <div>
                  <p class="text-center text-[26px] font-semibold">
                    We provide high quality products just for you
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="h-[90vh]">
                <div class="img-container h-[70%]">
                  <img
                    class="object-cover w-full h-full"
                    src="./public/shoeimage/imges/slide2.png"
                    alt=""
                  />
                </div>
                <div>
                  <p class="text-center text-[26px] font-semibold">
                    Your satisfaction is our number one periority
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="h-[90vh]">
                <div class="img-container h-[70%]">
                  <img
                    class="object-cover w-full h-full"
                    src="./public/shoeimage/imges/slide3.png"
                    alt=""
                  />
                </div>
                <div>
                  <p class="text-center text-[26px] font-semibold">
                    Let’s fulfill your fashion needs with shoearight now!
                  </p>
                </div>
              </div>
            </div>
            ...
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
        </div>

        <div class="flex justify-center">
          <button
            id="navBtn"
            class="swiper-button-next-custom w-[88%] bg-black text-white p-2 rounded-[30px]"
          >
            next
          </button>
        </div>
      </div>
      
      
      
      `

    
      const swiper = new Swiper(".swiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        on: {
          slideChange: function () {
            const nextButton = document.getElementById("navBtn");
            switch (swiper.activeIndex) {
              case 0:
                nextButton.textContent = "Next";
                break;
              case 1:
                nextButton.textContent = "Next";
                break;
              case 2:
                nextButton.textContent = "Get Started";

                break;
              default:
                nextButton.textContent = "Next";
            }
          },
        },
      });
    
}