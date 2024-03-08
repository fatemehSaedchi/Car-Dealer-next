import {BannerSlider, SearchBox, Section} from "@/components";
import {bannerSliderData} from "@/mock/bannerSliderData";

export default function Home() {
  return (
      //Todo fix icons
      //Todo fix banner slider navigation

      <>
          <section className={'relative'}>
              <div className="flex flex-col lg:flex-row container mx-auto px-4">
                  <img src="/assets/images/circleElement.svg" alt=""
                       className="absolute w-14 top-[60px] right-[85%] lg:right-[52%]"/>
                  <div className="absolute right-0 lg:order-2 self-end lg:self-start w-10/12 lg:w-2/4">
                      <BannerSlider sliderData={bannerSliderData} nextEl={".swiper-button-next"} prevEl={".swiper-button-prev"}/>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                  </div>
                  <div className="w-full lg:w-2/4 lg:order-1 pt-[400px] lg:pt-28 xl:pt-20">
                  <div className="w-full sm:w-96 h-12 text-xs sm:text-sm bg-White-300 rounded-[44px] relative">
                          <button
                              className="h-4/5 absolute left-2.5 my-auto top-0 bottom-0 px-6 bg-orange-100 rounded-[44px] text-white font-bold">
                              TRENDING
                          </button>
                          <label>
                              <input type="text" className="w-full h-full pl-44 bg-transparent outline-none pr-8"
                                     placeholder="2020 FORT MUSTANG"/>
                          </label>
                      </div>
                      <h1 className="text-4xl sm:text-5xl xl:text-6xl pr-2 sm:w-[500px] xl:w-[620px] font-bold sm:leading-[58px] xl:leading-[70px] pt-7 lg:pt-11">
                          Say hello to best car dealer platform</h1>
                      <p className="text-sm md:w-10/12 leading-6 sm:leading-7 mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                      <SearchBox/>
                      <p className="text-primary-100 text-sm sm:text-base md:text-lg pt-7">Try advanced search<i
                          className="fa-solid fa-arrow-right pl-6"></i></p>
                      <p className="text-xs md:text-base text-secondary-100 pt-8 2xl:pt-14">
                          Popular Brands</p>
                      <div className="flex gap-[20px] sm:gap-[30px] lg:gap-[21px] mt-3.5">
                          <p className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold">HONDA</p>
                          <p className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold">FORD</p>
                          <p className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold">TOYOTA</p>
                          <p className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold">PORSCHE</p>
                          <p className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold text-White-100 cursor-pointer">24+
                              more</p>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}
