import {computed, defineComponent, ref} from "vue";
import CATEGORIES_NAMES from "@/modules/const/CATEGORIES_NAMES";
import CATEGORIES_CONTENT from "@/modules/const/CATEGORIES_CONTENT";
import BOOKS from "@/modules/const/BOOKS";
import sliderComponent from "@/components/slider-component/slider-component.vue";
export default defineComponent({
    name: "catalog-page",
    components:{
        sliderComponent
    },
    setup(){
        const selectedCategory=ref(Object.keys(CATEGORIES_CONTENT)[0])
        const booksInCategory=computed(()=>{
            return CATEGORIES_CONTENT[selectedCategory.value as keyof typeof CATEGORIES_CONTENT]
        })
        return{
            selectedCategory,
            booksInCategory,
            CATEGORIES_NAMES,
            CATEGORIES_CONTENT,
            BOOKS
        }
    }
})
