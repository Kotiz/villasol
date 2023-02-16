import axios from 'axios'
// import type {App} from 'vue'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export default {
    //@ts-ignore 
    install: (app, options: AxiosOptions) => {
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            headers: {
                // Authorization: options.token ? `Bearer ${options.token}` : '',
                Authorization: options.token ? options.token : 'Bearer 5b9e7cf89048e441ab49ac47d31866ba2c3a99800199adb33171afab733fe67fb7f1e0f6ebc21ea2e7b168b0889834e9e59c6275d249f3a3561077935ddf86076616c20aff0c27b125c9016ad53834c0ed97aa201c1b51d8c10631fb796be12f6a6d472405009f2c1bd736a8c11865c6bdad34a61500aed483b59da4462d5f27',
            }
        })
    }
}

