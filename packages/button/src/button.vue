<template>
  <button :class="classs" :disabled="disabled" @click="fn2">
    <i v-if="loading" class="jh-icon-loading"></i>
    <i v-if="icon&&!loading" :class="`jh-icon-${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType} from 'vue'
type Itype = "primary" | "success" | "info" | "warning" | "danger" | "text";
export default defineComponent({
  name: "JHButton",
  props:{
    'type':{
      type: String as PropType<Itype>,
      default: 'primary',
      validator: (val:string) => {
        return ["primary", "success", "info", "warning", "danger", "text"].includes(val)
      }
    },
    'size':{
      type: String as PropType<ComponentSize>,
      default: 'medium',
      validator: (val:string) => {
        return ['large', 'medium', 'small', 'mini'].includes(val)
      }
    },
    'plain': Boolean,
    'round': Boolean,

    'disabled': Boolean,

    'icon': String,
    'loading': Boolean,
  },
  emits:["clickHandle"],
  setup(props,ctx){
    const classs = computed(()=> {
      return ['jh-button', `jh-button--${props.type}`, {
        'is-disabled': props.disabled,
        'is-plain': props.plain,
        'is-round': props.round
      }]
    });
    const fn2 = (e)=>{
      console.log('fn2');
      ctx.emit('clickHandle',e)
    }

    console.log(props,ctx.attrs,ctx.slots)
    return {
      classs,
      fn2
    }
  }
})
</script>

<style scoped>

</style>