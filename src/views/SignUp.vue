<template>
    <div class="bg-primary">
        <div class="container mx-auto flex justify-between items-center py-6 max-w-xl ">
            <div>
                <img src="/images/ftlogo-white.4a462454.svg" alt="">
            </div>
            <div class=" text-white text-sm">
                <p>Proudly serving investors since 1985</p>
                <p class="text-right">Member FINRA/SIPC</p>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex-col justify-center items-center py-6 max-w-xl ">
        <div class="">
            <h3 class="text-2xl text-primary">Open an International Account in just a Few Minutes</h3>
            <p class="py-4">$0 Commission, $0 Options Contract Fees. No Account Minimum.</p>
        </div>
        <div class="flex  justify-center items-center">
            <div class="self-center w-full border-b-transparent">
                <button class="border-b hover:border-b-blue-500 w-full">Text Message</button>
            </div>
            <div class="self-center w-full  ">
                <button class="border-b hover:border-b-blue-500 w-full">Phone Call</button>
            </div>
        </div>
        <div>
            <form action="">
                <div class="mt-4">
                    <el-input v-model="inputNumber" placeholder="Mobile Number" class="input-with-select ">
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
                            <p class="text-blue-500 text-sm ">Get Verification Code</p>
                        </template>
                    </el-input>
                    <el-input class="py-4" v-model="verificationCode" type="number" placeholder="Enter Verification Code"  />
                </div>
                <el-button class="w-full uppercase " style="background-color:#e87431;color:white;" size="large" >Continue</el-button>
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