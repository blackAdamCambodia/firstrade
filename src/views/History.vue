<template>
    <div @click="toggleFunction" class="  border-b-[1px]">
        <div class="bg-[#f3f9ff] pt-4 ">
            <div class="container mx-auto max-w-3xl px-6">
                <div class="flex justify-between text-[#4d6582]   ">
                    <button class="border-b-2 border-b-transparent pb-2 ">
                        <router-link to="/about">About</router-link>
                    </button>
                    <button class="border-b-2 border-b-[#4d6582] pb-2">
                        <router-link to="/history">History</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/corporate-responsibility">Corporate Responsibility</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/press">Press</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <section aria-labelledby="history-title bg-[fff]">
                <div class="m-auto text-[#4d6582] text-left max-w-7xl px-8 py-20 lg:px-10 lg:py-20">
                    <h1 id="history-title" class="mb-8 text-4xl text-primary font-bold font-sans text-center">Firstrade's History</h1>
                    <p>The remarkable story of Firstrade began in 1985 as the discount broker First Flushing Securities,
                        serving the investment needs of the local community. Achieving steady and organic growth, the
                        company caught sight of the benefits to be gained from tapping into the capabilities of the
                        Internet. Truly a pioneer in online trading, Firstrade.com was launched in 1997 joining only a
                        handful of other online stock brokers on the web.</p>
                    <p class="py-4">Firstrade's commitment to offer the most for the least struck a chord with investors. Firstrade's
                        online trading and brokerage system grew rapidly, providing self-directed investors with fast order
                        execution, excellent customer service, and exceptional site performance. Major industry publications
                        including Barrons, Forbes, and SmartMoney have all rated Firstrade among the best online brokers for
                        consecutive years. In 2005, Firstrade was named the "Best Deal" in the online discount broker
                        category by Smart Money Magazine, and continued the streak in 2006 when Kiplingers Magazine called
                        Firstrade the "Clear Winner in the Mutual Funds Category" and "Top Clean-Hands Firm".*</p>
                    <p>Many competitors have come and gone, but Firstrade today continues to serve our customers with the
                        same friendly, dedicated, and personal touch that has been our principle since day one. We are also
                        constantly developing new products and services, with many new and exciting online discount
                        brokerage features on their way! To all our customers, thank you for choosing Firstrade as your
                        online broker!</p>
                    <p class="pt-4 pb-8">The Firstrade Team</p>
            </div>
        </section>
    </div>
</div></template>
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
<style scoped></style>