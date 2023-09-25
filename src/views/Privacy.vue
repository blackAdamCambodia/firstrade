<template>
    <div @click="toggleFunction">
        <div class="container">
                <div class="wrapper my-6 lg:my-10 text-left text-secondary mx-8">
                    <h1 class="mb-4 text-4xl font-sans font-[800] text-primary">{{ $t('privacy_page.privacy_and_security_policy') }}</h1>
                    <p class="text-md my-6">{{ $t('privacy_page.firstrade_is_committed_to_protecting_our_clients') }}</p>
                    <p class="text-blue-500 pointer mb-4"><a href="https://www.firstrade.com/forms/en-us/privacy_policy.pdf?v=20221219" target="_blank"
                            rel="noopener noreferrer">Firstrade Privacy Policy (PDF)</a></p>
                    <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.what_types_of_nonpublic_personal') }}</h3>
                    <p>{{ $t('privacy_page.when_you_apply_for_or_maintain_an_account') }}:</p>
                    <ul class="list-disc list-inside">
                        <li>{{ $t('privacy_page.information_provided_by_you_such_as_your_name') }}</li>
                        <li>{{ $t('privacy_page.transaction_history_with_us_such_as_account') }}</li>
                        <li>{{ $t('privacy_page.in_some_cases') }}</li>
                    </ul>
                    <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.what_types_of_nonpublic_personal_identifiable') }}</h3>
                    <p>{{ $t('privacy_page.firstrade_discloses_nonpublic_personal_identifiable_information_about') }}</p>
                    <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.what_are_my_rights_to_opt_out_of_disclosure') }}</h3>
                    <p class="py-2">{{ $t('privacy_page.if_you_prefer_that_we_do_not_disclose_nonpublic') }}</p>
                    <p>{{ $t('privacy_page.you_may_provide_your_name_address') }}</p>
                <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.to_what_other_types_of_entities_might') }}</h3>
                <p class="py-2">{{ $t('privacy_page.firstrade_may_disclose_information_we_collect_from') }}</p>
                <p>{{ $t('privacy_page.we_disclose_information_to_nonaffiliated_companies') }}</p>
                <p class="py-2">{{ $t('privacy_page.finally_firstrade_discloses_nonpublic_personal_information') }}</p>
                <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.how_does_firstrade_use_your_personal_identifiable_information') }}</h3>

                <p>{{ $t('privacy_page.we_use_your_information_to_fulfill_your_requests') }}</p>
                <p class="py-2">{{ $t('privacy_page.firstrade_securities_inc_uses_third_parties_to_gather') }}</p>

                <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.how_does_firstrade_protect_the_confidentiality') }}</h3>
                <p class="py-2">{{ $t('privacy_page.we_maintain_physical_electronic_and_procedural') }}</p>
                <p>{{ $t('privacy_page.access_to_your_nonpublic_personal_information_is_limited') }}</p>
                <p class="py-2">{{ $t('privacy_page.you_can_take_steps_to_maximize_your_security') }}</p>
                <h3 class="text-2xl font-bold my-4 font-sans">{{ $t('privacy_page.what_should_i_know_about_cookies') }}</h3>
                <p class="py-2">{{ $t('privacy_page.cookies_are_elements_of_data_that_a_website_can_send') }}</p>
                <p class="mb-2">{{ $t('privacy_page.we_use_cookies_to_provide_you_with_the_best') }}</p>
                <p>{{ $t('privacy_page.for_answers_to_other_questions') }}</p>
            </div>
        </div>
    </div>
</template>
<script>
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