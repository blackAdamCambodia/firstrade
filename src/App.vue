<script>
import TopMenu from './components/TopMenu.vue'
import FooterView from './components/FooterView.vue'

export default {
  data() {
    return {
      closeToggle: false,      
    }
 
  },
  methods: {
    receiveEmit() {
      this.closeToggle = !this.closeToggle;
    },
   
  },
  
 

}
</script>

<template>
  <div>
    <TopMenu :close-toggle="closeToggle" />
    <div>
      <router-view @toggle-function="receiveEmit"></router-view>
    </div>
    <FooterView />

  </div>
</template>

<style scoped></style>
