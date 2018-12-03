<template>
    <image-field-component v-if="fieldType === 'imgc'"></image-field-component>
    <text-field-component v-else-if="fieldType === 'txtc'"></text-field-component>
</template>

<script>
    import ImageFieldComponent from "./ImageFieldComponent";
    import TextFieldComponent from "./TextFieldComponent";
    import { dragElement } from "../../../../../static/elementinteracts"
    export default {
      props:{
        "fieldType" :String
      },
        name: "GenericFieldComponent",
      components: {TextFieldComponent, ImageFieldComponent},
      mounted(){
        dragElement("el1", "slide1")
      },
      data(){
          return {

          }
      }
    }
</script>

<style scoped>

</style>
