<template>
    <footer class="globals bg-primaryLight relative w-full bg-smoke">
        <div class="container grid grid-cols-1 gap-y-6 divide-y divide-grayish-blue py-10 mx-auto">
            <div class="flex  items-start justify-center sm:items-center sm:gap-7 lg:flex-row lg:justify-between lg:gap-0 ">
                <div class="grid grid-cols-1 grid-rows-3 gap-4 sm:flex sm:flex-row sm:items-center sm:justify-start">
                    <div class="mr-2 hidden font-lato text-xl text-secondary lg:block">Need Help?</div>
                    <div class="mr-0 flex flex-col items-start justify-start sm:mr-4 sm:flex-row sm:items-center">
                        <div class="mb-1 mr-0 font-lato text-lg text-secondary sm:mb-0 sm:mr-1.5 sm:text-xl">U.S. Toll Free
                        </div><a aria-label="1.800.869.8800" href="tel:+18008698800"
                            class="font-lato text-lg font-bold text-secondary sm:text-xl">1.800.869.8800</a>
                    </div>
                    <div class="mr-0 flex flex-col items-start justify-start sm:mr-4 sm:flex-row sm:items-center">
                        <div class="mb-1 mr-0 font-lato text-lg text-secondary sm:mb-0 sm:mr-1.5 sm:text-xl">Outside the US
                        </div><a aria-label="1.718.961.6600" href="tel:+17189616600"
                            class="font-lato text-lg font-bold text-secondary sm:text-xl">1.718.961.6600</a>
                    </div>
                    <div class="font-lato text-lg font-bold text-secondary md:text-xl">
                        <a href="/support/contact/email">Email Us</a>
                    </div>
                </div>
                <a class="font-semibold bg-warning hover:bg-[#e67021] py-3  w-52 rounded-[4px] text-white"
                    href="https://signup.firstrade.com/apply/en-us/">Open Account</a>
            </div>          

            <div class="flex flex-col-reverse items-start justify-between pt-6 sm:flex-row sm:items-start">
                <div
                    class="mt-4 flex flex-col items-start justify-start gap-6 sm:mt-0 sm:flex-row md:gap-14 lg:gap-28 xl:gap-60">
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">Company</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/about">About</a></li>
                            <li><a class="text-secondary" href="/trading/pricing">Pricing</a></li>                            
                            <li><a class="text-secondary" href="/press">Press</a></li>
                            <li><a class="text-secondary" href="/support/contact">Support</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">Resources</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/accounts/acat-transfer">Transfer to Firstrade</a></li>
                            <li><a class="text-secondary" href="/accounts/international">International Accounts</a></li>
                           
                        </ul>
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">Legal</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/legal/terms">Terms &amp; Conditions</a></li>
                            <li><a class="text-secondary" href="/legal/privacy">Privacy Policy</a></li>
                            <li><a class="text-secondary" href="/legal/accessibility">Accessibility Statement</a></li>
                           
                            <li><a class="text-secondary" href="/legal/business-continuity">Business Continuity</a></li>
                           
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-4">
                    <ul class="m-0 grid list-none grid-cols-3 gap-4">
                        <li>
                            <a href="https://www.facebook.com/firstrade" rel="noopener noreferrer" aria-label="Facebook"
                                class="flex items-center justify-center" target="_blank">
                                <img src="/images/social-facebook.28534315.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/firstrade/" rel="noopener noreferrer" aria-label="Twitter"
                                class="flex items-center justify-center" target="_blank">
                                <img src="/images/social-twitter.15a06301.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@firstrade" rel="noopener noreferrer" aria-label="YouTube"
                                class="flex items-center justify-center" target="_blank">
                                <img src="/images/social-youtube.45aabdf1.svg" alt="">
                            </a>
                        </li>
                    </ul>
                    <div class="flex flex-col items-center justify-around gap-2.5 lg:flex-row lg:justify-start">
                        <div class="grid grid-rows-2  gap-2.5">
                            <div>
                                <a aria-label="Firstrade iOS App"
                                    href="https://itunes.apple.com/app/firstrade/id405325225?mt=8" target="_blank"
                                    rel="noopener noreferrer" class="flex rounded-md outline-2 outline-offset-2">
                                    <img class="w-full" src="/images/app_ios.1ed9e534.svg" alt="ios button">
                                </a>
                            </div>
                            <div><a aria-label="Firstrade Android App"
                                    href="https://play.google.com/store/apps/details?id=com.firstrade.android"
                                    target="_blank" rel="noopener noreferrer"
                                    class="flex rounded-md outline-2 outline-offset-2">
                                    <img class="w-full" src="/images/app_android.c52f7d81.svg" alt="Playstore button">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full text-left">
                        <div class="mb-3 text-secondary">Languages</div>
                        <ul class="m-0 flex list-none items-center justify-between text-secondary">
                            <li><button type="button" class="text-sm">English</button></li>
                            <li><button type="button" class="text-sm">简体</button></li>
                            <li><button type="button" class="text-sm">繁體</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pt-6 md:mb-7.5 text-left">
                <p class="mb-4 text-xs text-secondary">Brokerage Products and Services offered by Firstrade Securities Inc.
                </p>
                <p class="mb-4 text-xs text-secondary">Review Firstrade's brokerage services with <a
                        aria-label="FINRA BrokerCheck" target="_blank" rel="noopener noreferrer"
                        href="https://brokercheck.finra.org/"
                        class="text-blue-500 hover:text-primary active;text-primary">FINRA BrokerCheck</a>.</p>
                <p class="mb-4 text-xs text-secondary">Online trading has inherent risk due to system response and access
                    times that may vary due to market conditions, system performance, and other factors. An investor should
                    understand these and additional risks before trading. Carefully consider the investment objectives,
                    risks, charges and expenses before investing. All investments involve risk and losses may exceed the
                    principal invested. Past performance of a security, industry, sector, market, or financial product does
                    not guarantee future results or returns. Firstrade is a discount broker that provides self-directed
                    investors with brokerage services, and does not make recommendations or offer investment, financial,
                    legal or tax advice.</p>
                <p class="mb-4 text-xs text-secondary">Options trading involves risk and is not suitable for all investors.
                    Options trading privileges are subject to Firstrade review and approval. Please review the <a
                        aria-label="Characteristics and Risks of Standardized Options"
                        href="https://www.theocc.com/about/publications/character-risks.jsp" target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 hover:text-primary active;text-primary">Characteristics and Risks of
                        Standardized Options</a> brochure before you begin trading options.</p>
                <p class="mb-4 text-xs text-secondary">ETF trading involves risks. Before investing in an ETF, be sure to
                    carefully consider the fund's objectives, risks, charges, and expenses. Please read the prospectus
                    carefully before investing. Leveraged and Inverse ETFs may not be suitable for long-term investors and
                    may increase exposure to volatility through the use of leverage, short sales of securities, derivatives
                    and other complex investment strategies. <a class="text-blue-500 hover:text-primary active;text-primary"
                        href="/trading/etfs#etf-disclaimer">ETF Information and Disclosure</a>.</p>
                <p class="mb-4 text-xs text-secondary">Investors should consider the investment objectives, risks, and
                    charges and expenses of a mutual fund or ETF carefully before investing. Leveraged and Inverse ETFs may
                    not be suitable for long-term investors and may increase exposure to volatility through the use of
                    leverage, short sales of securities, derivatives and other complex investment strategies. A mutual fund
                    or ETF prospectus contains this and other information and can be obtained by emailing <a
                        aria-label="service@firstrade.com" href="mailto:service@firstrade.com"
                        class="text-blue-500 hover:text-primary active;text-primary">service@firstrade.com</a>.</p>
                <p class="mb-4 text-xs text-secondary">Margin trading involves interest charges and risks, including the
                    potential to lose more than deposited or the need to deposit additional collateral in a falling market.
                    Before using margin, customers must determine whether this type of trading strategy is right for them
                    given their specific investment objectives, experience, risk tolerance, and financial situation. For
                    more information please see <a aria-label="Margin Disclosure" target="_blank" rel="noopener noreferrer"
                        href="https://www.firstrade.com/forms/en-us/margin_disclosure.pdf?v=20230127"
                        class="text-blue-500 hover:text-primary active;text-primary">Margin Disclosure Statement</a>, <a
                        aria-label="Margin Agreement" target="_blank" rel="noopener noreferrer"
                        href="https://www.firstrade.com/forms/en-us/margin_application.pdf?v=20230131"
                        class="text-blue-500 hover:text-primary active;text-primary">Margin Agreement</a>, and <a
                        aria-label="FINRA Investor Information" target="_blank" rel="noopener noreferrer"
                        href="https://www.finra.org/investors/investing"
                        class="text-blue-500 hover:text-primary active;text-primary">FINRA Investor Information</a>.
                    These disclosures contain information on our lending policies, interest charges, and the risks
                    associated with margin accounts.</p>
                <p class="mb-4 text-xs text-secondary">Online trades are $0 for stocks, ETFs, options and mutual funds. See
                    our <a aria-label="Pricing" class="text-blue-500 hover:text-primary active;text-primary"
                        href="/trading/pricing">Pricing</a> page for detailed pricing of all security types offered at
                    Firstrade. All prices listed are subject to change without notice.</p>
                <p class="mb-4 text-xs text-secondary">Crypto trading on Firstrade platforms is served by Firstrade Crypto
                    LLC and offered through APEX Crypto. Cryptocurrency execution and custody services are provided by Apex
                    Crypto LLC (NMLS ID 1828849) through a software licensing agreement between Apex Crypto LLC and
                    Firstrade Crypto LLC. Cryptocurrencies are not securities and are not FDIC or SIPC insured. Crypto
                    trading involves substantial risk of loss and there can be significant volatility in the price of
                    cryptocurrencies. The value of cryptocurrencies may fluctuate, and, as a result, clients may lose more
                    than their original investment. Crypto trading involves substantial risk of loss and is not suitable for
                    every investor, please ensure that you fully understand the <a aria-label="Crypto Disclosures"
                        target="_blank" rel="noopener noreferrer" href="https://apexcrypto.com/legal-disclosures/"
                        class="text-blue-500 hover:text-primary active;text-primary">risks</a> involved before trading.
                </p>
                <p class="mb-4 text-xs text-secondary">Any specific securities, or types of securities, used as examples are
                    for demonstration purposes only. None of the information provided should be considered a recommendation
                    or solicitation to invest in, or liquidate, a particular security or type of security.</p>
                <p class="mb-4 text-xs text-secondary">This is not an offer or solicitation in any jurisdiction where
                    Firstrade is not authorized to conduct securities transaction.</p>
                <p class="mb-4 text-xs text-secondary">System response and access times may vary due to market conditions,
                    system performance, and other factors.</p>
                <p class="mb-4 text-xs text-secondary">© 2023 Firstrade Securities Inc. All rights reserved. Member
                    <a class="text-blue-500 hover:text-primary" aria-label="FINRA" target="_blank" rel="noopener noreferrer"
                        href="https://www.finra.org/#/">FINRA</a>/<a class="text-blue-500 hover:text-primary"
                        aria-label="SIPC" target="_blank" rel="noopener noreferrer" href="https://www.sipc.org/">SIPC</a>.
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped></style>