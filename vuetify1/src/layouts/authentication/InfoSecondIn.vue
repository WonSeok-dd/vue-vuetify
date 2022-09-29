<template>

    <v-container class="fill-height">
        <v-row justify="center">
            <v-col cols="auto">
                <v-card width="460">
                        
                        <v-card>
                            <v-card-text class="pa-4 text--primary font-weight-black">당신의 성별은 무엇인가요?</v-card-text>
                            <v-list>
                                <v-list-item-group v-model="GenderModel" mandatory color="indigo">
                                  <v-list-item v-for="(item, i) in GenderItems " :key="i" class="mb-1 rounded-pill">

                                    <v-list-item-icon>
                                      <v-icon>{{item.icon}}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <div class="text--primary font-weight-bold">{{item.title}}</div>
                                    </v-list-item-content>

                                    <v-list-item-icon>
                                      <v-icon>mdi-check</v-icon>
                                    </v-list-item-icon>

                                  </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                        <v-divider></v-divider>
                        <v-card>
                            <v-card-text class="pa-4 text--primary font-weight-black">당신의 키는 얼마인가요?</v-card-text>
                            <v-card-text>
                                <v-row class="mb-4" justify="space-between">
                                    <v-col class="text-left">
                                        <span class="text-h2 font-weight-light" v-text="height"></span>
                                        <span class="subheading font-weight-light mr-1">cm</span>
                                    </v-col>
                                </v-row>

                                <v-slider v-model="height" :color="height_color" track-color="grey" min="100" max="250">
                                    <template v-slot:prepend>
                                      <v-icon :color="height_color" @click="height_decrement">mdi-minus</v-icon>
                                    </template>

                                    <template v-slot:append>
                                      <v-icon :color="height_color" @click="height_increment">mdi-plus</v-icon>
                                    </template>
                                </v-slider>
                            </v-card-text>
                        </v-card>
                        
                        <v-divider></v-divider>
                        <v-card>
                            <v-card-text class="pa-4 text--primary font-weight-black">당신의 몸무게는 어떤가요?</v-card-text>
                            <v-card-text>
                                <v-row class="mb-4" justify="space-between">
                                    <v-col class="text-left">
                                        <span class="text-h2 font-weight-light" v-text="weight"></span>
                                        <span class="subheading font-weight-light mr-1">kg</span>
                                    </v-col>
                                </v-row>

                                <v-slider v-model="weight" :color="weight_color" track-color="grey" min="0" max="200">
                                    <template v-slot:prepend>
                                      <v-icon :color="weight_color" @click="weight_decrement">mdi-minus</v-icon>
                                    </template>

                                    <template v-slot:append>
                                      <v-icon :color="weight_color" @click="weight_increment">mdi-plus</v-icon>
                                    </template>
                                </v-slider>
                            </v-card-text>
                        </v-card>
                        
                        <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    data(){
        return {
            GenderModel : this.$store.state.infoGender,
            GenderItems : [
              { title: '남자', icon: 'mdi-human-male' },
              { title: '여자', icon: 'mdi-human-female' },
            ],

            height: this.$store.state.infoHeight,
            weight : this.$store.state.infoWeight
        }
    },
    computed: {
        height_color () {
            if (this.height < 140) return 'red'
            if (this.height < 210) return 'green'
            if (this.height < 250) return 'red'
            return 'red'
        },

        weight_color () {
            if (this.weight < 30) return 'red'
            if (this.weight < 150) return 'green'
            if (this.weight < 200) return 'red'
            return 'red'
          },
    },

    methods: {
        height_decrement () {
          this.height--
        },
        height_increment () {
          this.height++
        },
        weight_decrement () {
          this.weight--
        },
        weight_increment () {
          this.weight++
        },
    },
}
</script>

<style>

</style>