<template>
    <div>
      <H3>新建文章</H3>
          <validate-from @form-submit="onFormSubmit">
      <div class="mb-3">
        <!-- 自定义input -->
        <validate-input :rules="emailRules" label="文章标题：" v-model="titleVal" placeholder="title" type="text" ref=inputRef></validate-input>
      </div>
      <div class="mb-3">
        <validate-input :rules="passwordRules" v-model="contentVal" label="文章详情：" placeholder="内容" type="text" tag="textarea"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-primary">发表文章</span>
      </template>
    </validate-from>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import { useStore } from 'vuex'
import { PostProps } from '../testData'
import { GlobalDataProps } from '../store'
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateFrom from "@/components/ValidateFrom.vue";
import router from '@/router';
export default defineComponent({
    name: 'CreatePost',
    components:{
      ValidateInput,
      ValidateFrom,
    },
    setup(){
        const titleVal = ref("");
        const contentVal = ref("");
        const store =useStore<GlobalDataProps>()
        const onFormSubmit=(result:boolean)=>{
          if(result){
            const { columnId } =store.state.user
            if(columnId){
              const newPost:PostProps={
              id:new Date().getTime(),
              title:titleVal.value,
              content:contentVal.value,
              columnId,
              createdAt:new Date().toLocaleString()
            }
            store.commit('creatPosts',newPost)
            router.push({
              name:'column',
              params:{
                id:columnId
              }
            })
            }
          }
    }
    return {
      titleVal,
      contentVal,
      onFormSubmit,
    }
    }
});
</script>

<style lang="scss" scoped>

</style>
