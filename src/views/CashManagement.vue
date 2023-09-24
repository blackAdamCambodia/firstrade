<template>
    <div  @click="toggleFunction">
        <!-- Margin Loans  Hero part start -->
        <div class="bg-[#D2E8FF]">
            <div>
                <div class="bg-[url(/images/ban_medtall_cashmgt.jpg)] bg-cover bg-center py-10">
                    <div class="md:flex flex-row max-w-7xl m-auto">
                        <div class=" max-w-7xl  py-20 lg:px-10 lg:py-30 text-left">
                            <h1 class=" font-[700] mb-6 max-w-xl lg:max-w-6xl text-5xl text-primary">{{ $t('cash_management_page.firstrade_cash_management_account') }}</h1>
                            <div class="max-w-xl text-xl font-bold lg:max-w-6xl lg:text-2xl  text-secondary">{{ $t('cash_management_page.manage_invest_and_spend_your_money') }}</div>
                            <p class="text-md mt-1 mb-4 max-w-lg lg:max-w-6xl lg:text-xl text-secondary">{{$t('cash_management_page.no_setup_fee_no_annual_fee_free_ATM_Debit_Card') }}</p>
                            <button
                                class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]">
                                <a href="https://signup.firstrade.com/apply/en-us">{{ $t('button.apply_now') }}</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Margin Loans  Hero part start-->
        <!-- Account management part start -->
        <section>
            <div class="mb-10">
                <div class="m-auto max-w-7xl flex-row px-8 py-10 md:flex">
                    <div class="mr-10 w-full md:w-1/2 lg:w-3/5 text-left">
                        <div class="text-[#4d6582] text-md mb-6" v-html="$t('cash_management_page.in_this_fast_paced_world_a_firstrade_cash_management')"></div>
                        <div class="text-secondary text-md" v-html="$t('cash_management_page.with_our_cash_management_service_your_cash')"></div>
                        <div class="mt-4">
                            <button type="button" class="mb-6 text-left text-md text-blue-500">{{$t('link.how_to_open_a_firstrade_cash_management_account')}}</button>
                        </div>
                    </div>
                    <div class="w-full rounded-lg bg-primary text-left p-6 text-white md:w-1/2 lg:w-2/5">
                        <div class="text-white">
                            <div class="text-xl text-white">{{$t('cash_management_page.account_opening_requirements') }}</div>
                            <div class="border-b border-cerulean pt-1 pb-4 text-sm text-white">{{$t('cash_management_page.for_check_writing') }}</div>
                            <div class="flex flex-row border-b border-cerulean py-3">
                                <div class="w-2/3 text-lg text-white">{{ $t('cash_management_page.account_equity_requirement') }}</div>
                                <div class="w-1/3 text-right text-lg text-white">25000$</div>
                            </div>
                            <div class="flex flex-row border-b border-cerulean py-3">
                                <div class="w-2/3 text-lg text-white">{{ $t('cash_management_page.annual_fee') }}</div>
                                <div class="w-1/3 text-right text-lg text-white">0$</div>
                            </div>
                            <div class="pt-4 text-sm text-white opacity-50">{{ $t('cash_management_page.check_writing_is_only_available_for') }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Account management part end -->
        <!-- Account management benefits part start -->
        <div class="globals Benefits_container__sJSt_">
            <div class="m-auto max-w-7xl px-8">
                <h2 class="py-10 text-3xl text-primary font-[800] lg:text-center">{{ $t('cash_management_page.firstrade_cash_management_account_benefits') }}</h2>
                <div class="grid grid-cols-2 justify-between gap-4 text-left">
                    <div class="flex gap-4 items-center" v-for="benefit in accountBenefits.benefits" :key="benefit.id">
                        <div class="w-80">                           
                                <img :alt="benefit.title" :src="benefit.imageUrl" >
                        </div>
                        <div class="text-[#4d6582]">
                            <h3 class="mb-4 text-xl font-[700]">{{$t(benefit.title)}}</h3>
                            <div class="text-lg md:text-base">{{ $t(benefit.description) }}</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="Benefits_modalBtn__tPGMp"><button type="button"
                        class="mt-4 mb-20 text-left text-lg text-blue-500 hover:text-primary">{{ $t('link.view_full_list_of_service_details') }}</button>
                </div>
        </div>
    </div>
    <!-- Account management benefits part end -->



</div></template>
<script>
export default {

    data() {
        return { 
            accountBenefits: {
               
                benefits: [
                    {
                        id: 1,
                        imageUrl: "/images/icon_SM__cma_debit2.svg",
                        title: "cash_management_page.fast_and_convenient",
                        description: "cash_management_page.our_online_cash_management_account_with_debit"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/icon_SM__cma_travel.svg",
                        title: "cash_management_page.travel_accident_insurance",
                        description: "cash_management_page.there_will_be_no_additional_cost_when_you_charge"
                    },
                    {
                        id: 3,
                        imageUrl: "/images/icon_0comm.svg",
                        title: "cash_management_page.zero_liability_policy",
                        description: "cash_management_page.you_will_have_no_liability_for_unauthorized_transactions",
                        
                    },
                    {
                        id: 4,
                        imageUrl: "/images/icon_SM__cma_service.svg",
                        title: "cash_management_page.personalized_service",
                        description: "cash_management_page.speak_with_a_firstrade_cash_management_account",
                        
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