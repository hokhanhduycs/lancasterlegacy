<template>
  <v-container fluid class="bg">
    <!-- <img class="img-bg" width="1920" height="100%" src="../assets/locationMap.png"/> -->
    <img class="img-bg" src="../assets/1x/locationMap.png" />
  </v-container>
</template>

<style coped>
.bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img-bg {
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: hidden !important;
}
</style>