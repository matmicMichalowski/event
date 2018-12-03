<template>
    <div class="editor-container">
      <div class="presentation-container">
        <slide-container id="slide1" class="slide-container"></slide-container>
      </div>
      <div class="edit-menu">
        <div class="main-controls">
          <div class="core-btn main-control main-control-play">
            <i class="material-icons">videocam</i>
          </div>
          <div class="core-btn main-control"></div>
          <div class="core-btn main-control"></div>
        </div>
        <div class="core-btn widget-tile">
          <i class="material-icons">text_fields</i>
        </div>
        <div class="core-btn widget-tile">
          <i class="material-icons">image</i>
        </div>
        <div class="core-btn widget-tile"></div>
        <div class="core-btn widget-tile"></div>
        <div class="core-btn widget-tile"></div>
        <div class="core-btn widget-tile"></div>
        <div class="core-btn widget-tile"></div>
      </div>
    </div>
</template>

<script>
    import SlideContainer from "./SlideContainer";
    export default {
        name: "MainEditorComponent",
      components: {SlideContainer}
    }
</script>

<style scoped>
  .presentation-container{
    position: relative;
  }
  .slide-container{
    width: 960px;
    height: 700px;
    position: absolute;
    background: white;
    top: 100px;
    left: 20%;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  .editor-container{
    display: grid;
    grid-template-columns: 3fr 180px;
    height: 100vh;
    background-color: #ede7d9;
  }
  .edit-menu{
    grid-column: 2;
    background: #49516f;
    display: grid;
    grid-template-rows: 100px repeat(10, 1fr);
  }
  .main-controls{
    grid-row: 1;
    display: inline-block;
  }
  .main-control{
    width: 50px;
    height: 52px;
    background: #59607c;
    border-radius: 2px;
    margin: 5px;
    float: left;
  }
  .main-control-play{
    color: white;
    background: #4c9f70;
    font-size: 34px;
    text-align: center;
  }
  .widget-tile{
    color: #8b90a3;
    display: inline-block;
    transition: color 0.25s;
    background: none;
    position: relative;
  }
  .widget-tile i{
    font-size: 42px;
  }
  .widget-tile:hover{
    color: #fff;
  }
  .widget-tile::after{
    position: absolute;
    left: 0;
    right: 0;
    content: '';
    width: 0;
    height: 100%;
    transition: width 0.25s;
    background: #6a7089;
    opacity: 0.6;
  }
  .widget-tile:hover::after{
    width: 100%;
  }
</style>
