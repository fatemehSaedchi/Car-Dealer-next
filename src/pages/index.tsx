import {BannerSlider, SearchBox, Section, ImageView, IconBox} from "@/components";
import {bannerSliderData} from "@/mock";
import Link from "next/link";
import {carBrands} from "@/mock/carBrands";

export default function Home() {
  return (
      //Todo fix icons
      //Todo fix banner slider navigation
      //Todo create Popular Brands component

      <>
          <Section className={'relative mb-28 lg:mb-52'}>
              <div className="flex flex-col lg:flex-row container mx-auto px-4">
                  <ImageView src="/assets/images/circleElement.svg" alt=""
                             classname="absolute w-14 top-[60px] right-[85%] lg:right-[52%]" height={66} width={50}/>
                  <div className="absolute right-0 lg:order-2 self-end lg:self-start w-10/12 lg:w-2/4">
                      <BannerSlider sliderData={bannerSliderData} nextEl={".swiper-button-next"}
                                    prevEl={".swiper-button-prev"}/>
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
                      <div>
                          <h1 className="text-4xl sm:text-5xl xl:text-6xl pr-2 sm:w-[500px] xl:w-[620px] font-bold sm:leading-[58px] xl:leading-[70px] pt-7 lg:pt-11">
                              Say hello to best car dealer platform</h1>
                          <p className="text-sm md:w-10/12 leading-6 sm:leading-7 mt-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                          </p>
                      </div>

                      <SearchBox className={'mb-10'}/>

                      <Link href={'#'}
                            className="text-primary-100 text-sm sm:text-base md:text-lg pt-7">
                          Try advanced search
                          <IconBox icon={"icon-rightArrow pl-6"}/>
                      </Link>
                      <div>
                          <h3 className="text-xs md:text-base text-secondary-100 pt-8 2xl:pt-14">
                              Popular Brands
                          </h3>
                          <ul className="flex gap-[20px] sm:gap-[30px] lg:gap-[21px] mt-3.5">
                              {
                                  carBrands.data.slice(0, 3).map((item, index) => {
                                      return (
                                          <li key={index}
                                             className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold hover:text-blue-600">
                                              {item.attributes.title}
                                          </li>
                                      )
                                  })
                              }
                              <li className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold text-White-100 cursor-pointer hover:text-blue-600">
                                  24+ more
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </Section>

          {/*
              <section className="relative mb-28 lg:mb-96">
              <div className="container m-auto">
                  <img src="/assets/images/robin-vet-q6LFMQ6wVZ0-unsplash1.jpg" alt="classic car" className="w-10/12 lg:w-2/5 h-[400px] lg:h-[790px] absolute left-0 -z-10 rounded-br-[100px] rounded-tr-[100px] object-cover object-center"/>
                  <div className="flex flex-col lg:items-end gap-9 2xl:gap-16">
                      <div className="sm:w-11/12 lg:w-[70%] order-1 lg:order-2 flex flex-row pt-80 lg:pt-0 gap-2.5 sm:gap-5 justify-between self-end 2xl:pr-24">
                          {
                              servicesData.map((service,index)=>{
                                  return(
                                      <ServicesCard data={service}/>
                                  )
                              })
                          }

                      </div>
                      <div className="w-full lg:w-3/5 order-2 lg:order-1 lg:pl-16">
                          <h2 className="text-base md:text-lg text-primary-100 font-semibold tracking-[9px] md:pt-8 lg:pt-16">
                              ABOUT</h2>
                          <h3 className="text-3xl md:text-5xl font-bold pt-3 md:pt-5">About the
                              Mobhi</h3>
                          <p className="text-xs md:text-base xl:text-lg pr-5 leading-[21px] xl:leading-8 pt-6 md:pt-8 xl:pt-10 lg:w-4/5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                      </div>
                  </div>
              </div>
          </section>
          */}

          {/*
                 <section>
        <div class="container m-auto px-4 pt-28 lg:pt-56 relative">
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                <img src="../assets/icons/circleElement.svg" alt=""
                     class="w-[50px] absolute left-0 md:left-16 lg:left-2/4 xl:left-[51%] 2xl:left-[53%] lg:top-80 top-40 z-50">
                <div class="w-full lg:basis-1/2 order-2 lg:order-1 pt-9">
                    <h2 class="text-xs lg:text-sm xl:text-xl text-secondary-200 font-semibold">We Bring You to The
                        Future</h2>
                    <h3 class="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">Don’t
                        worries,</h3>
                    <h3 class="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-[-9px]">we check all
                        of
                        unit</h3>
                    <p class="text-xs sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <button class="px-4 xl:px-9 py-[12px] xl:py-[18px] text-sm md:text-base xl:text-lg font-medium rounded-[7px] bg-primary-100 text-white mt-6 lg:mt-9">
                        Discover More
                    </button>
                </div>
                <div class="w-full lg:basis-1/2 order-1 lg:order-2 h-72 lg:h-96 2xl:pr-12">
                    <div class="swiper mySwiper1 max-w-xl lg:w-full rounded-[60px]">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/dillon-kydd-SHXCj2Syo7c-unsplash.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/bradley-dunn-qijkjkJm63c-unsplash.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/alain-gehri-w77TcvuhtWE-unsplash01.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/wolfgang-rottmann-MNnzM5rk5sc-unsplash.jpg" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container m-auto px-4 pt-28 lg:pt-40 flex flex-col items-center">
            <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">Top deals of the week</h2>
            <p class="max-w-xl lg:max-w-2xl text-sm lg:text-lg leading-6 xl:leading-8 text-center pt-2 md:pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div class="h-fit w-4/5 sm:w-full 2xl:max-w-7xl pt-10">
                <div class="swiper mySwiper2 rounded-[30px]">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide relative">
                            <img class="rounded-[30px] h-[435px] xl:h-[495px]"
                                 src="../assets/img/andre-tan-c0L4tPfaXJo-unsplash.jpg" alt="">
                            <div class="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p class="text-xs xl:text-sm font-medium tracking-[4px]">SPORT CAR</p>
                                <p class="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    SMART GT AA-211</p>
                                <button class="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ 34,500
                                </button>
                                <div class="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                                    <p>Transmition</p>
                                    <p>Fuel</p>
                                    <p>Passenger</p>
                                </div>
                                <div class="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                                    <p>Automatic</p>
                                    <p>Electric</p>
                                    <p>2 Person</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide relative">
                            <img class="rounded-[30px] h-[435px] xl:h-[495px]"
                                 src="../assets/img/slider3/riccardo-baronchelli-6h-LsDjulM0-unsplash.jpg"
                                 alt="">
                            <div class="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p class="text-xs lg:text-sm font-medium tracking-[4px]">SPORT CAR</p>
                                <p class="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    GT-Z 122 Boost</p>
                                <button class="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ 34,500
                                </button>
                                <div class="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                                    <p>Transmition</p>
                                    <p>Fuel</p>
                                    <p>Passenger</p>
                                </div>
                                <div class="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                                    <p>Automatic</p>
                                    <p>Electric</p>
                                    <p>2 Person</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide relative">
                            <img class="rounded-[30px] h-[435px] xl:h-[495px]"
                                 src="../assets/img/slider3/mattia-righetti-CuC-b8f3RYc-unsplash.jpg" alt="">
                            <div class="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p class="text-xs lg:text-sm font-medium tracking-[4px]">SPORT CAR</p>
                                <p class="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    SPORT X-GTZ</p>
                                <button class="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ 34,500
                                </button>
                                <div class="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                                    <p>Transmition</p>
                                    <p>Fuel</p>
                                    <p>Passenger</p>
                                </div>
                                <div class="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                                    <p>Automatic</p>
                                    <p>Electric</p>
                                    <p>2 Person</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide relative">
                            <img class="rounded-[30px] h-[435px] xl:h-[495px]"
                                 src="../assets/img/slider3/olav-tvedt--oVaYMgBMbs-unsplash.jpg" alt="">
                            <div class="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p class="text-xs lg:text-sm font-medium tracking-[4px]">SPORT CAR</p>
                                <p class="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    Smart Car GT AA-211</p>
                                <button class="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ 34,500
                                </button>
                                <div class="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                                    <p>Transmition</p>
                                    <p>Fuel</p>
                                    <p>Passenger</p>
                                </div>
                                <div class="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                                    <p>Automatic</p>
                                    <p>Electric</p>
                                    <p>2 Person</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide relative">
                            <img class="rounded-[30px] h-[435px] xl:h-[495px]"
                                 src="../assets/img/slider3/niklas-bischop-MSzOsDK1qFM-unsplash.jpg" alt="">
                            <div class="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p class="text-xs lg:text-sm font-medium tracking-[4px]">SPORT CAR</p>
                                <p class="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    GT-Z 122 Boost</p>
                                <button class="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ 34,500
                                </button>
                                <div class="flex text-xs xl:text-sm gap-8 xl:gap-11 pt-7">
                                    <p>Transmition</p>
                                    <p>Fuel</p>
                                    <p>Passenger</p>
                                </div>
                                <div class="flex text-sm md:text-base gap-6 xl:gap-8 font-semibold pt-3">
                                    <p>Automatic</p>
                                    <p>Electric</p>
                                    <p>2 Person</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container m-auto px-4 pt-20 lg:pt-36 relative">
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                <img src="../assets/icons/circleElement.svg" alt=""
                     class="w-[50px] absolute left-0 md:left-16 2xl:left-[70px] lg:left-0 top-32 lg:top-60 z-50">
                <div class="w-full lg:basis-1/2 h-72 lg:h-96">
                    <div class="swiper mySwiper1 max-w-xl lg:w-full rounded-[60px]">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/dillon-kydd-SHXCj2Syo7c-unsplash.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/bradley-dunn-qijkjkJm63c-unsplash.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/alain-gehri-w77TcvuhtWE-unsplash01.jpg" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img class="object-cover object-center h-full"
                                     src="../assets/img/wolfgang-rottmann-MNnzM5rk5sc-unsplash.jpg" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="w-full lg:basis-1/2 pt-9">
                    <h2 class="text-xs lg:text-sm xl:text-xl text-secondary-200 font-semibold">We Bring You to The
                        Future</h2>
                    <h3 class="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">Don’t
                        worries,</h3>
                    <h3 class="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-[-9px]">we check all
                        of
                        unit</h3>
                    <p class="text-xs sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <button class="px-4 xl:px-9 py-[12px] xl:py-[18px] text-sm md:text-base xl:text-lg font-medium rounded-[7px] bg-primary-100 text-white mt-6 lg:mt-9">
                        Discover More
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container m-auto px-4 mt-32 lg:mt-64 relative">
            <div class="max-w-6xl m-auto bg-primary-100 max-h-72 rounded-3xl lg:rounded-[40px] relative flex p-4 sm:py-7 md:p-9 lg:p-16">
                <div class="basis-2/4">
                    <p class="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white">
                        Have any question</p>
                    <p class="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white lg:pt-2">
                        about us?</p>
                    <div class="flex pt-5 sm:pt-9 lg:pt-14 gap-2 lg:gap-4">
                        <button class="text-[8px] sm:text-sm lg:text-base py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg bg-White-200 text-primary-100 font-bold">
                            <i class="fa-solid fa-phone pr-2 lg:pr-4"></i>224 000 22 11 33
                        </button>
                        <button class="text-[8px] sm:text-xs lg:text-base py-1 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg border-2 border-White-200 text-White-200 font-medium">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div class="basis-2/4 relative">
                    <img class="w-full object-cover rounded-2xl lg:rounded-[49px] shadow-4xl absolute -top-14 sm:-top-24 md:-top-28 lg:md:-top-40 xl:md:-top-52 z-50"
                         src="../assets/img/bradley-dunn-qijkjkJm63c-unsplash11.jpg" alt="">
                </div>
            </div>
            <img class="w-10 md:w-14 lg:w-20 absolute left-[46%] top-[11%] lg:top-[18%]"
                 src="../assets/icons/circleElement%20(1).svg" alt="">
            <div class="w-16 h-16 sm:w-28 sm:h-28 lg:w-44 lg:h-44 bg-orange-100 rounded-full absolute left-[45%] top-[82%] sm:top-[84%] md:top-[94%] lg:top-[79%] xl:top-[93%]"></div>
        </div>
    </section>

          */}

      </>
  );
}
