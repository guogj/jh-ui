import { App } from 'vue'
import  Button from './src/button.vue'

type withInstall<T> =  T & {install:(app:App)=>void}

Button.install = (app:App):void => {
    app.component(Button.name,Button);
}
let _Button:withInstall<typeof Button> = Button

export default _Button;


