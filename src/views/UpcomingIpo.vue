<template>
   <div @click="toggleFunction">
        <div class="container mx-auto">
            <div class="bg-white text-left text-secondary py-11 px-4">
                <div class="container">
                    <h1 class="mb-4 font-sans text-3xl text-primary">August 2023 IPO Calendar</h1>
                    <div class="grid grid-cols-12 gap-x-8">
                        <div class="col-span-12 xl:col-span-9">
                            <div class="mb-4 overflow-x-auto pb-4">
                            <div class="table w-[928px] lg:w-full">
                                <h3 class="table-caption font-bold font-sans text-xl">Upcoming</h3>
                                <div class="table-header-group">
                                    <div class="table-row">
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Company Name</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Symbol</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Market</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Price</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Share</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Offer Amount</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Expected IPO date</div>
                                    </div>
                                </div>
                                <div class="table-row-group">
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center  text-left">
                                            Klaviyo, Inc.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            KVYO</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NYSE</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            25.00-27.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            19,200,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $596,160,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/20/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Maplebear Inc.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            CART</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Global Select</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            26.00-28.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            22,000,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $708,400,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/19/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Agape ATP Corp</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            ATPC</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Capital</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            4.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            1,650,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $7,590,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/19/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Healthy Green Group Holding Ltd</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            GDD</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NYSE MKT</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            6.00-7.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            2,000,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $16,100,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/15/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Neumora Therapeutics, Inc.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NMRA</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Global</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            16.00-18.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            14,710,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $304,497,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/15/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            LEAD REAL ESTATE CO., LTD</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            LRE</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Global</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            7.00-9.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            1,143,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $11,830,050.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/15/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            RayzeBio, Inc.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            RYZB</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Global</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            16.00-18.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            14,398,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $298,038,600</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/15/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            ARM HOLDINGS PLC /UK</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            ARM</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Global Select</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            47.00-51.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            95,500,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $5,227,500,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/14/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Vitro Biopharma, Inc.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            VTRO</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NYSE MKT</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            5.00-6.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            1,818,181</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $12,545,448</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/13/2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-x-auto pb-4">
                            <div class="table w-[928px] lg:w-full">
                                <h3 class="table-caption font-bold font-sans text-xl">Priced</h3>
                                <div class="table-header-group">
                                    <div class="table-row">
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Company Name</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Symbol</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Market</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Price</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Share</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Offer Amount</div>
                                        <div
                                            class="border-b-[3px] border-solid border-grayish-blue pr-4 font-bold text-base py-3 table-cell text-left">
                                            Priced Date</div>
                                    </div>
                                </div>
                                <div class="table-row-group">
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Nature Wood Group Ltd</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NWGL</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Capital</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            750,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $6,750,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/12/2023</div>
                                    </div>
                                    <div class="table-row">
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            Solowin Holdings, Ltd.</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            SWIN</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            NASDAQ Capital</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            4.00</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            2,000,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            $8,000,000</div>
                                        <div
                                            class="border-b border-solid border-grayish-blue pr-4 text-sm py-3 flex items-center table-cell text-left">
                                            9/07/2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-right text-blue-500 hover:text-primary mb-4 text-sm">Source: <a aria-label="NASDAQ IPOs Calendar"
                                href="http://www.nasdaq.com/markets/ipos/activity.aspx?tab=upcoming" target="_blank"
                                rel="noopener noreferrer" class="text-sm text-strong-blue">NASDAQ IPOs Calendar</a></p>
                    </div>
                    <div class="col-span-12 xl:col-span-3">
                        <div class="rounded-lg bg-[#eff2f7] p-6 ">
                            <h5 class="mb-2 text-base font-semibold">Order Rule on IPO date</h5>
                            <div class="grid grid-cols-1 grid-rows-3 divide-y divide-grayish-blue bg-white">
                                <div class="grid grid-cols-2 grid-rows-1">
                                    <div class="p-2 text-sm">Before the market opens (9:30AM)</div>
                                    <div class="p-2 text-sm">Limit Order Only</div>
                                </div>
                                <div class="grid grid-cols-2 grid-rows-1">
                                    <div class="p-2 text-sm">9:30AM until approx. 15mins after IPO</div>
                                    <div class="p-2 text-sm">Limit Order Only</div>
                                </div>
                                <div class="grid grid-cols-2 grid-rows-1">
                                    <div class="p-2 text-sm">After IPO price stabilizes</div>
                                    <div class="p-2 text-sm">All order types are accepted</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script>
    export default {
        data() {

        },
        methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>