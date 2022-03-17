<template>
  <v-container fluid class="bg">
    <!-- <Logo2/> -->

    <!-- <BgLocationMap/> -->
    <!-- <Logo2/> -->
    <Show />
    <Menu />
    <Logo2 />
  </v-container>
</template>

<script>
import Logo2 from "./Logo2";
import Show from "./Show";
// import BgLocationMap from './BgLocationMap'
import Menu from "./Menu";
export default {
  name: "OverView",
  components: {
    Logo2,
    Show,
    // BgLocationMap,
    Menu,
  },
};
</script>
<style scoped>
.bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>