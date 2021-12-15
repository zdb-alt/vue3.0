<template>
      <div class="row">
        <div  class="col-4 mb-4" v-for="cl in clolist" :key="cl.id">
        <div class="card h-100 shadow-sm">
          <img :src="cl.avatar" :alt="cl.title" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{cl.title}}</h5>
            <p class="card-text text-left">{{ cl.description }}</p>
            <router-link :to="{name:'column',params:{id:cl.id}}" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
        </div>
        </div>
      </div>
</template>

<script lang="ts">
import { computed, defineComponent,PropType } from 'vue'
import { ColumnProps } from '../testData'
export default defineComponent({
    name: 'ColumList',
    props:{
      list:{
        type:Array as PropType< ColumnProps[]>,
        required:true
      }
    },
    setup(props){
      const clolist=computed(()=>{
        return props.list.map(item=>{
          if(!item.avatar ||  item.avatar==''){
            item.avatar=require('@/assets/logo.png')
          }
          return item
        })
      })
      
      return {
        clolist
      }
  }
});
</script>

<style lang="scss" scoped>

</style>
