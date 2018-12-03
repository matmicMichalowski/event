<template>
    <div class="user-info-wrapper">
      <div class="profile-img-container">
        <div class="profile-img">
          <p>T</p>
        </div>
      </div>
      <div class="profile-info">
        <div class="profile-header">
          <div class="profile-name">
            Test User
          </div>
          <div class="profile-actions"></div>
        </div>
        <div class="profile-stats">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped>
  .user-info-wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 2px;
    margin: 3px;
  }
  .profile-img-container{
    grid-column: 1;
  }
  .profile-img{
    background: #6279B8;
    color: #eee9dc;
    font-weight: bold;
    text-align: center;
    font-size: 48px;
    padding: 20px;
    margin: 50px auto 0 auto;
    width: 50%;
    height: 50%;
  }
  .profile-info{
    display: grid;
    grid-template-rows: 1fr 3fr;
  }
  .profile-header{
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .profile-name{
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 10px;
  }



</style>
