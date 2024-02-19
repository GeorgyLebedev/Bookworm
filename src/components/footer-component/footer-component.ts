import {defineComponent} from "vue";
export default defineComponent({
    name: "footer-component",
    methods:{
        async copyLink(){
            await window.navigator.clipboard.writeText('BookwormPost@gmail.com')
        }
    }
})
