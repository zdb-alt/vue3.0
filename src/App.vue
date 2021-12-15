<template>
  <div class="container">
    <!-- 头部 -->
    <Nav :user="testUser"></Nav>
    <!-- 列表 -->
    <colum-list :list="list"></colum-list>
    <!-- form表单 -->
    <validate-from @form-submit="onFormSubmit">
      <div class="mb-3">
        <!-- 自定义input -->
        <validate-input :rules="emailRules" label="email" v-model="emailVal" placeholder="请输入邮箱地址：" type="text" ref=inputRef></validate-input>
      </div>
      <div class="mb-3">
        <validate-input :rules="passwordRules" v-model="passwordVal" label="password" placeholder="请输入密码：" type="password"></validate-input>
      </div>
      <!-- <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="emailRef.val"  @blur="validateEmail">
    <div class="form-text" v-if="emailRef.error" :style="{ color:'red' }">{{ emailRef.message }}</div>
  </div> -->
      <!-- <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div> -->
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumList, { ColumProps } from "@/components/ColumList.vue";
import Nav, { UserProps } from "@/components/Nav.vue";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateFrom from "@/components/ValidateFrom.vue";
const testData: ColumProps[] = [
  {
    id: 1,
    title: "test1专栏",
    description: "ceshisahdlijsalkdjlksajdklasjdlkjasldkjaslkdja",
    avatar: "",
  },
  {
    id: 2,
    title: "test2专栏",
    description: "ceshisahdlijsalkdjlksajdklasjdlkjasldkjaslkdja",
    avatar:
      "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5654.jpg",
  },
  {
    id: 3,
    title: "test3专栏",
    description: "ceshisahdlijsalkdjlksajdklasjdlkjasldkjaslkdja",
    avatar:
      "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5654.jpg",
  },
  {
    id: 4,
    title: "test4专栏",
    description: "ceshisahdlijsalkdjlksajdklasjdlkjasldkjaslkdja",
    avatar:
      "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_5654.jpg",
  },
];
const testUser: UserProps = {
  islogin: false,
  name: "zhang",
};
const emailPattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
export default defineComponent({
  name: "App",
  components: {
    ColumList,
    Nav,
    ValidateInput,
    ValidateFrom,
  },
  setup() {
    const inputRef=ref<any>()    
    const emailVal = ref("");
    const emailRules: RulesProp = [
      // 邮箱规则
      { type: "required", message: "email no kong!" },
      { type: "email", message: "emial 格式错误！" },
    ];
    const passwordVal = ref("");
    const passwordRules: RulesProp = [
      // 邮箱规则
      { type: "required", message: "密码不能为空！" },
    ];
    // const passWordRef = reactive({
    //   val: "",
    //   error: false,
    //   message: "",
    // });
    // const emailRef = reactive({
    //   val: "",
    //   error: false,
    //   message: "",
    // });
    const onFormSubmit=(result:boolean)=>{
      console.log(inputRef.value.validateInput());
      
    }
    // const validateEmail=()=>{
    //   if(emailRef.val.trim()===''){
    //     emailRef.error=true
    //     emailRef.message='邮箱不能为空！'
    //   }else if(!emailPattern.test(emailRef.val)){
    //       emailRef.error=true
    //     emailRef.message='邮箱格式错误！'
    //   }else{
    //     emailRef.error=false
    //   }
    // }

    return {
      list: testData,
      testUser,
      // emailRef,
      // validateEmail, // 抽离组件
      emailRules,
      emailVal,
      passwordRules,
      passwordVal,
      onFormSubmit,
      inputRef
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
