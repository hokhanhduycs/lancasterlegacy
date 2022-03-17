<template>
  <v-container fluid class="controlID bg">
    <div class="toanha">
      <div class="close">
        <v-btn class="btn-close">
          <v-img class="img-close" src="../assets/close.png" />
        </v-btn>
      </div>

      <div class="content-TN">
        <div class="ct-tn">
          <v-img class="img-toanha" src="../assets/toanha.png" />
        </div>
      </div>
    </div>

    <div class="text-center list-btn-control">
      <v-btn class="item-btn-control tower">
        <p>Tower1 - Apartment B</p>
      </v-btn>
      <v-btn class="item-btn-control floor">
        <v-img class="item-img-control img-floor" src="../assets/floor.png" />
        <p>Floor 29</p>
      </v-btn>
      <v-btn class="item-btn-control exit">
        <!-- <p>Exit</p> -->
        <v-img class="item-img-control img-exit" src="../assets/exit.png" />
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.bg {
  padding: 0 !important;
}
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
  color: #fff;
  margin: auto;
}
.img-floor {
  margin-left: 15px !important;
}
.img-exit {
  margin: auto 15px;
  min-width: 70px;
}
.item-btn-control:hover {
  background-color: #a49c87 !important;
}
/* .toanha{
   position: absolute;
   left: 50%;
   bottom: 50%;
   height: 700px;
   min-width: 600px;
   background: #ffffff7e;
   transform: translate(-50%, 50%);
 }
 .close{
  background: #ffffff7e;
  padding: 10px;
  position: absolute;
  right: -62px;
  padding-right: 0;
 }
 .btn-close{
    border-radius: 0;
    margin-right: 10px !important;
    height: 48px !important;
    min-width: 48px !important;
    padding:0px !important;
    background-color: #033348 !important;
 }
.btn-close:hover{
   background-color: #A49C87 !important;
 }
 .img-close{
   max-width: 30px;
   max-height: 30px
 }
.ct-tn{
  background: #fff;
  margin: 10px;
}
.img-toanha{
  height: 655px;
} */
</style>