import {computed, defineComponent} from "vue";
export default defineComponent({
    name: "button-component",
    props:{
        disabled:{
            type:Boolean,
            default: false
        },
        type:{
          type:String,
          default: "Button"
        },
        size:{
            type:String,
            default:"Medium"
        },
        width:{
            type: [String,Number],
            default: "full"
        },
        theme:{
            type:String,
            default:"light"
        }
    },
    setup(props){
        const buttonThemeClass=computed(()=>{
            return props.theme.toLowerCase()==="light"? "button-light":
                props.theme.toLowerCase()==="alt"? "button-alt" : "button-dark"
        })
        const buttonSizeClass=computed(()=>{
            return props.size.toLowerCase()==="small"? "button-small":
                props.size.toLowerCase()==="medium"? "button-medium" : "button-large"
        })
        const computedButtonWidth=computed(()=>{
            return typeof(props.width)==="number"? props.width+'px':
                props.width.toLowerCase()==="min"? 'min-content':'100%'
        })
        return{
            buttonThemeClass,
            buttonSizeClass,
            computedButtonWidth
        }
    }
})
