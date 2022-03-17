<template>
  <v-app>
    <v-main class="bgg">
      <Logo />
      <Bg />
      <!-- <Menu /> -->
      <!-- <ControlOV/> -->
      <!-- <MiniMap/> -->

      <!-- <Hotspot/> -->
    </v-main>
  </v-app>
</template>

<script>
import Bg from "./Bg";
import Logo from "./Logo";
// import Menu from './Menu'
// import ControlOV from './ControlOV'
// import MiniMap from './MiniMap'

// import Hotspot from './Hostspot'

export default {
  name: "OverView",

  components: {
    Logo,
    Bg,
    // Menu,
    // ControlOV,
    // MiniMap,

    // Hotspot,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.container-fluid {
  padding: 0px !important;
}
.bgg {
  overflow-y: hidden !important;
}
</style>

