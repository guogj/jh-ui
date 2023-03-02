<template>
  <div class="jh-message" :class="classs">message 就换行</div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Itype } from "./message.types";
export default defineComponent({
  name: "JHMessage",
  props: {
    id: { type: String, default: "" },
    message: { type: String, default: "" },
    type: { type: String as PropType<Itype>, default: "info" },
    duration: { type: Number, default: 0 },
    center: { type: String, default: "" },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 20 },
  },
  setup(props) {
    const classs = computed(()=>['jh-message--'+props.type,props.center?'is-center':''])
    return {
        classs
    }
  },
});
</script>
