<template>
  <v-container fluid class="bg">
    <!-- <v-main> -->
    <Menu />
    <Logo />

    <BgFloorplans />

    <!-- </v-main> -->
  </v-container>
</template>

<script>
import BgFloorplans from "./BgFloorplans";
import Logo from "./Logo2";
import Menu from "./Menu";

export default {
  name: "OverView",

  components: {
    Logo,
    BgFloorplans,
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.bg {
  overflow: hidden;
}

.nut {
  height: 80px;
  width: 45%;
  background: rgba(44, 224, 224, 0.281) !important;
  z-index: 999;
  position: absolute;
  top: 0 !important;
  left: 0 !important;
}

@media only screen and (min-width: 1366px) {
  .nut {
    width: 25% !important;
    height: 150px;
  }
}
@media only screen and (min-width: 800px) {
  .nut {
    height: 100px;
  }
}
</style>

