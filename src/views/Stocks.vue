<template>
    <div @click="toggleFunction">
        <!-- stock Hero part start -->
        <div class="bg-[#D2E8FF] py-10">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ $t(investStock.title) }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ $t(investStock.Subtitle) }}</p>
                        </div>

                    </div>
                    <div class="w-1/2">
                        <img :src="investStock.imageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- stock Hero part start-->

        <!-- Portfolio Section start -->
        <section class="">
            <div class="container px-3  py-20  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="  grid grid-cols-2 justify-between gap-4 text-left">
                    <div class="" v-for="item in portfolio.portfolioItems" :key="item.id">
                        <div class=" items-center mr-4 ">
                            <div>
                                <h3 class="font-[800] text-2xl mt-6 text-primary mb-4  ">{{ $t(item.headline) }}</h3>
                                <p class="text-md text-secondary">{{ $t(item.description) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio Section end -->
        <!-- Firstrade Advantage start -->
        <section class="bg-primaryLight h-[700px] ">
            <div class="container px-3  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex flex-col items-center">
                    <div class=" text-[#96a1b1] font-bold text-md pb-6">
                        <h4>{{ $t(firstradeAdvantage.reason) }}</h4>
                    </div>
                    <div>
                        <h3 class="text-primary font-bold text-2xl sm:text-3xl">{{ $t(firstradeAdvantage.title) }}</h3>
                        <h4 class="text-[#0066cc] text-xl py-3 ">{{ $t(firstradeAdvantage.Subtitle) }}</h4>
                    </div>
                    <div>
                        <p class="mt-2 text-lg text-secondary sm:mt-0 lg:text-xl">{{ $t(firstradeAdvantage.description) }}</p>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-3 justify-between gap-10 text-left  mt-8">
                        <div class="" v-for="item in firstradeAdvantage.advantageItems" :key="item.id">
                            <div class=" items-center mr-4 border-r-[1px] h-40  ">
                                <div class="px-4 ">
                                    <h3 class="font-[600] text-2xl mt-6 text-secondary mb-4  ">{{$t( item.title) }}</h3>
                                    <p class="text-md text-secondary" v-html="$t(item.description)">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full h-[1px] bg-secondary -mt-[200px]">
                </div>
            </div>
        </section>
        <!-- Firstrade Advantage end -->
        <!-- Award winning section start -->
        <section >
            <div class="container px-3  py-16  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-5">
                    <h2 class="text-3xl font-[800] mb-4 text-secondary">{{ $t(award.title) }}</h2>
                    <p class="text-secondary text-xl">{{ $t(award.description) }}</p>
                </div>
                <div class="flex py-6">
                    <div v-for=" item in award.imageItems" :key="item.id">
                        <div  >
                            <img :src="item.imageUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Award winning section End -->
    </div>
</template>
<script>
export default {

    data() {
        return {
            investStock: {
                title: "stock_page.invest_in_stocks",
                Subtitle: "stock_page.trade_stocks_listed_on_the_NYSE",
                imageUrl: "/images/stocks-hero.webp",

            },
            portfolio: {
                portfolioItems: [
                    {
                        id: 1,
                        headline: "stock_page.penny_stocks_to_large_cap_stocks",
                        description: "stock_page.invest_in_large_mid_and_small",
                    },
                    {
                        id: 2,
                        headline: "stock_page.listed_and_OTC_stocks",
                        description: "stock_page.trade_both_listed_and_OTC_trading_stocks",
                    },
                    {
                        id: 3,
                        headline: "stock_page.exchange_traded_funds",
                        description: "stock_page.replicate_the_performance_of_an_index",
                    },
                    {
                        id: 4,
                        headline: "stock_page.divided_reinvestment_programs",
                        description: "stock_page.enroll_in_our_dividend_reinvestment_program",
                    },
                    {
                        id: 5,
                        headline: "hompage.extended_Hours_trading",
                        description: "stock_page.trade_eligible_stocks_after_hours_during_our_extended",
                    },
                    {
                        id: 6,
                        headline: "stock_page.conditional_orders_trailing_stops",
                        description: "stock_page.place_conditional_orders_such_as",

                    },


                ]
            },
            firstradeAdvantage: {
                reason: "stock_page.why_open_account_at_firstrade",
                title: "stock_page.the_firstrade_advantage",
                Subtitle: "stock_page.commission_online_trades",
                description: "stock_page.no_deposit_minimum",
                advantageItems: [
                    {
                        id: 1,
                        title: "stock_page.full_suite_of_investment_products",
                        description: "stock_page.stocks_ETFs_options_fixed_income",
                    },
                    {
                        id: 2,
                        title: "stock_page.powerful_apps",
                        description: "stock_page.seize_opportunity_no_matter_where_you",
                    },
                    {
                        id: 3,
                        title: "stock_page.trade_ideas",
                        description: "stock_page.discover_potential_trade_ideas_with_free_access_to_premium_research",
                        
                    },
                    {
                        id: 4,
                        title: "stock_page.account_protection",
                        description: "stock_page.we_secure_your_accounts_with_strong_encryption",
                        
                    },
                    {
                        id: 5,
                        title: "stock_page.education_resources",
                        description: "stock_page.free_education_resources_live_webinars",
                        
                    },
                    {
                        id: 6,
                        title: "hompage.extended_Hours_trading",
                        description: "hompage.react_to_market_news_during_pre_market_and_after_market",
                        
                    }

                ]
            },
            award: {
                title: "stock_page.award_winning_broker",
                description: "stock_page.firstrade_was_established_in_New_York",
                imageItems: [
                    {
                        id: 1,
                        imageUrl: "/images/accolade-1.webp"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/accolade-2.webp"
                    }
                ]
            }

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