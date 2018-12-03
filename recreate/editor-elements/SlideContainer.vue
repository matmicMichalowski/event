<template>
    <div class="slide-element-container">
      <generic-field-component id="el1" :fieldType="'imgc'" class="generic-field"></generic-field-component>
      <!--<generic-field-component :fieldType="'txtc'" class="generic-field"></generic-field-component>-->
    </div>
</template>

<script>
    import GenericFieldComponent from "./slide-elements/GenericFieldComponent";
    export default {
        name: "SlideContainer",
      components: {GenericFieldComponent}
    }
</script>

<style scoped>

</style>
