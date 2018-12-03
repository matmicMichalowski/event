<template>
    <div class="toolbar-wrapper">
      <p class="app-title">EDH Editor</p>
    </div>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>
  .toolbar-wrapper{
    background-color: #49516f;
    text-align: center;
  }
  .app-title{
    color: #ede7d9;
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    padding-top: 10px;
    cursor: default;
    user-select: none;
  }
</style>
