<template>
  <v-container fluid class="bg">
    <div class="aaaa">
      <!-- <div class="bbbb"></div>
      <div class="cccc"></div> -->
    </div>
    <!-- ===================show hotspot================== -->

    <div fluid class="show-hospot">
      <div class="sss">
        <img class="sss-show" :src="this.nn[this.lang].location.img_bg" />
      </div>

      <!-- Transposition -->
      <div v-show="ctives == 6" class="sss">
        <img
          class="sss-show"
          :src="this.nn[this.lang].location.img_transpositon"
        />
      </div>

      <!-- SPORTS & LEISURE -->
      <div v-show="ctives == 1" class="sss">
        <img
          class="sss-show"
          :src="this.nn[this.lang].location.img_rulesLanguag"
        />
      </div>

      <!-- ENTERTAINMENT -->
      <div v-show="ctives == 2" class="sss">
        <img
          class="sss-show"
          :src="this.nn[this.lang].location.img_tradeCenter"
        />
      </div>

      <!-- SHOPPING -->
      <div v-show="ctives == 3" class="sss">
        <img
          class="sss-show"
          :src="this.nn[this.lang].location.img_healthFac"
        />
      </div>

      <!-- CULTURE -->
      <div v-show="ctives == 4" class="sss">
        <img
          class="sss-show"
          :src="this.nn[this.lang].location.img_entertainment"
        />
      </div>

      <!-- EDUCATION -->
      <div v-show="ctives == 5" class="sss">
        <img class="sss-show" :src="this.nn[this.lang].location.img_edu" />
      </div>
      <!-- <div class="info">
        <img class="imginfo" src="../assets/1x/hpif.png" />
      </div> -->
    </div>

    <div class="btn-control" :class="{ onoff: issbtn }">
      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex"
          color="red"
          @click="
            active(6);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 6 }"
        >
          <!-- @click="isShowSL =! isShowSL; isSL =! isSL" -->
          <!-- @mouseover="isSL =! isSL" @mouseout="isSL =! isSL" -->
          <img
            v-show="ctives == 6"
            width="20"
            class="icon-show"
            src="../assets/icontranspositionB.png"
          />
          <img
            v-show="!(ctives == 6)"
            width="20"
            class="icon-show"
            src="../assets/icontranspositionA.png"
          />

          {{ this.nn[this.lang].location.txt_transpositon }}
        </v-btn>
      </v-row>

      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex"
          color="red"
          @click="
            active(1);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 1 }"
        >
          <!-- @click="isShowSL =! isShowSL; isSL =! isSL" -->
          <!-- @mouseover="isSL =! isSL" @mouseout="isSL =! isSL" -->
          <img
            v-show="ctives == 1"
            width="23"
            class="icon-show"
            src="../assets/iconrulesLanguageB.png"
          />
          <img
            v-show="!(ctives == 1)"
            width="23"
            class="icon-show"
            src="../assets/iconrulesLanguageA.png"
          />

          {{ this.nn[this.lang].location.txt_rulesLanguag }}
        </v-btn>
      </v-row>
      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex"
          @click="
            active(2);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 2 }"
        >
          <!-- @click="isShowCasino =! isShowCasino; isCasino =! isCasino" -->
          <!-- @mouseover="isCasino =! isCasino" @mouseout="isCasino =! isCasino" -->
          <img
            v-show="ctives == 2"
            width="20"
            class="icon-show"
            src="../assets/icontradeCenterB.png"
          />
          <img
            v-show="!(ctives == 2)"
            width="20"
            class="icon-show"
            src="../assets/icontradeCenterA.png"
          />
          {{ this.nn[this.lang].location.txt_tradeCenter }}
        </v-btn>
      </v-row>
      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex"
          @click="
            active(3);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 3 }"
        >
          <!-- @click="isShowShop =! isShowShop; isShop =! isShop" -->
          <!-- @mouseover="isShop =! isShop" @mouseout="isShop =! isShop" -->
          <img
            v-show="ctives == 3"
            width="20"
            class="icon-show"
            src="../assets/iconhealthFacB.png"
          />
          <img
            v-show="!(ctives == 3)"
            width="20"
            class="icon-show"
            src="../assets/iconhealthFacA.png"
          />
          {{ this.nn[this.lang].location.txt_healthFac }}
        </v-btn>
      </v-row>
      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex"
          @click="
            active(4);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 4 }"
        >
          <img
            v-show="ctives == 4"
            width="23"
            class="icon-show"
            src="../assets/iconentertainmentB.png"
          />
          <img
            v-show="!(ctives == 4)"
            width="23"
            class="icon-show"
            src="../assets/iconentertainmentA.png"
          />
          {{ this.nn[this.lang].location.txt_entertainment }}
        </v-btn>
      </v-row>
      <v-row class="list-btn-show">
        <v-btn
          class="btn-show d-flex last"
          @click="
            active(5);
            issbtn = !issbtn;
          "
          :class="{ active: ctives == 5 }"
        >
          <!-- @click="isShowEdu =! isShowEdu; isEdu =! isEdu" -->
          <!-- @mouseover="isEdu =! isEdu" @mouseout="isEdu =! isEdu" -->
          <img
            v-show="ctives == 5"
            width="23"
            class="icon-show"
            src="../assets/iconeduB.png"
          />
          <img
            v-show="!(ctives == 5)"
            width="23"
            class="icon-show"
            src="../assets/iconeduA.png"
          />
          {{ this.nn[this.lang].location.txt_edu }}
        </v-btn>
      </v-row>
    </div>

    <div class="btn-close" @click="issbtn = !issbtn">
      <img
        v-show="issbtn"
        width="12"
        class="icon-show"
        src="../assets/1x/locaon.png"
      />
      <img
        v-show="!issbtn"
        width="12"
        class="icon-show"
        src="../assets/1x/locaoff.png"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      // isSL: true,
      // isCasino: true,
      // isShop: true,
      // isCulture: true,
      // isEdu: true,

      // isShowSL: false,
      // isShowCasino: false,
      // isShowShop: false,
      // isShowCulture: false,
      // isShowEdu: false,

      // adsf = 1,
      show: true,
      isActive: true,
      ctives: 0,
      issbtn: false,
    };
  },
  methods: {
    ...mapMutations(["setLang"]),
    active(a) {
      if (this.ctives != a) this.ctives = a;
      else this.ctives = 0;
    },
  },
  computed: {
    ...mapGetters(["lang", "nn"]),
  },
};
</script>

<style scoped>
/* btn */
.bg {
  padding: 0 !important;
  overflow: hidden !important;
}
.sss {
  transition: 0.5s !important;
}
.btn-control {
  position: fixed;
  top: 55%;
  right: 5%;
  transform: translateY(-50%);
  background: var(--colBgBtn);
  padding: 20px;
  transition: 0.8s;
}

.btn-show {
  position: relative;
  color: var(--colYellow) !important;
  background-color: var(--colBlue) !important;
  width: 290px;
  height: 48px !important;
  margin-bottom: 10px;
  border-radius: 0 !important;
  justify-content: left !important;
  padding: 0 30px !important;
  transition: 0.3s !important;
}
.last {
  margin-bottom: 0 !important;
}
/* .btn-show:hover{
    background-color: #faf8f3 !important; 
    color: #033348 !important;
  } */
.icon-show {
  margin-right: 20px;
}

/* <!-- ===================show hotspot================== --> */
.sss-show {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 100%;
}
.active {
  background: var(--colYellow) !important;
  color: var(--colBlue) !important;
}
/* .active:hover{
  color: #faf8f3 !important; 
  background: #033348 !important;
} */
.imginfo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 100%;
}
.btn-close {
  opacity: 0;
  pointer-events: none;
}

@media only screen and (max-width: 960px) {
  .sss-show {
    height: 100%;
    width: auto;
  }
  .imginfo {
    height: 100%;
    width: auto;
  }
  .btn-show {
    height: 30px !important;
    width: 180px;
    font-size: 10px;
    padding: 0 20px !important;
  }
  .icon-show {
    margin-right: 15px;
    max-width: 16px;
  }

  .btn-close {
    opacity: 1;
    pointer-events: all;
    position: fixed;
    top: 55%;
    right: 0px;
    margin-right: -10px !important;
    transform: translateY(-50%);
  }
  .onoff {
    right: -70% !important;
  }
}
.aaaa {
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--colBg);
}
.bbbb {
  position: fixed;
  width: 50%;
  height: 100%;
  background: var(--colBg);
  left: 0;
}
.cccc {
  position: fixed;
  width: 50%;
  height: 100%;
  background: var(--colBg);
  right: 0 !important;
}
</style>