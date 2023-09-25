<template>
    <div  @click="toggleFunction" class="bg-[#f3f9ff] py-20 border-b-[1px]">
        <div
            class="container px-3 flex items-center gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
            <div class="flex gap-4 justify-between w-full items-center ">
                <div class="text-primary text-5xl font-sans font-bold w-2/5">
                    <h2>{{$t("pricing_page.simple_pricing")}}</h2>
                </div>
                <div class="flex gap-4 justify-between w-3/5">
                    <div class="shadow-lg w-[335px] h-[210px] flex-col items-center justify-center rounded-md bg-white">
                        <div class="heading bg-primary rounded-t-md text-white py-3 ">
                            <h5 class="text-lg font-bold">{{$t("pricing_page.stocks_ETFs_Mutual_Funds")}}</h5>
                        </div>
                        <div class="tradeBody flex items-center justify-start pl-8 -mt-8  ">
                            <h5 class="text-primary font-bold text-4xl mr-4">$</h5>
                            <h2 class="text-[150px] font-bold text-primary mr-4">0</h2>
                            <p class="text-primary text-xl font-sans font-bold">{{$t("pricing_page.per_trade")}}</p>
                        </div>
                    </div>
                    <div class="shadow-lg w-[335px] h-[210px] flex-col items-center justify-center rounded-md bg-white">
                        <div class="heading bg-warning rounded-t-md text-white py-3">
                            <h5 class="text-lg font-bold">{{$t("pricing_page.options")}}</h5>
                        </div>
                        <div class="tradeBody flex items-center justify-start pl-8 -mt-8 ">
                            <h5 class="text-primary font-bold text-4xl mr-4">$</h5>
                            <h2 class="text-[150px] font-bold text-primary mr-4">0</h2>
                            <div class="flex flex-col justify-start items-start">
                                <p class="text-primary text-xl font-sans font-bold ">{{$t("pricing_page.per_trade")}}</p>
                                <p class="text-primary text-xl font-sans font-bold">{{$t("pricing_page.per_contract")}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white ">
        <div>
            <el-tabs v-model="activeName" class="my-tabs container mx-auto">
                <el-tab-pane  :label="$t('pricing_page.pricing')" name="first">
                    <div class="bg-white py-11 font-sans text-secondary text-left">
                        <div class="container grid grid-cols-12 xl:gap-x-16">
                            <div class="col-span-12 grid grid-cols-1 gap-8 xl:col-span-9">
                                <div>
                                    <h2 class="font-sans text-primary font-bold border-grayish-blue border-b-[3px] pb-4 text-2xl xl:text-3xl"> {{$t("pricing_page.pricing")}}</h2>
                                    <div class="grid-rows-14 mb-4 grid grid-cols-12">
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                           {{$t("pricing_page.stocks")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                           {{$t("pricing_page.commission")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                            {{$t("pricing_page.efts")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                           {{$t("pricing_page.commission")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg">{{$t("pricing_page.options")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                           {{$t("pricing_page.commission")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            {{$t("pricing_page.contract_fee")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                        </div>
                                        <div class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.exercise_and_assignment_fees")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg">{{$t("pricing_page.mutual_funds")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            {{$t("pricing_page.load_funds")}}</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.free")}}</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base"> {{$t("pricing_page.no_load_funds")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.free")}}</div>
                                        <div 
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                        </div>
                                        <div class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.no_transaction_fee")}}</div>
                                        <div class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.free")}}
                                        </div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"> {{$t("fixed_income_page.fixed_income")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            {{$t("pricing_page.treasury_bills_notes")}}
                                            </div>
                                        <div class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">{{$t("pricing_page.net_yield_basis")}} </div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.municipal_bonds")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.net_yield_basis")}}</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.agency_bonds")}}
                                            </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.net_yield_basis")}}</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.zeros_strips")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            {{$t("pricing_page.net_yield_basis")}}</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.primary_market_CDs")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            $30</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">{{$t("pricing_page.secondary_market_CDs")}}
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">{{$t("pricing_page.net_yield_basis")}}
                                            </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  col-span-12 text-sm">{{$t("pricing_page.net_yield_basis_means_firstrade_acts_as_principal_whereby_the_bonds")}}
                                        </div>
                                    </div>
                                </div>                               
                                <div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">{{$t("pricing_page.fees_of_broker_assisted_orders")}}</div>
                                    <div class="text-dark-grayish-blue text-xs pb-2" v-html="$t('pricing_page.please_read_the_characteristics_and_risks_of_standardized_option')"></div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">{{$t("pricing_page.a_short_term_redemption_fee_description")}}</div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">{{$t("pricing_page.certain_regulators_impose_transaction_fees_to_cove")}}</div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold">{{ $t("pricing_page.short_borrow_fee") }}</div>
                                        <div class="text-dark-grayish-blue text-xs pb-2">{{ $t("pricing_page.short_Borrow_Fee_may_be_assessed_on_any_day_from_the_settlement") }}</div>
                                    </div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold">{{ $t("pricing_page.sec_fee") }}</div>
                                        <div class="text-dark-grayish-blue text-xs pb-2" v-html="$t('pricing_page.under_section_31_of_the_Securities')"></div>
                                    </div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">{{ $t("pricing_page.SEC_fee_rate") }}</div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold"><a
                                                aria-label="Options Regulatory Fee (ORF)"
                                                href="https://help.en-us.firstrade.com/article/134-does-firstrade-pass-regulatory-transaction-fees-to-its-customers"
                                                rel="noopener noreferrer" target="_blank" class="text-blue-500">{{ $t("pricing_page.options_regulatory_fee") }}</a></div>
                                        <div class="text-dark-grayish-blue text-xs pb-2">{{ $t("pricing_page.this_fee_is_a_customer_pass_through_exchange_fee_for_all_options_trades") }}</div>
                                    </div>
                                    <div class="text-dark-grayish-blue text-xs pb-6">{{ $t("pricing_page.As_of_september_the_aggregate_rate") }}</div>
                                </div>
                            </div>
                            <div class=" col-span-12 xl:col-span-3 xl:block">
                                <div class="flex w-full flex-col gap-5">
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">{{ $t('pricing_page.the_firstrade_difference') }}</div>
                                        <ul class="mb-4 list-inside list-disc text-base">
                                            <li>{{ $t('pricing_page.straightforward_pricing') }}</li>
                                            <li>{{ $t('pricing_page.mobile_apps') }}</li>
                                            <li>{{ $t('pricing_page.comprehensive_research') }}</li>
                                        </ul><a class="font-bold text-[#0066cc] hover:text-primary" href="/trading/pricing/broker-comparison">{{ $t('pricing_page.how_we_compare_to_others') }}</a>
                                    </div>
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">{{ $t('pricing_page.need_help') }}</div>
                                        <div class="flex flex-col gap-4">
                                            <div class="flex flex-row items-center gap-6">                                                
                                                <div>
                                                    <img class="w-10" src="/images/icon_help.svg" alt="">
                                                </div>
                                                <a href="https://help.en-US.firstrade.com" target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-[#0066cc] cursor-pointer font-bold">{{ $t('pricing_page.help_center') }}</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_email.svg" alt="">
                                                </div>
                                                <a class="font-bold  text-[#0066cc] hover:text-primary" href="/support/contact/email">{{ $t('pricing_page.email_us') }}</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_phone.svg" alt="">
                                                </div>
                                                <div><a aria-label="1.800.869.8800 " class="font-bold text-[#0066cc] hover:text-primary"
                                                        href="tel:+18008698800">{{ $t('pricing_page.call') }}</a>
                                                    <div class="text-sm"> {{ $t('pricing_page.m_f') }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('pricing_page.margin_rates')" name="second">
                    <div class="bg-white py-11 text-left">
                        <div class="container grid grid-cols-12 gap-y-8 xl:gap-x-16">
                            <div class="col-span-12 grid grid-cols-1 gap-y-8 xl:col-span-9">
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">{{ $t('pricing_page.margin_rates') }}</h2>
                                    <div class="text-secondary mb-5 text-lg">{{ $t('pricing_page.firstrade_margin_rates_are_among_the_lowest') }}</div>
                                    <div>
                                        <div class="grid-rows-8 grid grid-cols-12">
                                            <div
                                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-4">{{ $t('pricing_page.dollar_range') }}
                                                </div>
                                            <div class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-5">{{ $t('pricing_page.below_base_rate') }}</div>
                                            <div
                                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">{{ $t('pricing_page.effective_rate') }}
                                               </div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $1,000,000 +</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                - 2.25%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                9.75%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $500,000 - $999,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                - 1.65%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                10.35%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $250,000 - $499,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                + 0.25%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                12.25%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $100,000 - $249,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                + 0.50%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                12.50%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $50,000 - $99,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                + 1.00%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                13.00%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $25,000 - $49,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                + 1.50%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                13.50%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                                $0 - $24,999</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                                + 1.75%</div>
                                            <div
                                                class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                                13.75%</div>
                                        </div>
                                        <div class="text-xs text-[#4d6582] my-4">{{ $t('pricing_page.the_current_base_rate_is') }}</div>
                                        <div class="text-xs  text-[#4d6582] my-4">{{ $t('pricing_page.when_setting_base_rates_firstrade') }}</div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">{{ $t('pricing_page.credit_interest') }}</h2>
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-9">
                                            {{ $t('pricing_page.cash_balance') }}</div>
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                            {{ $t('pricing_page.rate') }}</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $0 - $24,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $25,000 - $99,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $100,000 - $499,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $500,000 - $999,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $1,000,000 +</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                    </div>
                                    <div class="text-xs text-secondary my-4">{{ $t('pricing_page.we_reserve_the_right_to_amend_our_credit') }}</div>
                                </div>
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">{{ $t('pricing_page.FDIC_insured_deposit_rates') }}</h2>
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-9">
                                            {{ $t('pricing_page.cash_balance') }}</div>
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                            {{ $t('pricing_page.rate') }}</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $0 - $24,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $25,000 - $99,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $100,000 - $499,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $500,000 - $999,999</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-9">
                                            $1,000,000 +</div>
                                        <div
                                            class="text-base text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                            0.45%</div>
                                    </div>
                                    <div class="text-xs text-secondary my-4">{{ $t('pricing_page.insured_deposit_rates_will_be_based_on_numerous_factors') }}<span
                                            class="text-xs text-dark-grayish-blue my-4">05/10/2023</span>. Please review <a
                                            aria-label="FDIC Sweep Program Terms &amp; Conditions" rel="noopener noreferrer"
                                            target="_blank" class="text-primary"
                                            href="https://www.firstrade.com/forms/en-us/fdic_sweep_program.pdf?v=20230510">FDIC
                                            Sweep Program Terms &amp; Conditions</a><br><br></div>
                                </div>
                            </div>
                            <div class=" col-span-12 xl:col-span-3 xl:block">
                                <div class="flex w-full flex-col gap-5">
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">{{ $t('pricing_page.the_firstrade_difference') }}</div>
                                        <ul class="mb-4 list-inside list-disc text-base">
                                            <li>{{ $t('pricing_page.straightforward_pricing') }}</li>
                                            <li>{{ $t('pricing_page.mobile_apps') }}</li>
                                            <li>{{ $t('pricing_page.comprehensive_research') }}</li>
                                        </ul><a class="font-bold text-[#0066cc] hover:text-primary" href="/trading/pricing/broker-comparison">{{ $t('pricing_page.how_we_compare_to_others') }}</a>
                                    </div>
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">{{ $t('pricing_page.need_help') }}</div>
                                        <div class="flex flex-col gap-4">
                                            <div class="flex flex-row items-center gap-6">                                                
                                                <div>
                                                    <img class="w-10" src="/images/icon_help.svg" alt="">
                                                </div>
                                                <a href="https://help.en-US.firstrade.com" target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-[#0066cc] cursor-pointer font-bold">{{ $t('pricing_page.help_center') }}</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_email.svg" alt="">
                                                </div>
                                                <a class="font-bold  text-[#0066cc] hover:text-primary" href="/support/contact/email">{{ $t('pricing_page.email_us') }}</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_phone.svg" alt="">
                                                </div>
                                                <div><a aria-label="1.800.869.8800 " class="font-bold text-[#0066cc] hover:text-primary"
                                                        href="tel:+18008698800">{{ $t('pricing_page.call') }}</a>
                                                    <div class="text-sm"> {{ $t('pricing_page.m_f') }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('pricing_page.special_services')" name="third">
                    <div class="bg-white py-11 text-left">
                        <div class="container">
                            <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">{{ $t('pricing_page.special_services') }}</h2>
                            <div class="mb-8 grid grid-cols-12 gap-y-6 xl:gap-x-12 xl:gap-y-12">
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-5">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            {{ $t('pricing_page.account_maintenance') }}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            {{ $t('pricing_page.electronic_statements') }} </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{ $t('pricing_page.electronic_trade_confirms') }}
                                           </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{ $t('pricing_page.electronic_prospectus') }}</div>
                                        <div class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">$0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{ $t('pricing_page.electronic_tax_documents') }}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-5">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">{{ $t('pricing_page.investing') }}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            {{ $t('pricing_page.real_time_quotes') }}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            {{$t("pricing_page.free")}}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            {{ $t('pricing_page.streaming_quotes') }}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            {{$t("pricing_page.free")}}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{ $t('pricing_page.dividend_reinvestment_plan') }}
                                           </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            {{$t("pricing_page.free")}}</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{ $t('pricing_page.periodic_investment_plan') }}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            {{$t("pricing_page.free")}}</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12"> {{$t("pricing_page.banking")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9"> {{$t("pricing_page.ach_electronic_transfer")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.regular_check_delivery")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.outgoing_wire_transfers_domestic")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.outgoing_wire_transfers_foreign")}}
                                           </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.overnight_check_fee_continental_us_account_only")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $50</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">{{$t("pricing_page.transfer")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.internal_asset_transfers")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.third_party_distribution_notification")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $20</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.dtc_delivery_per_security")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $50</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.acat_transfer_out")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.partial_acat_transfer_out")}}
                                           </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $55</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-4">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">{{$t("pricing_page.retirement")}}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.retirement_ira_annual_fee_account_set_up_fee")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.roth_conversion_recharacterization")}}
                                            </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.ira_termination_fee")}}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-4">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">{{$t("pricing_page.settlement")}}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.foreign_security_transfer_fee")}}
                                           </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.foreign_free_receives_delivers")}}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.adrs_custody_fee")}}
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0.01~0.05/share(1)</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-3">
                                        <div class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                           {{$t("pricing_page.margin")}}
                                        </div>
                                        <div class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.mailgrams_NYSE_extensions")}}
                                        
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">{{$t("pricing_page.sould_out_buy_in_notices")}}
                                        
                                        </div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8"><a rel="noopener noreferrer" target="_blank" class="text-blue-500"
                                    href="https://www.firstrade.com/forms/en-us/exception_fees.pdf?v=20210603">{{$t("pricing_page.view_our_full_list_of_exception_fees")}}</a></div>
                            <div class="text-secondary mb-8 text-xs">{{$t("pricing_page.ADR_agents_that_sponsor_american_depositary")}}</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="$t('pricing_page.broker_comparison')" name="fourth">
                    <div class="bg-white py-11 text-secondary text-left">
                        <div class="container">
                            <h2 class="mb-5 font-sans font-bold text-2xl text-primary xl:text-3xl">{{$t("pricing_page.broker_comparison")}}</h2>
                            <div class="mb-8 text-lg text-secondary">{{$t("pricing_page.see_how_firstrade_compares")}}
                            </div>
                            <div class="my-12">
                                <div class="font-sans text-secondary mb-4 text-center text-xl font-semibold lg:text-2xl">{{$t("pricing_page.unbeatable_savings_on_options_contracts")}}
                                </div>
                                <div class="overflow-x-auto pb-4">
                                    <div class="grid-rows-7 grid w-[1100px] xl:w-[1248px] grid-cols-12">
                                        <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 pl-1 sm:pl-2.5">{{$t("pricing_page.broker")}}
                                            </div>
                                        <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">{{$t("pricing_page.per_contract")}}
                                            </div>
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">
                                            10</div>
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">
                                            100</div>
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">
                                            300</div>
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">
                                            500</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity pl-1 sm:pl-2.5">{{$t("pricing_page.firstrade")}}
                                        </div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity">
                                            $0</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity">
                                            $0</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity">
                                            $0</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity">
                                            $0</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity">
                                            $0</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.td_ameritrade")}}
                                        </div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $0.65</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $6.50</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $65.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $195.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $325.00</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5"> {{$t("pricing_page.e_trade")}}
                                        </div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $0.65</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $6.50</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $65.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $195.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $325.00</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.charles_schwab")}}</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $0.65</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $6.50</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $65.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $195.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $325.00</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.fidelity")}}
                                        </div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $0.65</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $6.50</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $65.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $195.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $325.00</div>
                                        <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.merill_edge")}}</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $0.65</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $6.50</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $65.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $195.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate">
                                            $325.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12">
                                <div class="font-sans text-secondary mb-4 text-center text-xl font-semibold lg:text-2xl">
                                   {{$t("pricing_page.commissions_for_more_investment_products")}}</div>
                                <div>
                                    <div class="overflow-x-auto pb-4">
                                        <div class="grid w-[1100px] xl:w-[1248px] grid-cols-12 grid-rows-6">
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 flex items-center pl-1 sm:pl-2.5">
                                               {{$t("pricing_page.commission")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center !border-b-[3px]">
                                                {{$t("pricing_page.firstrade")}}</div>
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                                {{$t("pricing_page.td_ameritrade")}}</div>
                                            <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center"> {{$t("pricing_page.e_trade")}}</div>
                                            <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">{{$t("pricing_page.charles_schwab")}}
                                            </div>
                                            <div class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">{{$t("pricing_page.fidelity")}}
                                            </div>
                                            <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.online_stock_orders")}}
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.online_option_orders")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/{{$t("pricing_page.contract")}}</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.online_mutual_fund_trades")}}
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $49.99</div>
                                            <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">{{$t("pricing_page.based_on_prospectus")}} / $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                Up to $74.95</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $49.95</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.broker_assisted_stock_and_options_trades")}}
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center flex flex-col">
                                                <div class="text-liberty text-lg font-bold">$19.95</div>
                                                <div class="text-liberty text-base font-bold">(+$0.50/{{$t("pricing_page.contract")}})</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$32.95</div>
                                                <div class="text-base">(+$0.65/{{$t("pricing_page.contract")}})</div>
                                            </div>
                                            <div class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">{{$t("pricing_page.minimum_initial_deposit")}}
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0</div>
                                        </div>
                                    </div>
                                    <div class="text-[#96a1b1] text-xs text-left">{{$t("pricing_page.pricing_for_competitors_were_obtained_from")}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            activeName: ref('first')
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