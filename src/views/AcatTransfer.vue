<template>
    <div  @click="toggleFunction">
        <div class="">
            <!-- hero Part start Here -->
            <div class="bg-[url('/images/freeacat_hero1.png')] bg-cover bg-center">
                <div class="container mx-auto flex flex-col items-center py-8 xl:flex-row xl:py-24">
                    <div class="mb-6 flex flex-col xl:w-1/2 px-6">
                        <h1 class="text-center font-futura text-3xl font-bold text-warning lg:text-4xl xl:text-left xl:text-5xl">{{ $t('acat_transfer_page.switch_to_firstrade') }}</h1>
                        <div class="px-6 text-center text-base text-white md:px-0 xl:w-3/4 xl:text-left xl:text-xl">{{ $t('acat_transfer_page.it_only_takes_a_minute_to_consolidate_your') }}</div>
                    </div>
                    <div class="flex w-full flex-col items-center px-4 xl:w-1/2 xl:items-end">
                        <div class="w-full rounded bg-white px-6 py-8 xl:p-10 text-left">
                            <form autocomplete="off">
                                <div class="mb-8 ">
                                    <div class="flex flex-col "><label class="relative flex"><input type="text"
                                                placeholder=" " spellcheck="false" maxlength="50"
                                                id="headlessui-combobox-input-:r1n:" role="combobox" aria-expanded="false"
                                                aria-autocomplete="list" data-headlessui-state=""
                                                class="peer mt-4 w-full border-b border-transparent bg-transparent py-1 text-black/90 focus:outline-none disabled:text-black/40"
                                                value=""><span
                                                class="pointer-events-none absolute inset-0 top-auto border-b peer-disabled:border-dotted motion-safe:transition-colors border-black/40 peer-hover:peer-enabled:border-b-2 peer-hover:peer-enabled:border-black/90"></span><span
                                                class="pointer-events-none absolute inset-0 top-auto scale-x-0 border-b-2 peer-focus:scale-x-100 motion-safe:transition-transform border-blue-500"></span><span
                                                class="pointer-events-none absolute -right-1/3 left-0 top-0 origin-top-left -translate-y-px scale-75 truncate peer-placeholder-shown:right-0 peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-focus:-right-1/3 peer-focus:-translate-y-px peer-focus:scale-75 motion-safe:transition-all text-black/60 peer-focus:text-blue-500 peer-disabled:text-black/40">{{ $t('acat_transfer_page.enter_the_brokerage_firm_you_want_to_transfer_from') }}</span></label></div>
                                </div>
                                <div class="mb-8">
                                    <div class="flex flex-col"><label class="relative flex"><input type="text"
                                                placeholder=" " name="account" spellcheck="false" maxlength="32"
                                                class="peer mt-4 w-full border-b border-transparent bg-transparent py-1 text-black/90 focus:outline-none disabled:text-black/40"
                                                value=""><span
                                                class="pointer-events-none absolute inset-0 top-auto border-b peer-disabled:border-dotted motion-safe:transition-colors border-black/40 peer-hover:peer-enabled:border-b-2 peer-hover:peer-enabled:border-black/90"></span><span
                                                class="pointer-events-none absolute inset-0 top-auto scale-x-0 border-b-2 peer-focus:scale-x-100 motion-safe:transition-transform border-blue-500"></span><span
                                                class="pointer-events-none absolute -right-1/3 left-0 top-0 origin-top-left -translate-y-px scale-75 truncate peer-placeholder-shown:right-0 peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-focus:-right-1/3 peer-focus:-translate-y-px peer-focus:scale-75 motion-safe:transition-all text-black/60 peer-focus:text-blue-500 peer-disabled:text-black/40">{{ $t('acat_transfer_page.enter_the_account_number_from_the_above_broker') }}</span></label></div>
                                </div>
                                <div><button
                                        class="flex w-full items-center justify-center rounded bg-warning  py-2 text-base text-white"
                                        type="submit">{{ $t('button.transfer_now') }}</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Hero Part End -->
            <div class=" container max-w-7xl mx-auto">
                <!-- Enjoy The Simplicity start -->
                <div class="py-8 xl:py-16 px-6">
                    <div class="flex flex-col items-center gap-8">
                        <div class="text-center font-sans text-2xl text-primary">{{ $t('acat_transfer_page.enjoy_the_simplicity_of_consolidating') }}</div>
                        <div class="text-center text-base text-secondary">{{ $t('acat_transfer_page.take_advantage_of_the_benefits_of_consolidating_your_investment') }}</div>
                        <div>

                            <div class="w-[400px]">
                                <img w-full src="/images/transferrebatepill.42dd510a.svg" alt="">
                            </div>
                            <div class="text-center mt-3 text-primary"><a
                                    href="/accounts/acat-transfer#acat-disclaimer">{{ $t('acat_transfer_page.eligible_for_full_and_partial_transfer') }}</a></div>
                        </div>
                    </div>
                </div>
                <!-- Enjoy the Simplicity part End -->
                <!-- YOU CAN ALWAYS ENJOY part Start -->
                <div class=" px-6">
                    <div class="border-b-2 border-t-2 py-10">
                        <div class="font-sans text-[#a6b2c0] mb-2.5 text-center text-base lg:text-lg xl:mb-5 xl:text-xl">
                            {{ $t('acat_transfer_page.with_firstrade_you_can_always_enjoy') }}</div>
                        <div class="font-sans text-primary mb-5 text-center text-2xl font-bold lg:text-3xl xl:text-4xl">
                            {{ $t('acat_transfer_page.free_trades_no_hidden_fees') }}</div>
                        <div>
                            <div class="overflow-x-auto pb-4">
                                <div class="grid w-[1100px] xl:w-[1248px] grid-cols-12 grid-rows-6">
                                    <div
                                        class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 flex items-center pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.commission")}}</div>
                                    <div class=" border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-[#1069c9]  bg-primaryLight text-center justify-center !border-b-[3px]">
                                        {{$t("pricing_page.firstrade")}}</div>
                                    <div
                                        class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                        {{$t("pricing_page.td_ameritrade")}}</div>
                                    <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                        {{$t("pricing_page.e_trade")}}</div>
                                    <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                        {{$t("pricing_page.charles_schwab")}}</div>
                                    <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                        {{$t("pricing_page.fidelity")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.online_stock_orders")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-[#1069c9]  bg-primaryLight text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.online_option_orders")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-[#1069c9]  bg-primaryLight text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                    <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.online_mutual_fund_trades")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-[#1069c9]  bg-primaryLight text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $49.99</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        {{$t("pricing_page.based_on_prospectus")}} / $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        Up to $74.95</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $49.95</div>
                                    <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.broker_assisted_stock_and_options_trades")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-[#1069c9]  bg-primaryLight text-center justify-center flex-col">
                                        <div class="text-[#1069c9]  text-lg font-bold">$19.95</div>
                                        <div class="text-[#1069c9]  text-base font-bold">(+$0.50/{{$t("pricing_page.contract")}})</div>
                                    </div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center flex-col">
                                        <div class="text-base">$25</div>
                                        <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                    </div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2  items-center text-base text-[#4d6582] text-center justify-center flex flex-col">
                                        <div class="text-base">$25</div>
                                        <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                    </div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 items-center text-base text-[#4d6582] text-center justify-center flex flex-col">
                                        <div class="text-base">$25</div>
                                        <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                    </div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 items-center text-base text-[#4d6582] text-center justify-center flex flex-col">
                                        <div class="text-base">$32.95</div>
                                        <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                    </div>
                                    <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] pl-1 sm:pl-2.5">
                                        {{$t("pricing_page.minimum_initial_deposit")}}</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2  font-bold text-lg text-[#1069c9]  bg-primaryLight text-center flex items-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                    <div
                                        class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-[#4d6582] text-center justify-center">
                                        $0</div>
                                </div>
                            </div>
                            <div class="text-[#96a1b1] text-xs text-left">{{$t("pricing_page.pricing_for_competitors_were_obtained_from")}}</div>
                        </div>
                    </div>
                </div>

                <!-- YOU CAN ALWAYS ENJOY part End -->
                <!-- Transfer FAQs start -->
                <div class="text-primary font-[800] font-sans">
                    <h2 class="text-4xl">{{ $t('acat_transfer_page.transfer_faqs') }}</h2>
                </div>
                <div class="transition border-b-[1px] px-6" v-for="(accordion, index) in transferFAQs.accordions"
                    :key="index">
                    <!-- header -->
                    <div @click="accordion.isOpen = !accordion.isOpen"
                        class="accordion-header cursor-pointer transition flex justify-between text-md lg:text-lg space-x-5 items-center h-16 text-[#4d6582]">
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
                    <div class=" pt-0  text-left pb-5 text-[#4d6582]" v-show="true == accordion.isOpen">
                        <p class="leading-6 font-light  " v-html=" $t(accordion.content)">
                        </p>
                    </div>
                </div>
                <!-- Transfer FAQs End -->
            </div>
        </div>

        <!-- Account Transfer Fee Rebate section start -->
        <section class="px-6">
            <div class="container pb-16  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class=" text-left">
                    <h4 class="text-[#4d6582] text-lg font-bold  py-6">{{ $t('acat_transfer_page.account_transfer_fee_rebate') }}</h4>
                    <p class="text-[#4d6582] text-sm" v-html="$t('acat_transfer_page.firstrade_will_rebate_the_account_transfer')"></p>
                    <p class="text-[#4d6582] text-sm mt-6"  v-html="$t('acat_transfer_page.firstrade_reserves_the_right_at_its_sole_discretion')"></p>
                </div>
            </div>
        </section>
        <!-- Account Transfer Fee Rebate winning section End -->
    </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
    data() {
        return {
            transferFAQs: {
                title: "Transfer FAQs",
                description: "",
                activeIndex: ref(0),
                accordions: reactive([
                    {
                        heading: "acat_transfer_page.what_should_i_do_before_transferring_my_account_to_firstrade",
                        content: "acat_transfer_page.you_must_have_an_existing_account",
                        isOpen: false,
                    },
                    {
                        heading: "acat_transfer_page.during_the_transfer_period_what_should_I_pay_attention_to",
                        content: "acat_transfer_page.the_process_of_switching_brokerage_accounts_normally",
                        isOpen: false,
                    },
                    {
                        heading: "acat_transfer_page.do_I_need_to_pay_any_fees_to_transfer_my_account",
                        content: "acat_transfer_page.firstrade_does_not_charge_any_fees_for_incoming_transfer",
                        isOpen: false,
                    },
                    {
                        heading: "acat_transfer_page.if_my_existing_brokerage_firm",
                        content: "acat_transfer_page.automated_customer_account_transfer_service",
                        isOpen: false,
                    },
                    {
                        heading: "acat_transfer_page.can_i_transfer_otc_listed_penny_stocks_to_firstrade",
                        content: "acat_transfer_page.firstrade_does_not_accept_transferring_in_of",
                        isOpen: false,
                    },
                ])

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