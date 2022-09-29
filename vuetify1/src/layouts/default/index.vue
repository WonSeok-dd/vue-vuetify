<template>
  <v-app>
    
    <DefaultBar @drawer="drawer = !drawer"></DefaultBar>

    <DefaultNavigationDrawer v-model="drawer"></DefaultNavigationDrawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>

import DefaultBar from "./AppBar.vue"
import DefaultNavigationDrawer from "./NavigationDrawer.vue"

export default {
    
    data () {
      return {

        drawer : false,

      }
    },

    components : {
      "DefaultBar" : DefaultBar,
      "DefaultNavigationDrawer" : DefaultNavigationDrawer,
    }
}
</script>

<style>

</style>