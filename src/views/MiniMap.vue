<template>
  <v-container fluid class="bg">
    <v-row>
      <div class="minimap">
        <v-img class="img-minimap" src="../assets/miniMap.png" />
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
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
  background: #ffffff7e;
  padding: 10px;
}
.img-minimap {
  border: 3px solid rgb(7, 7, 7);
}
</style>