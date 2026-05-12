<template>

  <div class="skip-section">

    <a href="#main">
      메인 콘텐츠 바로가기
    </a>

  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.skip-section{

  a{
    position:absolute;
    left:-9999px;

    &:focus{
      left:20px;
      top:20px;

      z-index:99999;

      padding:16px 24px;

      background:#c2a878;
      color:#000;
    }
  }

}

</style>