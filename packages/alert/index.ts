import { App } from 'vue'
import  Alert from './src/alert.vue'

type withInstall<T> =  T & {install:(app:App)=>void}

Alert.install = (app:App):void => {
    app.component(Alert.name,Alert);
}
let _Alert:withInstall<typeof Alert> = Alert

export default _Alert;