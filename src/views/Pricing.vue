<template>
    <div  @click="toggleFunction" class="bg-[#f3f9ff] py-20 border-b-[1px]">
        <div
            class="container px-3 flex items-center gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
            <div class="flex gap-4 justify-between w-full items-center ">
                <div class="text-primary text-5xl font-sans font-bold w-2/5">
                    <h2>Simple Pricing</h2>
                </div>
                <div class="flex gap-4 justify-between w-3/5">
                    <div class="shadow-lg w-[335px] h-[210px] flex-col items-center justify-center rounded-md bg-white">
                        <div class="heading bg-primary rounded-t-md text-white py-3 ">
                            <h5 class="text-lg font-bold">Stocks,ETFs, Mutual Funds</h5>
                        </div>
                        <div class="tradeBody flex items-center justify-start pl-8 -mt-8  ">
                            <h5 class="text-primary font-bold text-4xl mr-4">$</h5>
                            <h2 class="text-[150px] font-bold text-primary mr-4">0</h2>
                            <p class="text-primary text-xl font-sans font-bold">Per Trade</p>
                        </div>
                    </div>
                    <div class="shadow-lg w-[335px] h-[210px] flex-col items-center justify-center rounded-md bg-white">
                        <div class="heading bg-warning rounded-t-md text-white py-3">
                            <h5 class="text-lg font-bold">Options</h5>
                        </div>
                        <div class="tradeBody flex items-center justify-start pl-8 -mt-8 ">
                            <h5 class="text-primary font-bold text-4xl mr-4">$</h5>
                            <h2 class="text-[150px] font-bold text-primary mr-4">0</h2>
                            <div class="flex flex-col justify-start items-start">
                                <p class="text-primary text-xl font-sans font-bold ">Per Trade</p>
                                <p class="text-primary text-xl font-sans font-bold">Per Contract</p>
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
                <el-tab-pane  label="Pricing" name="first">
                    <div class="bg-white py-11 font-sans text-secondary text-left">
                        <div class="container grid grid-cols-12 xl:gap-x-16">
                            <div class="col-span-12 grid grid-cols-1 gap-8 xl:col-span-9">
                                <div>
                                    <h2
                                        class="font-sans text-primary font-bold border-grayish-blue border-b-[3px] pb-4 text-2xl xl:text-3xl">
                                        Pricing</h2>
                                    <div class="grid-rows-14 mb-4 grid grid-cols-12">
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                            Stocks</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Commission</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                            ETFs</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Commission</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg">Options</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Commission</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Contract Fee</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Exercise and Assignment Fees</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 font-bold text-lg">
                                            $0</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg">Mutual Funds
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Load Funds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Free</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            No-Load Funds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Free</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-2 col-span-3 font-bold text-lg">
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            No Transaction Fee (NTF) Funds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Free</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg">Fixed Income
                                        </div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Treasury Bills, Notes &amp; Bonds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Net Yield Basis</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Municipal Bonds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Net Yield Basis</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Agency Bonds</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Net Yield Basis</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Zeros &amp; Strips</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Net Yield Basis</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Primary Market CDs</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            $30</div>
                                        <div class="py-3 flex items-center pr-2 col-span-3 font-bold text-lg"></div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pr-4 col-span-5 text-base">
                                            Secondary Market CDs</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  pl-4 col-span-4 text-base">
                                            Net Yield Basis</div>
                                        <div
                                            class="py-3 flex items-center border-grayish-blue border-b border-solid  col-span-12 text-sm">
                                            Net Yield Basis means Firstrade acts as principal whereby the bonds will be
                                            subject to a markup or markdown.</div>
                                    </div>
                                </div>                               
                                <div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">Fees of Broker-Assisted Orders:
                                        Stocks/ETFs - $19.95; Options - $19.95+$0.50/contract; Load Funds - No Charge;
                                        No-Load Funds - $19.95.</div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">Please read the <a
                                            aria-label="Characteristics and Risks of Standardized Options"
                                            href="https://www.theocc.com/Company-Information/Documents-and-Archives/Options-Disclosure-Document"
                                            rel="noopener noreferrer" target="_blank"
                                            class="text-blue-500">Characteristics and Risks of Standardized Options</a>
                                        before you apply for option privileges.</div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">A Short Term Redemption Fee of $19.95
                                        will be applied to redemptions of mutual fund shares held less than 90 days.
                                        Broker-Assisted redemptions will incur a charge of $19.95. Redemptions of less than
                                        $500 will incur a $19.95 fee, unless the entire value of that fund is less than
                                        $500. For mutual funds transferred to Firstrade, the 90 day holding period will
                                        begin when the account transfer process is complete.</div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">Certain regulators impose transaction
                                        fees to cover their costs of regulating the brokerage industry. The fees are passed
                                        through to customers as part of normal transaction processing. These fees will
                                        appear as a line item on your trade confirmation as “FEES” or “TRANS FEE” or “OPTION
                                        FEE” depending on your transaction.</div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold">Short Borrow Fee</div>
                                        <div class="text-dark-grayish-blue text-xs pb-2">Short Borrow Fee may be assessed on
                                            any day from the settlement date of the short-sell, up to and including the
                                            settlement date of the buy-cover; the rate varies and depends on factors
                                            including but not limited to market supply/demand.</div>
                                    </div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold">SEC FEE</div>
                                        <div class="text-dark-grayish-blue text-xs pb-2">Under Section 31 of the Securities
                                            Exchange Act of 1934, U.S. national securities exchanges are obligated to pay
                                            transaction fees to the SEC based on the volume of securities that are sold on
                                            their markets. Exchange rules require their broker-dealer members to pay a share
                                            of these fees who, in turn, pass the responsibility of paying the fees to their
                                            customers. Only applies to sell transactions and appears on the trade
                                            confirmation as: “FEES”. <a aria-label="More Information"
                                                href="https://www.investor.gov/introduction-investing/investing-basics/glossary/filing-and-registration-fees"
                                                rel="noopener noreferrer" target="_blank" class="text-blue-500">More
                                                Information</a></div>
                                    </div>
                                    <div class="text-dark-grayish-blue text-xs pb-2">As of February 27, 2023, the SEC Fee
                                        rate is $8.00 for every $1,000,000 in sale proceeds.</div>
                                    <div>
                                        <div class="text-dark-grayish-blue text-xs font-bold"><a
                                                aria-label="Options Regulatory Fee (ORF)"
                                                href="https://help.en-us.firstrade.com/article/134-does-firstrade-pass-regulatory-transaction-fees-to-its-customers"
                                                rel="noopener noreferrer" target="_blank" class="text-blue-500">Options
                                                Regulatory Fee (ORF)</a></div>
                                        <div class="text-dark-grayish-blue text-xs pb-2">This fee is a customer pass-through
                                            exchange fee for all options trades, both buys and sells. It is collected by The
                                            Options Clearing Corp on behalf of the U.S. options exchanges regardless of the
                                            exchange on which the transaction takes place. Applies to both buys and sells
                                            and appears on the trade confirmation as “OPTION FEE”. </div>
                                    </div>
                                    <div class="text-dark-grayish-blue text-xs pb-6">As of September 13, 2023, the aggregate
                                        rate is $0.03175 per contract.</div>
                                </div>
                            </div>
                            <div class=" col-span-12 xl:col-span-3 xl:block">
                                <div class="flex w-full flex-col gap-5">
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">The Firstrade Difference</div>
                                        <ul class="mb-4 list-inside list-disc text-base">
                                            <li>Straightforward pricing</li>
                                            <li>Mobile Apps</li>
                                            <li>Comprehensive Research</li>
                                        </ul><a class="font-bold text-[#0066cc] hover:text-primary" href="/trading/pricing/broker-comparison">How we compare
                                            to others</a>
                                    </div>
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">Need Help?</div>
                                        <div class="flex flex-col gap-4">
                                            <div class="flex flex-row items-center gap-6">                                                
                                                <div>
                                                    <img class="w-10" src="/images/icon_help (1).svg" alt="">
                                                </div>
                                                <a href="https://help.en-US.firstrade.com" target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-[#0066cc] cursor-pointer font-bold">Help Center</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_email.svg" alt="">
                                                </div>
                                                <a class="font-bold  text-[#0066cc] hover:text-primary" href="/support/contact/email">Email Us</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_phone.svg" alt="">
                                                </div>
                                                <div><a aria-label="1.800.869.8800 " class="font-bold text-[#0066cc] hover:text-primary"
                                                        href="tel:+18008698800">Call 1.800.869.8800 </a>
                                                    <div class="text-sm">M-F, 8am-6pm EST</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Margin Rates" name="second">
                    <div class="bg-white py-11 text-left">
                        <div class="container grid grid-cols-12 gap-y-8 xl:gap-x-16">
                            <div class="col-span-12 grid grid-cols-1 gap-y-8 xl:col-span-9">
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">Margin Rates</h2>
                                    <div class="text-secondary mb-5 text-lg">Firstrade's margin rates are among the lowest
                                        available in the industry.</div>
                                    <div>
                                        <div class="grid-rows-8 grid grid-cols-12">
                                            <div
                                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-4">
                                                Dollar Range</div>
                                            <div
                                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-5">
                                                Above/Below Base Rate</div>
                                            <div
                                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                                Effective Rate</div>
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
                                        <div class="text-xs text-dark-grayish-blue my-4">As of <span
                                                class="text-xs text-dark-grayish-blue my-4">July 28, 2023</span>, the
                                            current base rate is <span
                                                class="text-xs text-dark-grayish-blue my-4">12</span>%. Subject to change
                                            without prior notice.</div>
                                        <div class="text-xs text-dark-grayish-blue my-4">When setting base rates, Firstrade
                                            considers indicators like commercially recognized interest rates, industry
                                            conditions related to credit, the availability of liquidity in the marketplace,
                                            and general market conditions.</div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">Credit Interest</h2>
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-9">
                                            Cash Balance</div>
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                            Rate</div>
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
                                    <div class="text-xs text-dark-grayish-blue my-4">We reserve the right to amend our
                                        credit interest policy from time to time in response to changes in prevailing
                                        interest rates and other factors. Credit interest rates effective <span
                                            class="text-xs text-dark-grayish-blue my-4">05/10/2023</span>.</div>
                                </div>
                                <div>
                                    <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">FDIC Insured Deposit
                                        Rates</h2>
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-9">
                                            Cash Balance</div>
                                        <div
                                            class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                            Rate</div>
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
                                    <div class="text-xs text-dark-grayish-blue my-4">FDIC Insured Deposit Rates will be
                                        based on numerous factors, including the current interest rate environment, and is
                                        subject to change without notice. FDIC insured deposit rates effective <span
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
                                        <div class="font-sans mb-4 text-lg font-semibold">The Firstrade Difference</div>
                                        <ul class="mb-4 list-inside list-disc text-base">
                                            <li>Straightforward pricing</li>
                                            <li>Mobile Apps</li>
                                            <li>Comprehensive Research</li>
                                        </ul><a class="font-bold text-[#0066cc] hover:text-primary" href="/trading/pricing/broker-comparison">How we compare
                                            to others</a>
                                    </div>
                                    <div class="bg-[#eff2f7] text-secondary rounded-lg p-7">
                                        <div class="font-sans mb-4 text-lg font-semibold">Need Help?</div>
                                        <div class="flex flex-col gap-4">
                                            <div class="flex flex-row items-center gap-6">                                                
                                                <div>
                                                    <img class="w-10" src="/images/icon_help (1).svg" alt="">
                                                </div>
                                                <a href="https://help.en-US.firstrade.com" target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="text-[#0066cc] cursor-pointer font-bold">Help Center</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_email.svg" alt="">
                                                </div>
                                                <a class="font-bold  text-[#0066cc] hover:text-primary" href="/support/contact/email">Email Us</a>
                                            </div>
                                            <div class="flex flex-row items-center gap-6">
                                                <div>
                                                    <img class="w-10" src="/images/icon_phone.svg" alt="">
                                                </div>
                                                <div><a aria-label="1.800.869.8800 " class="font-bold text-[#0066cc] hover:text-primary"
                                                        href="tel:+18008698800">Call 1.800.869.8800 </a>
                                                    <div class="text-sm">M-F, 8am-6pm EST</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Special Services" name="third">
                    <div class="bg-white py-11 text-left">
                        <div class="container">
                            <h2 class="font-sans font-bold text-primary mb-5 text-2xl xl:text-3xl">Special Services</h2>
                            <div class="mb-8 grid grid-cols-12 gap-y-6 xl:gap-x-12 xl:gap-y-12">
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-5">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Account Maintenance</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Electronic Statements (All types)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Electronic Trade confirms</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Electronic Prospectus</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Electronic Tax Documents (All types)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-5">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Investing</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Real-Time Quotes</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            FREE</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Streaming Quotes</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            FREE</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Dividend Reinvestment Plan (DRIP)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            FREE</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Periodic Investment Plan</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            FREE</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Banking</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            ACH Electronic Transfer</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Regular Check Delivery</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Outgoing Wire Transfers (Domestic)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Outgoing Wire Transfers (Foreign)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Overnight Check Fee - Continental U.S. account only</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $50</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-6">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Transfer</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Internal Asset Transfers</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Third Party Distribution Notification</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $20</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            DTC Delivery (per security)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $50</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            ACAT Transfer Out</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Partial ACAT Transfer Out</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $55</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-4">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Retirement</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            IRA Annual Fee, IRA Account Set-up Fee, IRA Maintenance Fee</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            IRA Roth Conversion &amp; Recharacterization Processing Fee</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            IRA Termination Fee</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-4">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Settlement</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Foreign Security Transfer Fee</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Foreign Free Receives/Delivers</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $75</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            ADRs Custody Fee</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $0.01~0.05/share(1)</div>
                                    </div>
                                </div>
                                <div class="col-span-12 xl:col-span-6">
                                    <div class="grid grid-cols-12 grid-rows-3">
                                        <div
                                            class="text-lg font-bold  border-b-[3px] border-solid border-grayish-blue text-secondary py-1 col-span-12">
                                            Margin</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Mailgrams / NYSE Extensions (per item)</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-9">
                                            Sell-Out / Buy-In Notices</div>
                                        <div
                                            class="text-secondary text-base border-b border-solid border-grayish-blue py-0 flex items-center col-span-3 text-right">
                                            $25</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8"><a rel="noopener noreferrer" target="_blank" class="text-blue-500"
                                    href="https://www.firstrade.com/forms/en-us/exception_fees.pdf?v=20210603">View our full
                                    list of Exception Fees (PDF)</a></div>
                            <div class="text-dark-grayish-blue mb-8 text-xs">(1) ADR agents that sponsor American Depositary
                                Receipts (ADRs) are permitted to charge ADR holders an annual custody fee. The fee is
                                administered through the Depository Trust Company (DTC) which typically will be subtracted
                                from the gross dividend amount payable or collected from Firstrade (or Apex Clearing) by the
                                DTC and deducted from your account if the ADR does not pay a dividend. The fee will be
                                posted to your periodic account statement as an "ADR Pass-Thru Charge".</div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Broker Comparison" name="fourth">
                    <div class="bg-white py-11 text-secondary text-left">
                        <div class="container">
                            <h2 class="mb-5 font-sans font-bold text-2xl text-primary xl:text-3xl">Broker Comparison</h2>
                            <div class="mb-8 text-lg text-secondary">See how Firstrade compares with other online brokers.
                            </div>
                            <div class="my-12">
                                <div class="font-sans text-secondary mb-4 text-center text-xl font-semibold lg:text-2xl">
                                    Unbeatable Savings on Options Contracts</div>
                                <div class="overflow-x-auto pb-4">
                                    <div class="grid-rows-7 grid w-[1100px] xl:w-[1248px] grid-cols-12">
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 pl-1 sm:pl-2.5">
                                            Broker</div>
                                        <div
                                            class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2">
                                            Per Contract</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-xl text-liberty bg-lividity pl-1 sm:pl-2.5">
                                            Firstrade</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                            TD Ameritrade</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                            E*Trade</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                            Charles Schwab</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                            Fidelity</div>
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
                                        <div
                                            class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                            Merill Edge</div>
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
                                <div class="font-sans text-secondary mb-4 text-center text-xl font-semibold lg:text-2xl">$0
                                    Commissions for More Investment Products</div>
                                <div>
                                    <div class="overflow-x-auto pb-4">
                                        <div class="grid w-[1100px] xl:w-[1248px] grid-cols-12 grid-rows-6">
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 flex items-center pl-1 sm:pl-2.5">
                                                Commissions</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center !border-b-[3px]">
                                                Firstrade</div>
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                                TD Ameritrade</div>
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                                E*Trade</div>
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                                Charles Schwab</div>
                                            <div
                                                class="text-base font-bold border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-2 text-center flex items-center justify-center">
                                                Fidelity</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                                Online Stock Orders</div>
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
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                                Online Option Orders</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/Contract</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/Contract</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/Contract</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $0 + $0.65/Contract</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                                Online Mutual Fund Trades</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center">
                                                $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $49.99</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                Based on prospectus / $0</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                Up to $74.95</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center">
                                                $49.95</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                                Broker-Assisted Stock &amp; Options Trades</div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center font-bold text-lg text-liberty bg-lividity text-center flex items-center justify-center flex flex-col">
                                                <div class="text-liberty text-lg font-bold">$19.95</div>
                                                <div class="text-liberty text-base font-bold">(+$0.50/Contract)</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/Contract)</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/Contract)</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$25</div>
                                                <div class="text-base">(+$0.65/Contract)</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate text-center justify-center flex flex-col">
                                                <div class="text-base">$32.95</div>
                                                <div class="text-base">(+$0.65/Contract)</div>
                                            </div>
                                            <div
                                                class="border-b border-solid border-grayish-blue py-3 col-span-2 flex items-center text-base text-slate pl-1 sm:pl-2.5">
                                                Minimum Initial Deposit</div>
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
                                    <div class="text-dark-grayish-blue text-xs">Pricing for competitors were obtained from
                                        their published web sites on June 5, 2023. Some brokers may lower the fees listed
                                        above if certain balance or activity requirements are met. The competitor fees are
                                        believed to be accurate, but may be subject to change. Please contact each
                                        individual firm to confirm their latest fee schedules.</div>
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