<template>
    <div  @click="toggleFunction" class="container  m-auto">
        <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                    <div class="col-span-12 lg:col-span-9">
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ $t('dividend_reinvestment_page.free_dividend_reinvestment_plan') }}</h2>                           
                            <p class=" text-md mb-6 text-secondary">{{ $t('dividend_reinvestment_page.sign_up_for_firstrades_free_dividend_reinvestment_plan') }}</p>
                        </div>
                        <div class="py-10">                            
                            <div class="text-left bg-[#eff2f7] py-8 px-6 text-[#4d6582]">
                                <h5 class="text-[#4d6582] font-bold text-lg mb-4 text-left">{{ $t('dividend_reinvestment_page.plan_details') }}</h5>
                                <ol class=" list-inside " v-for="item in planDetails.listItems" :key="item.id">
                                    <li class=" text-md mb-1">{{ $t(item.desc) }}</li>
                                </ol>
                            </div>
                        </div>
                        <div class="text-left text-[#4d6582]">
                            <div v-for="item in reinvestmentPlans" :key="item.id">
                                <div class="text-left text-[#4d6582] mb-6">
                                    <h3 class="text-lg mb-2 font-bold">{{ $t(item.title) }}</h3>
                                    <p class="text-sm">{{ $t(item.desc) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                        <div class="bg-[#eff2f7] py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ $t('extended_hours_page.transfer_to_us_for_Free') }}</h5>
                            <p class="text-md text-secondary" >{{ $t('extended_hours_page.get_credit_for_the_account_transfer_fee_charged_by_other_brokers') }}</p>
                            <div class="mt-3">
                                <a href="# " class="text-blue-500 hover:text-primary">{{$t('link.get_started')}}</a>
                            </div>
                        </div>
                        
                    </div>
         </div>
    </div>
</template>
<script>
export default{
    data(){
        return {           
            planDetails:{
                listItems:[
                    {
                        id: 1,
                        desc: "dividend_reinvestment_page.all_marginable_us_equities_priced_above",
                    },
                    {
                        id: 2,
                        desc: "dividend_reinvestment_page.if_the_dividend_amount_is_insufficient_for",
                    },
                    {
                        id: 3,
                        desc: "dividend_reinvestment_page.the_reinvested_shares_will_be_purchased_at_the_market",
                    },
                    {
                        id: 4,
                        desc: "dividend_reinvestment_page.accounts_can_be_set_up_for_dividend_reinvestment",
                    },
                ]            
            },
            reinvestmentPlans:[
                    {
                        id: 1,
                        title:"dividend_reinvestment_page.accumulating_additional_shares_with_ease_of_mind",
                        desc: "dividend_reinvestment_page.when_you_receive_dividends_from_a_stock_in_your_portfolio",
                    },
                    {
                        id: 2,
                        title:"dividend_reinvestment_page.enable_remove_dividend_reinvestment_plan",
                        desc: "dividend_reinvestment_page.access_the_dividend_reinvestment_page_by_clicking",
                    },
                    {
                        id: 3,
                        title:"dividend_reinvestment_page.closing_your_position_with_fractional_shares",
                        desc: "dividend_reinvestment_page.closing_your_position_with_fractional_shares_can_be_done",
                    },
                ]
            
        }
    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>
