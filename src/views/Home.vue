<script>
import axios from "axios"
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
      investmentTItle: "所有您需要的投资产品",
      investmentSubtitle: "通过多种投资产品使您的投资组合多样化，全部免佣金。",
      chooseTitle: "为什么选择Firstrade",
      chooseDescription: "自 1985 年以来，始终以创新的交易技术、研究与分析、教育资源及客户服务为先。",
      investmentProducts: [],
      accountType: [
        {
          id: 1,
          name: "投资账户",
          description: "开设个人或联合投资账户。这类型的账户使您可以投资多种投资产品。",
          btnText: "Open Account"
        },
        {
          id: 2,
          name: "退休账户（IRA）",
          description: "开设传统（Traditional）、罗斯（Roth）或滚存（Rollover）IRA增加您的退休储蓄，替现在或未来节省税款。",
          btnText: "Open an IRA"
        }
      ],
      pricing: {
        title: "直接透明的价格",
        imageUrl: "/images/why_pricing.webp",
        listItem: [
          { item: "将您的钱用于投资，而不是费用" },
          { item: "$0佣金交易" },
          { item: "$0期权合约费用" },
          { item: "无最低存款要求，无账户闲置费" }
        ]
      },
      platform: {
        title: "强大的平台",
        imageUrl: "/images/home_platform.webp",
      },
      tradeIdeas: {
        title: "探索交易点子",
        description: "通过晨星、期权极客、Briefing.com、Zacks等平台提供的实时新闻和专业研究发现投资机会。",
        imageUrl: "/images/why_tradeideas.webp",
        listItem: [
          { item: "阅读分析报告并查看企业财报公布日。" },
          { item: "浏览即将上市的首次公开募股（IPO）。" },
          { item: "获取每日看涨和看跌交易点子以及每周收入报告。" },
          { item: "根据市场趋势提供的即时期权策略。" }
        ]
      },
      safeSecure: {
        title: "双重身份验证（2FA）",
        description: "为您的账户添加额外的安全保护。",
        imageUrl: "/images/icon_med_2fa.webp",
      },
      protection: {
        title: "账户安全保障",
        description: "您的账户享有由SIPC提供的上限为50万美元的基本保险。Firstrade已服务投资人逾37年，并且一直是FINRA与SIPC的成员。",
        imageUrl: "/images/why_protection.webp",
      },
      tradingHours: {
        title: "延长时段交易",
        description: "投资人可以对股票市场在盘前或盘后时段8AM-8PM所公布的新闻做出更及时的投资决策。",
        imageUrl: "/images/why_extendedhours.webp",
      },
      smartInvest: {
        title: "更聪明的投资",
        description: "无论您是初学者或是专业期权交易者，Firstrade提供您丰富的资源与工具，让您的期权交易知识更上一阶层。",
        imageUrl: "/images/why_learn.webp",
        listItem: [
          { item: "针对初学者及有经验交易者，提供免费期权交易课程" },
          { item: "完善的期权策略影片库，让您立即开始自学课程" },
          { item: "线上直播期权课程，观看专业讲师演示期权策略" },
        ]
      },
      customerSupport: {
        title: "客户支持",
        description: "专业的中文客服代表将透过电话或电子邮件协助您的疑问。",
        imageUrl: "/images/icon_support.webp",
      }
    }
  },
  mounted() {
    axios.get("/src/static/json/investmentProducts.json")
      .then((response) => {
        this.investmentProducts = response.data.products;
      })
      .catch((error) => {
        console.log(error);
      });
      
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
          delay: 2500,
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
                  <a class="flex items-center gap-3" href="/zh-TW/trading/options">
                    <span class="">期權交易 </span>
                    <span class="">最佳選擇</span>
                  </a>
                </h1>
                <p class="mt-3 sm:mt-4 sm:text-xl xl:mt-6 xl:text-2xl">零佣金交易 &amp; 零合約費用</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="flex justify-between items-center w-80% px-4">
              <div class="flex items-start text-left flex-col w-1/2 max-w-3xl gap-6">
                <h2 class=" text-primary  text-3xl font-bold sm:text-4xl xl:text-5xl">期權分析<br>一目了然</h2>
                <p class="  text-primary max-w-3xl text-base sm:text-lg lg:text-xl xl:text-2xl">
                  一目了然的關鍵指標，按照您的需求自由制定，讓您能夠做出更自信更明智的投資決策。</p>
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
                <h2 class=" text-white  text-3xl font-bold sm:text-4xl xl:text-5xl">一个平台，<span
                    class="inline-block text-warning">无限机会</span></h2>
                <p class="  text-white max-w-3xl text-base sm:text-lg lg:text-xl xl:text-2xl">
                  一目了然的關鍵指標，按照您的需求自由制定，讓您能夠做出更自信更明智的投資決策。</p>
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
                <h2 class="font-futura-bold text-3xl font-bold sm:text-4xl xl:text-5xl">开通无费用IRA退休账户</h2>
                <ul class="mt-1 text-base sm:mt-2 sm:text-lg lg:text-xl xl:mt-3 xl:text-2xl">
                  <li>无账户年费、无开通费、无维护费</li>
                  <li>
                    <a class="underline" href="/trading/pricing">在IRA内交易股票、期权及共同基金皆为零佣金</a>
                  </li>
                </ul>
                <div class="mt-4 sm:mt-5 xl:mt-6"><a
                    class="inline-flex justify-center rounded border-2 p-3 py-2 text-lg outline-2 outline-offset-2 motion-safe:transition-colors border-white text-white hover:bg-white hover:text-gray-600 active:bg-white active:text-gray-600 w-40 min-w-fit"
                    href="/accounts/retirement">Learn More</a></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="w-full">
            <div class="flex justify-between items-center w-80% px-4">
              <div class="flex items-start flex-col gap-6 text-left max-w-3xl text-primary">
                <h2 class="font-futura-bold text-3xl font-bold sm:text-4xl xl:text-5xl">使用定制价格警示追踪价格变动</h2>
                <p class="mt-3 text-base sm:text-lg lg:text-xl xl:text-2xl">设置价格警示以随时追踪您持有或正在关注的股票、期权的价格变化。</p>
              </div>
              <div class="max-w-md">
                <img src="/images/hero-slider-five.png" alt="online broker">
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
          <h2 class="text-4xl mb-3 text-primary font-bold">{{ investmentTItle }}</h2>
          <p class="text-xl text-secondary ">{{ investmentSubtitle }}</p>
        </div>
        <div class="px-5 mt-8 flex justify-between gap-4">
          <div class="" v-for="product in investmentProducts" :key="product.id">
            <div class="flex flex-col items-center  hover:bg-primaryLight p-6">
              <img :src="product.imageUrl" alt="product.title">
              <div>
                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ product.title }}</h3>
                <p class="text-md text-secondary">{{ product.description }}
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
          <h2 class="text-4xl mb-3 text-primary font-bold">选择适合您的账户类型</h2>
        </div>
        <div class="px-5 mt-8 flex justify-evenly w-full">
          <div class="w-1/2" v-for="account in accountType" :key="account.id">
            <div class="flex flex-col items-start hover:bg-primaryLight p-6">
              <h3 class="font-bold text-2xl mt-6 text-primary mb-4  ">{{ account.name }}</h3>
              <p class="text-md text-left mb-8 text-secondary">{{ account.description }}
              </p>
              <a class="inline-flex justify-center rounded-md border-0 p-3  text-lg  text-white bg-warning hover:text-white active:bg-warning active:text-white w-40 min-w-fit hover:bg-orange-600"
                href="/trading/options#options-analysis">Learn More</a>
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
          <h2 class="text-4xl font-bold text-primary mb-4">{{ chooseTitle }}</h2>
          <p class="text-xl text-secondary">{{ chooseDescription }}</p>
        </div>
        <!-- Pricing part start here -->       
        <div class="flex justify-between items-center mt-14">
          <div class="flex justify-center w-1/2">
            <img class="w-96" :src="pricing.imageUrl" alt="">
          </div>
          <div class="w-1/2">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ pricing.title }}</h2>
            <ul class="mt-2" v-for="(item, index) in pricing.listItem" :key="index">
              <li class="text-left mb-2 text-lg  text-secondary">{{ item.item }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
            <p class="text-left text-secondary mt-3">
              <small>
                其他费用可能产生。请详阅 <a class="text-blue-500 hover:text-primary" href="#">交易费用页面</a> 以了解更多。
              </small>
            </p>
          </div>
        </div>
         <!-- Pricing part end here -->
         <!-- Trading part start here -->  
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ platform.title }}</h2>
            <p class="text-left text-xl text-secondary mt-6">
              <small>
                我们提供可自由客制化的交易平台让您可以直接从您的电脑,
                <a class="text-blue-500 hover:text-primary" href="#">iPad</a> or
                <a class="text-blue-500 hover:text-primary" href="#">手机</a>
                管理多个账户和投资产品。
              </small>
            </p>
            <p class="text-left text-xl text-secondary mt-3">
              <small>
                进阶投资者可以使用我们的专业级期权分析工具 <a class="text-blue-500 hover:text-primary" href="#">OptionsWizard</a> 解锁投资机会。
              </small>
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
            <h2 class="text-3xl text-left font-medium text-primary ">{{ tradeIdeas.title }}</h2>
            <p class="mt-4 text-lg text-secondary text-left mb-4">{{ tradeIdeas.description }}</p>
            <ul class=" list-disc list-inside mt-2" v-for="(item, index) in tradeIdeas.listItem" :key="index">
              <li class=" text-left  text-lg  text-secondary">{{ item.item }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
          </div>
        </div>
        <!-- Trade idea part End here --> 
        <!-- Secure part start here -->   
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ safeSecure.title }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ safeSecure.description }}</p>
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
            <h2 class="text-3xl text-left font-medium text-primary ">{{ protection.title }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ protection.description }}</p>
          </div>
        </div>
        <!-- Protection part End here --> 
        <!-- Trading Hours part start here --> 
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ tradingHours.title }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ tradingHours.description }}</p>
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
            <h2 class="text-3xl text-left font-medium text-primary ">{{ smartInvest.title }}</h2>
            <p class="mt-4 text-lg text-secondary text-left mb-4">{{ smartInvest.description }}</p>
            <ul class=" list-disc list-inside mt-2" v-for="(item, index) in smartInvest.listItem" :key="index">
              <li class=" text-left  text-lg  text-secondary">{{ item.item }}</li>
            </ul>
            <a class="text-left block mt-4 font-bold text-blue-600 text-lg" href="#">Learn More > </a>
          </div>
        </div>
        <!-- Smart invest part End here --> 
        <!-- Customer Support part start here --> 
        <div class="flex justify-between items-center mt-14">
          <div class="w-1/2 max-w-xl">
            <h2 class="text-3xl text-left font-medium text-primary ">{{ customerSupport.title }}</h2>
            <p class="text-left text-xl text-secondary mt-6">{{ customerSupport.description }}</p>
            <p class="text-left text-xl text-secondary mt-6"> 需要更多协助吗？</p>
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
    <FooterView />
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
