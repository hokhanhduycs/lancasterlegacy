<template>
  <v-container fluid class="bg">
    <!-- <v-img width="1920" height="100%" src="../assets/bg.png"/> -->
    <div id="streetview" class="app3d"></div>
    <div id="hotspot-info" :class="{ aaa: this.render }"></div>
    <!-- <div class="map-icon"> -->
    <!-- <v-btn
            @click="isShowMap = !isShowMap; setisShowQL(false)"
            class=" btn-nav"
            v-show="!isShowMap" hinhtam
          > -->
    <!-- @mouseover="isNar =! isNar" @mouseout="isNar =! isNar" -->
    <!-- <img  width="20" class="icon-show" src="../assets/1x/iconmap.png"/> -->
    <!-- </v-btn> -->
    <!-- </div> -->
    <div class="hinhtam" v-show="this.render">
      <img
        class="tam-img"
        v-bind:src="require('../assets/imgQL/' + hinhtam + '.jpg')"
      />
    </div>

    <!-- ==================? -->
    <div class="text-center list-btn-control">
      <v-btn class="item-btn-control in-zoom" @click="inzoom()">
        <!-- :class="{ active: !isInzoom }" -->

        <!-- @mouseover="isInzoom =! isInzoom" @mouseout="isInzoom =! isInzoom" -->
        <img width="23" class="icon-show" src="../assets/SVG/inzoom.svg" />
      </v-btn>

      <v-btn class="item-btn-control out-zoom" @click="outzoom()">
        <!-- <img v-show="isInzoom" width="23" class="icon-show" src="../assets/SVG/inzoom.svg"/>
        <img v-show="!isInzoom" width="23" class="icon-show" src="../assets/SVG/inzoomb.svg"/> -->

        <!-- :class="{ active: !isOutzoom }" -->

        <!-- @mouseover="isOutzoom =! isOutzoom" @mouseout="isOutzoom =! isOutzoom" -->
        <img width="23" class="icon-show" src="../assets/SVG/outzoom.svg" />
        <!-- <img v-show="isOutzoom" width="23" class="icon-show" src="../assets/SVG/outzoom.svg"/> -->
        <!-- <img v-show="!isOutzoom" width="23" class="icon-show" src="../assets/SVG/outzoomb.svg"/> -->
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
    </v-btn>-->
      <v-btn
        class="item-btn-control location"
        @click="
          isShowMap = !isShowMap;
          setisShowQL(false);
          isshowInfo = false;
        "
        :class="{ active: isShowMap }"
      >
        <!-- @mouseover="isLoation =! isLoation" @mouseout="isLoation =! isLoation" -->
        <img
          v-show="!isShowMap"
          width="23"
          class="icon-show"
          src="../assets/SVG/location.svg"
        />
        <img
          v-show="isShowMap"
          width="23"
          class="icon-show"
          src="../assets/SVG/locationb.svg"
        />
      </v-btn>
    </div>
    <!-- ===============================
  =============================== -->
    <div class="map" :class="{ activeMap: isShowMap }">
      <div class="minimap">
        <div class="option-map">
          <!-- <router-link class="links" to="/" tag="button"> -->
          <v-btn
            class="btn-option-map floorg"
            @click="loadMap(1)"
            :class="{ active: map == 1 }"
          >
            GROUND FLOOR
          </v-btn>
          <!-- </router-link> -->
          <!-- <router-link class="links" to="floorplans" tag="button"> -->
          <!-- <v-btn
            class="btn-option-map podium"
            @click="loadMap(2)"
            :class="{ active: map == 2 }"
          >
            PODIUM
          </v-btn> -->
          <!-- </router-link> -->
          <!-- <router-link class="links " to="/location" tag="button"> -->
          <!-- <v-btn
            class="btn-option-map floor26"
            @click="loadMap(3)"
            :class="{ active: map == 3 }"
          >
            26th FLOOR
          </v-btn> -->
          <!-- </router-link> -->
          <v-btn class="btn-exitmap" @click="isShowMap = !isShowMap">
            <img class="img-exitmap" src="../assets/1x/exitmap.png" />
          </v-btn>
        </div>
        <div id="mini-map" class="mini-map"></div>
      </div>
    </div>
    <!-- ============= -->
    <v-container fluid class="menu" :class="{ mf: this.mf }">
      <v-row>
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

        <!-- ======= menu====== -->
        <Menu @:goto360view2="goto360view2" />
      </v-row>
      <v-row>
        <!-- <div class="quick" v-show="this.isshowQL && this.isshowMenu"> -->
        <div class="quick">
          <div class="content-quick" v-show="this.isshowQL">
            <div class="bgbtnclose">
              <v-btn class="btn-closes" @click="setisShowQL(false)">
                <img class="img-close" src="../assets/1x/close.png" />
              </v-btn>
            </div>
            <v-row class="dd">
              <!-- <v-card class="card-quick" hover 
          @click="gotoview('view1')"
          >
            <v-img class="card-img"
              src="../assets/imgQL/1.jpg"></v-img>
            <div class="card-title" text-center>Exterior 1</div>
          </v-card>

          <v-card class="card-quick" hover
          @click="gotoview('view2cao')"
          >
            <v-img class="card-img"
              src="../assets/imgQL/2.jpg"></v-img>
            <div class="card-title" text-center>Exterior 2</div>
          </v-card>
          <v-card class="card-quick" hover
          @click="gotoview('view3cao')"
          hinhtam
          >
            <v-img class="card-img"
              src="../assets/imgQL/3.jpg"></v-img>
            <div class="card-title" text-center>Exterior 3</div>
          </v-card>
          <v-card class="card-quick" hover
          @click="gotoview('view4cao')"
          >
            <v-img class="card-img"
              src="../assets/imgQL/4.jpg"></v-img>
            <div class="card-title" text-center>Exterior 4</div>
          </v-card> -->
              <v-card
                class="card-quick"
                hover
                @click="gotoview('floor5', 1)"
                :class="{ facilites: facilites == 1 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/floor5.jpg"
                ></v-img>
                <div class="card-title" text-center>Arrival</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('floor7', 2)"
                :class="{ facilites: facilites == 2 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/floor7.jpg"
                ></v-img>
                <div class="card-title" text-center>Retail Area</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_gym', 3)"
                :class="{ facilites: facilites == 3 }"
              >
                <!-- @click="gotoview('level2_1', 3)" -->
                <v-img
                  class="card-img"
                  src="../assets/imgQL/hinhgym.jpg"
                ></v-img>
                <div class="card-title" text-center>Gym</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_vip_dinning', 4)"
                :class="{ facilites: facilites == 4 }"
              >
                <!-- @click="gotoview('level2_1', 3)" -->
                <v-img class="card-img" src="../assets/imgQL/vip.jpg"></v-img>
                <div class="card-title" text-center>Vip Dinning</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_1', 5)"
                :class="{ facilites: facilites == 5 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_1.jpg"
                ></v-img>
                <div class="card-title" text-center>Main resort pool</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_2', 6)"
                :class="{ facilites: facilites == 6 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/poorbar.jpg"
                ></v-img>
                <div class="card-title" text-center>Pool bar</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_8', 7)"
                :class="{ facilites: facilites == 7 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_8.jpg"
                ></v-img>
                <div class="card-title" text-center>sunset pods</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_7', 8)"
                :class="{ facilites: facilites == 8 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_7.jpg"
                ></v-img>
                <div class="card-title" text-center>Alfresco dining 1</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_9', 9)"
                :class="{ facilites: facilites == 9 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_9.jpg"
                ></v-img>
                <div class="card-title" text-center>Sunrise pod</div>
              </v-card>
              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_10', 10)"
                :class="{ facilites: facilites == 10 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_10.jpg"
                ></v-img>
                <div class="card-title" text-center>Alfresco dining 2</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_5', 11)"
                :class="{ facilites: facilites == 11 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_5.jpg"
                ></v-img>
                <div class="card-title" text-center>Lap Pool</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level2_20', 12)"
                :class="{ facilites: facilites == 12 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/level2_5_1.jpg"
                ></v-img>
                <div class="card-title" text-center>wellness terrace</div>
              </v-card>
              <!-- ======================== -->
              <v-card
                class="card-quick"
                hover
                @click="gotoview('floor16', 13)"
                :class="{ facilites: facilites == 13 }"
              >
                <v-img class="card-img" src="../assets/imgQL/lift.jpg"></v-img>
                <div class="card-title" text-center>Resident lobby</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level26_3', 14)"
                :class="{ facilites: facilites == 14 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/coffee.jpg"
                ></v-img>
                <div class="card-title" text-center>Coffee Emporium</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level26_5', 15)"
                :class="{ facilites: facilites == 15 }"
              >
                <v-img class="card-img" src="../assets/imgQL/co.jpg"></v-img>
                <div class="card-title" text-center>Co-working space</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level26_8', 16)"
                :class="{ facilites: facilites == 16 }"
              >
                <v-img class="card-img" src="../assets/imgQL/mroom.jpg"></v-img>
                <div class="card-title" text-center>Meeting room</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level26_9', 17)"
                :class="{ facilites: facilites == 17 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/mlounge.jpg"
                ></v-img>
                <div class="card-title" text-center>Meeting Lounge</div>
              </v-card>

              <v-card
                class="card-quick"
                hover
                @click="gotoview('level26_nultifunction', 18)"
                :class="{ facilites: facilites == 18 }"
              >
                <v-img
                  class="card-img"
                  src="../assets/imgQL/multi-function.jpg"
                ></v-img>
                <div class="card-title" text-center>Multi-Funtion Space</div>
              </v-card>
            </v-row>
          </div>
        </div>
      </v-row>
      <div class="nut" @click="gotoview('overview', 1)"></div>
      <!-- <audio id="music" controls autoplay  loop>
                  <source src="../assets/IntheMomentofInspiration.mp3">
                </audio> -->
    </v-container>
    <div class="bg_prot">
      <div id="prot">
        Please turn on Auto-rotate mode and rotate your device!
      </div>
    </div>
    <div class="infoobg" v-show="isshowInfo" @click="showInfo">
      <img class="infoobg" src="../assets/infoo.jpg" />
      <div class="bgbtnclose">
        <v-btn class="btn-closes">
          <img class="img-close" src="../assets/1x/close.png" />
          <!-- <vuetify-audio :v-on="play()" :file="file" :ended="audioFinish"></vuetify-audio> -->
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<style>
/* bgbtnclose */
.imgsss {
  z-index: 1000 !important;
}
.bg {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  /* position: relative; */
  /* top: 0; */
  z-index: 0;
  padding: 0 !important;
  overflow-y: hidden !important;
}
.app3d {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.mini-map {
  height: 350px;
  background: var(--colBg) f8 !important;
  padding-top: 27px;
}
/* .mini-map canvas {
  height: 350px;
  background: var(--colBgBtn) !important;
  padding-bottom: -50px !important;
} */
.minimap {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px;
  background: var(--colBgBtn);
  z-index: 999 !important;
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
  /* position: absolute; */
  /* bottom: 50%; text-center */
  /* left: 50%; */
  /* z-index: 999; */
}

.btn-img {
  /* background:red; */
  position: absolute;
  width: 75px;
}
@font-face {
  font-family: sql;
  src: url("~@/assets/fonts/Campton-Light.otf");
}

.name-hotspot {
  font-family: sql;
  background: var(--colYellow);
  color: #fff;
  width: 252px;
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 auto !important;
  padding: 4px 0;
}
.title-hotspot {
  position: relative;
  left: -50%;
  /* transform: translateX(49%); */
  background: #c7b299;
  border-radius: 5px;
  width: 258px;
  transform: translateX(-20%);
}
.img-hotspot {
  display: none;
  width: 258px;
  transition: 10s;
  position: absolute;
  top: -100%;
  transform: translateX(-50%);

  margin-top: -170px;
  /* padding: 2px;
  background-color: #c7b299; */
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 197px;
  padding: 2px !important;
  background: #c7b299;
  padding-bottom: 0 !important;
}
.btn-img:hover .img-hotspot {
  display: inline !important;
}
.btn-img:hover .title-hotspot {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  z-index: 9;
}
/* ============= */
.list-btn-control {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 10px;
  background: var(--colBgBtn);
  padding: 10px;
}
.item-btn-control {
  border-radius: 0 !important;
  margin-right: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: var(--colBlue) d0 !important;
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
   background-color: var(--colYellow) !important; 
 } */
@media only screen and (max-width: 960px) {
  .title-hotspot {
    opacity: 0;
  }
  .btn-img:hover .title-hotspot {
    opacity: 1;
  }
  .btn-nav,
  .item-btn-control {
    height: 38px !important;
    min-width: 38px !important;
  }
  .icon-show {
    max-width: 20px;
  }
  .list-btn-control {
    padding: 8px;
  }
}
@media only screen and (max-width: 380px) {
  .list-btn-control {
    min-width: 54%;
  }
}

/* ======================= */

.quick {
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);

  background: var(--colBgBtn);
}
.content-quick {
  background: #e6dbbb;
  margin: 10px !important;
  padding: 15px !important;
}
.dd {
  width: 605px;
  height: 550px;
  overflow-y: scroll !important;
}
.card-quick {
  position: relative;
  width: 23% !important;
  border-radius: 0 !important;
  padding: 10px;
  margin: 10px;
  margin-right: 0px;
  max-height: 190px;
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
  color: var(--colYellow);
}
@media only screen and (max-width: 960px) {
  .content-quick {
    margin: 5px !important;
    padding: 0px !important;
  }
  .dd {
    width: 450px;
    height: 290px;
    margin: 10px 0;
  }
  .card-quick {
    padding: 5px;
    margin: 5px;
    margin-left: 3px;
    max-height: 190px;
  }
  .card-img {
    height: 90px;
    width: 90px;
    margin: auto;
  }
  .card-title {
    font-size: 12px;
  }
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
  background: var(--colBgBtn);
}
.btn-nav {
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: var(--colBlue) !important;
}
/* .btn-nav:hover{
   background-color: var(--colYellow) !important;
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
.img-music {
  max-width: 20px;
}
.img-exitmap {
  max-width: 20px;
}
.option {
  background: var(--colBgBtn);
  padding: 8px;
  border-radius: 0px !important;
}
.btn-option {
  border-radius: 0 !important;
  margin-right: 8px !important;
  height: 48px !important;
  background-color: var(--colBlue) !important;
  color: var(--colYellow) !important;
  font-weight: 600 !important;
}
/* .btn-option:hover {
   background-color: var(--colYellow) !important;
   color: var(--colBlue) !important;
} */
.btn-music {
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  background-color: var(--colBlue) !important;
  color: var(--colYellow) !important;
  margin-left: 8px;
}
.btn-exitmap {
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  background-color: var(--colBlue) !important;
  color: var(--colYellow) !important;
  margin-left: 8px;
}
/* .btn-setting:hover{
   background-color: var(--colYellow) !important;
} */
.last {
  margin-right: 0px !important;
}
@media only screen and (max-width: 960px) {
  .nav {
    padding: 7px;
  }
  .conten-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px !important;
    background: var(--colBlue);
    padding-top: 98px !important;
    margin-top: -5px;
  }
  .option {
    background: var(--colBlue);
    padding: 8px;
    border-radius: 0px;
    width: 360px !important;
    height: 300px;
  }
  .btn-option {
    border-radius: 0;

    height: 38px !important;
    background-color: var(--colBlue) !important;
    color: var(--colYellow) !important;
    width: 330px !important;
    margin-left: 12px !important;
    justify-content: left !important;
    box-shadow: none !important;
  }
  .btn-music {
    height: 38px !important;
    width: 330px !important;
    justify-content: left !important;
    padding-left: 19px !important;
    margin-left: 12px;
    box-shadow: none !important;
  }
}
.active {
  background: var(--colYellow) !important;
  color: var(--colBlue) !important;
}
.btn-option-map {
  border-radius: 0 !important;
  height: 48px !important;
  background-color: var(--colBlue) !important;
  color: var(--colYellow) !important;
  width: 180px !important;
  margin-right: 1px;
}
.map-icon {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background: var(--colBgBtn);
}
.active.btn-option-map {
  background-color: var(--colYellow) !important;
  color: var(--colBlue) !important;
}
.map {
  opacity: 0;
  pointer-events: none;
  position: fixed;
}

@media only screen and (max-width: 960px) {
  .btn-option-map {
    height: 36px !important;
    width: 110px !important;
    font-size: 10px !important;
  }
  .podium {
    width: 66px !important;
  }
  .floor26 {
    width: 82px !important;
  }
  .btn-exitmap {
    height: 36px !important;
    min-width: 20px;
    margin-left: 0px !important;
  }
  .minimap {
    width: 320px !important;
    height: 230px !important;
    z-index: 999;
    padding: 5px;
  }
  .mini-map {
    margin: auto;
    margin-top: -25px !important;
    background: transparent !important;
    width: 310px !important;
    height: 220px !important;
  }
  .btn-nav {
    height: 38px !important;
    min-width: 38px !important;
  }
  .img-exitmap {
    max-width: 16px;
  }
}
/* @media only screen and (max-width:  568px){
  .minimap{
    width: 375px !important;
    height: 250px !important;
    z-index: 999;
 
  }
} */

.activeMap {
  opacity: 1;
  pointer-events: painted;
}
.facilites .card-title {
  color: var(--colBg);
}
.facilites {
  background: var(--colYellow) !important;
}
.mf {
  opacity: 0;
  pointer-events: none;
}
.nut {
  height: 80px;
  width: 45%;
  /* background: rgba(44, 224, 224, 0.281) !important; */
  z-index: 999;
  position: absolute;
  top: 0 !important;
  left: 0 !important;
}

@media only screen and (min-width: 900px) {
  .nut {
    height: 100px;
  }
}
@media only screen and (min-width: 1366px) {
  .nut {
    width: 27% !important;
    height: 150px;
  }
}

.hinhtam {
  position: fixed;
  top: 50% !important;
  left: 50% !important;
  /* background: red !important; */
  height: 100%;
  width: 100%;

  transform: translate(-50%, -50%);
  /* background-image: url("../assets/imgQL/1x/hinhvip.png"); */
  background-color: var(--colYellow);
  /* z-index: 2 !important; */
}
.tam-img {
  height: auto;
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.pano-hotspot.xq {
  z-index: 1 !important;
}
.pano-hotspot.pp {
  z-index: 2 !important;
}
.aaa .pano-hotspot.pp {
  z-index: 0 !important;
}
.map {
  z-index: 3 !important;
}
img.icon-hotspots {
  width: 60px !important;
  position: relative;
  left: 30% !important;
  transform: translateY(-50%);
}

@media only screen and (max-width: 900px) {
  img.icon-hotspots {
    width: 40px !important;
  }
  .icon-hotspotpp {
    width: 35px !important;
  }
  .icon-hotspot {
    width: 30px !important;
  }
}

.bg_prot {
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: var(--colBg) !important;
  z-index: 999;
}
#prot {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: var(--colYellow);
  font-size: 28px;
  width: 100%;
}
@media (orientation: portrait) {
  .bg_prot {
    display: block;
  }
  #prot {
    display: block;
  }
}
.logo {
  z-index: 999 !important;
}
.logo-row {
  z-index: 999 !important;
}
.infoobg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999 !important;
  background-color: var(--colBgBtn) !important;
  padding: 10px;
  width: 600px;
  height: 600px;
}
@media (orientation: portrait) {
  .infoobg {
    z-index: 0 !important;
  }
}
@media only screen and (max-width: 960px) {
  .infoobg {
    width: 290px !important;
    height: 290px !important;
    padding: 6px;
  }
}
.img-close {
  height: 30px !important;
  min-width: 20px !important;
  padding: 0px !important;
}
.bgbtnclose {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(315px, -288px);
  background: var(--colBg) 93;
  padding: 10px;
  padding-left: 0px;
}
.btn-closes {
  height: 48px !important;
  min-width: 48px !important;
  border-radius: 0 !important;
  background-color: var(--colBlue) !important;
}
@media only screen and (max-width: 960px) {
  .btn-closes {
    height: 38px !important;
    min-width: 38px !important;
    padding: 12px !important;
  }
  .img-close {
    height: 20px !important;
    min-width: 14px !important;
  }
  .bgbtnclose {
    top: 50%;
    left: 50%;
    transform: translate(230px, -155px);
    padding: 6px;
    padding-left: 0px;
  }
}
@media only screen and (max-height: 450px) {
  .btn-option {
    height: 30px !important;
    font-size: 12px !important;
    padding-left: 25px !important;
  }
  .btn-music {
    padding-left: 25px !important;
    /* max-width: 15px !important; */
    height: 30px !important;
  }
}
</style>

<script>
import { mapGetters, mapMutations } from "vuex";
import PanoViewer from "@/app/viewer";
import MiniMap from "@/app/minimap/mscene";
import Menu from "./Menu.vue";
// const baseUrl = "http://localhost:5000/";
// const baseUrl = ".";
const baseUrl =
  process.env.NODE_ENV === "production" ? "./" : "http://localhost:5000/";
// const baseUrl = process.env.NODE_ENV === 'production'? "./": '//192.168.10.200/xampp5.6/htdocs/spgland/v15/';
var audio = new Audio(require("../assets/IntheMomentofInspiration.mp3"));

// const baseUrl = ".";
// //
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
      // isShow: false,
      isNar: true,
      // isShowQL: this.$store.state.isshowQL,
      // menu: this.$store.state.menu,
      // map: this.$store.state.map,
      isShowMap: false,
      isshowInfo: false,
      hinhtam: "hinhgym",
      // isMusic: true
      file: "http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3",
      // minimapt: 1
    };
  },
  computed: {
    ...mapGetters([
      "menu",
      "map",
      "facilites",
      "isshowQL",
      "isshowMenu",
      "mf",
      "render",
      "musicz",
      "musicz2",
    ]),
  },
  mounted() {
    // function runapp() {
    const el = document.getElementById("streetview");
    info = document.getElementById("hotspot-info");
    // const music = document.getElementById("music")
    // music.play();
    const opt = {
      projectId: "61ea54ed25",
      baseUrl: baseUrl,
      canZoom: true,
      updateOnChange: false,
      transitionscale: 5,
      // autorotdelay:30000
      minZoom: 40,
      maxZoom: 75,
    };
    this.viewer = new PanoViewer(el, opt);
    this.viewer.controls.enableDamping = true;
    this.viewer.onChanged = () => {
      console.log(this.viewer.camera.fov);
    };
    const minimapopt = {
      baseUrl: baseUrl,
      runtime: true,
      border: "all",
      colorError: "var(--colBlue)",
      radius: 8,
      borderRadius: 1,
      canSelect: false,
      canPan: false,
      // canZoom: false,
      camera: {
        path: "imgs/cung.svg",
        transform: {
          x: 150,
          y: 45,
          width: 300,
          height: 220,
          r: -85,
        },
      },
    };
    minimap = new MiniMap(document.getElementById("mini-map"), minimapopt);
    minimap.load(String(this.map));
    // let url_string = window.location.href
    // let url = new URL(url_string);
    // let panoname = url.searchParams.get("view") || 'StreetViewPoint1'
    this.viewer.init().then(() => {
      this.loadPanoById("overview", true);
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
        if (item.type == 7) {
          if (!hp) {
            const btna = createElementFromHTML(
              `<img class="icon-hotspots hpPP" src="./imgs/hpPP.png">`
            );
            btna.onclick = () => this.showQL();
            hp = {
              name: item.name,
              el: createElementFromHTML(`
                <div class="pano-hotspot pp" >
                    
                </div>
                `),
            };
            hp.el.appendChild(btna);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 70}px;left:${
            item.pos2d.x - 52
          }px;`;
        }
        if (item.type == 2) {
          if (!hp) {
            const btn = createElementFromHTML(`<button class="btn-img" ">
                                            <img class="icon-hotspotpp" src="./imgs/hotspotT.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name, true);
            hp = {
              name: item.name,
              // <p> ${item.name}  </p>
              el: createElementFromHTML(`
                <div class="pano-hotspot xq hotspotpp" >
                 
                </div>
                `),
            };
            hp.el.appendChild(btn);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 60}px;left:${
            item.pos2d.x - 30
          }px;`;
        }
        // ==============
        if (item.type == 4) {
          if (!hp) {
            hp = {
              name: item.name,
              el: createElementFromHTML(`
                <div class="pano-hotspot hotspot" >
                    
                    
                    <button class="btn-img">
                    <div class="title-hotspot text-center" style="margin-bottom: 5px" >
                    <img class="img-hotspot" src="${baseUrl}/pano/anh${item.img}.jpg">
                    <p class="name-hotspot"> ${item.name} </p>
                    </div>
                     <img class="icon-hotspot" src="./imgs/hotspotTT.png">
                    </button>
                </div>
                `),
            };
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          // hp.el.style = `top:${item.pos2d.y - 70}px;left:${
          //   item.pos2d.x - 137
          // }px;`;
          hp.el.style = `top:${item.pos2d.y - 60}px;left:${
            item.pos2d.x - 30
          }px;`;
        }
        //hotspot đi duoi dat
        if (item.type == 6) {
          //ụuhui
          if (!hp) {
            const btn = createElementFromHTML(`<button class="imgsss">
                                            <img class="icon-hotspotpp" src="./imgs/1x/hotspotDD.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name, true);
            hp = {
              name: item.name,
              el: createElementFromHTML(`
                <div class="pano-hotspot hotspotpp" >
                 
                </div>
                `),
            };
            hp.el.appendChild(btn);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 60}px;left:${
            item.pos2d.x - 30
          }px;`;
        }
        // ==============
        //hotspot đi duoi dat
        if (item.type == 5) {
          //ụuhui
          if (!hp) {
            const btn = createElementFromHTML(`<button class="imgsss">
                                            <img class="icon-hotspotpp" src="./imgs/1x/hotspotDN.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name, true);
            hp = {
              name: item.name,
              el: createElementFromHTML(`
                <div class="pano-hotspot hotspotpp" >
                 
                </div>
                `),
            };
            hp.el.appendChild(btn);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 60}px;left:${
            item.pos2d.x - 30
          }px;`;
        }
      }
    };
    minimap.onclick = (hp) => {
      this.loadPanoById(hp.name, true);
      // minimap.update()
      console.log(hp.name);
      this.setRender(false);
    };
    // }
    function createElementFromHTML(htmlString) {
      const div = document.createElement("div");
      div.innerHTML = htmlString.trim();
      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }
    if (this.musicz == true && this.musicz2 == false) {
      audio.play();
    }
  },
  methods: {
    ...mapMutations([
      "setMenu",
      "setFacilites",
      "setMap",
      "setisShowQL",
      "setisShowMenu",
      "setismf",
      "setRender",
      "setMusicz",
      "setMusicz2",
    ]),
    ismusic() {
      if (this.musicz == true) {
        this.setMusicz(false);
        this.setMusicz2(false);
        audio.pause();
      } else {
        this.setMusicz(true);
        this.setMusicz2(false);
        audio.play();
      }
    },
    showInfo() {
      this.isshowInfo = !this.isshowInfo;
      this.isShowMap = false;
    },
    showMenu() {
      if (this.isshowMenu == true) {
        this.setisShowMenu(false);
      } else {
        this.setisShowMenu(true);
        this.isshowInfo = false;
      }
      if (this.isshowQL == true) {
        this.setisShowQL(false);
      }
    },
    showQL() {
      console.log(this.isshowQL);
      if (this.isshowQL == true) {
        this.setisShowQL(false);
        // this.isShowMap = true
      } else {
        this.setisShowQL(true);
        // this.isShowMap = false
      }
      if (this.isshowQL == true && this.isShowMap == true) {
        this.isShowMap = false;
      }
    },
    loadMap(a) {
      this.setMap(a);
      console.log("load map");
      console.log(typeof a);
      minimap.load(String(a));
    },
    gotoview(a, b) {
      // this.viewer.init().then(() => {
      this.loadPanoById(a, true);
      // });
      this.setFacilites(b);
      this.setisShowQL(false);
      this.setRender(false);
    },
    gotorender(a, b) {
      this.hinhtam = String(a);
      this.setRender(true);
      this.setFacilites(b);
      this.setisShowQL(false);
    },
    gotofloorplans() {
      this.setMenu(2);
      this.setisShowMenu(false);
      this.$router.push("/floorplans");
      if (this.musicz == true) {
        this.setMusicz(false);
        this.setMusicz2(true);
        audio.pause();
      }
    },
    from() {
      window.location.href = "https://paradisoplace.com.au/#enquire";
    },
    gotolocation() {
      this.setMenu(3);
      this.setisShowMenu(false);
      this.$router.push("/location");
      if (this.musicz == true) {
        this.setMusicz(false);
        this.setMusicz2(true);
        audio.pause();
      }
    },
    goto360view() {
      // this.viewer.init().then(() => {
      this.loadPanoById("overview", true);
      // });
      this.setRender(false);
      this.setMenu(1);
      this.setisShowMenu(false);
      this.$router.push("/");
    },
    goto360view2() {
      this.setRender(false);
      this.setMenu(1);
      this.setisShowMenu(false);
      this.$router.push("/");
    },
    gotomap(a) {
      this.setMinimap(a);
      this.minimapt = a;
    },
    inzoom() {
      this.viewer.zoomIn();
      this.viewer.zoomIn();
      this.viewer.zoomIn();
      this.viewer.zoomIn();
      this.viewer.zoomIn();
      this.zoom += 1;
      if (this.zoom == 0) {
        this.isInzoom = true;
        this.isOutzoom = true;
      } else if (this.zoom > 0) {
        this.isInzoom = false;
        this.isOutzoom = true;
      } else {
        this.isInzoom = true;
        this.isOutzoom = false;
      }
      // isInzoom: true,
      // isOutzoom: true,
      // isTurn: true,
    },
    outzoom() {
      this.viewer.zoomOut();
      this.viewer.zoomOut();
      this.viewer.zoomOut();
      this.viewer.zoomOut();
      this.viewer.zoomOut();
      this.zoom -= 1;
      if (this.zoom == 0) {
        this.isInzoom = true;
        this.isOutzoom = true;
      } else if (this.zoom < 0) {
        this.isInzoom = true;
        this.isOutzoom = false;
      } else {
        this.isInzoom = false;
        this.isOutzoom = true;
      }
    },
    turnb() {
      this.turn = !this.turn;
      this.viewer.autoRot(this.turn);
    },
    loadPanoById(id, firstload = false) {
      console.log(id);
      console.log(firstload);
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
      // this.viewer
      //   .loadPanoById(id, firstload)
      //   .then((res) => (curr = res))
      //   .catch(console.log);
      // // window.history.pushState({}, null, `./?view=${id}`);
      this.viewer
        .loadPanoById(id, firstload)
        .then((res) => {
          curr = res;
          minimap.updateCam(curr.pos, curr.rotZ);
        })
        .catch(console.log);
    },
  },
  components: { Menu },
};
</script>
