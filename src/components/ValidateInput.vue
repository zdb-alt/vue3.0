<template>
    <div class="mb-3">
        <label class="form-label">{{ label}}</label>
        <!-- <input type="text" class="form-control"  v-model="inputRef.val" 
            :class="{ 'is-invalid':inputRef.error }"
            @blur="validateInput"> -->
            <input
            v-bind="$attrs"
            class="form-control"
            :class="{ 'is-invalid':inputRef.error }" :value="inputRef.val"
            @input="updateValue"
            @blur="validateInput">
            <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
    </div>
</template>

<script lang="ts">
const emailPattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
interface RuleProp{
    type: 'required' | 'email' | 'password',// 可扩展...
    message:string
}
export type RulesProp =RuleProp[]

import { defineComponent, PropType, reactive ,onMounted} from 'vue'
import { emitter } from './ValidateFrom.vue'
export default defineComponent({
    inheritAttrs:false, 
    name:'ValidateInput',
    props:{
        rules:{ //写法1
            type:Array as PropType< RulesProp>
        },
        // rules:Array as PropType< RuleProps> //写法2
        label:{
            type:String ,
            default:''
        },
        modelValue:{
            type:String,
            default:''
        }
    },
    setup(props,context){
        console.log(context.attrs);
        
    const  updateValue=(e:KeyboardEvent)=>{
        const targeValue=(e.target as HTMLInputElement).value
        inputRef.val=targeValue
        context.emit('update:modelValue',targeValue)
    }
    const inputRef=reactive({
        val:props.modelValue || '',
        error:false,
        message:''
    })
    const validateInput=()=>{
        if(props.rules){
            const allPassed=props.rules.every( rule =>{
                let passed=true
                inputRef.message=rule.message
                switch (rule.type) {
                    case 'required':
                        passed=(inputRef.val.trim()!=='')
                        break;
                    case 'email':
                        passed=emailPattern.test(inputRef.val)
                        break;
                    case 'password':
                        passed=inputRef.val.length===0
                        break;    
                    default:
                        break;
                }
                return passed
            })
            inputRef.error=!allPassed
            return allPassed
        }
        return true
    }
    onMounted(()=>{
        emitter.emit('form-item-created' ,validateInput)
    })
    return {
        inputRef,
        validateInput,
        updateValue
    }
    }
});
</script>

<style lang="scss" scoped>

</style>
