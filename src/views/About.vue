<template>
    <div @click="toggleFunction">
        <div  class="bg-[#f3f9ff] pt-20">
            <div
                class="container px-3 flex items-center gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex flex-col gap-4 justify-center w-full items-center pb-6 ">
                    <img src="/images/icon_chevron_logo.webp" alt="">
                    <div class="text-primary text-4xl font-sans font-bold ">
                        <h2>Our Mission</h2>
                    </div>
                    <div class="text-lg text-secondary">
                        <p>Firstrade’s mission is to empower its customers with the most advanced technology to make it simpler
                            and seamless to execute their investment strategies. It's self-directed investing, placing the needs
                            of our customers first through no-cost trading.</p>
                        <p class="py-4">At Firstrade, we stand by our core values every day:</p>
                        <p class="text-primary">Commission-Free Investing and an ongoing Commitment to Excellence.</p>
                    </div>

                </div>
            </div>
            <div class="container mx-auto max-w-3xl px-6">
                <div class="flex justify-between text-[#4d6582]   "> 
                    <button class="border-b-2 border-b-[#4d6582] pb-2 ">
                        <router-link to="/about">About</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/history">History</router-link>
                    </button>
                    <button  class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/corporate-responsibility">Corporate Responsibility</router-link>
                    </button>
                    <button  class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/press">Press</router-link>
                    </button>
                </div>        
            </div>
        </div>    
        <div class="container mx-auto max-w-7xl">
            <section id="about" aria-labelledby="details-title">
                        <div class="m-auto  px-8 py-20 lg:px-10 lg:py-20 text-[#4d6582]">
                            <div>
                                <h2 id="details-title" class="text-center font-bold py-4 text-2xl">Proudly serving our customers since 1985
                                </h2>
                                <p class="text-left text-md">Firstrade is a leading online brokerage firm offering a full line of investment products
                                    and tools designed to help investors like you take control of your financial future.
                                    Since its founding in 1985, Firstrade has been committed to providing high value and
                                    quality services to help you reach your financial goals.</p>
                                <p class="text-left text-md py-4">Combining proprietary trading technology, a highly intuitive user interface, outstanding
                                    customer service and mobile applications, Firstrade offers a comprehensive solution for
                                    all of your investing needs. Whether you are a new investor or an active trader, we are
                                    committed to excellence and putting the needs of all our customers first. Firstrade is a
                                    member of FINRA/SIPC. Discover online investment opportunities with Firstrade Securities
                                    today.</p>
                                <div class="md:grid md:grid-cols-2 md:gap-4 text-left">
                                    <div>
                                        <h3 class="mb-4 font-sans text-xl font-semibold">What We Do</h3>
                                        <p>Firstrade provides online and mobile trading of Stocks/ETFs, Options, Mutual
                                            Funds, Fixed Income products and more. We offer extended hours trading from
                                            8am-8pm and stand by our trading tools with a 0.1 second trade execution
                                            guarantee.</p>
                                    </div>
                                    <div>
                                        <h3 class="mb-4 font-sans text-xl font-semibold">Our Commitment</h3>
                                        <p>Our commitment as an online brokerage firm has always been to offer the best
                                            service, most resourceful tools and most convenient platform for the lowest
                                            fees. Our dedication to you- our customer- has helped us grow rapidly while
                                            consistently providing self-directed investors with fast order executions,
                                            excellent customer service, exceptional site performance and commission-free
                                            trading.</p>
                                    </div>
                                <div>
                                    <h3 class="mb-4 font-sans text-xl font-semibold">Accolades</h3>
                                    <p>Over the years, major industry publications including Barron's, Forbes, and Smart
                                        Money have all rated Firstrade as one of the best online brokers. For the fifth
                                        year in a row, Firstrade was awarded 4.5 stars out of five for the website’s
                                        ease of use and also awarded "Best in Class" by StockBrokers.com 2019 Online
                                        Broker Review.</p>
                                </div>
                                <div class="mb-4">
                                    <div class="relative mx-auto text-center">
                                        <img src="/images/hero-slider-one-left.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-8 border-b-2 border-grayish-blue"></div>
                        <div>
                            <h2 class="mb-4 text-center font-sans text-base font-bold">MORE INFORMATION</h2>
                            <ul
                                class="m-0 flex list-none flex-col gap-4 text-center md:m-auto md:max-w-md md:flex-row md:justify-between md:gap-0">
                                <li><a href="/legal/business-continuity">Business Continuity</a></li>
                                <li><a href="/legal/privacy">Privacy &amp; Security</a></li>
                                <li><a href="/legal/order-routing">Order Routing Report</a></li>
                            </ul>
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
<style scoped></style>