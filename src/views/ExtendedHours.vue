<template>
    <div  @click="toggleFunction" class="container  m-auto">
        <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                    <div class="col-span-12 lg:col-span-9">
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ extendedHours.title }}</h2>                           
                        </div>
                        <div class="text-left ">
                            <p class=" text-xl font-bold mb-2 text-secondary">{{ extendedHours.subtitle }}</p>
                            <p class=" text-md mb-6 text-secondary">{{ extendedHours.description }}</p>
                            <div class="py-6 text-md text-secondary">
                                <img :src="extendedHours.imageUrl" alt="">
                            </div>
                        </div>
                        <div class="py-10">
                            <div class="text-left text-[#4d6582]">
                                <h5 class="text-xl font-bold">{{ preMarket.title }}</h5>
                                <p class="text-sm mt-4 mb-6">{{   preMarket.desc }}</p>
                            </div>
                            <div>
                                <img :src="preMarket.imageUrl" alt="">
                            </div>
                        </div>
                        <div class="text-left text-[#4d6582]">
                            <h5 class=" text-xl font-bold mb-3">{{ tradingKnowledges.heading }}</h5>
                            <div>
                                <ul class="list-disc list-inside " v-for="item in tradingKnowledges.knowledgeLists" :key="item.id">
                                    <li class="text-md mb-1">{{ item.desc }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                        <div class="bg-[#eff2f7] py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ transferFee.title }}</h5>
                            <p class="text-md text-secondary" >{{ transferFee.details }}</p>
                            <div class="mt-3">
                                <a href="# " class="text-blue-500 hover:text-primary">Get Started</a>
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
            extendedHours: {
                title:"Extended Hours Trading",
                subtitle:"More Opportunities to Trade",
                description:"We offer stock market after-hours & pre-market trading with securities listed on the NYSE, NASDAQ, or AMEX exchanges. With so many early trading options available, start with extended hours trading today!",
                imageUrl:"/images/ext-hours-1.webp"

            },
            transferFee:{
                title:"Transfer to Us for Free",
                details:"Get credit for the account transfer fee charged by other brokers, and start taking advantage of our premium products and online trading services when you transfer to Firstrade.",
                buttonText:"Get started",            
            },
            preMarket:{
                title:"How to place Pre-Market, After-Market and Day + Ext stock trades",
                desc:"Log in to your account, click on the “Trading” tab, then on the “Order Entry” pane, click on the “Duration” dropdown to choose “Pre-Mkt” or “After-Mkt” or “Day+Ext”",
                imageUrl:"/images/ext-hours-2.webp",                
                },
                tradingKnowledges:{
                    heading:"What you should know about trading during extended hours",
                    knowledgeLists:[
                    {
                        id: 1,
                        desc: "Same low $0 commission!",
                    },
                    {
                        id: 2,
                        desc: "Only limit orders are allowed.",
                    },
                    {
                        id: 3,
                        desc: "The extended hours market is separate from the regular intraday trading-session.",
                    },
                    {
                        id: 4,
                        desc: "Benefit from the New Duration to trade through Pre-Market, Regular Market, and After-Market sessions with one order. “Day+Ext” order will allow you to trade in all sessions.",
                    },
                    {
                        id: 5,
                        desc: "Order Modification - Price changes and cancellations of extended hours orders are permitted before the order is executed.",
                    },
                    {
                        id: 6,
                        desc: "Available securities - Securities listed on NYSE or NASDAQ or AMEX are available for trading during extended hours.",
                    },
                    {
                        id: 7,
                        desc: "OTC stocks, bonds, funds, options and other securities may be traded only during regular market hours",
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
