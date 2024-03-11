import {defineComponent, onMounted} from "vue";
import formComponent from "@/components/form-component/form-component.vue";
import {iFormField} from "@/modules/interfaces/iFormField";
export default defineComponent({
    name: "about-page",
    components:{
        formComponent
    },
    setup(){
        onMounted(()=>{
            const script = document.createElement('script');
            script.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6917e1279e7c4952a3278d0c984c32b2649896ac6b215a135a5bd90fb88a0e5d&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"
            script.async = true;
            document.getElementById('contactMap')?.appendChild(script);
        })
        const feedbackFormFields:Array<iFormField>=[
            {
                fieldName: "Имя",
                fieldType: "Text"
            },
            {
                fieldName: "Эл. Почта",
                fieldType: "Email"
            },
            {
                fieldName: "Сообщение",
                fieldType: "Textarea"
            },
        ]
    return {
            feedbackFormFields
    }
    }
})
