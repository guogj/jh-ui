<template>
    <div>
        <div>App</div>
          <JHButton type="primary" :plain="true" :round="true" :loading="true" @clickHandle="fn">提交</JHButton>
        <!-- <JHIcon name="loading"></JHIcon> -->
        <!-- <JHButton type="primary" :plain="true" :round="true" :loading="true" @clickHandle="fn">提交</ZButton>
        <z-icon name="home"></z-icon>
        <z-button-group>
            <z-button type="info">info</z-button>
            <z-button type="primary">2222222</z-button>
        </z-button-group>
        <a-icon type="loading"></a-icon> -->
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup(props,ctx) {
        const fn = (e)=>{
            console.log('000',e)
        }
        return {
            fn,
        }
    },
})
</script>
