<template>
  <v-container>
    <!--1번-->
    <v-card>
        <v-card-title>
            $vuetify.breakpoint.name : {{ $vuetify.breakpoint.name }}
        </v-card-title>
        <v-container class="grey lighten-3">
            <v-card class="pa-3" outlined :height="height"> <!--computed height()로 높이 조절-->
                콘텐츠
            </v-card>
        </v-container>
    </v-card>
    
    <!--2번-->
    <v-card class="mt-5">
        <v-card-title>
            $vuetify.breakpoint.mobile : {{ $vuetify.breakpoint.mobile }} {{$vuetify.breakpoint.mobileBreakpoint}} <!--boolean , Number-->
        </v-card-title>
        <v-container class="grey lighten-3">
            <v-dialog v-model="dialog" width="500" :fullscreen="$vuetify.breakpoint.mobile"> <!--breakpoint로 fullscreen O,X(boolean)-->
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Click Me</v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    제목
                  </v-card-title>

                  <v-card-text>
                    내용내용내용내용내용
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
                  </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-card>


    <!--3번-->
    <v-card class="mt-5">
        <v-card-title>
            $vuetify.breakpoint.object 
        </v-card-title>
        <v-container class="grey lighten-3">
            <v-card class="pa-3" outlined>
                $vuetify.breakpoint.xs : {{$vuetify.breakpoint.xs}} <br> <!--xs이면 true(boolean)-->
                $vuetify.breakpoint.smAndDown : {{$vuetify.breakpoint.smAndDown}} <br> <!--sm이하이면 true(boolean)-->
                $vuetify.breakpoint.height : {{$vuetify.breakpoint.height}} <br> <!--height Number-->
                $vuetify.breakpoint.width : {{$vuetify.breakpoint.width}} <br> <!--width Number-->
            </v-card>
        </v-container>
    </v-card>


  </v-container>
</template>

<script>

export default {

    data(){
        return {
            dialog : false
        }
    },

    computed : {
        height() {
            switch(this.$vuetify.breakpoint.name) {
                case "xs" : return 100;
                case "sm" : return 200;
                case "md" : return 300;
                case "lg" : return 400;
                default: return 500;
            }
        }
    }
    
}
</script>

<style>

</style>