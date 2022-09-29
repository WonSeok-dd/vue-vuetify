<template>
  <v-container>
    <v-row>
        <!--1줄에 몇개(breakpoint) => cols,xs=1개 sm-2개 md-3개 lg-4개-->
        <!-- cols:auto => 내부요소의 크기만큼-->
        <v-col v-for="cnt in 12" :key="cnt" cols="auto" sm="6" md="4" lg="3">
            <v-card class="pa-5">Col</v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>