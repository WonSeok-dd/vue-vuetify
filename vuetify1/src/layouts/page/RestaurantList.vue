<template>
  
  <v-container fluid>
    
    <v-row>
      <v-col v-for="rtr,i in restaurants" :key="i" cols="12" sm="6" md="4" lg="3">
        <Restaurant v-bind:rtr="rtr"></Restaurant>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

import Restaurant from "@/components/Restaurant.vue"
import {api} from "@/api.js"  //axios로 변경

export default {

  data(){
    return {
      restaurants : []
    }
  },

  mounted(){
    
    // axios를 통해 음식점 정보 부르기 
    api.restaurant.restaurantAll(res => {

      // 음식점state 할당 
      this.restaurants = res.restaurants

    });
  },

  components : {
    "Restaurant": Restaurant
  }
}
</script>

<style>

</style>