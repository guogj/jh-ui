import { App } from 'vue'
import  Message from './src/message'

type withInstall<T> =  T & {install:(app:App)=>void}

(Message as any).install = (app:App):void => {
    // app.component(Message.name,Message);
    // 绑定到全局 用于类似vue2 this.$message
    app.config.globalProperties.$message = Message
}
// let _Message:withInstall<typeof Message> = Message
export { Message }
export default Message;