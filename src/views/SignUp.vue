<template>
    <div class="bg-primary absolute z-10 overflow-hidden top-0 w-full">
        <div class="container mx-auto flex justify-between items-center py-6 max-w-xl px-6">
            <div>
                <img src="/images/ftlogo-white.4a462454.svg" alt="">
            </div>
            <div class=" text-white text-sm">
                <p>{{ $t('signup_page.proudly_serving_investors_since') }}</p>
                <p class="text-right">{{ $t('signup_page.member') }} FINRA/SIPC</p>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex-col justify-center items-center py-6 max-w-xl px-6">
        <div class="">
            <h3 class="text-2xl text-primary">{{ $t('signup_page.open_an_international_account_in_just_a_few_minutes') }}</h3>
            <p class="py-4 text-secondary">{{ $t('signup_page.options_contract_fees_no_account_minimum') }}</p>
        </div>
        <div class="flex  justify-center items-center">
            <div class="self-center w-full border-b-transparent">
                <button class="border-b text-blue-500 hover:border-b-blue-500 w-full">{{ $t('signup_page.text_message') }}</button>
            </div>
            <div class="self-center w-full  ">
                <button class="border-b text-blue-500 hover:border-b-blue-500 w-full">{{ $t('signup_page.phone_call') }}</button>
            </div>
        </div>
        <div>
            <form action="">
                <div class="mt-4">
                    <el-input v-model="inputNumber" :placeholder="$t('signup_page.mobile_number')" class="input-with-select ">
                        <template #prepend>
                            <el-select v-model="selectCountry" placeholder="Select" style="width: 115px ; ">
                                <span
                                    class="flex items-center text-secondary pl-4 bg-primaryLight justify-center">USA<el-option
                                        label=" +1" value="1" /></span>
                                <span
                                    class="flex items-center text-secondary pl-4 bg-primaryLight justify-center">繁體中文<el-option
                                        label=" +886" value="2" /></span>
                                <span
                                    class="flex items-center text-secondary pl-4 bg-primaryLight justify-center">简体中文<el-option
                                        label=" +86" value="3" /></span>
                            </el-select>
                        </template>
                        <template #append>
                            <p class="text-blue-500 text-sm ">{{ $t('signup_page.get_verification_code') }}</p>
                        </template>
                    </el-input>
                    <el-input class="py-4" v-model="verificationCode" type="number" :placeholder="$t('signup_page.enter_verification_code')"  />
                </div>
                <el-button class="w-full uppercase " style="background-color:#e87431;color:white;" size="large" >{{ $t('button.continue') }}</el-button>
            </form>
        </div>
        <hr class="my-8">
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {

    data() {
        return {
           form:reactive({
           inputNumber:'',
           selectCountry:'',
           verificationCode:'',
        })
        };
    },
   

};
</script>
<style scoped></style>