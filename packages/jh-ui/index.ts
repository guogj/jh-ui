import Button from '@jh-ui/button'
import Icon from '@jh-ui/icon'
import Alert from '@jh-ui/alert'
import Message from '@jh-ui/message'
import { App } from 'vue'

const components = [Button, Icon, Alert, Message];

export default {
    install: (app:App) => {
        components.forEach(component => {
            app.use(component);
        })
    }
}
