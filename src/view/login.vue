<template>
    <div>
         <!-- form表单 -->
    <validate-from @form-submit="onFormSubmit">
      <div class="mb-3">
        <!-- 自定义input -->
        <validate-input :rules="emailRules" label="email" v-model="emailVal" placeholder="请输入邮箱地址：" type="text" ref=inputRef></validate-input>
      </div>
      <div class="mb-3">
        <validate-input :rules="passwordRules" v-model="passwordVal" label="password" placeholder="请输入密码：" type="password"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-from>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore} from 'vuex'
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateFrom from "@/components/ValidateFrom.vue";
import { useRouter} from "vue-router";
const emailPattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
export default defineComponent({
  name: "App",
  components: {
    ValidateInput,
    ValidateFrom,
  },
  setup() {
    const inputRef=ref<any>()    
    const emailVal = ref("");
    const router=useRouter()
    const store =useStore()
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
    const onFormSubmit=(result:boolean)=>{
      if(result){
        router.push('/')
        store.commit('login')
      }
      
    }


    return {
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


<style lang="scss" scoped>

</style>
