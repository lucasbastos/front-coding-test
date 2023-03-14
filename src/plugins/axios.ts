import axios from 'axios'
import type {App} from 'vue'

interface AxiosOptions {
    baseURL: string
}

export default {
    install: (app: App, options: AxiosOptions) => {
        const instance = axios.create({
            baseURL: options.baseURL
        })
        app.config.globalProperties.$axios = instance
    }
}