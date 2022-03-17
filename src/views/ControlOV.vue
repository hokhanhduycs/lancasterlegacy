<template>
  <!-- <v-container fluid> -->
  <div class="text-center list-btn-control">
    <v-btn
      class="item-btn-control in-zoom"
      @mouseover="isInzoom = !isInzoom"
      @mouseout="isInzoom = !isInzoom"
    >
      <img
        v-show="isInzoom"
        width="23"
        class="icon-show"
        src="../assets/SVG/inzoom.svg"
      />
      <img
        v-show="!isInzoom"
        width="23"
        class="icon-show"
        src="../assets/SVG/inzoomb.svg"
      />
    </v-btn>
    <v-btn
      class="item-btn-control out-zoom"
      @mouseover="isOutzoom = !isOutzoom"
      @mouseout="isOutzoom = !isOutzoom"
    >
      <img
        v-show="isOutzoom"
        width="23"
        class="icon-show"
        src="../assets/SVG/outzoom.svg"
      />
      <img
        v-show="!isOutzoom"
        width="23"
        class="icon-show"
        src="../assets/SVG/outzoomb.svg"
      />
    </v-btn>
    <v-btn
      class="item-btn-control turn"
      @mouseover="isTurn = !isTurn"
      @mouseout="isTurn = !isTurn"
    >
      <img
        v-show="isTurn"
        width="23"
        class="icon-show"
        src="../assets/SVG/turn.svg"
      />
      <img
        v-show="!isTurn"
        width="23"
        class="icon-show"
        src="../assets/SVG/turnb.svg"
      />
    </v-btn>
    <!-- <v-btn class="item-btn-control information"
    @mouseover="isInfo =! isInfo" @mouseout="isInfo =! isInfo"
    >
        <img v-show="isInfo" width="23" class="icon-show" src="../assets/SVG/information.svg"/>
        <img v-show="!isInfo" width="23" class="icon-show" src="../assets/SVG/informationb.svg"/>
    </v-btn>
    <v-btn class="item-btn-control location"
    @mouseover="isLoation =! isLoation" @mouseout="isLoation =! isLoation"
    >
         <img v-show="isLoation" width="23" class="icon-show" src="../assets/SVG/location.svg"/>
        <img v-show="!isLoation" width="23" class="icon-show" src="../assets/SVG/locationb.svg"/>

    </v-btn> -->
  </div>

  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      isInzoom: true,
      isOutzoom: true,
      isTurn: true,
    };
  },
};
</script>

<style scoped>
.list-btn-control {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 10px;
  background: #ffffff7e;
  padding: 10px;
  border-radius: 0px;
}
.item-btn-control {
  border-radius: 0;
  margin-right: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: #033348 !important;
}
.item-img-control {
  max-width: 32px;
  max-height: 32px;
}
.list-btn-control .item-btn-control:last-child {
  margin-right: 0 !important;
}
.img-location {
  max-width: 20px;
}
.item-btn-control:hover {
  background-color: #A49C87 !important;
}
</style>