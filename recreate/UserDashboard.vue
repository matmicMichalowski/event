<template>
    <div class="dashboard-wrapper">
      <toolbar-element class="dashboard-toolbar"></toolbar-element>
      <main-element class="dashboard-main"></main-element>
      <footer-element class="dashboard-footer"></footer-element>
    </div>
</template>

<script>
  import ToolbarElement from "./dashboard-elements/ToolbarElement"
  import MainElement from "./dashboard-elements/MainElement"
  import FooterElement from "./dashboard-elements/FooterElement"
    export default {
      components:{
        ToolbarElement,
        MainElement,
        FooterElement
      },
        name: "UserDashboard"
    }
</script>

<style scoped>
  .dashboard-wrapper{
    display: grid;
    grid-template-rows: 1fr  9fr 80px;
    height: 100vh;
  }

  .dashboard-toolbar{
    grid-row: 1;
  }

  .dashboard-main{
    grid-row: 2;
  }

</style>
