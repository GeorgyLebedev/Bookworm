import {defineComponent} from "vue";
import buttonComponent from "@/components/button-component/button-component.vue";
import {iFormField} from "@/modules/interfaces/iFormField";
export default defineComponent({
    name: "form-component",
    components:{
        buttonComponent
    },
    props: {
        name: {
            type:String,
            default:"",
            required:!!0
        },
        fields: {
            type: Array as () => Array<iFormField>,
            required: !!1
        },
    },
    emits: ['submitForm'],
})
