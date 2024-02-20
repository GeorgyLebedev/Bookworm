import {computed, defineComponent, onMounted} from "vue";
import BOOKS_TEMP from "@/modules/interfaces/BOOKS_TEMP";
import {useRoute} from "vue-router";
import iBook from "@/modules/interfaces/iBook"
import buttonComponent from "@/components/button-component/button-component.vue";
import sliderComponent from "@/components/slider-component/slider-component.vue";
export default defineComponent({
    name: "book-page",
    components:{
        buttonComponent,
        sliderComponent
    },
    setup(){
        const id=useRoute().params.id as string
        const book=computed(()=>{
            return BOOKS_TEMP.find(obj => obj.bookId === id) as unknown as iBook
        })
        return{
            book,
            BOOKS_TEMP
        }
    }
})
