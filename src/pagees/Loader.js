import { App, router } from "../main";
export function loader() {
  App.innerHTML = `
     <div class="flex flex-col items-center justify-center h-[100vh]">
        <div class="img-container flex gap-3 ">
          <img src="./public/shoeimage/imges/first.png" alt="logo">
          <span class="text-[52px] font-bold">shoea</span>
        </div>
        <div class="mt-60">
          
          <svg class="animate-spin" height="48" viewBox="0 0 20 20" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m10 3.5c-3.58985 0-6.5 2.91015-6.5 6.5 0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75c3.5899 0 6.5-2.9101 6.5-6.5 0-3.58985-2.9101-6.5-6.5-6.5z" fill="#212121"/></svg>
          
                  </div>
    
      </div>`;

  setTimeout(function () {
    App.innerHTML = `
             <div class="wrapper w-full h-[100vh]">
        <div class="pt-[300px] pl-[32px]"> 
          <p class="text-[40px] font-semibold text-white">Welcome to 👋</p>
          <p class=" text-7xl font-Sahand text-white">Shoea</p>
          <p class="text-[16] font-semibold text-white">The best sneakers & shoes e-commerse app of the century for your fashion needs!</p>

        </div>




      </div>`;

    setTimeout(function () {
      router.navigate("/onboarding");
    }, 4000);
  }, 4000);
}
