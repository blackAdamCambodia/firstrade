<template>
    <div @click="toggleFunction">
        <!-- Trading Hero part start -->
        <div class="bg-primaryLight">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ $t(heroPart.title) }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ $t(heroPart.Subtitle) }}</p>
                        </div>
                        <div class="flex gap-4 ">
                            <div v-for="(item, index) in heroPart.buttonItem" :key="index">
                                <img :src="item.imageUrl" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <img :src="heroPart.imageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- Trading Hero part start-->
        <!-- Investment Product section start -->
        <section>
            <div class="container px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-6 text-left">
                    <h2 class="text-4xl mb-3 text-primary font-bold">{{ $t(chooseInvestment.title) }}</h2>
                    <p class="text-xl text-secondary ">{{ $t(chooseInvestment.description) }}</p>
                </div>
                <div class="px-5 mt-8 flex justify-between gap-4 text-left">
                    <div class="w-1/2" v-for="product in investmentProducts" :key="product.id">
                        <div class="flex flex-col items-start  hover:bg-primaryLight p-6">
                            <img :src="product.imageUrl" alt="product.title">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{$t(product.title)}}</h3>
                                <p class="text-md text-secondary">{{$t(product.description)}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Investment Product section end -->
        <!-- Portfolio Section start -->
        <section class="bg-primaryLight">
            <div class="container px-3  py-20  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class=" text-left  pb-8">
                    <h2 class="text-4xl  text-primary font-bold">{{ $t(portfolio.title) }}</h2>
                </div>
                <div class="  flex justify-between gap-4 text-left">
                    <div class="" v-for="item in portfolio.portfolioItems" :key="item.id">
                        <div class="flex flex-col items-center mr-4 ">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ $t(item.headline) }}</h3>
                                <p class="text-md text-secondary">{{ $t(item.description) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio Section end -->
        <!-- Pricing part start here -->
        <div class="container  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
            <div class="flex justify-between items-center mt-14">
                <div class="flex justify-center w-1/2">
                    <img class="w-96" :src="pricing.imageUrl" alt="">
                </div>
                <div class="w-1/2">
                    <h2 class="text-3xl text-left text-primary font-bold">{{$t(pricing.title) }}</h2>
                    <p class="text-lg text-secondary text-left py-5">{{ $t(pricing.description) }}</p>
                    <ul class="mt-2 list-disc list-inside" v-for="(item, index) in pricing.listItem" :key="index">
                        <li class="text-left mb-2 text-lg  text-secondary">{{ $t(item.item) }}</li>
                    </ul>
                    <div>
                        <a class="text-center p-2 px-4 rounded-[4px] block mt-4  w-[220px] text-white bg-warning text-lg"
                            href="#">Open Account </a>
                    </div>

                </div>
            </div>
        </div>
        <!-- Pricing part end here -->
    </div>
</template>
<script>
import {ref} from "vue"
export default {

    data() {
        return {
           
            heroPart: {
                title: "trading_page.trade_stocks_ETFs_and_options_in_one_portfolio",
                Subtitle: "trading_page.diversify_your_portfolio_with_a_wide_selection",
                imageUrl: "/images/home_platform.webp",
                buttonItem: [
                    { imageUrl: "/images/app_android.c52f7d81.svg" },
                    { imageUrl: "/images/app_ios.1ed9e534.svg" },
                ]
            }, 
            chooseInvestment: {
                title: "trading_page.choose_the_investments_title",
                description: "trading_page.build_the_portfolio_you_want_with_all_the_investment",

            },
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
           
            portfolio: {
                title: "trading_page.get_more_out_of_your_portfolio",
                portfolioItems: [
                    {
                        id: 1,
                        headline: "trading_page.margin_loans",
                        description: "trading_page.leverage_your_investments_with_competitive_margin_rates",
                    },
                    {
                        id: 2,
                        headline: "trading_page.dividend_reinvestment",
                        description: "trading_page.reinvest_your_dividends_automatically",
                    },
                    {
                        id: 3,
                        headline: "trading_page.cash_management",
                        description: "trading_page.consolidate_your_banking_and_brokerage_services",
                    }

                ]
            },
            pricing: {
                title: "hompage.straightforward_pricing",
                description: "hompage.put_your_money_into_your_investments_not_fees",
                imageUrl: "/images/why_pricing.webp",
                listItem: [
                    { item: "hompage.commission_trades" },
                    { item: "hompage.options_contract_fees" },
                    { item: "hompage.no_minimums" },
                    { item: "hompage.no_inactivity_fees" }
                ]
            },
        }
    },   
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>
<style scoped></style>