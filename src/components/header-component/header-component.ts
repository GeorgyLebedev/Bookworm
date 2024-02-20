import {defineComponent, ref} from "vue";

export default defineComponent({
    name: "header-component",
    setup(){
        const openMenu=ref(false)

        return{
            openMenu
      }
    },
    mounted() {
        window.addEventListener('resize', this.windowWidth);
    },
    computed: {
        path() {
            return this.$route.path;
        }
    },
    methods:{
        windowWidth(){
            this.openMenu=document.documentElement.clientWidth>900? false: this.openMenu
        }
    }
})
