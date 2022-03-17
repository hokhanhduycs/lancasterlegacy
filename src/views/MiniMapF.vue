<template>
  <v-container fluid class="bg">
    <v-row>
      <div class="minimap">
        <v-img class="img-minimap" src="../assets/miniMapF.png" />
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.bg {
  padding: 0 !important;
}
.minimap {
  position: absolute;
  bottom: 0;
  right: 0;
}
.container--fluid {
  max-width: 100%;
  padding: 0px;
}
.minimap {
  background: transparent;
  padding: 10px;
}
</style>