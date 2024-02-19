import {computed, defineComponent, Ref, ref} from "vue";
import bookCard from "@/components/book-card/book-card.vue";
import iBook from "@/modules/interfaces/iBook"
import IBook from "@/modules/interfaces/iBook";
export default defineComponent({
    name: "slider-component",
    components:{
        bookCard
    },
    props:{
        booksArray:{
            type: Array as ()=>Array<iBook>,
            required: true
        }
    },
    mounted() {
        window.addEventListener('resize', this.calculateBooksCount);
        window.addEventListener('resize', ()=>this.shownArray=this.booksArray.slice(0, this.calculateBooksCount()));
        this.calculateBooksCount()
        this.shownArray=this.booksArray.slice(0, this.calculateBooksCount())
    },
    setup(props){
        const shownArray:Ref<iBook[]>=ref([])
        const sliderIndex:Ref<number>=ref(0)
        const calculateBooksCount=()=>{
           return Math.ceil(document.documentElement.clientWidth/300)-2 <=0?
               1:
               Math.ceil(document.documentElement.clientWidth/300)-2
        }
        const addSliderIndex=()=>{
            sliderIndex.value+=calculateBooksCount()
            const booksRest=props.booksArray.length-sliderIndex.value
            if(sliderIndex.value>props.booksArray.length)
                sliderIndex.value=props.booksArray.length
            if(booksRest>calculateBooksCount())
                shownArray.value=props.booksArray.slice(sliderIndex.value, sliderIndex.value+calculateBooksCount())
            else
                shownArray.value=props.booksArray.slice(props.booksArray.length-calculateBooksCount(), props.booksArray.length)
        }
        const subSliderIndex=()=>{
            sliderIndex.value-=calculateBooksCount()-1
            if(sliderIndex.value<0)
                sliderIndex.value=0
            if(sliderIndex.value>calculateBooksCount())
                shownArray.value=props.booksArray.slice(sliderIndex.value-calculateBooksCount(),sliderIndex.value )
            else
                shownArray.value=props.booksArray.slice(0, calculateBooksCount())
        }

        return{
            calculateBooksCount,
            addSliderIndex,
            subSliderIndex,
            shownArray,
            sliderIndex
        }
    }
})
