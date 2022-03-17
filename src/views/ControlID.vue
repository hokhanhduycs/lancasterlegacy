<template>
  <div class="controlID">
    <div class="toanha" v-show="isShow">
      <!-- <div class="close">
      <v-btn class=" btn-close" @click="isShow =! isShow">
      <v-img class="img-close" src="../assets/close.png"/>
    </v-btn>
    </div> -->

      <div class="content-TN">
        <div class="content-toanha">
          <v-img class="img-toanha" src="../assets/SVG/toanha.svg" />
        </div>
        <div class="list-btn">
          <v-btn class="item-list-btn" style="bottom: 148px; left: 100px"
            >3</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 160px; left: 425px"
            >4</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 178px; left: 142px"
            >5</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 190px; left: 465px"
            >6</v-btn
          >

          <v-btn class="item-list-btn" style="bottom: 208px; left: 100px"
            >7</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 220px; left: 420px"
            >8</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 238px; left: 142px"
            >9</v-btn
          >
          <v-btn class="item-list-btn" style="bottom: 250px; left: 465px"
            >10</v-btn
          >

          <!-- 
      <v-btn class="item-list-btn" style="bottom: 275px; left: -130px;">11</v-btn>
      <v-btn class="item-list-btn" style="bottom: 285px; left: 170px;">12</v-btn>
      <v-btn class="item-list-btn" style="bottom: 295px; left: -160px;">13</v-btn>
      <v-btn class="item-list-btn" style="bottom: 215px; left: 140px;">14</v-btn> -->
        </div>
      </div>
    </div>
    <div class="text-center list-btn-control">
      <v-btn class="item-btn-control tower">
        <p>Tower1 - Apartment B</p>
      </v-btn>
      <v-btn
        class="item-btn-control floor"
        @click="isShow = !isShow"
        @mouseover="isFloor = !isFloor"
        @mouseout="isFloor = !isFloor"
      >
        <v-img
          v-show="isFloor"
          class="item-img-control img-floor"
          src="../assets/floor.png"
        />
        <v-img
          v-show="!isFloor"
          class="item-img-control img-floor"
          src="../assets/floorb.png"
        />
        <p>Floor 29</p>
      </v-btn>
      <v-btn
        @click="gotoApart"
        class="item-btn-control exit links"
        @mouseover="isExit = !isExit"
        @mouseout="isExit = !isExit"
      >
        <!-- <p>Exit</p> -->
        <v-img
          v-show="isExit"
          class="item-img-control img-exit"
          src="../assets/exit.png"
        />
        <v-img
          v-show="!isExit"
          class="item-img-control img-exit"
          src="../assets/exitb.png"
        />
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,

      isFloor: true,
      isExit: true,
      test: "A",
    };
  },
  methods: {
    gotoApart() {
      this.$router.push("/apart/" + this.test);
    },
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
.list-btn-control p {
  padding: 15px;
  color: #A49C87;
  margin: auto;
  font-weight: 600;
}
.floor:hover p {
  color: #033348;
}
.tower:hover p {
  color: #033348;
}
.img-floor {
  margin-left: 15px !important;
}
.img-exit {
  margin: auto 15px;
  min-width: 70px;
}
.item-btn-control:hover {
  background-color: #A49C87 !important;
}
.toanha {
  position: fixed;
  left: 50%;
  bottom: 50%;
  height: 700px;
  min-width: 600px;
  background: #ffffff7e;
  transform: translate(-50%, 50%);
}
.img-toanha {
  width: 370px;
  margin: auto;
}
.content-toanha {
  background: #f7f5f0;
  margin: 10px;
  height: 680px;
  padding-top: 20px;
}
.content-TN {
  height: 700px;
  min-width: 600px;
}
.close {
  position: absolute;
  right: -60px;
  background: #ffffff7e;
}
.btn-close {
  border-radius: 0;
  margin: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: #033348 !important;
  z-index: 10;
}

.img-close {
  max-width: 26px;
  max-height: 26px;
}
.btn-close:hover {
  background-color: #A49C87 !important;
}

.item-list-btn {
  border-radius: 50%;
  height: 35px !important;
  min-width: 35px !important;
  background: #fff;
  box-shadow: none !important;
  color: #A49C87;
  padding: 0px !important;
  border: 1px solid #A49C87;
  position: absolute;
}
.item-list-btn:hover {
  background-color: #A49C87 !important;
  color: #fff;
}
.tower {
  pointer-events: none;
}
</style>