<template>
    <div   @click="toggleFunction">
        <div class=" bg-[#d6e9ff] py-8">
            <div class="container px-3 flex items-center px-6 gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto ">
                <div class="w-1/4">
                    <img :src="wireFund.imageUrl" alt="">
                </div>
                <div class="w-3/4 text-left" >
                    <h3 class="font-bold text-primary text-3xl font-sans lg:text-4xl mb-2">{{ $t('wirefee_rebate_page.wire_funds_in_fees_on_us')  }}</h3>
                    <p class="text-secondary text-2xl">{{ $t('wirefee_rebate_page.wire_funds_now_and_start_trading_right_away')  }}</p>
                </div>
            </div>
        </div> 
        <div class="container mx-auto px-6 mt-6 text-left text-[#4d6582] sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5">
                <div class="text-lg">
                    <p class="mb-2">
                        {{ $t('wirefee_rebate_page.wire_transfers_are_the_fastest_and_most_secure_method')  }}
                    </p>
                    <p class="mb-6">
                        {{ $t('wirefee_rebate_page.once_the_wire_transfer_funds_arrive_in_your_firstrade_account')  }}
                    </p>
                </div>
                <div class="mb-6">
                    <div class="text-2xl font-sans text-primary font-bold mb-3">
                        <h3>{{ $t('wirefee_rebate_page.how_to_get_a_wire_fee_rebate')  }}</h3>
                    </div>
                    <div>
                        <ul>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">1</span>{{ $t('wirefee_rebate_page.login_to_your_firstrade_account')  }}</li>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">2</span>{{ $t('wirefee_rebate_page.click_on_service')  }}</li>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">3</span>{{ $t('wirefee_rebate_page.On_the_page_select_your_qualifying')  }}</li>
                        </ul>
                    </div>
                </div>
                <div class="border"></div>
            </div>
            <div class="container mx-auto px-3 mt-6 text-left text-[#4d6582] sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5">
                <div>
                    <p class="mb-4">{{ $t('wirefee_rebate_page.to_be_eligible_for_this_promotion_the_minimum_amount')  }}</p>
                    <p  class="mb-6">{{ $t('wirefee_rebate_page.these_terms_will_take_effect_on')  }}</p>
                </div>
            </div> 
    </div>
</template>
<script>
export default {
    data() {
        return{
            wireFund: {
                    title:"Wire funds in, fees on us",
                    subtitle:"Wire funds now and start trading right away.",
                    imageUrl:"/images/img_wirefee.webp"
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