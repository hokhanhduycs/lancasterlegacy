<template>
  <v-container fluid class="menu">
    <v-row>
      <div v-show="this.isshowMenu" class="conten-nav">
        <div class="option">
          <!-- <router-link class="links" to="/" tag="button"> -->
          <v-btn
            class="btn-option"
            :class="{ active: this.menu == 1 }"
            @click="goto360view()"
          >
            {{ this.nn[this.lang].menu.views360 }}
          </v-btn>
          <!-- </router-link> -->

          <!-- <router-link class="links" to="floorplans" tag="button"> -->
          <v-btn
            class="btn-option"
            :class="{ active: this.menu == 2 }"
            @click="gotofloorplans()"
          >
            {{ this.nn[this.lang].menu.floorPlans }}
          </v-btn>
          <!-- </router-link> -->

          <!-- <router-link class="links " to="/location" tag="button"> -->
          <v-btn
            class="btn-option"
            :class="{ active: this.menu == 3 }"
            @click="gotolocation()"
          >
            {{ this.nn[this.lang].menu.locationMap }}
          </v-btn>
          <!-- </router-link> -->
          <!-- <router-link class="links" to="/" tag="button"> -->
          <v-btn
            class="btn-option last"
            @click="
              showQL();
              goto360view2();
            "
          >
            {{ this.nn[this.lang].menu.facilities }}
          </v-btn>
          <!-- </router-link> -->
          <!-- <v-btn
            class="btn-option"
            @click="from()"
            v-bind:class="{ active: this.isshowQL }"
          >
            Registration
          </v-btn> -->

          <!-- <router-link to="laM" tag="ui-button" class="btn-option">
                Location Map
              </router-link> -->
          <!-- <v-btn @click="ismusic()" class="btn-music">
            <img
              v-show="this.musicz2"
              class="img-music"
              src="../assets/1x/musicon.png"
            />
            <img
              v-show="!this.musicz2"
              class="img-music"
              src="../assets/1x/musicoff.png"
            />
          </v-btn> -->

          <v-btn @click="flang()" class="btn-music">
            <div class="lang">{{ this.lang == "vn" ? "en" : "vn" }}</div>
            <!-- <div v-show="false" class="langvn">{{ !this.lang }}</div> -->
          </v-btn>
        </div>
      </div>
    </v-row>
    <div class="nav">
      <v-btn
        @click="showMenu()"
        class="btn-nav"
        :class="{ active: this.isshowMenu }"
      >
        <!-- @mouseover="isNar =! isNar" @mouseout="isNar =! isNar" -->
        <img
          v-show="this.isshowMenu"
          width="27"
          class="icon-show"
          src="../assets/iconNar.png"
        />
        <img
          v-show="!this.isshowMenu"
          width="27"
          class="icon-show"
          src="../assets/iconNarb.png"
        />
      </v-btn>
    </div>
    <div class="bg_prot">
      <div id="prot">
        Please turn on Auto-rotate mode and rotate your device!
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
var audio = new Audio(require("../assets/IntheMomentofInspiration.mp3"));
export default {
  data() {
    return {
      // isShow: false,
      isNar: true,
      // isShowQL: false,

      // menu: this.$store.state.menu,
    };
  },
  computed: {
    ...mapGetters(["menu", "isshowMenu", "musicz", "musicz2", "lang", "nn"]),
  },
  methods: {
    ...mapMutations([
      "setisShowQL",
      "setisShowMenu",
      "setMenu",
      "setMusicz",
      "setRender",
      "setMusicz2",
      "setLang",
    ]),
    flang() {
      console.log(this.lang);
      if (this.lang != "vn") {
        this.setLang("vn");
        return;
      }
      this.setLang("en");
    },
    goto360view2() {
      this.emit("goto360view2");
    },
    ismusic() {
      if (this.musicz2 == true) {
        this.setMusicz2(false);
        // this.setMusicz(false)
        audio.pause();
      } else {
        // this.setMusicz(true)
        this.setMusicz2(true);
        audio.play();
      }
    },

    showMenu() {
      if (this.isshowMenu == true) {
        this.setisShowMenu(false);
      } else {
        this.setisShowMenu(true);
      }
    },
    from() {
      window.location.href = "https://paradisoplace.com.au/#enquire";
    },
    showQL() {
      this.setisShowQL(true);
      this.setisShowMenu(false);
      this.goto360view();
    },
    gotohome() {
      this.$router.push("/");
      // this.isShowQL = true
    },
    ...mapMutations(["setMenu"]),
    gotoview(a) {
      this.loadPanoById(a, true);
    },

    gotofloorplans() {
      this.setMenu(2);
      this.setisShowMenu(false);
      this.$router.push("/floorplans");
    },
    gotolocation() {
      this.setMenu(3);
      this.setisShowMenu(false);
      this.$router.push("/location");
    },
    goto360view() {
      this.setMenu(1);
      this.setisShowMenu(false);
      this.setRender(false);
      this.$router.push("/");
      if (this.musicz2 == true) {
        this.setMusicz2(false);
        this.setMusicz(true);
        audio.pause();
      }
    },
  },
  mounted() {
    if (this.musicz2 == true && this.musicz == false) {
      audio.play();
    }
  },
};
</script>

<style scoped>
.lang {
  text-transform: uppercase;
}
</style>