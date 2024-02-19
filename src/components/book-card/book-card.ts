import {defineComponent} from "vue";
import buttonComponent from "@/components/button-component/button-component.vue";
import iBook from "@/modules/interfaces/iBook"
export default defineComponent({
    name: "book-card",
    components:{
        buttonComponent
    },
    props:{
        book: {
            type: Object as ()=> iBook,
            required: true
        }
    }
})
