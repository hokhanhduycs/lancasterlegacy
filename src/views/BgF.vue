<template>
  <v-container fluid class="bg">
    <!-- <v-img width="1920" height="100%" src="../assets/bg.png"/> -->
    <div id="streetview" class="app3d"></div>
    <div id="hotspot-info"></div>

    <div id="mini-map" class="mini-mapf"></div>

    <!-- ============================ -->
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

          <div class="list-btn" id="list-btnnha">
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_05',
                  3,
                  '05'
                )
              "
              :class="{ ac: active_el == 3 }"
              class="item-list-btn"
              style="bottom: 148px; left: 100px"
            >
              <span class="den"></span> 3
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_05',
                  4,
                  '05'
                )
              "
              :class="{ ac: active_el == 4 }"
              class="item-list-btn"
              style="bottom: 163px; left: 425px"
            >
              <span class="den"></span> 4
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_05',
                  5,
                  '05'
                )
              "
              :class="{ ac: active_el == 5 }"
              class="item-list-btn"
              style="bottom: 177px; left: 142px"
            >
              <span class="den"></span> 5
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_05',
                  6,
                  '05'
                )
              "
              :class="{ ac: active_el == 6 }"
              class="item-list-btn"
              style="bottom: 191px; left: 465px"
            >
              <span class="den"></span> 6
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_05',
                  7,
                  '05'
                )
              "
              :class="{ ac: active_el == 7 }"
              class="item-list-btn"
              style="bottom: 204px; left: 100px"
            >
              <span class="den"></span> 7
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_10',
                  8,
                  '10'
                )
              "
              :class="{ ac: active_el == 8 }"
              class="item-list-btn"
              style="bottom: 218px; left: 425px"
            >
              <span class="den"></span> 8
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_10',
                  9,
                  '10'
                )
              "
              :class="{ ac: active_el == 9 }"
              class="item-list-btn"
              style="bottom: 233px; left: 142px"
            >
              <span class="den"></span> 9
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_10',
                  10,
                  '10'
                )
              "
              :class="{ ac: active_el == 10 }"
              class="item-list-btn"
              style="bottom: 245px; left: 465px"
            >
              <span class="den"></span> 10
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_10',
                  11,
                  '10'
                )
              "
              :class="{ ac: active_el == 11 }"
              class="item-list-btn"
              style="bottom: 260px; left: 100px"
            >
              <span class="den"></span> 11
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_10',
                  12,
                  '10'
                )
              "
              :class="{ ac: active_el == 12 }"
              class="item-list-btn"
              style="bottom: 273px; left: 425px"
            >
              <span class="den"></span> 12
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_15',
                  13,
                  '15'
                )
              "
              :class="{ ac: active_el == 13 }"
              class="item-list-btn"
              style="bottom: 288px; left: 142px"
            >
              <span class="den"></span> 13
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_15',
                  14,
                  '15'
                )
              "
              :class="{ ac: active_el == 14 }"
              class="item-list-btn"
              style="bottom: 301px; left: 465px"
            >
              <span class="den"></span> 14
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_15',
                  15,
                  '15'
                )
              "
              :class="{ ac: active_el == 15 }"
              class="item-list-btn"
              style="bottom: 316px; left: 100px"
            >
              <span class="den"></span> 15
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_15',
                  16,
                  '15'
                )
              "
              :class="{ ac: active_el == 16 }"
              class="item-list-btn"
              style="bottom: 330px; left: 425px"
            >
              <span class="den"></span> 16
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_15',
                  17,
                  '15'
                )
              "
              :class="{ ac: active_el == 17 }"
              class="item-list-btn"
              style="bottom: 343px; left: 142px"
            >
              <span class="den"></span> 17
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_20',
                  18,
                  '20'
                )
              "
              :class="{ ac: active_el == 18 }"
              class="item-list-btn"
              style="bottom: 356px; left: 465px"
            >
              <span class="den"></span> 18
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_20',
                  19,
                  '20'
                )
              "
              :class="{ ac: active_el == 19 }"
              class="item-list-btn"
              style="bottom: 370px; left: 100px"
            >
              <span class="den"></span> 19
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_20',
                  20,
                  '20'
                )
              "
              :class="{ ac: active_el == 20 }"
              class="item-list-btn"
              style="bottom: 384px; left: 425px"
            >
              <span class="den"></span> 20
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_20',
                  21,
                  '20'
                )
              "
              :class="{ ac: active_el == 21 }"
              class="item-list-btn"
              style="bottom: 399px; left: 142px"
            >
              <span class="den"></span> 21
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_20',
                  22,
                  '20'
                )
              "
              :class="{ ac: active_el == 22 }"
              class="item-list-btn"
              style="bottom: 412px; left: 465px"
            >
              <span class="den"></span> 22
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_25',
                  23,
                  '25'
                )
              "
              :class="{ ac: active_el == 23 }"
              class="item-list-btn"
              style="bottom: 427px; left: 100px"
            >
              <span class="den"></span> 23
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_25',
                  24,
                  '25'
                )
              "
              :class="{ ac: active_el == 24 }"
              class="item-list-btn"
              style="bottom: 440px; left: 425px"
            >
              <span class="den"></span> 24
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_25',
                  25,
                  '25'
                )
              "
              :class="{ ac: active_el == 25 }"
              class="item-list-btn"
              style="bottom: 455px; left: 142px"
            >
              <span class="den"></span> 25
            </v-btn>
            <!-- <v-btn @click="gotoview('apartment_'+typei+'_'+optionanh+'_'+viewcurren+'_FL_25', 1, '25')" :class="{ ac: active_el == 26 }" class="item-list-btn" style="bottom: 475px; left: 465px;">   
<span class="den"></span> 26  </v-btn> -->
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_25',
                  27,
                  '25'
                )
              "
              :class="{ ac: active_el == 27 }"
              class="item-list-btn"
              style="bottom: 489px; left: 100px"
            >
              <span class="den"></span> 27
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_30',
                  28,
                  '30'
                )
              "
              :class="{ ac: active_el == 28 }"
              class="item-list-btn"
              style="bottom: 503px; left: 425px"
            >
              <span class="den"></span> 28
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_30',
                  29,
                  '30'
                )
              "
              :class="{ ac: active_el == 29 }"
              class="item-list-btn"
              style="bottom: 518px; left: 142px"
            >
              <span class="den"></span> 29
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_30',
                  30,
                  '30'
                )
              "
              :class="{ ac: active_el == 30 }"
              class="item-list-btn"
              style="bottom: 532px; left: 465px"
            >
              <span class="den"></span> 30
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_30',
                  31,
                  '30'
                )
              "
              :class="{ ac: active_el == 31 }"
              class="item-list-btn"
              style="bottom: 546px; left: 100px"
            >
              <span class="den"></span> 31
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_30',
                  32,
                  '30'
                )
              "
              :class="{ ac: active_el == 32 }"
              class="item-list-btn"
              style="bottom: 560px; left: 425px"
            >
              <span class="den"></span> 32
            </v-btn>

            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_35',
                  33,
                  '35'
                )
              "
              :class="{ ac: active_el == 33 }"
              class="item-list-btn"
              style="bottom: 573px; left: 142px"
            >
              <span class="den"></span> 33
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_35',
                  34,
                  '35'
                )
              "
              :class="{ ac: active_el == 34 }"
              class="item-list-btn"
              style="bottom: 587px; left: 465px"
            >
              <span class="den"></span> 34
            </v-btn>
            <v-btn
              @click="
                gotoview(
                  'apartment_' +
                    typei +
                    '_' +
                    optionanh +
                    '_' +
                    viewcurren +
                    '_FL_35',
                  35,
                  '35'
                )
              "
              :class="{ ac: active_el == 35 }"
              class="item-list-btn"
              style="bottom: 601px; left: 100px"
            >
              <span class="den"></span> 35
            </v-btn>
          </div>
        </div>
      </div>

      <div class="text-center list-btn-control">
        <v-btn class="item-btn-control tower">
          <p>Tower 1 - Apartment {{ type }}</p>
        </v-btn>
        <v-btn
          class="item-btn-control floor"
          @click="
            isShow = !isShow;
            isFloor = !isFloor;
          "
          :class="{ active: isShow }"
        >
          <img
            v-show="!isShow"
            class="item-img-control img-floor"
            src="../assets/floor.png"
          />
          <img
            v-show="isShow"
            class="item-img-control img-floor"
            src="../assets/floorb.png"
          />
          <p>Floor {{ floor }}</p>
        </v-btn>
        <!-- <v-btn class="scroll-floor item-btn-control floor">
        <img v-show="!isShow" class="item-img-control img-floor" src="../assets/floor.png"/>
        <img v-show="isShow" class="item-img-control img-floor" src="../assets/floorb.png"/>
        <select>
          <option>Danh sách 01</option>
          <option>Danh sách 02</option>
          <option>Danh sách 03</option>
          <option>Danh sách 03</option>
      </select>
    </v-btn> -->
        <v-btn class="item-btn-control optionf" @click="optionanhf()">
          <p>
            <span v-if="optionanh === 'sa'">Standard</span>
            <span v-else>Upgrade</span>
          </p>
        </v-btn>
        <v-btn @click="gotoApart" class="item-btn-control exit links">
          <img
            v-show="isExit"
            class="item-img-control img-exit"
            src="../assets/exit.png"
          />
          <img
            v-show="!isExit"
            class="item-img-control img-exit"
            src="../assets/exitb.png"
          />
        </v-btn>
      </div>
    </div>
    <div class="nut" @click="goto360view('overview', 1)"></div>
    <div class="optionfl" v-show="isShow">
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_35',
            35,
            '35'
          )
        "
        :class="{ ac: active_el == 35 }"
        class="opfl"
      >
        35
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_35',
            34,
            '35'
          )
        "
        :class="{ ac: active_el == 34 }"
        class="opfl"
      >
        34
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_35',
            33,
            '35'
          )
        "
        :class="{ ac: active_el == 33 }"
        class="opfl"
      >
        33
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_30',
            32,
            '30'
          )
        "
        :class="{ ac: active_el == 32 }"
        class="opfl"
      >
        32
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_30',
            31,
            '30'
          )
        "
        :class="{ ac: active_el == 31 }"
        class="opfl"
      >
        31
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_30',
            30,
            '30'
          )
        "
        :class="{ ac: active_el == 30 }"
        class="opfl"
      >
        30
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_30',
            29,
            '30'
          )
        "
        :class="{ ac: active_el == 29 }"
        class="opfl"
      >
        29
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_30',
            28,
            '30'
          )
        "
        :class="{ ac: active_el == 28 }"
        class="opfl"
      >
        28
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_25',
            27,
            '25'
          )
        "
        :class="{ ac: active_el == 27 }"
        class="opfl"
      >
        27
      </v-btn>
      <!-- <v-btn @click="gotoview('apartment_'+typei+'_'+optionanh+'_'+viewcurren+'_FL_25', 1, '25')" :class="{ ac: active_el == 26 }" class="opfl">    26  </v-btn> -->
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_25',
            25,
            '25'
          )
        "
        :class="{ ac: active_el == 25 }"
        class="opfl"
      >
        25
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_25',
            24,
            '25'
          )
        "
        :class="{ ac: active_el == 24 }"
        class="opfl"
      >
        24
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_25',
            23,
            '25'
          )
        "
        :class="{ ac: active_el == 23 }"
        class="opfl"
      >
        23
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_20',
            22,
            '20'
          )
        "
        :class="{ ac: active_el == 22 }"
        class="opfl"
      >
        22
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_20',
            21,
            '20'
          )
        "
        :class="{ ac: active_el == 21 }"
        class="opfl"
      >
        21
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_20',
            20,
            '20'
          )
        "
        :class="{ ac: active_el == 20 }"
        class="opfl"
      >
        20
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_20',
            19,
            '20'
          )
        "
        :class="{ ac: active_el == 19 }"
        class="opfl"
      >
        19
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_20',
            18,
            '20'
          )
        "
        :class="{ ac: active_el == 18 }"
        class="opfl"
      >
        18
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_15',
            17,
            '15'
          )
        "
        :class="{ ac: active_el == 17 }"
        class="opfl"
      >
        17
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_15',
            16,
            '15'
          )
        "
        :class="{ ac: active_el == 16 }"
        class="opfl"
      >
        16
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_15',
            15,
            '15'
          )
        "
        :class="{ ac: active_el == 15 }"
        class="opfl"
      >
        15
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_15',
            14,
            '15'
          )
        "
        :class="{ ac: active_el == 14 }"
        class="opfl"
      >
        14
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_15',
            13,
            '15'
          )
        "
        :class="{ ac: active_el == 13 }"
        class="opfl"
      >
        13
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_10',
            12,
            '10'
          )
        "
        :class="{ ac: active_el == 12 }"
        class="opfl"
      >
        12
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_10',
            11,
            '10'
          )
        "
        :class="{ ac: active_el == 11 }"
        class="opfl"
      >
        11
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_10',
            10,
            '10'
          )
        "
        :class="{ ac: active_el == 10 }"
        class="opfl"
      >
        10
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_10',
            9,
            '10'
          )
        "
        :class="{ ac: active_el == 9 }"
        class="opfl"
      >
        9
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_10',
            8,
            '10'
          )
        "
        :class="{ ac: active_el == 8 }"
        class="opfl"
      >
        8
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_05',
            7,
            '05'
          )
        "
        :class="{ ac: active_el == 7 }"
        class="opfl"
      >
        7
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_05',
            6,
            '05'
          )
        "
        :class="{ ac: active_el == 6 }"
        class="opfl"
      >
        6
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_05',
            5,
            '05'
          )
        "
        :class="{ ac: active_el == 5 }"
        class="opfl"
      >
        5
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_05',
            4,
            '05'
          )
        "
        :class="{ ac: active_el == 4 }"
        class="opfl"
      >
        4
      </v-btn>
      <v-btn
        @click="
          gotoview(
            'apartment_' +
              typei +
              '_' +
              optionanh +
              '_' +
              viewcurren +
              '_FL_05',
            3,
            '05'
          )
        "
        :class="{ ac: active_el == 3 }"
        class="opfl"
      >
        3
      </v-btn>
    </div>
  </v-container>
</template>
<style scoped>
@font-face {
  font-family: sql;
  src: url("~@/assets/fonts/Campton-Light.otf");
}
@font-face {
  font-family: tieude;
  src: url("~@/assets/fonts/Silk Serif Light.otf");
}
.btn-hotspot {
  pointer-events: none;
}
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
.mini-mapf {
  position: fixed;
  right: 0;
  bottom: -50px;
  height: 310px;
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
/* .pp{ */
/* position: absolute; */
/* top: 500px;
    left: 500px; */
/* justify-content: center;
	align-items: center; */
/* } */
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
  background: var(--colYellow);
  padding: 10px auto !important;
  color: var(--colBg);
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
}
/* .title-hotspot:hover .img-hotspot{
    display: block;

} */
.list-btn-control {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  padding: 10px;
  border-radius: 0px;
}
.item-btn-control {
  border-radius: 0;
  margin-right: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: var(--colBlue) !important;
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
  color: var(--colYellow);
  margin: auto;
  font-weight: 600;
  font-family: sql;
}
.floor {
  width: 160px !important;
  font-family: sql;
}
.floor p {
  font-family: sql;
}
.optionf {
  width: 120px !important;
}
.optionf p span {
  font-family: sql;
}
.exit {
  width: 108px !important;
}
/* .floor:hover p{
   color: var(--colBlue);
 } */
.tower:hover p {
  color: var(--colBlue);
  font-family: sql;
}
.img-floor {
  margin-left: 15px !important;
}
.img-exit {
  margin: auto 15px;
  min-width: 68px;
}
/* .item-btn-control:hover{
   background-color: var(--colYellow) !important;
 } */
.toanha {
  position: fixed;
  left: 50%;
  bottom: 50%;
  height: 700px;
  min-width: 600px;
  background: var(--colBg) 7e;
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
}
.btn-close {
  border-radius: 0;
  margin: 10px !important;
  height: 48px !important;
  min-width: 48px !important;
  padding: 0px !important;
  background-color: var(--colBlue) !important;
  z-index: 10;
}

.img-close {
  max-width: 26px;
  max-height: 26px;
}
/* .btn-close:hover{
   background-color: var(--colYellow) !important;
 } */

.item-list-btn {
  border-radius: 50%;
  height: 35px !important;
  min-width: 35px !important;
  background: var(--colBg);
  box-shadow: none !important;
  color: var(--colYellow) !important;
  padding: 0px !important;
  border: 1px solid var(--colYellow);
  position: absolute;
}
/* .item-list-btn:hover{
    background-color: var(--colYellow) !important;
     color: var(--colBg) !important;
 } */
.tower {
  pointer-events: none;
  background: var(--colYellow) !important;
  width: 240px !important;
  font-family: sql;
}
.tower p {
  color: var(--colBlue) !important;
}
.active {
  background-color: var(--colYellow) !important;
}
.active p {
  color: var(--colBlue) !important;
}

/* .active:hover{
       background-color: var(--colBlue) !important;
 } */
/* .active:hover p{
     color: var(--colYellow) !important;
 } */
.ac {
  background-color: var(--colYellow) !important;
  color: var(--colBg) !important;
}
.ac .den {
  background: #b5a46ac0;
  height: 14px;
  width: 166px;
  position: fixed;
  left: 50%;
  transform: translate(-85px, 1px) !important;
}
.optionfl {
  position: fixed;
  left: 52%;
  margin-left: -2px;
  /* top: 50%; */
  bottom: 50px;
  transform: translateX(-50%);
  height: 30%;
  width: 140px;
  background: var(--colBg) 7e;
  overflow-y: scroll;
  opacity: 0;
  pointer-events: none;
  padding: 5px;
}
.opfl {
  width: 98% !important;
  border-radius: 0px !important;
  height: 38px !important;
  background: var(--colBlue) !important;
  color: var(--colYellow);
  /* margin-bottom: 1px; */
  border-bottom: 1px solid rgb(54, 53, 53);
}

/* .phong{
  color: var(--colYellow) !important;
  font-size: 18px; 
 }
 .phong span{
   width: 200px !important;
 }
 .opp{
   background: var(--colBg) !important;

   border: 1px var(--colYellow) solid;
 }
 .op{
   padding: 5px;
   color: var(--colYellow);
   cursor: pointer;
 }
.aop{
  background: var(--colYellow)  !important;
  color: #F7F5F0 !important
} */
@media only screen and (max-width: 960px) {
  .img-exit {
    margin: auto 15px;
    min-width: 58px;
  }
  .optionfl {
    margin-left: -4px;
    opacity: 1;
    pointer-events: all;
  }
  .toanha {
    opacity: 0;
    pointer-events: none;
  }

  .item-btn-control {
    height: 38px !important;
    margin-right: 1px !important;
    padding: 5px;
    font-size: 12px !important;
  }
  .list-btn-control {
    width: 67% !important;
    bottom: 5px;
    padding: 5px;
  }
  #mini-map {
    opacity: 0;
    pointer-events: none;
  }
  /* =============== */
  .toanha {
    position: fixed;
    left: 50%;
    bottom: 50%;
    height: 300px;
    min-width: 200px;
    background: var(--colBg) 7e;
    transform: translate(-50%, 50%);
  }
  .img-toanha {
    width: 370px;
    margin: auto;
  }
  .content-toanha {
    background: #f7f5f0;
    margin: 10px;
    height: 280px;
    padding-top: 20px;
  }
  .content-TN {
    height: 300px;
    min-width: 300px;
  }
  .img-toanha {
    width: 170px;
    margin: auto;
  }
  .floor {
    width: 130px !important;
  }
  .optionf {
    width: 100px !important;
  }
  .exit {
    width: 88px !important;
  }
  .tower {
    width: 210px !important;
  }
}
@media only screen and (max-width: 800px) {
  .list-btn-control {
    width: 75% !important;
  }
}
@media only screen and (max-width: 730px) {
  .list-btn-control {
    width: 80% !important;
    /* background: red !important; */
  }
}
@media only screen and (max-width: 677px) {
  .list-btn-control {
    width: 86% !important;
  }
}
@media only screen and (max-width: 568px) {
  .list-btn-control {
    width: 96% !important;
  }
}
.ac.opfl {
  background-color: var(--colYellow) !important;
  color: var(--colBlue) !important;
}
</style>

<script>
import PanoViewer from "@/app/viewer";
import MiniMap from "@/app/minimap/mscene";
import { mapGetters, mapMutations } from "vuex";
// const baseUrl = 'http://localhost:5000/'
const baseUrl =
  process.env.NODE_ENV === "production" ? "../" : "http://localhost:5000/";
let minimap, info, curr;

export default {
  data() {
    return {
      viewer: null,
      isShow: false,
      isFloor: true,
      isExit: true,
      type: this.$route.params.type,
      typei: parseInt(this.$route.params.type),
      floor: 35,
      active_el: 35,
      tang: 35,
      optionanh: "sa",
      viewdau: 1,
      // tangthiet: 35,
      viewcurren: 1,
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
  computed: {
    ...mapGetters(["isshowMenu"]),
  },
  mounted() {
    // function runapp() {
    if (this.type == "05") {
      this.viewdau = 3;
      this.viewcurren = 3;
    }
    if (this.type == "04") {
      this.viewdau = 3;
      this.viewcurren = 3;
    }
    const el = document.getElementById("streetview");
    info = document.getElementById("hotspot-info");
    // const nha = document.getElementById('list-btnnha')
    const opt = {
      projectId: "61ea54ed25",
      baseUrl: baseUrl,
      canZoom: true,
      updateOnChange: false,
      // transitionscale: 5,
      // autorotdelay:30000
      minZoom: 40,
      maxZoom: 75,
    };
    this.viewer = new PanoViewer(el, opt);
    // this.viewer.controls.enableDamping = true
    const minimapopt = {
      baseUrl: baseUrl,
      runtime: true,
      border: "all",
      colorError: "var(--colYellow)",
      radius: 7,
      borderRadius: 1,
      canSelect: false,
      canPan: false,
      canZoom: false,

      camera: {
        path: "../imgs/cung.svg",
        transform: {
          x: 55,
          y: 14,
          width: 110,
          height: 80,
          r: -85,
        },
      },
    };
    minimap = new MiniMap(document.getElementById("mini-map"), minimapopt);
    minimap.load(
      "type" + this.type + "_" + this.optionanh + "_FL_" + this.tang
    );
    // let url_string = window.location.href
    // let url = new URL(url_string);
    // let panoname = url.searchParams.get("view") || 'StreetViewPoint1'
    this.viewer.init().then(() => {
      // this.loadPanoById('apartment_'+ this.type +'_sa_'+viewcurren+'_FL_35', true)
      this.loadPanoById(
        "apartment_" + this.typei + "_sa_" + this.viewdau + "_FL_35",
        true
      );
    });
    this.viewer.onRequestLoadPano = (hp) => {
      this.loadPanoById(hp.name, true);
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
            hp = {
              name: item.name,

              el: createElementFromHTML(
                `
                <div class="pano-hotspot pp" >
                    <img class="icon-hotspots hpPP" src="../imgs/hpPP.png">
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
        if (item.type == 2) {
          if (!hp) {
            const btn = createElementFromHTML(`<button class="btn-img" ">
                                            <img class="icon-hotspotpp" src="../imgs/hotspotT.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name, true);

            hp = {
              name: item.name,
              // <p> ${item.name}  </p>
              el: createElementFromHTML(
                `
                <div class="pano-hotspot hotspotpp" >
                 
                </div>
                `
              ),
            };
            hp.el.appendChild(btn);
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 60}px;left:${
            item.pos2d.x - 30
          }px;`;
        }
        //hotspot đi duoi dat
        if (item.type == 6) {
          //ụuhui
          if (!hp) {
            const btn = createElementFromHTML(`<button class="imgsss">
                                            <img class="icon-hotspotpp" src="../imgs/1x/hotspotDD.png">
                                        </button>`);
            btn.onclick = () => this.loadPanoById(item.name, true);
            hp = {
              name: item.name,
              el: createElementFromHTML(
                `
                <div class="pano-hotspot hotspotpp" >
                 
                </div>
                `
              ),
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
                                            <img class="icon-hotspotpp" src="../imgs/1x/hotspotDN.png">
                                        </button>`);
            btn.onclick = () => this.loview(item.name);
            hp = {
              name: item.name,
              el: createElementFromHTML(
                `
                <div class="pano-hotspot hotspotpp" >
                 
                </div>
                `
              ),
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
              el: createElementFromHTML(
                `
                <div class="pano-hotspot hotspot" >
                    
                    
                    <button class="btn-img">
                    <div class="title-hotspot text-center" style="margin-bottom: 5px" >
                    <img class="img-hotspot" src="${baseUrl}/pano/anh${item.img}.jpg">
                    <p class="name-hotspot"> ${item.name} </p>
                    </div>
                     <img class="icon-hotspot" src="../imgs/hotspotTT.png">
                    </button>
                </div>
                `
              ),
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
      }
    };
    minimap.onclick = (hp) => {
      // this.viewer.init().then(() => {
      this.loadPanoById(hp.name, true);
      // });

      // minimap.update()
      console.log(hp.name[15]);
      this.viewcurren = parseInt(hp.name[15]);
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
    loview(a) {
      // this.viewer.init().then(() => {
      this.loadPanoById(a, true);
      // });
      // console.log(a)
      this.viewcurren = a[15];
    },
    optionanhf() {
      if (this.optionanh == "sa") {
        this.optionanh = "ua";
      } else {
        this.optionanh = "sa";
      }
      // console.log("dsvar(--colBg)f")
      // console.log('apartment_'+parseInt(this.$route.params.type)+'_'+this.optionanh+'_'+this.viewdau+'_FL_'+this.tang)
      // this.gotoview(this.viewcurren, this.floor, this.tang)

      // this.viewer.init().then(() => {
      // this.loadPanoById('apartment_'+ this.type +'_sa_'+viewcurren+'_FL_35', true)
      this.loadPanoById(
        "apartment_" +
          parseInt(this.$route.params.type) +
          "_" +
          this.optionanh +
          "_" +
          this.viewcurren +
          "_FL_" +
          this.tang
      );
      // })
      minimap.load(
        "type" + this.type + "_" + this.optionanh + "_FL_" + this.tang
      );
    },

    gotoApart() {
      this.$router.push("/apart/" + this.type);
    },
    gotoview(a, b, c) {
      console.log(a);
      // console.log('apartment_'+this.typei+'_'+this.optionanh+'_'+this.tang+'_FL_05')

      // this.viewer.init().then(() => {
      this.loadPanoById(a);
      // });
      this.floor = b;
      this.active_el = b;
      this.isShow = false;
      this.tang = c;
      //  this.viewcurren = thi
      //  this.viewdau = c

      minimap.load(
        "type" + this.type + "_" + this.optionanh + "_FL_" + this.tang
      );
    },
    goto360view() {
      this.setMenu(1);
      this.$router.push("/");
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
};
</script>
