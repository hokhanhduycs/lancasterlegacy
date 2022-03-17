<template>
  <v-container class="bg" fluid>
    <v-main>
      <Logo />
      <BgFloorplans />
      <Menu />
    </v-main>
  </v-container>
</template>

<script>
import BgFloorplans from "./BgApart";
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
  padding: 0 !important;
}
.container-fluid {
  padding: 0px !important;
}
</style>

