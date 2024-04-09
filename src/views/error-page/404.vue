<template>
  <div class="http404-container flex-center">
    <img class="pic-404" src="@/assets/images/404.png" alt="404" />
    <div class="info-container">
      <div class="oops">OOPS!</div>
      <div class="headline">Page Error</div>
      <div class="info">
        Please check that the URL you entered is correct, or click the button below to return to the
        homepage.
      </div>
      <a href="/" class="return-home-btn">Back to home</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.http404-container {
  margin-top: -100px;
  width: 100%;
  height: 100%;

  .pic-404 {
    width: 600px;
  }

  .info-container {
    width: 300px;

    .oops {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
    }

    .headline {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      color: #222;
    }

    .info {
      margin-bottom: 30px;
      font-size: 13px;
      line-height: 21px;
      color: grey;
    }

    .return-home-btn {
      display: block;
      width: 110px;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      background: #1482f0;
      border-radius: 100px;
    }
  }
}
</style>
