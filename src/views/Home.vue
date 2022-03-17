<template>
  <v-container fluid>
    <v-main>
      <Logo />
      <Bg />
      <Menu />
      <ControlOV />
      <MiniMap />

      <Hotspot />
    </v-main>
  </v-container>
</template>

<script>
import Bg from "./Bg";
import Logo from "./Logo";
import Menu from "./Menu";
import ControlOV from "./ControlOV";
import MiniMap from "./MiniMap";

import Hotspot from "./Hostspot";

export default {
  name: "OverView",

  components: {
    Logo,
    Bg,
    Menu,
    ControlOV,
    MiniMap,

    Hotspot,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.container-fluid {
  padding: 0px !important;
}
</style>

