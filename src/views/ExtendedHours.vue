<template>
    <div  @click="toggleFunction" class="container  m-auto">
        <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                    <div class="col-span-12 lg:col-span-9">
                        <div class="text-left">
                            <h2 class="text-4xl  font-[800] text-primary mb-6">{{ $t('hompage.extended_Hours_trading') }}</h2>                           
                        </div>
                        <div class="text-left ">
                            <p class=" text-xl font-bold mb-2 text-secondary">{{ $t('extended_hours_page.more_opportunities_to_trade') }}</p>
                            <p class=" text-md mb-6 text-secondary">{{ $t('extended_hours_page.we_offer_stock_market_after_hours') }}</p>
                            <div class="py-6 text-md text-secondary">
                                <img src="/images/ext-hours-1.webp" alt="">
                            </div>
                        </div>
                        <div class="py-10">
                            <div class="text-left text-[#4d6582]">
                                <h5 class="text-xl font-bold">{{ $t('extended_hours_page.how_to_place_pre_market_after_market') }}</h5>
                                <p class="text-sm mt-4 mb-6">{{   $t('extended_hours_page.log_in_to_your_account_click_on_the') }}</p>
                            </div>
                            <div>
                                <img src="/images/ext-hours-2.webp" alt="">
                            </div>
                        </div>
                        <div class="text-left text-[#4d6582]">
                            <h5 class=" text-xl font-bold mb-3">{{ $t('extended_hours_page.more_opportunities_to_trade') }}</h5>
                            <div>
                                <ul class="list-disc list-inside " v-for="item in tradingKnowledges.knowledgeLists" :key="item.id">
                                    <li class="text-md mb-1">{{ $t(item.desc) }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                        <div class="bg-[#eff2f7] py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ $t("extended_hours_page.transfer_to_us_for_Free") }}</h5>
                            <p class="text-md text-secondary" >{{ $t("extended_hours_page.get_credit_for_the_account_transfer_fee_charged_by_other_brokers") }}</p>
                            <div class="mt-3">
                                <a href="# " class="text-blue-500 hover:text-primary">{{ $t('link.get_started') }}</a>
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
                tradingKnowledges:{                   
                    knowledgeLists:[
                    {
                        id: 1,
                        desc: "extended_hours_page.same_low_commission",
                    },
                    {
                        id: 2,
                        desc: "extended_hours_page.only_limit_orders_are_allowed",
                    },
                    {
                        id: 3,
                        desc: "extended_hours_page.the_extended_hours_market_is_separate",
                    },
                    {
                        id: 4,
                        desc: "extended_hours_page.benefit_from_the_new_duration_to_trade_through",
                    },
                    {
                        id: 5,
                        desc: "extended_hours_page.order_modification_price_changes_and_cancellations",
                    },
                    {
                        id: 6,
                        desc: "extended_hours_page.available_securities_securities_listed_on",
                    },
                    {
                        id: 7,
                        desc: "extended_hours_page.OTC_stocks_bonds_funds_options_and_other",
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
