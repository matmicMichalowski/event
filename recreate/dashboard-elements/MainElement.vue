<template>
    <div class="main-el-wrapper">
      <div class="presentations-list">
        <div class="list-layout">
          <user-info class="user-info"></user-info>
          <div class="presentations-browser">
            <div class="presentations">
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
              <presentation-card class="presentation-card"></presentation-card>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import UserInfo from "../UserInfo";
    import PresentationCard from "../PresentationCard";
    export default {
        name: "MainElement",
      components: {PresentationCard, UserInfo}
    }
</script>

<style scoped>
  .main-el-wrapper{
    background-color: #ede7d9;
  }
  .presentations-list{
    width: 50%;
    margin: 20px auto;
    background: #eee9dc;
    box-shadow: 0 9px 30px -4px rgba(0,0,0,0.5);
  }
  .list-layout{
    display: grid;
    grid-template-rows: 250px 2fr;
  }
  .user-info{
    grid-row: 1;
  }
  .presentations-browser{
    grid-row: 2;
    padding: 5px;
  }

  .presentations{
    margin-left: 2%;
  }
  .presentation-card{
    float: left;
    width: 450px;
    box-shadow: 0 0 20px -12px rgba(0,0,0,0.75);
  }

</style>
