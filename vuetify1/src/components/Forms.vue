<template>
    <v-container fluid>
      <v-card>
        <v-card-title>
          Form Validation
        </v-card-title>

        <v-card-text>
          <!--invalid: 전체조건O= true, 전체조건X=false-->
          <!-- -->
          <ValidationObserver ref="observer" v-slot="{invalid}"> 
            <v-form @submit.prevent="submit">
              <ValidationProvider rules="required|max:10,20,30" name="Name" v-slot="{errors}">
                <v-text-field v-model="name" label="Name" :counter="10" :error-messages="errors"/>
              </ValidationProvider>
              
              <ValidationProvider :rules="{
                required : true,
                numeric : true,   // 숫자만
                digits : 11       // 글자수체크
              }" name="PhoneNumber" v-slot="{errors}">
                <v-text-field v-model="phoneNumber" label="PhoneNumber" :counter="11" :error-messages="errors"/>
              </ValidationProvider>
              
              <ValidationProvider :rules="{
                required : true,
                email : true,
              }" name="E-Mail" v-slot="{errors}">
                <v-text-field v-model="email" label="E-Mail" :error-messages="errors"/>
              </ValidationProvider>
              
              <ValidationProvider :rules="{
                required : true
              }" name="Select" v-slot="{errors}">
                <v-select v-model="select" label="Select" :items="items" :error-messages="errors"/>
              </ValidationProvider>
              
              <ValidationProvider :rules="{
                required : true
              }" name="CheckBox" v-slot="{errors}">
                <v-checkbox v-model="checkBox" label="CheckBox" value="1" :error-messages="errors" class="pb-12"/>             
              </ValidationProvider>
            </v-form>
            <v-btn type="submit" color="primary" class="mr-4" :disabled="invalid" @click="submit()">Submit</v-btn>          
            <v-btn type="submit" @click="clear()">Clear</v-btn>
          </ValidationObserver>
          
          
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>

//1. extend: 함수, ValidationObserver:전체감싸기, ValidationProvider:원하는거 감싸기
import {extend, ValidationObserver, ValidationProvider } from "vee-validate"

// max조건
//: params:전달된10,20,30
//: v-slot: {errors}
extend("max", (val,params) =>{
  const limit = params[0]
  if (val && val.length > limit){
    return `해당 필드는 ${limit}자를 초과 할 수 없습니다.`
  }
  return true
});

//2. 
//import { max } from "vee-validate/dist/rules"

//max조건
//: _field_ : ValidationProvider의 Name속성
//: length :전달된10,20,30
//extend('max', {
//  ...max,
//  message : '{_field_}는 {length}를 초과 할 수없습니다.'
//})

import {required, numeric, digits, email} from "vee-validate/dist/rules"
extend('required', {
  ...required,
  message : '{_field_}는 필수값입니다.'
});
extend('numeric',{
  ...numeric,
  message : '{_field_}는 숫자로만 구성되어야합니다.'
});
extend('digits',{
  ...digits,
  message : '{_field_}는 11자리여야 합니다.'
});
extend('email',{
  ...email,
  message : '잘못 입력된 이메일 주소입니다.'
});

export default {
    data(){
        return {
            name : null,
            phoneNumber : null,
            email : null,
            
            select : null,
            items : [
              {text : "아이템1", value: 1},
              {text : "아이템2", value: 2},
              {text : "아이템3", value: 3},
            ],

            checkBox: null
        }
    },

    components : {
      ValidationObserver,
      ValidationProvider
    },

    methods : {
      submit(){
        console.log('sumbit')
        this.$refs.observer.validate().then(res => {
          if(res) {
            alert('양식제출')
          }
        });
      },

      clear(){
        this.name = null,
        this.phoneNumber = null,
        this.email = null,
        this.select = null,
        this.checkBox = null
      }
    }
      
}
</script>

<style>

</style>