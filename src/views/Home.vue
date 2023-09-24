<script>
import {ref} from "vue"
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      
    };
  },
  data() {
    return {
      investmentProducts: ref([
      {
            id:1 ,
            imageUrl:"/images/icon-stocks.svg",
            title:"hompage.product_stock_title",
            description:"hompage.product_stock_description"
        },
        {
            id:2 ,
            imageUrl:"/images/icon-options.svg",
            title:"hompage.product_options_title",
            description:"hompage.product_options_description"
        }
      ]),
      accountType: [
        {
          id: 1,
          name: "hompage.brokerage_account",
          description: "hompage.brokerage_account_description",
          btnText: "hompage.open_account"
        },
        {
          id: 2,
          name: "hompage.retirement_account",
          description: "hompage.retirement_account_description",
          btnText: "hompage.open_an_ira"
        }
      ],
      pricing: {
        title: "hompage.straightforward_pricing",
        imageUrl: "/images/why_pricing.webp",
        listItem: [
          { item: "hompage.put_your_money_into_your_investments_not_fees" },
          { item: "hompage.commission_trades" },
          { item: "hompage.options_contract_fees" },
          { item: "hompage.no_minimums_no_inactivity_fees" }
        ]
      },
      platform: {
        title: "hompage.powerful_trading_platforms",
        imageUrl: "/images/home_platform.webp",
      },
      tradeIdeas: {
        title: "hompage.explore_trade_ideas",
        description: "hompage.discover_investing_opportunities_with",
        imageUrl: "/images/why_tradeideas.webp",
        listItem: [
          { item: "hompage.read_analyst_reports" },
          { item: "hompage.browse_upcoming_ipos" },
          { item: "hompage.get_daily_bullish_and_bearish" },
          { item: "hompage.instant_options_strategies_based" }
        ]
      },
      safeSecure: {
        title: "hompage.safe_and_secure",
        description: "hompage.two_factor_authentication_offers_an_extra_layer",
        imageUrl: "/images/icon_med_2fa.webp",
      },
      protection: {
        title: "hompage.account_protection",
        description: "hompage.your_account_is_insured_by_SIPC_for_up",
        imageUrl: "/images/why_protection.webp",
      },
      tradingHours: {
        title: "hompage.extended_Hours_trading",
        description: "hompage.react_to_market_news_during_pre_market_and_after_market",
        imageUrl: "/images/why_extendedhours.webp",
      },
      smartInvest: {
        title: "hompage.learn_to_invest_smarter",
        description: "hompage.firstrade_provides_you_with_resources_to_improve_your_investing_knowledge",
        imageUrl: "/images/why_learn.webp",
        listItem: [
          { item: "hompage.free_options_trading_courses" },
          { item: "hompage.full_options_trading_video_library" },
          { item: "hompage.live_trading_events_with_professional_investment_strategists" },
        ]
      },
      customerSupport: {
        title: "hompage.customer_support",
        description: "hompage.our_customer_support_representatives",
        information: "hompage.need_more_information",
        imageUrl: "/images/icon_support.webp",
      }
    }
  },
  
  methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
};
</script>

<template>
  <div @click="toggleFunction">

    <!-- Hero part start -->
    <div class="w-full bg-blue-100">
      <div class=" w-full flex flex-col items-center mx-auto">
        <!-- slider start -->
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }" :pagination="{
  clickable: true,
}" :modules="modules" class="mySwiper ">
          <swiper-slide class="w-full">
            <div class="flex justify-between items-center gap-6  px-4">
              <div class="w-1/2  ">
                <img class="w-96" src="/images/hero-slider-one-left.png" alt="online broker">
              </div>
              <div class="text-primary w-1/2 text-left">
                <h1 class="font-semibold text-4xl xl:text-5xl">
                  <a class="flex items-center gap-3" href="/trading/options">
                    <span class="max-w-xl">{{ $t('hompage.slider_one_title') }} </span>
                  </a>
                </h1>
                <p class="mt-3 sm:mt-4 sm:text-xl xl:mt-6 xl:text-2xl">{{ $t('hompage.slider_one_description') }}</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex flex-col overflow-hidden bg-[url(/images/hero_bg_wallstreet.png)] w-full py-14">              
              <div class="flex flex-col justify-center items-center">
                <div class="sm:w-[400px] md:w-[450px] lg:w-[550px] cursor-pointer">
                <img src="/images/hero_1click.webp" alt="online broker">
                </div>
                <div class="mt-5 block lg:mt-6 ">
                    <a class="inline-flex justify-center  border-0 p-3 py-2 text-lg  text-white  w-40 min-w-fit"
                      href="/trading/options#options-analysis">Learn More ></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="w-full">
            <div class="flex justify-between items-center w-80% px-4">
              <div class="flex items-start text-left flex-col w-1/2 max-w-3xl gap-6">
                <h2 class=" text-primary  text-3xl font-bold sm:text-4xl xl:text-5xl"  v-html=" $t('hompage.slider_three_title')"></h2>
                <p class="  text-primary max-w-3xl text-base sm:text-lg lg:text-xl xl:text-2xl">
                  {{ $t('hompage.slider_three_description') }}</p>
                <div class="mt-5 block lg:mt-6 ">
                  <a class="inline-flex justify-center rounded border-2 p-3 py-2 text-lg border-opacity-75 border-blue-900 text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white w-40 min-w-fit"
                    href="/trading/options#options-analysis">Learn More</a>
                </div>
              </div>
              <div class="w-1/2 max-w-sm">
                <img src="/images/hero-slider-second-right.png" alt="online broker">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="bg-primary">
            <div class="flex justify-between items-center w-80% px-4">
              <div class="flex items-start text-left flex-col w-1/2 max-w-3xl gap-6">
                <h2 class=" text-white  text-3xl font-bold sm:text-4xl xl:text-5xl" v-html=" $t('hompage.slider_four_title')"></h2>
                <p class="  text-white max-w-3xl text-base sm:text-lg lg:text-xl xl:text-2xl">
                  {{ $t('hompage.slider_four_description') }}</p>
                <div class="flex max-w-max gap-4">
                  <a href="#" class="w-44 flex rounded-md outline-2 outline-offset-2">
                    <img class="w-full" src="/images/app_ios_light.69857d2e.svg" alt="ios button">
                  </a>
                  <a href="#" class="w-44 flex rounded-md outline-2 outline-offset-2">
                    <img class="w-full" src="/images/app_android_light.436ed7cd.svg" alt="Playstore button">
                  </a>
                  <a href="#" class="w-44 flex rounded-md outline-2 outline-offset-2">
                    <img class="w-full" src="/images/android-apk-TW-light.964c13fe.svg" alt="android button">
                  </a>
                </div>
              </div>
              <div class="w-1/2 max-w-sm">
                <img src="/images/hero-slider-three-right.png" alt="online broker">
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="w-full">
            <img class="relative" src="/images/hero-slider-four.jpg" alt="">
            <div
              class="absolute m-auto flex w-full max-w-7xl basis-96 items-center px-6 pt-20 pb-4 sm:px-10 md:pt-9 lg:px-15 lg:pt-4">
              <div class="text-white text-left">
                <h2 class="font-futura-bold text-3xl font-bold sm:text-4xl xl:text-5xl">{{ $t('hompage.slider_five_title') }}</h2>
                <ul class="mt-1 text-base sm:mt-2 sm:text-lg lg:text-xl xl:mt-3 xl:text-2xl">
                  <li>{{ $t('hompage.slider_five_Subtitle') }}</li>
                  <li>
                    <a class="underline" href="/trading/pricing">{{ $t('hompage.slider_five_description') }}</a>
                  </li>
                </ul>
                <div class="mt-4 sm:mt-5 xl:mt-6"><a
                    class="inline-flex justify-center rounded border-2 p-3 py-2 text-lg outline-2 outline-offset-2 motion-safe:transition-colors border-white text-white hover:bg-white hover:text-gray-600 active:bg-white active:text-gray-600 w-40 min-w-fit"
                    href="/accounts/retirement">Learn More</a></div>
              </div>
            </div>
          </swiper-slide>
          
        </swiper>
        <!-- slider end -->
      </div>
    </div>
    <!-- Hero part end -->
    <!-- Investment Product section start -->
    <section>
      <div class="container px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
        <div class="py-6">
          <h2 class="text-4xl mb-3 text-primary font-bold">{{ $t('hompage.investment_title') }}</h2>
          <p class="text-xl text-secondary ">{{ $t('hompage.investment_subtitle') }}</p>
        </div>
        <div class="px-5 mt-8 flex justify-between gap-4">
          <div class="" v-for="product in investmentProducts" :key="product.id">
            <div class="flex flex-col items-center  hover:bg-primaryLight p-6">
              <img :src="product.imageUrl" alt="product.title">
              <div>
                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{$t(product.title)}}</h3>
                <p class="text-md max-w-xl text-secondary">{{$t(product.description)}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Product section end -->
    <!-- AccountType start -->
    <section class="bg-primaryLight">
      <div class="container px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
        <div class="py-6">
          <h2 class="text-4xl mb-3 text-primary font-bold">{{ $t('hompage.choose_an_account_type') }}</h2>
        </div>
        <div class="px-5 mt-8 flex justify-evenly w-full">
          <div class="w-1/2" v-for="account in accountType" :key="account.id">
            <div class="flex flex-col items-start hover:bg-primaryLight p-6">
              <h3 class="font-bold text-2xl mt-6 text-primary mb-4  ">{{ $t(account.name) }}</h3>
              <p class="text-md h-[100px] text-left mb-8 text-secondary">{{ $t(account.description) }}
              </p>
              <a class="inline-flex justify-center rounded-md border-0 p-3  text-lg  text-white bg-warning hover:text-white active:bg-warning active:text-white w-40 min-w-fit hover:bg-orange-600"
                href="/trading/options#options-analysis">{{ $t(account.btnText) }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- AccountType End -->
    <!-- why choose firstrade section start -->
    <section>
      <div class="container flex flex-col px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
        <div class="mt-4">
          <h2 class="text-4xl font-bold text-primary mb-4">{{ $t('hompage.choose_firstrade') }}</h2>
          <p class="text-xl text-secondary">{{ $t('hompage.always_first_with_innovative') }}</p>
        </div>
        <!-- Pricing part start here -->       
        <div class="flex justify-between items-center mt-14">
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="pricing.imageUrl" alt="">
          </div>
          <div class="w-1/2">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ $t(pricing.title) }}</h2>
            <ul class="mt-2" v-for="(item, index) in pricing.listItem" :key="index">
              <li class="text-left mb-2 text-lg  text-secondary">{{ $t(item.item) }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
            <p class="text-left text-secondary mt-3">
              <small v-html="$t('hompage.other_fees_may_apply_see_our_pricing_page_for_more_details')">
               
              </small>
            </p>
          </div>
        </div>
         <!-- Pricing part end here -->
         <!-- Trading part start here -->  
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-sans font-bold text-primary ">{{ $t(platform.title) }}</h2>
            <p class="text-left text-xl text-secondary mt-6">
              <small v-html="$t('hompage.our_customizable_trading_platforms_description')"></small>
            </p>
            <p class="text-left text-xl text-secondary mt-3">
              <small v-html="$t('hompage.serious_investors_can_unlock_investing_description')"></small>
            </p>
          </div>
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="platform.imageUrl" alt="">
          </div>
        </div>
        <!-- Trading part End here -->  
        <!-- Trade idea part start here -->  
        <div class="flex justify-between items-center mt-14">
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="tradeIdeas.imageUrl" alt="">
          </div>
          <div class="w-1/2">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ $t(tradeIdeas.title) }}</h2>
            <p class="mt-4 text-lg text-secondary text-left mb-4">{{ $t(tradeIdeas.description) }}</p>
            <ul class=" list-disc list-inside mt-2" v-for="(item, index) in tradeIdeas.listItem" :key="index">
              <li class=" text-left  text-lg  text-secondary">{{ $t(item.item) }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
          </div>
        </div>
        <!-- Trade idea part End here --> 
        <!-- Secure part start here -->   
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-bold text-primary ">{{ $t(safeSecure.title) }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ $t(safeSecure.description) }}</p>
          </div>
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="safeSecure.imageUrl" :alt="safeSecure.title">
          </div>
        </div>
        <!-- Secure part End here -->   
        <!-- Protection part start here -->   
        <div class="flex justify-between items-center mt-14">
          <div class="flex justify-center w-1/2">
            <img class="w-80" :src="protection.imageUrl" :alt="protection.title">
          </div>
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-bold text-primary ">{{ $t(protection.title) }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ $t(protection.description) }}</p>
          </div>
        </div>
        <!-- Protection part End here --> 
        <!-- Trading Hours part start here --> 
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ $t(tradingHours.title) }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ $t(tradingHours.description) }}</p>
          </div>
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="tradingHours.imageUrl" :alt="tradingHours.title">
          </div>
        </div>
         <!-- Trading Hours part End here --> 
          <!-- Smart invest part start here --> 
        <div class="flex justify-between items-center mt-14">
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="smartInvest.imageUrl" alt="">
          </div>
          <div class="w-1/2">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ $t(smartInvest.title) }}</h2>
            <p class="mt-4 text-lg text-secondary text-left mb-4">{{ $t(smartInvest.description) }}</p>
            <ul class=" list-disc list-inside mt-2" v-for="(item, index) in smartInvest.listItem" :key="index">
              <li class=" text-left  text-lg  text-secondary">{{ $t(item.item) }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
          </div>
        </div>
        <!-- Smart invest part End here --> 
        <!-- Customer Support part start here --> 
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ $t(customerSupport.title) }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ $t(customerSupport.description) }}</p>
            <p class="text-left text-xl text-secondary mt-6">{{ $t(customerSupport.information) }}</p>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Visit our FAQs > </a>
          </div>
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="customerSupport.imageUrl" :alt="customerSupport.title">
          </div>
        </div>
         <!-- Customer Support part End here --> 
        <div class="w-full flex justify-center py-20">
          <img src="/images/accolades23_web_stockbroker.webp" alt="">
        </div>
      </div>
    </section>
    <!-- why choose firstrade section End -->
    
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 480px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
