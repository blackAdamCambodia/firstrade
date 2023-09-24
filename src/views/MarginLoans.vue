<template>
    <div  @click="toggleFunction">
        <!-- Margin Loans  Hero part start -->
        <div class="bg-[#D2E8FF]">
            <div>
                <div class="bg-[url(/images/marginloan-hero.png)] bg-cover bg-center">
                    <div class="md:flex flex-row max-w-7xl m-auto px-8">
                        <div class="w-4/5 py-24 md:w-1/2 xl:w-2/5 text-left">
                            <h1 class=" font-bold text-4xl lg:text-5xl pt-6 pb-3 text-primary">{{ $t('topMenu.margin_loans') }}</h1>
                            <div class="text-xl my-4 mb-8 text-secondary">{{ $t('margin_loan_page.get_flexible_line_of_credit_for_short_term_financing_needs') }}
                            </div>
                            <button
                                class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]">
                                <a href="https://signup.firstrade.com/apply/en-us">{{ $t('hompage.open_account') }}</a>
                            </button>
                            <div class="mt-6">
                                <a class="text-blue-500 hover:text-primary text-sm" aria-label="Upgrade an existing account"
                                    href="https://invest.firstrade.com/cgi-bin/login?ft_locale=en-us&amp;redirect=/content/myaccount/profile/margin"
                                    rel="noopener noreferrer">{{ $t('margin_loan_page.upgrade_an_existing_account') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Margin Loans  Hero part start-->
        <!-- Advantages margin  section start -->
        <section>
            <div class="container px-3 py-6  sm:max-w-none md:max-w-none lg:max-w-7xl border-b-[1px]  mx-auto">
                <div class="py-4 center ">
                    <h2 class="text-4xl mb-3 text-primary font-bold">{{ $t('margin_loan_page.the_advantages_of_margin_loans') }}</h2>
                </div>
                <div class="px-5 flex justify-between gap-4 text-center">
                    <div class="" v-for="marginItem in advantageMargin.marginItems" :key="marginItem.id">
                        <div class="flex flex-col items-center  p-6">
                            <img :src="marginItem.imageUrl" alt="product.title">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ $t(marginItem.title) }}</h3>
                                <p class="text-md text-secondary">{{ $t(marginItem.description) }}
                                </p>
                            </div>
                            <a class="text-md text-blue-500 hover:text-primary" href="#">{{ $t(marginItem.buttonText) }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Advantages margin  section end -->
        <!-- How Margin Loans work Section start -->
        <section class="">
            <div class="container px-3  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex justify-between gap-4 items-start">
                    <div>
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ $t('margin_loan_page.how_margin_loan_work') }}</h2>
                            <p class=" text-md text-secondary">{{ $t('margin_loan_page.margin_loan_is_a_flexible_line_of_credit') }}</p>
                        </div>

                    </div>
                    <div>
                        <div class="bg-[#eff2f7] w-60 p-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ $t('margin_loan_page.guide_to_margin') }}</h5>
                            <p class="text-md text-secondary" v-html="$t('margin_loan_page.for_more_information_about_margin_loans')"></p>
                        </div>
                    </div>
                </div>

                <div class="pt-8">
                    <div class="flex justify-between gap-8 md:gap-24 text-left">
                        <div class="text-left py-8">
                            <h4 class="text-primary text-xl mb-4">{{ $t('margin_loan_page.benifit') }}</h4>
                            <p class=" text-md text-secondary mb-6">{{ $t('margin_loan_page.enjoy_these_benefits_of_margin_trading') }}</p>
                            <div class="py- text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in processMargin.benefits.listItemsLeft"
                                    :key="item.id">
                                    <li>{{ $t(item.desc )}}</li>
                                </ul>
                            </div>
                            <div class="mt-2">
                                <a class="text-blue-500 text-sm hover:text-primary mt-4" href="#">{{ $t('button.learn_more_about_benefits') }}</a>
                            </div>
                        </div>
                        <div class="text-left py-8">
                            <h4 class="text-primary text-xl mb-4">{{ $t('margin_loan_page.risks') }}</h4>
                            <p class=" text-md text-secondary mb-6">{{  $t('margin_loan_page.understand_the_potential_risks') }}</p>
                            <div class=" text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in processMargin.risk.listItemsRight"
                                    :key="item.id">
                                    <li>{{ $t(item.desc ) }}</li>
                                </ul>
                            </div>
                            <div class="mt-3">
                                <a class="text-blue-500 text-sm hover:text-primary" href="#">{{ $t('button.learn_more_about_risks') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- How Margin Loans work Section end -->
        <!-- Margin Rates Start -->
        <section>
            <div class="bg-primaryLight">
                <div class="max-w-7xl m-auto px-8 pt-16 pb-12">
                    <h2 class="font-sans text-2xl font-bold text-primary mb-2 text-center">{{ $t('pricing_page.margin_rates') }}</h2>
                    <div class="text-xl text-secondary text-center mb-6">{{ $t('margin_loan_page.firstrade_margin_rates_are_among_the_lowest') }}</div>
                    <div>
                        <div class="grid-rows-8 grid grid-cols-12">
                            <div class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-4"> {{ $t('pricing_page.dollar_range') }}</div>
                            <div class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-5">
                                {{ $t('pricing_page.below_base_rate') }}
                            </div>
                            <div class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                {{ $t('pricing_page.effective_rate') }}
                            </div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $1,000,000 +</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                -
                                2.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                9.75%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $500,000 - $999,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                -
                                1.65%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                10.35%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $250,000 - $499,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                0.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                12.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $100,000 - $249,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                0.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                12.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $50,000 - $99,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.00%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.00%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $25,000 - $49,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $0 - $24,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.75%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.75%</div>
                        </div>
                        <div class="text-xs text-[#96a1b1] text-left my-4" v-html=" $t('margin_loan_page.the_current_base_rate_is') ">
                        </div>
                        <div class="text-xs text-[#96a1b1] my-4 text-left">{{ $t('margin_loan_page.when_setting_base_rates_Firstrade_considers') }}</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Margin Rates End -->
        <!-- Get started with margin loans section start -->
        <div>
            <div class="max-w-7xl m-auto px-8 pt-16 pb-12 mb-10">
                <h3 class="text-primary font-bold text-3xl text-ft-blue mb-12 text-center">{{ $t('margin_loan_page.get_started_with_margin_loans') }}</h3>
                <div class="md:flex flex-row max-w-7xl m-auto">
                    <div class="w-full md:w-1/4 px-4 mb-6" v-for="item in applyMargin.myItems" :key="item.id">
                        <div class="text-center mb-2" >
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                <span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                    <img alt="" aria-hidden="true"
                                        :src="item.imageUrl"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                                </span>                            
                            </span>
                        </div>
                        <div class="text-center text-secondary">{{ $t(item.title) }}</div>
                    </div>
                   
                </div>
                <div class="mt-2 flex items-center justify-center">
                    <a  class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]"
                        href="https://invest.firstrade.com/cgi-bin/login?ft_locale=en-us&amp;redirect=/content/myaccount/profile/margin">{{ $t('button.apply_for_margin') }}</a>
                </div>
            </div>
        </div>
        <!-- Get started with margin loans section End -->

    </div>
</template>
<script>
export default {

    data() {
        return {            
            advantageMargin: {
                marginItems: [
                    {
                        id: 1,
                        imageUrl: "/images/margin1.webp",
                        title: "margin_loan_page.increased_buying_power",
                        description: "margin_loan_page.tading_on_margin_allows_you_to_buy"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/margin2.webp",
                        title: "margin_loan_page.flexible_line_of_credit",
                        description: "margin_loan_page.borrowing_on_margin_gives_you_a_flexible"
                    },
                    {
                        id: 3,
                        imageUrl: "/images/margin3.webp",
                        title: "margin_loan_page.low_margin_rates",
                        description: "margin_loan_page.firstrade_margin_rates_are_among_the_lowest",
                        buttonText: "button.view_margin_rates"
                    }
                ]
            },
            processMargin: {                
                benefits: {
                    listItemsLeft: [
                        {
                            id: 1,
                            desc: "margin_loan_page.the_ability_to_leverage_your_investment",
                        },
                        {
                            id: 2,
                            desc: "margin_loan_page.the_ability_to_short_sell_a_stock",
                        },
                        {
                            id: 3,
                            desc: "margin_loan_page.increased_returns_when_the_value",
                        },
                        {
                            id: 4,
                            desc: "margin_loan_page.void_cash_account_violations_caused",
                        },
                        {
                            id: 5,
                            desc: "margin_loan_page.diversify_your_portfolio_by_using",
                        },
                        {
                            id: 6,
                            desc: "margin_loan_page.short_term_financing_option_without",
                        },
                        {
                            id: 7,
                            desc: "margin_loan_page.interest_on_margin_loans_may_be_tax_deductible_against_your_net",
                        }
                    ],
                },
                risk: {
                    listItemsRight: [
                        {
                            id: 1,
                            desc: "margin_loan_page.potential_margin_calls",
                        },
                        {
                            id: 2,
                            desc: "margin_loan_page.increased_potential_loss_if_your_securities",
                        },
                        {
                            id: 3,
                            desc: "margin_loan_page.possible_greater_losses",
                        },
                        {
                            id: 4,
                            desc: "margin_loan_page.rise_in_interest_rates",
                        },
                        {
                            id: 5,
                            desc: "margin_loan_page.the_firm_can_force_the_sale",
                        },
                        {
                            id: 6,
                            desc: "margin_loan_page.you_are_not_entitled_to_choose_which",
                        }
                    ]
                }

            },
            marginGuide: {
                title: "Guide to Margin",
                info: `<div>For more information about margin loans, refer to our <a class="text-blue-500 hover:text-primary" href="/resources/guides/margin">Margin Education</a> section.</div>`,
            },
            applyMargin:{
                myItems:[
                    {
                        id: 1,
                        imageUrl:"/images/margin4.webp",
                        title:"margin_loan_page.make_sure_you_understand_the_risks_and_benefits"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin5.webp",
                        title:"margin_loan_page.make_sure_you_understand_the_risks_and_benefits"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin6.webp",
                        title:"margin_loan_page.have_at_least_2,000_of_assets"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin7.webp",
                        title:"margin_loan_page.once_approved_you_can_start_enjoying"
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
<style scoped>
</style>