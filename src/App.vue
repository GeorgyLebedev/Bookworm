<template>
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
</template>
<script>
import headerComponent from "@/components/header-component/header-component.vue";
import footerComponent from "@/components/footer-component/footer-component.vue";

export default {
    components: {
	headerComponent,
	footerComponent
    }
}
</script>
<style lang="sass" src="./ui/styles/common.sass"></style>
