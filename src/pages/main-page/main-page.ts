import {defineComponent} from "vue";
import sliderComponent from "@/components/slider-component/slider-component.vue";
import booksArray from "@/modules/interfaces/BOOKS_TEMP"
export default defineComponent({
    name: "main-page",
    components:{
        sliderComponent
    },
    setup(){
      const books=booksArray
      return{
          books
      }
    }
})
