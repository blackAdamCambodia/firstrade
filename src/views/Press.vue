<template>
    <div @click="toggleFunction" class="  border-b-[1px]">
        <div class="bg-[#f3f9ff] pt-4 ">
            <div class="container mx-auto max-w-3xl">
                <div class="flex justify-between text-[#4d6582]   ">
                    <button class="border-b-2 border-b-transparent pb-2 ">
                        <router-link to="/about">{{ $t('footer.about') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/history">{{ $t('footer.history') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/corporate-responsibility">{{ $t('footer.corporate_responsibility') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-[#4d6582] pb-2">
                        <router-link to="/press">{{ $t('footer.press') }}</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <section aria-labelledby="press-center-title" class="PressCenter_container__Btg66">
                <div class="PressCenter_wrapper__C_Hy6">
                    <h1 id="press-center-title" class="PressCenter_header__9eve4 ">{{ $t('press.press_center') }}</h1>
                    <div class="PressCenter_blogs__q2bdp">
                        <div class="PressCenter_blogWrapper__u2BcV">
                            <div class="PressCenter_blogHeader__g90iH">
                                <div>
                                    <img src="/images/press_logos_benzinga_1d1085bbc1.webp" alt="">
                                </div>
                            </div>
                            <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">October 19, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ PressCenter_noSubtitle___0JRM">{{ $t('press.firstrade_donates_pallets_of_bottled') }}</h2>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.hurricane_ian_made_landfall_into_west') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr20221019">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[82px]" src="/images/press_logos_cryptoslate_7b2885466f.png" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">July 20, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ PressCenter_noSubtitle___0JRM">{{ $t('press.tezos_the_graph_algo_crv') }}</h2>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.online_investment_brokerage_Firstrade_Securities') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220720">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[80px]" src="/images/press_logos_firstrade_ba8d65bff8.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">May 03, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ null">{{ $t('press.firstrade_crypto_is_now_live_nationwide') }}</h2>
                            <p class="m-0 PressCenter_blogContentSubtitle__bLP8m">{{ $t('press.first_major_traditional_online_brokerage_to_offer_crypto_trading') }}</p>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.firstrade_securities_a_leading_commission_free_online_brokerage') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220502">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[80px]" src="/images/press_logos_fox_ebda270ee1.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">May 03, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ null">{{ $t('press.firstrade_first_to_offer_individual_crypto') }}</h2>
                            <p class="m-0 PressCenter_blogContentSubtitle__bLP8m">{{ $t('press.firstrade_will_be_the_first_of_the_major_institutional_online_brokerages') }}</p>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs mt-2">{{ $t('press.leading_online_brokerage_firm_is_diving_head_first') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/fox-20220503">{{$t('link.read_full_article')}}</a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[80px]" src="/images/press_logos_bloomberg_f7c6f405e3.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">May 03, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ PressCenter_noSubtitle___0JRM">{{ $t('press.firstrade_crypto_live_nationwide') }}</h2>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.Firstrade_Securities_a_leading_commission_free_online') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220503_2">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[80px]" src="/images/press_logos_bloomberg_f7c6f405e3.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">April 11, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ PressCenter_noSubtitle___0JRM">{{ $t('press.firstrade_adds_crypto_trading') }}</h2>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.firstrade_securities_inc_a_leading_commission_free') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220503_2">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img class="h-[80px]" src="/images/press_logos_firstrade_ba8d65bff8.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">April 11, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ null">{{ $t('press.firstrade_adds_crypto_trading_US') }}</h2>
                            <p class="m-0 PressCenter_blogContentSubtitle__bLP8m">{{ $t('press.first_traditional_online_brokerage_to_offer_crypto_trading_in_the') }}</p>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.firstrade_securities_Inc_a_leading_commission_free_online_brokerage') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220411_1">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                    <div class="PressCenter_blogWrapper__u2BcV">
                        <div class="PressCenter_blogHeader__g90iH">
                            <div>
                                <img src="/images/press_logos_benzinga_1d1085bbc1.webp" alt="">
                            </div>
                        </div>
                        <div class="PressCenter_blogContent__wEUlB">
                            <p class="m-0 PressCenter_blogContentDate__2Uff8">April 05, 2022</p>
                            <h2 class="font-sans PressCenter_blogContentTitle__f0bV_ PressCenter_noSubtitle___0JRM">{{ $t('press.firstrade_adds_crypto_trading_in_the_US') }}</h2>
                            <p class="m-0 PressCenter_blogContentArticle__INlbs">{{ $t('press.firstrade_securities_announced_the_addition_of') }}</p>
                            <div class="PressCenter_goToDetailLink__kji_S"><a href="/press/pr220405">{{$t('link.read_full_article')}}
                                   </a></div>
                        </div>
                    </div>
                </div>
                    
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    data() {
        return {

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
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 75px 20px 114px;
}
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 .PressCenter_header__9eve4 {
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    letter-spacing: 0;
    color: #03468e;
    font-family: sans-serif;
    margin-bottom: 45px;
    font-weight: bold;
}
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 .PressCenter_blogs__q2bdp {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-bottom: 80px;
}
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 .PressCenter_blogs__q2bdp .PressCenter_blogWrapper__u2BcV {
    min-width: 468px;
    min-height: 384px;
    border: 1px solid #d3dce6;
    border-radius: 8px;
}
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 .PressCenter_blogs__q2bdp .PressCenter_blogWrapper__u2BcV .PressCenter_blogHeader__g90iH {
    height: 83px;
    width: 100%;
    border-bottom: 1px solid #d3dce6;
    display: flex;
    justify-content: center;
}
.PressCenter_container__Btg66 .PressCenter_wrapper__C_Hy6 .PressCenter_blogs__q2bdp .PressCenter_blogWrapper__u2BcV .PressCenter_blogContentDate__2Uff8 {
    font-size: 16px;
    line-height: 24px;
    color: #96a1b1;
    margin-bottom: 1rem;
}
.PressCenter_blogContent__wEUlB {
    text-align: left;
    padding: 40px;
    color: #4d6582;
}

.PressCenter_blogContentDate__2Uff8 {
    margin-bottom: 10px;
}

h2.PressCenter_blogContentTitle__f0bV_.PressCenter_noSubtitle___0JRM,
h2.PressCenter_blogContentTitle__f0bV_.null {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
}
.PressCenter_goToDetailLink__kji_S {
    margin-top:15px;
}
.PressCenter_goToDetailLink__kji_S a {
    font-size: 14px;
    font-weight: 800;
    color: #06c;
    font-family: sans-serif;
}
</style>