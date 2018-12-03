<template>
    <div class="presentation-card-container">
      <div class="presentation-title">Presentations title test</div>
    <div class="info-controllers">
      <div class="thumbnail"></div>
      <div class="presentation-actions">
        <div class="action-buttons">
          <div class="button-square" @click="deletePresentation()">
            <i class="material-icons app-icon-btn">delete</i>
          </div>
          <div class="button-square" @click="sharePresentation()">
            <i class="material-icons app-icon-btn">share</i>
          </div>
          <div class="button-square" @click="editPresentation()">
            <i class="material-icons app-icon-btn">create</i>
          </div>
          <div class="button-square" @click="runPresentation()">
            <i class="material-icons app-icon-btn">play_arrow</i>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "PresentationCard",
      methods:{
          editPresentation(){
            this.$router.push({name: 'editor'})
            console.log("edit click")
          },
          runPresentation(){
            console.log("run click")
          },
          sharePresentation(){
            console.log("share click")
          },
          deletePresentation(){
            console.log("delete click")
          }
      }
    }
</script>

<style scoped>
  .app-icon-btn{

  }
  .presentation-title{
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }
  .presentation-card-container{
    display: grid;
    grid-template-rows: 1fr 3fr;
    border: 2px solid #cbd5ea;
    height: 268px;
    margin: 1px;
  }
  .presentation-card-container:hover{
    border: 2px solid #A7AFC0;
  }
  .info-controllers{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .presentation-actions{
    position: relative;
  }
  .action-buttons{
    position: absolute;
    bottom: 5px;
    display: inline-block;
  }
  .button-square{
    border: 2px solid #cbd5ea;
    width: 50px;
    height: 50px;
    box-sizing: content-box;
    float: left;
    margin-left: 8px;
    text-align: center;
    font-size: 36px;
    cursor: pointer;
    color: #cbd5ea;
    user-select: none;
  }
  .button-square:hover{
    border: 3px solid #A7AFC0;
    margin-left: 7px;
    width: 49px;
    height: 49px;
    color: #A7AFC0;
  }
  .action-buttons:hover{
    bottom: 4px;
  }

</style>
