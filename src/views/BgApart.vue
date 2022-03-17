<template>
  <v-container fluid class="bg">
    <div class="mang"></div>
    <!-- <img v-bind:src="require('../assets/1x/bgApart'+ type + '.png')" /> -->
    <div class="aimg-apart">
      <img
        class="imgap"
        v-bind:src="require('../assets/1x/apart' + type + '.png')"
      />
    </div>

    <div class="infoo">
      <div class="floorplans">Apartment Type {{ apart[type].name }}</div>
      <div class="tower1">{{ apart[type].bedroom }} Bedrooms</div>
      <div class="tower1">
        {{ apart[type].external }} m<sup>2</sup> [External]
      </div>
      <div class="tower1">
        {{ apart[type].interior }} m<sup>2</sup> [Internal]
      </div>
      <div class="tower1">
        {{ apart[type].total }} m<sup>2</sup> [Total area]
      </div>
      <!-- <router-link class="links" to="/furniture" tag="button"> -->
      <v-btn @click="gotoFur()" class="inte" :class="{ mokhoa: true }">
        <!-- :class="{mokhoa: this.type == '04' | this.type == '08' | this.type == '01'}" -->
        {{ this.nn[this.lang].apart.balconyView }}
      </v-btn>
      <br />
      <v-btn @click="gotoFur()" class="inte" :class="{ mokhoa: true }">
        <!-- :class="{mokhoa: this.type == '04' | this.type == '08' | this.type == '01'}" -->
        {{ this.nn[this.lang].apart.interiorView }}
      </v-btn>
      <!-- </router-link> -->
      <br />
      <router-link class="links" to="/floorplans" tag="button">
        <v-btn class="floor">
          <!-- @mouseover="isfloor =! isfloor" @mouseout="isfloor =! isfloor" -->
          <img
            v-show="isfloor"
            width="28"
            class="icon-show"
            src="../assets/1x/closea.png"
          />
          <img
            v-show="!isfloor"
            width="28"
            class="icon-show"
            src="../assets/1x/closeb.png"
          />

          {{ this.nn[this.lang].apart.floorView }}
        </v-btn>
      </router-link>
    </div>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isfloor: true,

      t: "A",

      type: this.$route.params.type,
      apart: {
        "05": {
          name: "A - 05",
          type: 5,
          bedroom: 2,
          interior: "90",
          external: "11",
          total: "101",
        },
        "06": {
          name: "B - 06",
          type: 6,
          bedroom: 2,
          interior: "92 - 93",
          external: "08",
          total: "100 - 101",
        },
        "07": {
          name: "C - 07",
          type: 7,
          bedroom: 1,
          interior: "56",
          external: "08 - 09",
          total: "64 - 65",
        },
        "08": {
          name: "D - 08",
          type: 8,
          bedroom: 3,
          interior: "138",
          external: "23",
          total: "161",
        },
        "01": {
          name: "E - 01",
          type: 1,
          bedroom: 2,
          interior: "109",
          external: "18",
          total: "127",
        },
        "02": {
          name: "F - 02",
          type: 2,
          bedroom: 2,
          interior: "89 - 90",
          external: "09",
          total: "98 - 99",
        },
        "03": {
          name: "B -  03",
          type: 3,
          bedroom: 2,
          interior: "91 - 93",
          external: "08",
          total: "99 - 101",
        },
        "04": {
          name: "A - 04",
          type: 4,
          bedroom: 2,
          interior: "90",
          external: "11",
          total: "101",
        },
      },
    };
  },
  watch: {
    $route(to) {
      this.type = to.params.type;
    },
  },
  methods: {
    gotoFur() {
      this.$router.push("/furniture/" + this.type);
    },
  },
  computed: {
    ...mapGetters(["lang", "nn"]),
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
.inte {
  background: var(--colBlue) !important;
  border-radius: 0;
  color: var(--colYellow) !important;
  font-size: 700 !important;
  font-family: sql;
  margin: 30px;
  margin-top: 50px;
  padding: 0 30px !important;
  height: 48px !important;
  /* pointer-events: auto; */
  pointer-events: none;
  opacity: 0.3;
}
.mokhoa {
  pointer-events: auto;
  opacity: 1;
}
/* 
.inte:hover{
    background:var(--colYellow) !important;
    border-radius: 0;
    color: var(--colBlue) !important;
    font-size: 700 !important;
    font-family: 'Campton';
} */
.floor {
  background: var(--colBlue) !important;
  border-radius: 0;
  color: var(--colYellow) !important;
  font-size: 700 !important;
  font-family: sql;
  margin: 30px;
  padding: 0 30px !important;
  height: 48px !important;
  pointer-events: auto;
}
/* .floor:hover{
    background:var(--colYellow) !important;
    border-radius: 0;
    color: var(--colBlue) !important;
    font-size: 700 !important;
    font-family: 'Campton';
} */
.infoo {
  position: fixed;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
  /* pointer-events: none; */
}
.floorplans {
  font-size: 56px;
  color: var(--colYellow);
  font-family: tieude;
}
.tower1 {
  font-family: sql;
  margin: 10px;
}

.bg {
  width: 100%;
  height: 100%;
  background: #fff;
  /* position: relative; */
  /* top: 0; */
  z-index: 0;
  padding: 0 !important;
}
.mang {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: var(--colBg);
}
.aimg-apart {
  position: fixed;
  top: 55%;
  left: 70%;
  transform: translate(-50%, -50%);
  /* background: red; */
}
.imgap {
  width: 130%;
}
@media only screen and (max-width: 960px) {
  .infoo {
    position: fixed;
    top: 60%;
    left: 12%;
    transform: translateY(-50%);
    /* pointer-events: none; */
  }
  .floorplans {
    font-size: 22px;
    color: var(--colYellow);
    font-family: tieude;
  }
  .tower1 {
    font-family: sql;
    margin: 5px;
    font-size: 12px;
  }
  .inte,
  .floor {
    margin: 30px;
    margin-top: 20px !important;
    height: 36px !important;
    margin-bottom: 0;
    font-size: 11px !important;
  }
  .aimg-apart {
    top: 60%;
  }
}
.toanha2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  /* background: red; */
}
@media only screen and (max-width: 400px) {
  .imgap {
    width: 210px;
  }
  .aimg-apart {
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .infoo {
    position: fixed;
    top: 70%;
    left: 53%;
    transform: translate(-50%, -50%);
    /* pointer-events: none; */
  }
}
@media only screen and (max-height: 450px) {
  .imgap {
    width: 220px !important;
  }
  .aimg-apart {
    top: 62%;
    left: 70%;
    transform: translate(-50%, -50%);
  }
  .infoo {
    position: fixed;
    top: 65%;
    left: 40%;
    transform: translate(-50%, -50%);
    /* pointer-events: none; */
  }
  .floorplans {
    font-size: 20px;
  }
  .tower1 {
    font-size: 10px;
  }
  .inte,
  .floor {
    margin: 25px;
    margin-top: 20px !important;
    height: 30px !important;
    margin-bottom: 0;
    font-size: 10px !important;
  }
  .icon-show {
    max-width: 15px;
  }
}
</style>
