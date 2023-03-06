import { defineStore } from "pinia";
import axios from "axios"

export const useAboutUsStrapi = defineStore('AboutUsStrapi',{
    state: () =>
        ({
            data: [],
        }),

    actions: {
        async retrieveAboutUs() {
            try {
                const data = await axios.get(`http://localhost:1337/api/about-us-single`)
                console.log('data', data);
                this.data = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }   
    },
});