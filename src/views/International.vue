<template>
    <div  @click="toggleFunction">
        <!-- International Account  Hero part start -->
        <div class="bg-[#D2E8FF] py-20">
            <div
                class=" container px-3 flex  items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-6xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2 text-left">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ $t('footer.international_accounts') }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ $t('international_page.take_advantage_of_the_great_opportunities') }}</p>
                        </div>
                        <button class="!w-[136px] bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md">
                            <a class="text-white " href="#">{{ $t('button.open_account') }}</a>
                        </button>

                    </div>
                    <div class="w-1/2">
                        <img class="w-full" src="/images/ban_med_intlaccts.webp" alt="">
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div class=" flex  justify-center items-center py-6 gap-3 bg-primaryLight">
            <p class="text-lg text-secondary">{{ $t('international_page.easy_steps_to_open_an_international_account') }}</p>
            <button class="!w-[200px] bg-primary hover:bg-blue-500 p-3 py-2  rounded-[4px]">
                <a class=" text-center  text-white " href="#">{{ $t('button.learn_more') }}</a>
            </button>
        </div>
        <!-- International Account  Hero part start-->
        <!-- Why choose Firstrade part start -->
        <div class="globals Benefits_container__sJSt_">
            <div class="m-auto max-w-7xl px-8  mt-8 ">
                <h2 class="py-10 text-3xl text-primary font-[800] text-center lg:text-left">{{ $t('international_page.why_choose_firstrade') }}</h2>
                <div class="flex flex-wrap justify-between text-left">
                    <div class="flex max-w-[47%] gap-6 justify-between mb-8" v-for="item in ChooseFirstrade.options"
                        :key="item.id">
                        <div class=" self-start w-1/5">
                            <img class="w-full object-contain" :alt="item.title" :src="item.imageUrl">
                        </div>
                        <div class="text-[#4d6582] w-4/5">
                            <h3 class="mb-4 text-xl font-[700]">{{ $t(item.title )}}</h3>
                            <div class="text-lg md:text-base">{{ $t(item.description) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Why choose Firstrade part end -->
        <!-- Invest us market part start -->
        <div class="bg-primaryLight py-6">
            <div class="m-auto max-w-7xl px-8  mt-8 ">
                <h2 class="py-10 text-3xl text-primary font-[800] text-center lg:text-left">{{$t("international_page.why_choose_to_invest_in_the_US_market") }}</h2>
                <div class="flex flex-wrap justify-between text-left">
                    <div class="flex max-w-[47%] gap-6 justify-between mb-8" v-for="item in usMarket.options"
                        :key="item.id">
                        <div class="text-[#4d6582]">
                            <h3 class="mb-4 text-xl font-[700]">{{ $t(item.title) }}</h3>
                            <div class="text-lg md:text-base">{{ $t(item.description) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Invest us market part end -->
        <!-- How to open international Account part start -->
        <div class="py-8 text-left">
            <div class="m-auto max-w-7xl mt-4 px-8">
                <h2 class="text-primary font-[800] text-3xl mb-10">{{ $t("international_page.how_to_open_an_international_account") }}</h2>
                <div class="flex justify-between gap-8 text-secondary">
                    <div class="HowToOpen_boxInner__9jDtr">
                        <h4 class="font-sans mb-4 font-semibold text-xl leading-tight">{{ $t("international_page.do_i_qualify") }}</h4>
                        <p class="text-sm" >{{ $t("international_page.you_may_sign_up_for_an_international_account") }}</p>
                        <div class="text-lg py-6 font-bold">{{ $t("international_page.supported_regions") }}</div>
                        <ul class="list-disc list-inside">
                            <li>{{ $t("international_page.china") }}</li>
                            <li>{{ $t("international_page.hong_kong") }}</li>
                            <li>{{ $t("international_page.india") }}</li>
                            <li>{{ $t("international_page.israel") }}</li>
                            <li>{{ $t("international_page.japan") }}</li>
                            <li>{{ $t("international_page.korea") }}</li>
                            <li>{{ $t("international_page.macau") }}</li>
                            <li>{{ $t("international_page.malaysia") }}</li>
                            <li>{{ $t("international_page.mexico") }}</li>
                            <li>{{ $t("international_page.new_zealand") }}</li>
                            <li>{{ $t("international_page.singapore") }}</li>
                            <li>{{ $t("international_page.taiwan") }}</li>
                        </ul>
                        <button class="text-blue-500 py-4 font-bold" type="button">See full list of supported
                            regions</button>
                    </div>
                    <div class="HowToOpen_boxInner__9jDtr">
                        <h4 class="font-sans mb-4 font-semibold text-xl leading-tight">{{ $t("international_page.how_to_apply") }}</h4>
                        <div class="text-sm">{{ $t("international_page.please_follow_the_steps_below_to_open_an_international_individual_account") }}</div>
                        <ol class="mx-0 list-decimal">
                            <li>
                                <div class=" text-md font-bold" >{{ $t('international_page.complete_the') }}
                                    <a href="/signup" class="text-blue-500 hover:text-primary ">{{ $t('link.firstrade_online_application') }}</a>
                                </div>
                                <div class="text-sm">{{ $t("international_page.during_the_online_application_process") }}</div>
                            </li><br>
                            <li>
                                <div class="text-md font-bold">{{ $t("international_page.fund_your_account") }}</div>
                                <div class="text-sm">{{ $t("international_page.here_are_simple_methods_for_you_to_fund_your_firstrade_account") }}</div>
                                <ul class="list-disc list-inside text-sm py-4" >
                                    <li >
                                        {{ $t("international_page.wire_transfer_it_only_takes_one_two_business_day") }}
                                    </li>
                                    <li>
                                        {{ $t("international_page.ACH_electronic_funds_transfer_if_you_have") }}
                                    </li>
                                </ul>
                                <div class="ml-4">
                                    <div class="font-bold  text-md"> {{ $t("international_page.Firstrade_App") }}</div>
                                    <ol class="list-decimal mt-0 text-sm ml-4">
                                        <li>{{ $t("international_page.download_login_to_your_firstrade_account") }}
                                        </li>
                                        <li>{{ $t("international_page.go_to_account") }}</li>
                                        <li>{{ $t("international_page.click_Setup_Now_and_follow") }}</li>
                                    </ol>
                                    <div class="py-4">
                                        <div class="font-bold  text-md">{{ $t("international_page.Firstrade_Website") }}</div>
                                        <ol class="list-decimal mt-0 text-sm ml-4">
                                            <li><a class="text-blue-500 hover:text-primary"
                                                    href="/login">{{ $t('topMenu.login') }}</a> {{ $t("international_page.to_your_Firstrade_account") }}</li>
                                            <li>{{ $t("international_page.Go_to_My_Account") }}</li>
                                            <li>{{ $t("international_page.Follow_the_onscreen_direction_instructions") }}</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- How to open international Account part end -->
    </div>
</template>
<script>
export default {

    data() {
        return {
            ChooseFirstrade: {
                options: [
                    {
                        id: 1,
                        imageUrl: "/images/icon_fullsuite.svg",
                        title: "international_page.full_suite_of_investment_products",
                        description: "international_page.our_full_suite_of_investment_products_include_stocks"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/icon_platforms.svg",
                        title: "international_page.online_mobile_trading_platform_and_tools",
                        description: "international_page.you_will_have_the_convenience_to_access_your_account"
                    },
                    {
                        id: 3,
                        imageUrl: "/images/icon_38yrs.webp",
                        title: "international_page.years_of_experience",
                        description: "international_page.founded_in_firstrade_has_been_a_leading_online",

                    },
                    {
                        id: 4,
                        imageUrl: "/images/sipc_logo.svg",
                        title: "international_page.additional_account_insurance",
                        description: "international_page.our_clearing_firm_apex_clearing_corporation",

                    },
                    {
                        id: 5,
                        imageUrl: "/images/icon_service.webp",
                        title: "international_page.exceptional_customer_service_in_english",
                        description: "international_page.firstrade_offers_comprehensive_array_of_online"
                    },
                    {
                        id: 6,
                        imageUrl: "/images/morningstar_logo.svg",
                        title: "international_page.comprehensive_research_tools_from_the_worlds_most_trusted",
                        description: "international_page.firstrade_offers_comprehensive_array_of_online",
                        
                    },
                    {
                        id: 7,
                        imageUrl: "/images/icon_paperless.svg",
                        title: "international_page.easy_account_opening_process",
                        description: "international_page.opening_an_account_at_firstrade_is_easy"

                    },
                    {
                        id: 8,
                        imageUrl: "/images/icon_0comm .svg",                        
                        title: "international_page.low_commission",
                        description: "international_page.you_can_trade_through_online_or_mobile",
                    }
                ]
            },
            usMarket: {
                options: [
                    {
                        id: 1,
                        title: "international_page.product_variety",
                        description: "international_page.the_US_market_offers_a_variety_of_investment_products_including_stock"
                    },
                    {
                        id: 2,
                        title: "international_page.US_Tax_Benefits",
                        description: "international_page.the_US_government_encourages_global_investors_to_invest"
                    },
                    {
                        id: 3,
                        title: "international_page.strict_US_regulatory_system_transparent_public_company",
                        description: "international_page.all_companies_listed_in_the_US_stock_market_are_highly",

                    },
                    {
                        id: 4,
                        title: "international_page.global_portfolio_diversification",
                        description: "international_page.enterprises_from_different_countries_and_industries",

                    },
                    {
                        id: 5,
                        title: "international_page.low_cost_no_minimum_trading_requirements",
                        description: "international_page.costs_are_relatively_low_for_self_directed"
                    },
                    {
                        id: 6,
                        title: "international_page.account_protection",
                        description: "international_page.sipc_protects_brokerage_accounts_of_each"
                    },

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