<template>
    <div >
        <header class="globals relative isolate z-10 bg-ft-blue">
            <nav class="container px-3 flex items-center justify-between py-3 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-4 mx-auto"
                aria-label="Global">
                <div class="flex items-center lg:gap-x-12 ">
                    <router-link class="-mx-1.5 -my-0.5 p-1.5 text-white " aria-label="家" to="/">
                        <img class="w-[210px]" src="/images/ftlogo-white.4a462454.svg" alt="">

                    </router-link>
                    <div class="hidden lg:flex lg:gap-x-12">
                        <div class="relative" data-headlessui-state="">
                            <button @click='toggleMenu(1)'
                                class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white"
                                type="button" aria-expanded="false" data-headlessui-state=""
                                id="headlessui-popover-button-:R9il6:">
                                {{ $t("trading") }}
                            </button>
                            <div v-show="toggle === 1"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-2xl opacity-100 translate-y-0"
                                id="hideSubmenu" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-3 gap-x-6 text-left">
                                        <div>
                                            <div class="text-[#4d6582] text-[13px]  uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.product") }}</div>
                                            <div class="mt-4 flow-root ">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize  ">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading">{{ $t("topMenu.overview") }}</router-link>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading/stocks">{{ $t("topMenu.stocks") }}</router-link>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading/fixed-income">{{ $t("topMenu.fixed_income") }}</router-link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div class="text-[#4d6582] text-[13px] uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.services") }}
                                            </div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/pricing">{{ $t("topMenu.pricing") }}</a>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/margin-loans">{{ $t("topMenu.margin_loans") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/cash-management">{{ $t("topMenu.cash_management") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/extended-hours">{{ $t("topMenu.extended_hours") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/dividend-reinvestment">{{ $t("topMenu.dividend_reinvestment") }}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="-m-4 grid grid-cols-1 rounded-r-lg bg-primaryLight p-4">
                                            <div
                                                class="relative isolate mb-8 flex max-w-2xl flex-col items-center justify-center">
                                                <span
                                                    style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                                    <span
                                                        style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                                        <img alt="" aria-hidden="true" src="/images/why_pricing.webp"
                                                            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="text-md text-left mb-5 leading-6 text-secondary w-full">
                                                {{ $t("hompage.commission_trades") }}<br>{{ $t("hompage.options_contract_fees") }}</div>
                                            <div class="flex w-full items-start justify-start"><a
                                                    class="text-blue-500 hover:text-primary"
                                                    href="/trading/pricing">{{ $t("topMenu.view_pricing") }}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative" data-headlessui-state="">
                            <button @click="toggleMenu(2)"
                                class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white"
                                type="button" aria-expanded="false" data-headlessui-state=""
                                id="headlessui-popover-button-:Rail6:">
                                {{ $t("accounts") }}
                            </button>
                            <div v-show="toggle === 2"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-2xl opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:red:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-3 gap-x-6 text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.account_type") }}</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/brokerage">{{ $t("topMenu.brokerage") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/international">{{ $t("topMenu.internationals") }}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.promotions") }}</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/wire-fee-rebate">{{ $t("topMenu.wire_free_rebate") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/acat-transfer">{{ $t("topMenu.click_transfer") }}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="-m-4 grid grid-cols-1 rounded-r-lg bg-primaryLight p-6">
                                            <div class="mb-5 w-full text-center text-[#4d6582] "><b>{{ $t("topMenu.switch_to_firstrade") }}<br>
                                                {{ $t("topMenu.get_up_to") }}</b> <br> {{ $t("topMenu.when_you_switch_to_Firstrade_and_fund_your_account") }}</div>
                                            <div
                                                class="relative isolate mb-8 flex max-w-2xl flex-col items-center justify-center">
                                                <span
                                                    style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                                    <span
                                                        style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                                        <img alt="" aria-hidden="true" src="/images/icon_SM_switch2.svg"
                                                            style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="flex w-full items-start justify-center"><a
                                                    class="text-blue-500 hover:text-primary"
                                                    href="/accounts/acat-transfer">{{ $t("button.learn_more") }}</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative" data-headlessui-state="">
                            <button @click="toggleMenu(3)"
                                class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white"
                                type="button" aria-expanded="false" data-headlessui-state=""
                                id="headlessui-popover-button-:Rbil6:">
                                {{ $t("resources") }}
                            </button>
                            <div v-show="toggle === 3"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-[12.25rem] opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:rgg:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[12px] uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.research_tool") }}
                                               </div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/resources/research-tools">{{ $t("topMenu.research") }}</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/resources/upcoming-ipo">{{ $t("topMenu.upcoming_ipo") }}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="relative" data-headlessui-state="">
                            <button @click="toggleMenu(4)"
                                class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white"
                                type="button" aria-expanded="false" data-headlessui-state=""
                                id="headlessui-popover-button-:Rcil6:">
                                {{ $t("support") }}
                            </button>
                            <div v-show="toggle === 4"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-[12.25rem] opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:rh9:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-1 gap-x-6 text-left">
                                        <div>
                                            <div class="text-[#4d6582] text-[13px] uppercase px-2 font-[800] tracking-wide leading-2">{{ $t("topMenu.get_answer") }}</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/support/contact">{{ $t("topMenu.contact") }}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden items-center gap-x-6 lg:flex lg:flex-1 lg:justify-end">
                    <div class="lg:gap-x-12">
                        <div class="relative flex" data-headlessui-state="">
                            <div style="font-size: 14px">
                                <p class="sr-only">{{ $t('topMenu.languages') }}</p>
                            </div>
                            <el-dropdown trigger="click">
                                <el-button class="el-dropdown-link global-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                                        </path>
                                    </svg>
                                </el-button>
                                <template #dropdown>
                                    <span class="text-md font-semibold block p-3 border-b-[1px]">{{$t('topMenu.choose_language')}} </span>
                                    <el-dropdown-menu class=" flex items-start flex-col" v-for="(lang) in lang"
                                        :key="lang.id" :value="lang.value">
                                        <el-dropdown-item v-on:click="switchLanguage(lang.value)">{{ lang.name
                                        }}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                    <a aria-label="登入" href="/login"
                        class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white hover:text-white focus:text-white">
                        {{ $t('topMenu.login') }}
                    </a>
                    <a class="bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md text-white !w-[136px]"
                        href="/signup">{{ $t('topMenu.sign_up') }}</a>

                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-1.5 inline-flex items-center justify-center rounded-md p-1.5">
                        <span class="sr-only">打开主菜单</span>
                        <div class="relative" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true" class="h-7 w-7 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5">
                                </path>
                            </svg>
                        </div>
                    </button>
                </div>
            </nav>
            <div
                style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; display: none;">
            </div>
        </header>

    </div>
</template>
<script>
import { useI18n } from '@yangss/vue3-i18n'
export default {
    props: ['closeToggle'],
    data() {
        return {
            toggle: null,
            lang: [
                {
                    id: 1,
                    name: 'English',
                    value: 'en'
                },
                {
                    id: 2,
                    name: '简体中文',
                    value: 'cn'
                },
                {
                    id: 3,
                    name: '繁體中文',
                    value: 'tw'
                }
            ],
            locale: useI18n(),
        }

    },
    methods: {
        toggleMenu(show) {
            if (show == 1) {
                this.toggle = 1;
            } else if (show == 2) {
                this.toggle = 2;
            } else if (show == 3) {
                this.toggle = 3;
            } else {
                this.toggle = 4;
            }
        },
        switchLanguage(lang) {
            return this.locale.locale = lang === 'en' ? 'en' : 'cn' ? 'cn' : 'tw';
        }
    },
    watch: {
        closeToggle() {
            this.toggle = 0;
        },

    }
}

</script>
<style scoped>
.globals {
    background-color: #03468e;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: #ccc;
    display: flex;
    align-items: center;
}

.global-btn {
    background-color: hsla(0, 0%, 100%, .1);
    border: none;
    width: 10px;
    color: white;
}
</style>