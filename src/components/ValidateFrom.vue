<template>
    <form class="validate-form-container">
      <slot name="default"></slot>
      <div class="submit-area" @click.prevent="submitForm">
        <slot name="submit">
            <button type="submit" class="btn btn-primary">提交</button>
        </slot>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent,onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc=()=>boolean
export const emitter=mitt()
export default defineComponent({  
    name: 'ValidateFrom',
    emits:['form-submit'],
    setup(props,context){      
      let funArr:ValidateFunc[]=[]
      const submitForm=()=>{
        const result =funArr.map(func=>func()).every(re=>re)
        context.emit('form-submit',result)
      }
      const callback=(func:ValidateFunc)=>{
        funArr.push(func)
      }
      emitter.on('form-item-created',callback)
      onUnmounted(()=>{
        emitter.off('form-item-created',callback)
        funArr=[]
      })
      return{
        submitForm
      }
    }
});
</script>

<style lang="scss" scoped>

</style>
