<template>
  <v-container fluid>
    <v-card class="pa-3">
        
        <!--안에 gutter크기 (24) -> dense(8) -> no-gutters(x)-->
        <!-- 수평정렬 : align =====  -->
        <!-- 수직정렬 : justify |||||| (단 cols="auto"필요) -->
        <!-- v-col하나씩 수평정렬 : align-self -->

        <v-row :style="{height : '120px'}" align="center" class="yellow">
            <v-col align-self="start"><v-card color="" class="pa-3" >Col1</v-card></v-col> 
            <v-col align-self="center"><v-card color="" class="pa-3">Col2</v-card></v-col> 
            <v-col align-self="end"><v-card color="" class="pa-3">Col3</v-card></v-col> 
        </v-row>     
        
        <v-row :style="{height : '120px'}" align="end" class="blue">
            <v-col><v-card color="" class="pa-3">Col1</v-card></v-col> 
            <v-col><v-card color="" class="pa-3">Col2</v-card></v-col> 
            <v-col><v-card color="" class="pa-3">Col3</v-card></v-col> 
        </v-row>
        
        <v-row :style="{height : '120px'}" justify="end" class="grey">
            <v-col cols="auto"><v-card color="" class="pa-3">Col1</v-card></v-col> 
            <v-col cols="auto"><v-card color="" class="pa-3">Col2</v-card></v-col> 
            <v-col cols="auto"><v-card color="" class="pa-3">Col3</v-card></v-col> 
        </v-row>      
    </v-card>

  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>