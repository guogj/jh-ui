import Button from '@jh-ui/button'
import Icon from '@jh-ui/icon'
import { App } from 'vue'

const components = [Button, Icon];

export default {
    install: (app:App) => {
        components.forEach(component => {
            app.use(component);
        })
    }
}
