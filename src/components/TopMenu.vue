<template>
    <div>
        <header class="globals relative isolate z-10 bg-ft-blue">
            <nav class="container px-3 flex items-center justify-between py-3 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-4 mx-auto"
                aria-label="Global">
                <div class="flex items-center lg:gap-x-12">
                    <router-link class="-mx-1.5 -my-0.5 p-1.5 text-white" aria-label="家" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="199" height="38.692" viewBox="0 0 199 38.692"
                            aria-hidden="true" class="h-7 w-auto lg:h-10">
                            <g id="ftlogo" transform="translate(-0.57 -0.5)">
                                <path id="Path_414" data-name="Path 414"
                                    d="M44.76,5.45H57.018l-.98,5.512H51.017l-.935,5.225h4.465l-.935,5.247H49.147l-2.06,11.575H39.85Z"
                                    transform="translate(4.115 0.561)" fill="currentColor"></path>
                                <path id="Path_415" data-name="Path 415"
                                    d="M65.367,5.45l-4.91,27.559H53.22L58.13,5.45h7.237Z" transform="translate(5.528 0.561)"
                                    fill="currentColor"></path>
                                <path id="Path_416" data-name="Path 416"
                                    d="M68.03,5.45h5.121a37.789,37.789,0,0,1,6.869.4,3.808,3.808,0,0,1,2.605,2c.568,1.069.646,2.778.234,5.137A8.991,8.991,0,0,1,81.279,17.3a5.154,5.154,0,0,1-3.418,1.334A4.4,4.4,0,0,1,80.5,20.045a3.441,3.441,0,0,1,.635,1.62,25.2,25.2,0,0,1-.546,4.079L79.3,33.02H72.561l1.626-9.161a5.911,5.911,0,0,0,.134-2.745c-.167-.353-.757-.529-1.748-.529L70.357,33.009H63.12Zm6.4,4.718L73.341,16.3a3.581,3.581,0,0,0,1.77-.331q.551-.331.868-2.15l.267-1.51q.234-1.306-.167-1.72A2.271,2.271,0,0,0,74.432,10.168Z"
                                    transform="translate(6.544 0.561)" fill="currentColor"></path>
                                <path id="Path_417" data-name="Path 417"
                                    d="M99.627,13.852H92.9l.367-2.04a3.9,3.9,0,0,0,.067-1.82.782.782,0,0,0-.79-.4,1.338,1.338,0,0,0-1.08.529,3.539,3.539,0,0,0-.623,1.6,4.281,4.281,0,0,0,0,2.084,4.28,4.28,0,0,0,1.748,1.687q4.325,2.845,5.255,4.665c.612,1.213.69,3.176.212,5.878a11.511,11.511,0,0,1-1.47,4.345,7.029,7.029,0,0,1-3.106,2.349,11.912,11.912,0,0,1-4.81.948,9.3,9.3,0,0,1-4.765-1.092,4.159,4.159,0,0,1-2.193-2.779,13.753,13.753,0,0,1,.212-4.786l.323-1.8h6.725l-.59,3.353a3.978,3.978,0,0,0-.067,1.985c.134.3.445.441.924.441a1.465,1.465,0,0,0,1.18-.562,3.582,3.582,0,0,0,.646-1.665c.289-1.621.256-2.68-.1-3.187a16.438,16.438,0,0,0-2.939-2.5,25.875,25.875,0,0,1-3.117-2.57A4.711,4.711,0,0,1,83.851,16.3a9.069,9.069,0,0,1,.067-3.617,11.488,11.488,0,0,1,1.637-4.632A7.007,7.007,0,0,1,88.6,5.757a11.676,11.676,0,0,1,4.554-.827,10.376,10.376,0,0,1,4.643.9,3.911,3.911,0,0,1,2.227,2.272,11.356,11.356,0,0,1-.189,4.654Z"
                                    transform="translate(8.482 0.502)" fill="currentColor"></path>
                                <path id="Path_418" data-name="Path 418"
                                    d="M116.24,5.45l-.98,5.512h-4.3l-3.93,22.047H99.8l3.93-22.047H99.45l.98-5.512h15.81Z"
                                    transform="translate(10.36 0.561)" fill="currentColor"></path>
                                <path id="Path_419" data-name="Path 419"
                                    d="M117.3,5.45h5.121a37.789,37.789,0,0,1,6.869.4,3.808,3.808,0,0,1,2.605,2c.568,1.069.646,2.778.234,5.137a8.99,8.99,0,0,1-1.581,4.321,5.154,5.154,0,0,1-3.418,1.334,4.4,4.4,0,0,1,2.639,1.411,3.441,3.441,0,0,1,.635,1.62,25.2,25.2,0,0,1-.546,4.079l-1.292,7.276h-6.725l1.626-9.161a5.911,5.911,0,0,0,.134-2.745c-.178-.353-.757-.529-1.759-.529l-2.216,12.424H112.39Zm6.4,4.718L122.611,16.3a3.582,3.582,0,0,0,1.77-.331q.551-.331.868-2.15l.267-1.51q.234-1.306-.167-1.72A2.271,2.271,0,0,0,123.7,10.168Z"
                                    transform="translate(11.699 0.561)" fill="currentColor"></path>
                                <path id="Path_420" data-name="Path 420"
                                    d="M147.8,5.45l-.768,27.559H139.64l.49-4.961h-2.594l-1.314,4.961H128.74L137.346,5.45H147.8Zm-6.992,17.726q.284-4.679.957-11.575-2.522,7.92-3.451,11.575Z"
                                    transform="translate(13.415 0.561)" fill="currentColor"></path>
                                <path id="Path_421" data-name="Path 421"
                                    d="M151.979,5.45h5.411a33.274,33.274,0,0,1,7,.474,4.384,4.384,0,0,1,2.538,1.565,4.109,4.109,0,0,1,.768,2.425,38.181,38.181,0,0,1-.69,5.247l-1.715,9.657a24.26,24.26,0,0,1-1.236,4.961,4.91,4.91,0,0,1-1.581,1.962,6.176,6.176,0,0,1-2.338.981,20.443,20.443,0,0,1-3.93.287h-9.13Zm6.391,4.718L155.141,28.3a2.52,2.52,0,0,0,2.037-.617,10.1,10.1,0,0,0,.958-3.373l1.915-10.7a15.413,15.413,0,0,0,.312-2.4.955.955,0,0,0-.412-.783A3.176,3.176,0,0,0,158.37,10.168Z"
                                    transform="translate(15.193 0.561)" fill="currentColor"></path>
                                <path id="Path_422" data-name="Path 422"
                                    d="M170.24,5.45h12.069l-.98,5.512H176.5l-.935,5.225h4.52l-.935,5.247h-4.52l-1.08,6.063h5.311l-.98,5.512H165.33Z"
                                    transform="translate(17.261 0.561)" fill="currentColor"></path>
                                <g id="Group_175" data-name="Group 175" transform="translate(0.57 0.5)">
                                    <path id="Path_423" data-name="Path 423" d="M19.787,39.192V.5L.57,16.11l13.316-3.748Z"
                                        transform="translate(-0.57 -0.5)" fill="currentColor"></path>
                                    <path id="Path_424" data-name="Path 424"
                                        d="M20.07,39.192V.5L39.287,16.11,25.971,12.362Z" transform="translate(1.641 -0.5)"
                                        fill="currentColor"></path>
                                </g>
                            </g>
                        </svg>
                    </router-link>
                    <div class="hidden lg:flex lg:gap-x-12">
                        <div class="relative" data-headlessui-state="">
                            <button @click='toggleMenu(1)'
                                class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white"
                                type="button" aria-expanded="false" data-headlessui-state=""
                                id="headlessui-popover-button-:R9il6:">
                                交易
                            </button>
                            <div v-show="toggle === 1"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-2xl opacity-100 translate-y-0"
                                id="hideSubmenu" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-3 gap-x-6 text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px]  uppercase px-2 font-bold tracking-wide leading-2">
                                                投资理财产品</div>
                                            <div class="mt-4 flow-root ">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize  ">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading">概述</router-link>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading/stocks">股票</router-link>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize">
                                                        <router-link
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            to="/trading/fixed-income">固定收益</router-link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-bold tracking-wide leading-2">
                                                服务</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/pricing">免费交易</a>
                                                    </div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/margin-loans">免费交易
                                                            Loans</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/cash-management">现金管理</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/extended-hours">延长时段交易</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/trading/dividend-reinvestment">延长时段交易</a>
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
                                                $0佣金交易，<br>$0期权合约费用。</div>
                                            <div class="flex w-full items-start justify-start"><a
                                                    class="text-blue-500 hover:text-primary"
                                                    href="/trading/pricing">免费交易</a>
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
                                账户
                            </button>
                            <div v-show="toggle === 2"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-2xl opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:red:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-3 gap-x-6 text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-bold tracking-wide leading-2">
                                                账户类型</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/brokerage">经纪账户</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/international">国际账户</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-bold tracking-wide leading-2">
                                                优惠活动</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/wire-fee-rebate">汇款费用补贴</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/accounts/acat-transfer">一键转户</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="-m-4 grid grid-cols-1 rounded-r-lg bg-primaryLight p-6">
                                            <div class="mb-5 w-full text-center text-[#4d6582] "><b>一键转户到Firstrade <br>
                                                    获得高达$250补贴</b> <br> 当您转户至Firstrade并<br>注资，可获得转户补贴。</div>
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
                                                    href="/accounts/acat-transfer">了解更多</a></div>
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
                                知识库
                            </button>
                            <div v-show="toggle === 3"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-[12.25rem] opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:rgg:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-bold tracking-wide leading-2">
                                                研究与工具</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/resources/research-tools">研究</a></div>
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/resources/upcoming-ipo">近期焦点IPOs</a></div>
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
                                客户服务
                            </button>
                            <div v-show="toggle === 4"
                                class="absolute z-10 mt-4 w-screen rounded-lg bg-white shadow-lg outline outline-1 outline-transparent before:absolute before:-top-1 before:left-5 before:z-10 before:h-2 before:w-2 before:rotate-45 before:border-t before:border-l before:border-transparent before:bg-white max-w-[12.25rem] opacity-100 translate-y-0"
                                id="headlessui-popover-panel-:rh9:" tabindex="-1">
                                <div class="p-4">
                                    <div class="grid grid-cols-1 gap-x-6 text-left">
                                        <div>
                                            <div
                                                class="text-[#4d6582] text-[13px] uppercase px-2 font-bold tracking-wide leading-2">
                                                获取答案</div>
                                            <div class="mt-4 flow-root">
                                                <div class="-my-2">
                                                    <div class="text-[#4d6582] text-base capitalize"><a
                                                            class="text-[#4d6582] block p-2 hover:text-[#1675e0] hover:bg-[#eff2f7] hover:rounded"
                                                            href="/support/contact">联系我们</a></div>
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
                                <p class="sr-only">语言</p>
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
                                    <span class="text-md font-semibold block p-3 border-b-[1px]">Choose Language </span>
                                    <el-dropdown-menu class=" flex items-start flex-col" v-for="(lang) in lang"
                                        :key="lang.id">
                                        <el-dropdown-item>{{ lang.name }}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                    <a aria-label="登入" href="https://invest.firstrade.com/cgi-bin/login?ft_locale=zh-cn"
                        class="flex items-center text-lg leading-6 text-white focus:outline-none ui-focus-visible:outline-white hover:text-white focus:text-white">
                        登入
                    </a>
                    <a class="bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md text-white !w-[136px]"
                        href="https://signup.firstrade.com/apply/zh-cn">立即开户</a>

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
export default {
    props: ['closeToggle'],
    data() {
        return {
            toggle: null,
            lang: [
                {
                    id: 1,
                    name: 'English'
                },
                {
                    id: 2,
                    name: '简体中文'
                },
                {
                    id: 3,
                    name: '繁體中文'
                }
            ]
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