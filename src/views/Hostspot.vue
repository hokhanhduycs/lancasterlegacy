<template>
  <v-container fluid class="bg">
    <!-- <div class="hotspot">
            <div class="title-hotspot text-center">
            <v-img v-show="isShow" class="img-hotspot" src="../assets/imghotspot.png" />
            <p> SOUTHPORT YACHT CLUB </p>
            </div>
          <button @mouseover="isShow =! isShow"
                    @mouseleave="isShow =! isShow"
                    
           class="btn-hotspot">
              <v-img class="icon-hotspot" src="../assets/hotspot.png"/>
          </button>
        </div> -->

    <!-- <div class="pp">
            <img width="58" class="hpPP" src="../assets/SVG/hpPP.svg"/>
        </div> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
.bg {
  padding: 0 !important;
}
.pp {
  position: absolute;
  top: 500px;
  left: 500px;
  /* justify-content: center;
	align-items: center; */
}
.hpPP {
  transform: rotateY(180deg);
  animation: rotateAnimation 2s linear infinite;
}
@keyframes rotateAnimation {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(270deg);
  }
}
.hotspot {
  position: absolute;
  bottom: 50%;
  left: 50%;
}

.btn-hotspot {
  /* background:red; */
  position: relative;
}
.title-hotspot p {
  background: #A49C87;
  padding: auto;
  color: #fff;
  margin-bottom: 0px;
  width: 250px;
}
.title-hotspot {
  position: relative;
  left: -50%;
  transform: translateX(49%);
  padding: 2px;
  background: #c7b299;
  border-radius: 5px;
}
.img-hotspot {
  width: 250px;
}
</style>
