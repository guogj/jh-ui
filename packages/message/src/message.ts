import { createVNode, render } from "vue"
import { IMessageParams } from "./message.types"
import messageComponent from "./message.vue"
const Message = ( options:IMessageParams )=>{
    // 判断入参是string 或者 函数
    if(typeof options === 'string'){
        options = {
            message:options
        }
    }else{

    }
    // 创建容器
    const container = document.createElement('div')
    // 创建虚拟node
    const vm = createVNode(messageComponent,options as any)
    // 渲染
    render(vm,container)
    // 放到body下
    document.body.appendChild(container.firstElementChild!)
    // options 是一个对象，现在要渲染一个组件
    // 1. 元素应该渲染到哪里 body
}


export default Message