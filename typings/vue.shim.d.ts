declare module '*.vue'{
    import { defineComponent, App } from "vue";
    const component: ReturnType<typeof defineComponent> & {
        install: (app:App)=> void
    }
    export default component
}

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini';