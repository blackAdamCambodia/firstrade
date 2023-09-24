<template>
    <footer class="globals bg-primaryLight relative w-full bg-smoke">
        <div class="container grid grid-cols-1 gap-y-6 divide-y divide-grayish-blue py-10 mx-auto">
            <div class="flex  items-start justify-center sm:items-center sm:gap-7 lg:flex-row lg:justify-between lg:gap-0 ">
                <div class="grid grid-cols-1 grid-rows-3 gap-4 sm:flex sm:flex-row sm:items-center sm:justify-start">
                    <div class="mr-2 hidden font-lato text-xl text-secondary lg:block">{{ $t('pricing_page.need_help') }}</div>
                    <div class="mr-0 flex flex-col items-start justify-start sm:mr-4 sm:flex-row sm:items-center">
                        <div class="mb-1 mr-0 font-lato text-lg text-secondary sm:mb-0 sm:mr-1.5 sm:text-xl">{{ $t('footer.US_toll_free') }}
                        </div><a aria-label="1.800.869.8800" href="tel:+18008698800"
                            class="font-lato text-lg font-bold text-secondary sm:text-xl">1.800.869.8800</a>
                    </div>
                    <div class="mr-0 flex flex-col items-start justify-start sm:mr-4 sm:flex-row sm:items-center">
                        <div class="mb-1 mr-0 font-lato text-lg text-secondary sm:mb-0 sm:mr-1.5 sm:text-xl">{{ $t('footer.outside_the_US') }}
                        </div><a aria-label="1.718.961.6600" href="tel:+17189616600"
                            class="font-lato text-lg font-bold text-secondary sm:text-xl">1.718.961.6600</a>
                    </div>
                    <div class="font-lato text-lg font-bold text-secondary md:text-xl">
                        <a href="/support/contact/email">{{ $t('pricing_page.email_us') }}</a>
                    </div>
                </div>
                <a class="font-semibold bg-warning hover:bg-[#e67021] py-3  w-52 rounded-[4px] text-white"
                    href="https://signup.firstrade.com/apply/en-us/">{{ $t('hompage.open_account') }}</a>
            </div>

            <div class="flex flex-col-reverse items-start justify-between pt-6 sm:flex-row sm:items-start">
                <div
                    class="mt-4 flex flex-col items-start justify-start gap-6 sm:mt-0 sm:flex-row md:gap-14 lg:gap-28 xl:gap-60">
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">{{ $t('footer.company') }}</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/about">{{ $t('footer.about') }}</a></li>
                            <li><a class="text-secondary" href="/trading/pricing">{{ $t('pricing_page.pricing') }}</a></li>
                            <li><a class="text-secondary" href="/press">{{ $t('footer.press') }}</a></li>
                            <li><a class="text-secondary" href="/support/contact">{{ $t('support') }}</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">{{ $t('resources') }}</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/accounts/acat-transfer">{{ $t('footer.transfer_to_firstrade') }}</a></li>
                            <li><a class="text-secondary" href="/accounts/international">{{ $t('footer.international_accounts') }}</a></li>

                        </ul>
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <h2 class="mb-2.5 font-sans text-base font-bold text-secondary">{{ $t('footer.legal') }}</h2>
                        <ul class="m-0 list-none text-left">
                            <li><a class="text-secondary" href="/legal/terms">{{ $t('footer.terms_conditions') }}</a></li>
                            <li><a class="text-secondary" href="/legal/privacy">{{ $t('footer.privacy_policy') }}</a></li>
                            <li><a class="text-secondary" href="/legal/accessibility">{{ $t('footer.accessibility_statement') }}</a></li>

                            <li><a class="text-secondary" href="/legal/business-continuity">{{ $t('footer.business_continuity') }}</a></li>

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
                        <div class="mb-3 text-secondary">{{ $t('topMenu.languages') }}</div>
                        <ul class="m-0 flex list-none items-center justify-between text-secondary">
                            <li v-for="(lang) in lang" :key="lang.id" :value="lang.value"><button
                                    v-on:click="switchLanguage(lang.value)" type="button" class="text-sm">{{ lang.name
                                    }}</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="pt-6 md:mb-7.5 text-left">
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.brokerage_products_and_services_offered_by_firstrade_securities') }}
                </p>
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.review_firstrade_brokerage_services_with') }} <a
                        aria-label="FINRA BrokerCheck" target="_blank" rel="noopener noreferrer"
                        href="https://brokercheck.finra.org/"
                        class="text-blue-500 hover:text-primary active;text-primary">{{ $t('link.finra_brokerCheck') }}</a>.</p>
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.online_trading_has_inherent_risk_due_to_system') }}</p>

                <p class="mb-4 text-xs text-secondary" v-html="$t('footer.options_trading_involves_risk_and_is_not_suitable')"></p>
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.ETF_trading_involves_risks') }} <a class="text-blue-500 hover:text-primary active;text-primary"
                        href="/trading/etfs#etf-disclaimer">{{ $t('link.ETF_information_and_disclosure') }}</a>.</p>
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.investors_should_consider_the_investment_objectives') }}<a
                        aria-label="service@firstrade.com" href="mailto:service@firstrade.com"
                        class="text-blue-500 hover:text-primary active;text-primary">service@firstrade.com</a>.</p>
                <p class="mb-4 text-xs text-secondary">{{ $t('footer.margin_trading_involves_interest_charges_and_risks') }}<a aria-label="Margin Disclosure" target="_blank" rel="noopener noreferrer"
                        href="https://www.firstrade.com/forms/en-us/margin_disclosure.pdf?v=20230127"
                        class="text-blue-500 hover:text-primary active;text-primary">{{ $t('link.margin_disclosure_Statement') }}</a>, <a
                        aria-label="Margin Agreement" target="_blank" rel="noopener noreferrer"
                        href="https://www.firstrade.com/forms/en-us/margin_application.pdf?v=20230131"
                        class="text-blue-500 hover:text-primary active;text-primary">{{ $t('link.margin_agreement') }}</a>, and <a
                        aria-label="FINRA Investor Information" target="_blank" rel="noopener noreferrer"
                        href="https://www.finra.org/investors/investing"
                        class="text-blue-500 hover:text-primary active;text-primary">{{ $t('link.FINRA_Investor_Information') }}</a>.
                        {{ $t('footer.these_disclosures_contain_information_on_our_lending') }}</p>
                <p class="mb-4 text-xs text-secondary" v-html="$t('footer.Online_trades_are_for_stocks')"></p>
                <p class="mb-4 text-xs text-secondary" v-html="$t('footer.crypto_trading_on_firstrade_platforms_is_served')"></p>
                <p class="mb-4 text-xs text-secondary">{{ $t("footer.any_specific_securities_or_types_of_securities") }}</p>
                <p class="mb-4 text-xs text-secondary">{{ $t("footer.this_is_not_an_offer_or_solicitation_in_any_jurisdiction") }}</p>
                <p class="mb-4 text-xs text-secondary">{{ $t("footer.system_response_and_access_times_may_vary") }}</p>
                <p class="mb-4 text-xs text-secondary">{{ $t("footer.All_rights_reserved_Member") }}
                    <a class="text-blue-500 hover:text-primary" aria-label="FINRA" target="_blank" rel="noopener noreferrer"
                        href="https://www.finra.org/#/">{{ $t("link.finra") }}</a>/<a class="text-blue-500 hover:text-primary"
                        aria-label="SIPC" target="_blank" rel="noopener noreferrer" href="https://www.sipc.org/">{{ $t("link.sipc") }}</a>.
                </p>
            </div>
        </div>
    </footer>
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
                    name: '简体',
                    value: 'cn'
                },
                {
                    id: 3,
                    name: '繁體',
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
<style scoped></style>