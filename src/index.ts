import { App } from 'vue';
import * as components from './components'

function install (app: App) {
    for (const key in components) {
        // @ts-expect-error
        app.component(key, components[key])
    }
}

import './index.css'

export default { install }

export * from './components'