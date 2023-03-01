import { App } from 'vue'
import  Icon from './src/icon.vue'

type withInstall<T> =  T & {install:(app:App)=>void}

Icon.install = (app:App):void => {
    app.component(Icon.name,Icon);
}
let _Icon:withInstall<typeof Icon> = Icon

export default _Icon;


