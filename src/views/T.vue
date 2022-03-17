<template>
  <v-container fluid class="bg">
    <!-- <v-img width="1920" height="100%" src="../assets/bg.png"/> -->
    <div id="streetview" class="app3d">
      <div id="hotspot-info"></div>
    </div>
    <div class="minimap">
      <div id="mini-map" class="mini-map"></div>
    </div>

    <!-- ==================? -->
    <div class="text-center list-btn-control">
      <v-btn
        class="item-btn-control in-zoom"
        @click="inzoom()"
        :class="{ active: !isInzoom }"
      >
        <!-- @mouseover="isInzoom =! isInzoom" @mouseout="isInzoom =! isInzoom" -->
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
        @click="outzoom()"
        :class="{ active: !isOutzoom }"
      >
        <!-- @mouseover="isOutzoom =! isOutzoom" @mouseout="isOutzoom =! isOutzoom" -->
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
        @click="
          turnb();
          isTurn = !isTurn;
        "
        :class="{ active: !isTurn }"
      >
        <!-- @mouseover="isTurn =! isTurn" @mouseout="isTurn =! isTurn" -->
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

    <!-- ===============================
  ===============================
  =============================== -->
    <v-container fluid class="menu">
      <v-row>
        <div class="nav">
          <v-btn
            @click="isShow = !isShow"
            class="btn-nav"
            :class="{ active: isShow }"
          >
            <!-- @mouseover="isNar =! isNar" @mouseout="isNar =! isNar" -->
            <img
              v-show="isShow"
              width="27"
              class="icon-show"
              src="../assets/iconNar.png"
            />
            <img
              v-show="!isShow"
              width="27"
              class="icon-show"
              src="../assets/iconNarb.png"
            />
          </v-btn>
        </div>

        <div v-show="isShow" class="conten-nav">
          <div class="option">
            <!-- <router-link class="links" to="/" tag="button"> -->
            <v-btn
              class="btn-option"
              :class="{ active: menu == 1 }"
              @click="goto360view()"
            >
              360 Views
            </v-btn>
            <!-- </router-link> -->

            <!-- <router-link class="links" to="floorplans" tag="button"> -->
            <v-btn
              class="btn-option"
              :class="{ active: menu == 2 }"
              @click="gotofloorplans()"
            >
              Floorplans
            </v-btn>
            <!-- </router-link> -->

            <!-- <router-link class="links " to="/location" tag="button"> -->
            <v-btn
              class="btn-option"
              :class="{ active: menu == 3 }"
              @click="gotolocation()"
            >
              Location Map
            </v-btn>
            <!-- </router-link> -->
            <!-- <router-link class="links" to="/" tag="button"> -->
            <v-btn
              class="btn-option last"
              @click="
                isShowQL = !isShowQL;
                goto360view();
              "
              v-bind:class="{ active: isShowQL }"
            >
              Facilities
            </v-btn>
            <!-- </router-link> -->
            <!-- <router-link to="laM" tag="ui-button" class="btn-option">
                Location Map
              </router-link> -->
            <!-- <v-btn class="btn-setting">
                <v-img class="img-setting" src="../assets/setting.png"/>
              </v-btn> -->
          </div>
        </div>
      </v-row>
      <v-row>
        <div class="quick" v-show="isShowQL && isShow">
          <div class="content-quick">
            <v-row class="dd">
              <v-card class="card-quick" hover @click="gotoview('view1')">
                <v-img class="card-img" src="../assets/imgQL/1.jpg"></v-img>
                <div class="card-title" text-center>Exterior 1</div>
              </v-card>

              <v-card class="card-quick" hover @click="gotoview('view2cao')">
                <v-img class="card-img" src="../assets/imgQL/2.jpg"></v-img>
                <div class="card-title" text-center>Exterior 2</div>
              </v-card>
              <v-card class="card-quick" hover @click="gotoview('view3cao')">
                <v-img class="card-img" src="../assets/imgQL/3.jpg"></v-img>
                <div class="card-title" text-center>Exterior 3</div>
              </v-card>
              <v-card class="card-quick" hover @click="gotoview('view4cao')">
                <v-img class="card-img" src="../assets/imgQL/4.jpg"></v-img>
                <div class="card-title" text-center>Exterior 4</div>
              </v-card>
              <v-card class="card-quick" hover @click="gotoview('view5')">
                <v-img
                  class="card-img"
                  src="../assets//imgQL/Entrance.jpg"
                ></v-img>
                <div class="card-title" text-center>Entrance 2</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('view29meetinlounge')"
              >
                <v-img
                  class="card-img"
                  src="../assets//imgQL/mlounge.jpg"
                ></v-img>
                <div class="card-title" text-center>Meeting Lounge</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('view28meetingroom')"
              >
                <v-img
                  class="card-img"
                  src="../assets//imgQL/mroom.jpg"
                ></v-img>
                <div class="card-title" text-center>Meeting room</div>
              </v-card>
              <v-card class="card-quick" hover @click="gotoview('view7toi')">
                <v-img class="card-img" src="../assets//imgQL/ent.jpg"></v-img>
                <div class="card-title" text-center>Entrance</div>
              </v-card>
              <v-card class="card-quick" hover @click="gotoview('view22')">
                <v-img
                  class="card-img"
                  src="../assets//imgQL/poorbar.jpg"
                ></v-img>
                <div class="card-title" text-center>Pool bar</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('view23liftlobby')"
              >
                <v-img class="card-img" src="../assets//imgQL/lift.jpg"></v-img>
                <div class="card-title" text-center>Lift Lobby</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('view27coffee')"
              >
                <v-img
                  class="card-img"
                  src="../assets//imgQL/coffee.jpg"
                ></v-img>
                <div class="card-title" text-center>The coffee</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('view25co-woking')"
              >
                <v-img class="card-img" src="../assets//imgQL/co.jpg"></v-img>
                <div class="card-title" text-center>Co-working space</div>
              </v-card>
            </v-row>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>
<style>
.bg {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  /* position: relative; */
  /* top: 0; */
  z-index: 0;
  padding: 0 !important;
}
.app3d {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.mini-map {
  /* height: 300px; */
  border: 3px black solid;
}
.minimap {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  background: #ffffff7e;
}
.pano-hotspot {
  position: absolute !important;
  padding: 2px 8px;
  /* background-color: rgba(240,248,255,.7607843137254902); */
  border-radius: 5px;
  font-size: small;
}
.bg {
  padding: 0 !important;
}
.pp {
  /* position: absolute; */
  /* top: 500px;
    left: 500px; */
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
  z-index: 999;
}

.btn-hotspot {
  /* background:red; */
  position: relative;
}
.title-hotspot p {
  background: #A49C87;
  padding: 10px auto !important;
  color: #fff;
  margin-bottom: 0px;
  width: 252px;
  text-transform: uppercase;
  font-size: 16px;
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
  display: none;
  width: 258px;
  transition: 10s;
  position: absolute;
  bottom: 27px;
  padding: 2px;
  background-color: #c7b299;
  border-radius: 5px;
  padding-bottom: 0px;
  left: -1px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 197px;
}
/* .pano-hotspot:hover .img-hotspot {
  display: block;
} */
/* ============= */
.list-btn-control {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 10px;
  background: #ffffff7e;
  padding: 10px;
}
.item-btn-control {
  border-radius: 0 !important;
  margin-right: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: #033348d0 !important;
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
/* .item-btn-control:hover{
   background-color: #A49C87 !important;
 } */

/* ======================= */

.quick {
  position: fixed;
  left: 50%;
  bottom: 50%;
  height: 600px;
  min-width: 600px !important;
  background: #ffffff7e;
  transform: translate(-50%, 50%);
}
.content-quick {
  background: #b5a46a5b;
  margin: 10px;
  height: 580px;
  padding: 10px !important;
}
.dd {
  width: 605px;
  height: 580px;
  overflow-y: scroll !important;
}
.card-quick {
  position: relative;
  width: 23% !important;
  border-radius: 0 !important;
  padding: 10px;
  margin: 10px;
  margin-right: 0px;
}
.card-img {
  height: 120px;
  width: 120px;
  margin: auto;
}
.card-title {
  font-size: 14px;
  margin: auto;
  text-transform: uppercase;
  margin: auto;
  text-align: center;
  margin-top: 10px;
  color: #A49C87;
}

.menu {
  position: fixed;
  top: 5px;
  right: 10px;
  z-index: 999 !important;
  padding: 0px;
}
.nav {
  z-index: 9;
  position: absolute;
  top: 2px;

  right: 0;

  padding: 10px;
  background: #ffffff7e;
}
.btn-nav {
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: #033348 !important;
}
/* .btn-nav:hover{
   background-color: #A49C87 !important;
 } */
.icon-nav {
  max-width: 32px;
  max-height: 32px;
}
.conten-nav {
  z-index: 999 !important;
  position: absolute;
  top: 85px;
  /* right: 85px; */
  right: 56px;
}
.img-setting {
  max-width: 32px;
}
.option {
  background: #ffffff7e;
  padding: 8px;
  border-radius: 0px !important;
}
.btn-option {
  border-radius: 0 !important;
  margin-right: 8px !important;
  height: 48px !important;
  background-color: #033348 !important;
  color: #A49C87 !important;
}
/* .btn-option:hover {
   background-color: #A49C87 !important;
   color: #033348 !important;
} */
.btn-setting {
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  background-color: #033348 !important;
  color: #fff !important;
}
/* .btn-setting:hover{
   background-color: #A49C87 !important;
} */
.last {
  margin-right: 0px !important;
}
.active {
  background: #A49C87 !important;
  color: #033348 !important;
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import PanoViewer from "@/app/viewer";
import MiniMap from "@/app/minimap/mscene";
const baseUrl = "http://localhost:5000/";
// const baseUrl = ".";
//
// const baseUrl = ".";
let minimap, info, curr;

export default {
  data() {
    return {
      viewer: null,
      dialog: false,
      isInzoom: true,
      isOutzoom: true,
      isTurn: true,
      zoom: 0,
      turn: false,

      isShow: false,
      isNar: true,
      isShowQL: false,

      menu: 1,
    };
  },
  computed: {
    ...mapGetters(["menu"]),
  },

  mounted() {
    // function runapp() {
    const el = document.getElementById("streetview");
    info = document.getElementById("hotspot-info");
    const opt = {
      baseUrl: baseUrl,
      canZoom: true,
      updateOnChange: false,
      transitionscale: 5,
      // autorotdelay:3000
    };
    this.menu = this.$store.state.menu;
    this.viewer = new PanoViewer(el, opt);
    // viewer.controls.enableDamping = true
    this.zoom = this;
    const minimapopt = {
      baseUrl: baseUrl,
      runtime: true,
      border: "all",
      colorError: "#A49C87",
      radius: 5,
      borderRadius: 1,
      canSelect: false,
      canPan: false,
      canZoom: false,
      camera: {
        path: "imgs/cung.svg",
        transform: {
          x: 275,
          y: 80,
          width: 550,
          height: 400,
          r: 90,
        },
      },
    };

    minimap = new MiniMap(document.getElementById("mini-map"), minimapopt);
    minimap.load("mainan");
    // let url_string = window.location.href
    // let url = new URL(url_string);
    // let panoname = url.searchParams.get("view") || 'StreetViewPoint1'
    this.viewer.init().then(() => {
      this.loadPanoById("view4cao", true);
    });
    this.viewer.onRequestLoadPano = (hp) => {
      this.loadPanoById(hp.name);
    };
    this.viewer.onChangeRot = (z) => {
      if (curr) minimap.updateCam(curr.pos, z);
    };
    const allhotspot = [];
    this.viewer.onChangeHotspot = (ls) => {
      for (const hp of allhotspot) {
        hp.el.style = `display:none`;
      }
      for (const item of ls) {
        let hp = allhotspot.find((x) => x.name == item.name);
        if (item.pp == true) {
          if (!hp) {
            hp = {
              name: item.name,

              el: createElementFromHTML(
                `
                <div class="pano-hotspot pp" >
                    <img class="icon-hotspot hpPP" src="./imgs/hpPP.png">
                </div>
                `
              ),
            };
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 70}px;left:${
            item.pos2d.x - 42
          }px;`;
        }
        if (item.type == 2 && item.pp != true) {
          if (!hp) {
            const btn = createElementFromHTML(`<button class="btn-hotspot">
                                            <img class="icon-hotspot" src="./imgs/hotspotT.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name);
            hp = {
              name: item.name,
              // <p> ${item.name}  </p>
              el: createElementFromHTML(
                `
                <div class="pano-hotspot hotspot" >
                    
                    <div class="title-hotspot text-center" >
                    <img class="img-hotspot" style="h" src="${baseUrl}/pano/${item.guid}/${item.thumb}">
                    <p> ${item.name} </p>
                    </div>
                    
                </div>
                `
              ),
            };
            hp.el.appendChild(btn);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }

          hp.el.style = `top:${item.pos2d.y - 70}px;left:${
            item.pos2d.x - 137
          }px;`;
        }
      }
    };
    minimap.onclick = (hp) => {
      this.loadPanoById(hp.name, true);
    };
    // }

    function createElementFromHTML(htmlString) {
      const div = document.createElement("div");
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }
  },
  methods: {
    ...mapMutations(["setMenu"]),
    gotoview(a) {
      this.loadPanoById(a, true);
    },

    gotofloorplans() {
      this.setMenu(2);
      this.$router.push("/floorplans");
    },
    gotolocation() {
      this.setMenu(3);
      this.$router.push("/location");
    },
    goto360view() {
      this.setMenu(1);
      this.$router.push("/");
    },

    inzoom() {
      this.viewer.zoomIn();
      this.zoom += 1;
      console.log(this.zoom);
      if (this.zoom == 0) {
        this.isInzoom = false;
        this.isOutzoom = false;
      } else if (this.zoom > 0) {
        this.isInzoom = true;
        this.isOutzoom = false;
      } else {
        this.isInzoom = false;
        this.isOutzoom = true;
      }

      // isInzoom: true,
      // isOutzoom: true,
      // isTurn: true,
    },

    outzoom() {
      this.viewer.zoomOut();
      this.zoom -= 1;
      console.log(this.zoom);
      if (this.zoom == 0) {
        this.isInzoom = false;
        this.isOutzoom = false;
      } else if (this.zoom < 0) {
        this.isInzoom = false;
        this.isOutzoom = true;
      } else {
        this.isInzoom = true;
        this.isOutzoom = false;
      }
    },

    turnb() {
      this.turn = !this.turn;
      this.viewer.autoRot(this.turn);
    },

    loadPanoById(id, firstload = false) {
      //start ===============cheat for tn-project (fake id)
      const idMatch = {
        happyschool: "05j",
        lovingschool: "05x",
        nhatesla: "04d",
        nhacantata: "01t",
        vuonzen: "01d",
        tttm: "overview",
        ecoffee: "overview",
        baotangthegioicaphe: "00h",
        "gym-yoga-bancung": "00o",
        "cuoingua-golf": "overview",
        trungnguyenlegend: "02o",
        amthuc: "overview",
      };
      if (idMatch[id]) {
        id = idMatch[id];
      }
      //end ===============cheat for tn-project
      this.viewer
        .loadPanoById(id, firstload)
        .then((res) => (curr = res))
        .catch(console.log);
      // window.history.pushState({}, null, `./?view=${id}`);
    },
  },
};
</script>
