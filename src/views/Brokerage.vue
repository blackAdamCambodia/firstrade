<template>
    <div  @click="toggleFunction">
        <!-- stock Hero part start -->
        <div class="bg-white py-20">
            <div class=" container max-w-7xl px-4 mx-auto">
                <div class="grid grid-cols-5 gap-y-10 lg:gap-x-10 lg:divide-x lg:divide-light-grayish-blue">
                    <div class="col-span-5 py-6 lg:col-span-3 text-left mb-10">
                        <h1 class="mb-4  text-3xl lg:text-4xl font-bold text-primary">{{$t('brokerage_account_page.brokerage_accounts')}}</h1>
                        <div class="text-lg text-secondary">{{$t('brokerage_account_page.get_closer_to_your_financial_goals_with_a_firstrade')}}</div>
                    </div>
                    <div class="col-span-5 lg:col-span-2 lg:pl-10">
                        <p class="text-xl lg:text-3xl text-secondary mb-10">{{$t('brokerage_account_page.ready_to_get_started')}}</p>
                        <button class="bg-warning hover:bg-[#e67021] py-3 px-6 w-60 rounded-md text-white">
                            <a aria-label="Open Account" rel="noopener noreferrer"
                                href="https://signup.firstrade.com/apply/en-us">{{$t('button.open_account')}}</a>
                        </button>
                    </div>
                </div>
                <!-- What is general investing account -->
                <div class="transition border-b-[1px]" v-for="(accordion, index) in brokarageAccount.accordions"
                    :key="index">
                    <!-- header -->
                    <div @click="accordion.isOpen = !accordion.isOpen"
                        class="accordion-header cursor-pointer transition flex justify-between text-lg lg:text-xl space-x-5 items-center h-16 text-[#4d6582]">
                        <h3>{{ $t(accordion.heading) }}</h3>
                        <div class="flex">
                            <svg v-if="accordion.isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                        </div>
                    </div>
                    <!-- Content -->
                    <div class="px-5 pt-0 text-left pb-5 text-[#4d6582]" v-show="true == accordion.isOpen">
                        <p class="leading-6 font-light  " v-html="$t(accordion.content)">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- stock Hero part start-->


        <!-- Firstrade Advantage start -->
        <section class=" h-[700px] ">
            <div class="container px-3  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex flex-col items-center">
                    <div class=" text-[#96a1b1] font-bold text-md pb-6">
                        <h4>{{  $t(firstradeAdvantage.reason)  }}</h4>
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
                    <div class="grid grid-cols-3 justify-between gap-10 text-left border-b-[1px]   mt-8">

                        <div class="pb-8" v-for="item in firstradeAdvantage.advantageItems" :key="item.id">
                            <div class=" items-center mr-4 border-r-[1px] h-40  ">
                                <div class="px-4 ">
                                    <h3 class="font-[600] text-xl mt-6 text-secondary mb-4  ">{{$t( item.title) }}</h3>
                                    <p class="text-md text-secondary" v-html="$t(item.description)"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full h-[1px] bg-secondary -mt-[240px]">

                </div>
            </div>
        </section>
        <!-- Firstrade Advantage end -->
        <!-- Promotion section start -->
        <section>
            <div class="container px-3  pt-4 pb-16  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-5">
                    <p class="text-warning text-sm font-bold uppercase py-6">{{ $t('brokerage_account_page.open_an_account_today') }}</p>
                    <h2 class="text-3xl font-bold mb-4 text-primary">{{  $t('brokerage_account_page.get_up_to_in_transfer_fee_rebates') }}</h2>
                    <a href="#" class="text-blue-500 hover:text-[#03468e]">{{  $t('link.promotions_details') }}</a>
                </div>
            </div>
        </section>
        <!-- Promotion winning section End -->
    </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
    data() {
        return {
            brokarageAccount: {
                title: "",
                description: "",
                activeIndex: ref(0),
                accordions: reactive([
                    {
                        heading: "brokerage_account_page.What_is_a_general_investing_account",
                        content: "brokerage_account_page.general_investing_brokerage_account_is_a_flexible_investment",
                        isOpen: false,
                    },
                    {
                        heading: "brokerage_account_page.what_are_the_different_types_of_account_ownership",
                        content: "brokerage_account_page.different_types_of_account_ownership_description",
                        isOpen: false,
                    },
                    {
                        heading: "brokerage_account_page.what_brokerage_account_features_are_available",
                        content:"brokerage_account_page.brokerage_account_features_description",                        
                        isOpen: false,
                    },
                ])

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