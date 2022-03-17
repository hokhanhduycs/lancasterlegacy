<template>
  <v-container fluid class="fbg">
    <div class="mang"></div>
    <div class="ffloorplan">
      <div class="fsss">
        <v-img class="fsss-show" src="../assets/1x/allcanho.png" />
      </div>
      <div class="fsss">
        <img v-show="isA" class="fsss-show ma" src="../assets/1x/ftype5.png" />
      </div>
      <div class="fsss">
        <img v-show="isB" class="fsss-show ma" src="../assets/1x/ftype6.png" />
      </div>
      <div class="fsss">
        <img v-show="isC" class="fsss-show ma" src="../assets/1x/ftype7.png" />
      </div>
      <div class="fsss">
        <img v-show="isD" class="fsss-show ma" src="../assets/1x/ftype8.png" />
      </div>
      <div class="fsss">
        <img v-show="isE" class="fsss-show ma" src="../assets/1x/ftype1.png" />
      </div>
      <div class="fsss">
        <img v-show="isF" class="fsss-show ma" src="../assets/1x/ftype2.png" />
      </div>
      <div class="fsss">
        <img v-show="isH" class="fsss-show ma" src="../assets/1x/ftype3.png" />
      </div>
      <div class="fsss">
        <img v-show="isG" class="fsss-show ma" src="../assets/1x/ftype4.png" />
      </div>
    </div>

    <div class="flist-bnt">
      <!-- <router-link class="flinks" to="/apart/05" tag="button"> -->
      <div
        @click="hien('05')"
        @mouseover="isA = !isA"
        @mouseout="isA = !isA"
        class="fsbtn fsbtnA"
      >
        <div class="sotren" :class="{ aso: isA }">5</div>
        <div v-show="isA" class="bedtren fbed">2 - Bedroom</div>
        <div v-show="isA" class="typetren ftype">Type A</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/06" tag="button"> -->
      <div
        @click="hien('06')"
        @mouseover="isB = !isB"
        @mouseout="isB = !isB"
        class="fsbtn fsbtnB"
      >
        <div class="sotren" :class="{ aso: isB }">6</div>
        <div v-show="isB" class="bedtren fbed">2 - Bedroom</div>
        <div v-show="isB" class="typetren ftype">Type B</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/07" tag="button"> -->
      <div
        @click="hien('07')"
        @mouseover="isC = !isC"
        @mouseout="isC = !isC"
        class="fsbtn fsbtnC"
      >
        <div class="sotren" :class="{ aso: isC }">7</div>
        <div v-show="isC" class="bedtren fbed">1 - Bedroom</div>
        <div v-show="isC" class="typetren ftype">Type C</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/08" tag="button"> -->
      <div
        @click="hien('08')"
        @mouseover="isD = !isD"
        @mouseout="isD = !isD"
        class="fsbtn fsbtnD"
      >
        <div class="sotren" :class="{ aso: isD }">8</div>
        <div v-show="isD" class="bedtren fbed">3 - Bedroom</div>
        <div v-show="isD" class="typetren ftype">Type D</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/01" tag="button"> -->
      <div
        @click="hien('01')"
        @mouseover="isE = !isE"
        @mouseout="isE = !isE"
        class="fsbtn fsbtnE"
      >
        <div class="soduoi" :class="{ aso: isE }">1</div>
        <div v-show="isE" class="bedduoi fbed">2 - Bedroom</div>
        <div v-show="isE" class="typeduoi ftype">Type E</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/02" tag="button"> -->
      <div
        @click="hien('02')"
        @mouseover="isF = !isF"
        @mouseout="isF = !isF"
        class="fsbtn fsbtnF"
      >
        <div class="soduoi" :class="{ aso: isF }">2</div>
        <div v-show="isF" class="bedduoi fbed">2 - Bedroom</div>
        <div v-show="isF" class="typeduoi ftype">Type F</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/03" tag="button"> -->
      <div
        @click="hien('03')"
        @mouseover="isH = !isH"
        @mouseout="isH = !isH"
        class="fsbtn fsbtnH"
      >
        <div class="soduoi" :class="{ aso: isH }">3</div>
        <div v-show="isH" class="bedduoi fbed">2 - Bedroom</div>
        <div v-show="isH" class="typeduoi ftype">Type B</div>
      </div>
      <!-- </router-link> -->

      <!-- <router-link class="flinks" to="/apart/04" tag="button"> -->
      <div
        @click="hien('04')"
        @mouseover="isG = !isG"
        @mouseout="isG = !isG"
        class="fsbtn fsbtnG"
      >
        <div class="soduoi" :class="{ aso: isG }">4</div>
        <div v-show="isG" class="bedduoi fbed">2 - Bedroom</div>
        <div v-show="isG" class="typeduoi ftype">Type A</div>
      </div>
      <!-- </router-link> -->
    </div>

    <div class="finfoo">
      <div class="ffloorplans">Floor plans</div>
      <div class="ftower1">TOWER 1</div>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      isA: false,
      isB: false,
      isC: false,
      isD: false,
      isE: false,
      isF: false,
      isH: false,
      isG: false,
      ctype: "",
    };
  },
  methods: {
    // define below method first.

    hien(b) {
      if (window.innerWidth < 1400) {
        if (this.ctype == b) {
          this.lan = 0;
          this.$router.push("/apart/" + b);
        } else {
          this.ctype = b;
        }
      } else {
        this.$router.push("/apart/" + b);
      }
    },
  },
  mounted() {
    //callback once mounted
    // this.winWidth()
  },
};
</script>
<style scoped>
@font-face {
  font-family: sql;
  src: url("~@/assets/fonts/Campton-Light.otf");
}
@font-face {
  font-family: tieude;
  src: url("~@/assets/fonts/Silk Serif Light.otf");
}
.fbg {
  /* width: 100%; */
  /* max-height: 1080px !important; */
  /* background: #F8F6F1; */
  /* position: relative; */
  /* top: 0; */
  /* z-index: 0; */
  /* padding: 0 !important; */
  /* overflow-x: hidden; */
  /* position: absolute;
    top: 50% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%; */
  background-color: var(--colBg);
  overflow-y: hidden !important;
}
.finfoo {
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
}
.ffloorplans {
  font-size: 55px;
  color: var(--colYellow);
  font-family: tieude;
  /* width: 40%; */
}
.ftower1 {
  font-weight: 700;
  font-family: sql;
}

@media only screen and (max-width: 960px) {
  .finfoo {
    position: absolute;
    top: 50%;

    transform: translateY(-50%);
  }
  .ffloorplans {
    font-size: 160%;
    color: var(--colYellow);
    font-family: tieude;
    /* width: 40%; */
  }
  .ftower1 {
    font-weight: 700;
    font-family: sql;
    font-size: 14px;
  }
}
@media only screen and (max-width: 400px) {
  .finfoo {
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
  }
  .ffloorplans {
    font-size: 160%;
    color: var(--colYellow);
    font-family: tieude;
    /* width: 40%; */
  }
  .ftower1 {
    font-weight: 700;
    font-family: sql;
    font-size: 14px;
  }
}

.fsss-show {
  position: absolute;
  top: 55%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 40%;
}
/* .ma{
  margin-left: -3px;
} */
.mang {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: var(--colBg);
}
.flist-bnt {
  position: absolute;
  top: 0;
  /* background: rgba(208, 238, 213, 0.055); */
  width: 100%;
  height: 100%;
}
.fsbtn {
  position: absolute;
}
.fsbtnA {
  top: 26%;
  left: 33%;
  width: 9%;
  /* background: rgba(252, 118, 136, 0.418); */
  height: 24%;
  /* height: 230px */
}
.fsbtnB {
  /* background: rgba(191, 255, 113, 0.392); */
  top: 26%;
  left: 42%;
  width: 9%;
  height: 24%;
}
.fsbtnC {
  /* background: rgb(221, 233, 170,  0.392); */
  top: 26%;
  left: 51%;
  width: 7%;
  height: 24%;
}
.fsbtnD {
  /* background: rgb(129, 227, 245,  0.392); */
  top: 26%;
  left: 58%;
  width: 13%;
  height: 24%;
}
.fsbtnG {
  /* background: rgb(95, 189, 233,  0.392); */
  top: 52%;
  left: 33%;
  width: 9%;
  height: 25%;
}
.fsbtnH {
  /* background: rgb(154, 91, 236,  0.392); */
  top: 52%;
  left: 42%;
  width: 9%;
  height: 25%;
}
.fsbtnF {
  /* background: rgba(241, 115, 225, 0.392); */
  top: 52%;
  left: 51%;
  width: 7%;
  height: 25%;
}
.fsbtnE {
  /* background: rgb(233, 162, 209,  0.392); */
  top: 52%;
  left: 58%;
  width: 13%;
  height: 25%;
}
.sotren {
  position: absolute;
  left: 50%;
  width: 200px;
  top: -10%;
  font-size: 20px;
  transform: translateX(-50%);
  font-family: sql;
}
.bedtren {
  font-family: sql;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  top: -22%;
  font-size: 20px;
  font-weight: 200;
  font-family: sql;
}
.typetren {
  font-family: sql;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  top: -35%;
  font-size: 20px;
  font-weight: 600;
  color: var(--colYellow);
  text-transform: uppercase;
}
.sotren::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  width: 1px;
  background: gray;
  height: 90px;
}
.soduoi {
  position: relative;
  bottom: -135%;
  font-size: 20px;
  font-family: sql;
}
.bedduoi {
  font-family: sql;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  bottom: -140%;
  font-size: 20px;
  font-weight: 200;
  font-family: sql;
}
.typeduoi {
  font-family: sql;
  position: relative;
  bottom: -145%;
  font-size: 20px;
  font-weight: 600;
  color: var(--colYellow);
  text-transform: uppercase;
}
.soduoi::after {
  content: "";
  position: absolute;
  bottom: 120%;
  left: 50%;
  width: 1px;
  background: gray;
  height: 100px;
}
.aso {
  color: var(--colYellow);
}

@media only screen and (max-width: 1366px) {
  .fsbtnA {
    /* background: rgba(252, 118, 136, 0.418); */
    top: 33%;
    left: 33%;
    width: 9%;
    height: 17%;
    /* height: 230px */
  }
  .fsbtnB {
    /* background: rgba(191, 255, 113, 0.392); */
    top: 33%;
    left: 42%;
    width: 9%;
    height: 17%;
  }
  .fsbtnC {
    /* background: rgb(221, 233, 170,  0.392); */
    top: 33%;
    left: 51%;
    width: 7%;
    height: 17%;
  }
  .fsbtnD {
    /* background: rgb(129, 227, 245,  0.392); */
    top: 33%;
    left: 58%;
    width: 13%;
    height: 17%;
  }
  .fsbtnG {
    /* background: rgb(95, 189, 233,  0.392); */
    top: 52%;
    left: 33%;
    width: 9%;
    height: 17%;
  }
  .fsbtnH {
    /* background: rgb(154, 91, 236,  0.392); */
    top: 52%;
    left: 42%;
    width: 9%;
    height: 17%;
  }
  .fsbtnF {
    /* background: rgba(241, 115, 225, 0.392); */
    top: 52%;
    left: 51%;
    width: 7%;
    height: 17%;
  }
  .fsbtnE {
    /* background: rgb(233, 162, 209,  0.392); */
    top: 52%;
    left: 58%;
    width: 13%;
    height: 17%;
  }
  /* =================== */
  .soduoi {
    bottom: -155%;
  }
  .bedduoi {
    bottom: -155%;
  }
  .typeduoi {
    bottom: -159%;
  }
}
@media only screen and (max-width: 1024px) {
  .fsbtnA {
    /* background: rgba(252, 118, 136, 0.418); */
    top: 41%;
    left: 33%;
    width: 9%;
    height: 9%;
    /* height: 230px */
  }
  .fsbtnB {
    /* background: rgba(191, 255, 113, 0.392); */
    top: 41%;
    left: 42%;
    width: 9%;
    height: 9%;
  }
  .fsbtnC {
    /* background: rgb(221, 233, 170,  0.392); */
    top: 41%;
    left: 51%;
    width: 7%;
    height: 9%;
  }
  .fsbtnD {
    /* background: rgb(129, 227, 245,  0.392); */
    top: 41%;
    left: 58%;
    width: 13%;
    height: 9%;
  }
  .fsbtnG {
    /* background: rgb(95, 189, 233,  0.392); */
    top: 51%;
    left: 33%;
    width: 9%;
    height: 9%;
  }
  .fsbtnH {
    /* background: rgb(154, 91, 236,  0.392); */
    top: 51%;
    left: 42%;
    width: 9%;
    height: 9%;
  }
  .fsbtnF {
    /* background: rgba(241, 115, 225, 0.392); */
    top: 51%;
    left: 51%;
    width: 7%;
    height: 9%;
  }
  .fsbtnE {
    /* background: rgb(233, 162, 209,  0.392); */
    top: 51%;
    left: 58%;
    width: 13%;
    height: 9%;
  }
  /* =================== */

  .sotren {
    top: -15%;
  }
  .bedtren {
    top: -32%;
  }
  .typetren {
    top: -49%;
  }
  .soduoi {
    bottom: -200%;
  }
  .bedduoi {
    bottom: -200%;
  }
  .typeduoi {
    bottom: -203%;
  }
}
@media only screen and (max-width: 960px) {
  .fsbtnA {
    /* background: rgba(252, 118, 136, 0.418); */
    top: 31%;
    left: 33%;
    width: 9%;
    height: 22%;
    /* height: 230px */
  }
  .fsbtnB {
    /* background: rgba(191, 255, 113, 0.392); */
    top: 31%;
    left: 42%;
    width: 9%;
    height: 22%;
  }
  .fsbtnC {
    /* background: rgb(221, 233, 170,  0.392); */
    top: 31%;
    left: 51%;
    width: 7%;
    height: 22%;
  }
  .fsbtnD {
    /* background: rgb(129, 227, 245,  0.392); */
    top: 31%;
    left: 58%;
    width: 13%;
    height: 22%;
  }
  .fsbtnG {
    /* background: rgba(233, 140, 18, 0.392); */
    top: 58%;
    left: 33%;
    width: 9%;
    height: 20%;
  }
  .fsbtnH {
    /* background: rgb(154, 91, 236,  0.392); */
    top: 58%;
    left: 42%;
    width: 9%;
    height: 20%;
  }
  .fsbtnF {
    /* background: rgba(241, 115, 225, 0.392); */
    top: 58%;
    left: 51%;
    width: 7%;
    height: 20%;
  }
  .fsbtnE {
    /* background: rgb(233, 162, 209,  0.392); */
    top: 58%;
    left: 58%;
    width: 13%;
    height: 20%;
  }
  /* =================== */
  .soduoi {
    bottom: -155%;
  }
  .bedduoi {
    bottom: -155%;
  }
  .typeduoi {
    bottom: -159%;
  }
}
@media only screen and (max-width: 960px) {
  /* =================== */

  .sotren {
    top: -40%;
    font-size: 14px;
  }
  .sotren::after {
    height: 40px;
  }
  .soduoi {
    bottom: -140%;
    font-size: 14px;
  }
  .soduoi::after {
    height: 40px;
  }
  .ftype {
    position: fixed;
    top: 47%;
    left: 85%;
  }
  .fbed {
    position: fixed;
    top: 53%;
    left: 85% !important;
  }
  .typeduoi.ftype {
    left: 79% !important;
  }
}

@media only screen and (max-width: 400px) {
  .fsbtnA {
    /* background: rgba(252, 118, 136, 0.418); */
    top: 49%;
    left: 30%;
    width: 9%;
    height: 6%;
    /* height: 230px */
  }
  .fsbtnB {
    /* background: rgba(191, 255, 113, 0.392); */
    top: 49%;
    left: 39%;
    width: 9%;
    height: 6%;
  }
  .fsbtnC {
    /* background: rgb(221, 233, 170,  0.392); */
    top: 49%;
    left: 48%;
    width: 7%;
    height: 6%;
  }
  .fsbtnD {
    /* background: rgb(129, 227, 245,  0.392); */
    top: 49%;
    left: 55%;
    width: 13%;
    height: 6%;
  }
  .fsbtnG {
    /* background: rgba(233, 140, 18, 0.392); */
    top: 56%;
    left: 30%;
    width: 9%;
    height: 6%;
  }
  .fsbtnH {
    /* background: rgb(154, 91, 236,  0.392); */
    top: 56%;
    left: 39%;
    width: 9%;
    height: 6%;
  }
  .fsbtnF {
    /* background: rgba(241, 115, 225, 0.392); */
    top: 56%;
    left: 48%;
    width: 7%;
    height: 6%;
  }
  .fsbtnE {
    /* background: rgb(233, 162, 209,  0.392); */
    top: 56%;
    left: 55%;
    width: 13%;
    height: 6%;
  }
  /* =================== */
  .soduoi {
    bottom: -155%;
  }
  .bedduoi {
    bottom: -155%;
  }
  .typeduoi {
    bottom: -159%;
  }
}
@media only screen and (max-width: 400px) {
  /* =================== */

  .sotren {
    top: -80%;
    font-size: 14px;
  }
  .sotren::after {
    height: 40px;
  }
  .soduoi {
    bottom: -150%;
    font-size: 14px;
  }
  .soduoi::after {
    height: 40px;
  }
  .ftype {
    position: fixed;
    top: 76%;
    left: -50%;
  }
  .fbed {
    position: fixed;
    top: 80%;
    left: 49% !important;
    transform: translateX(-50%);
  }
  .typeduoi.ftype {
    left: 50% !important;
    transform: translateX(-50%);
  }
}
</style>
