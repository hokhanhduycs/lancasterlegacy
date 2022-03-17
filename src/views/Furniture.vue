<template>
  <v-app>
    <v-main class="bgg">
      <Logo />
      <!-- <panoviewer/> -->
      <Bg />
      <Menu />
      <!-- <ControlID/> -->
      <!-- <MiniMapF/> -->
      <!-- Panoviewer -->

      <!-- <Hotspot/> -->
    </v-main>
  </v-app>
</template>

<script>
import Bg from "./Bg";
// import panoviewer from './PanoViewer'
import Logo from "./Logo";
import Menu from "./Menu";
// import ControlID from './ControlID'
// import MiniMapF from './MiniMapF'

// import Hotspot from './Hostspot'

export default {
  name: "Furniture",

  components: {
    Logo,
    Bg,
    // panoviewer,
    Menu,
    // ControlID,
    // MiniMapF,

    // Hotspot,
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 0px !important;
}
</style>


