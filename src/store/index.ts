import Vue from "vue";
import Vuex from "vuex";

//========en
import img_bg from "../assets/bgLocationMap.png";
import img_transpositon from "../assets/transposition.png";
import img_rulesLanguag from "../assets/rulesLanguage.png";
import img_tradeCenter from "../assets/tradeCenter.png";
import img_healthFac from "../assets/healthFac.png";
import img_entertainment from "../assets/entertainment.png";
import img_edu from "../assets/edu.png";
//========vn
import img_bgV from "../assets/bgLocationMapV.png";
import img_transpositonV from "../assets/transpositionV.png";
import img_rulesLanguagV from "../assets/rulesLanguageV.png";
import img_tradeCenterV from "../assets/tradeCenterV.png";
import img_healthFacV from "../assets/healthFacV.png";
import img_entertainmentV from "../assets/entertainmentV.png";
import img_eduV from "../assets/eduV.png";

Vue.use(Vuex);
// var audio = new Audio(require("../assets/IntheMomentofInspiration.mp3"))

const store = new Vuex.Store({
  state: {
    menu: 1,
    map: 1,
    facilites: 1,
    test: 2,
    isshowQL: false,
    isshowMenu: true,
    mf: false,
    render: false,
    musicz: false,
    musicz2: false,
    audio: new Audio(require("../assets/IntheMomentofInspiration.mp3")),
    lang: "vn",
    nn: {
      vn: {
        location: {
          img_bg: img_bgV,
          img_transpositon: img_transpositonV,
          img_rulesLanguag: img_rulesLanguagV,
          img_tradeCenter: img_tradeCenterV,
          img_healthFac: img_healthFacV,
          img_entertainment: img_entertainmentV,
          img_edu: img_eduV,
          //=====

          txt_transpositon: "PHƯƠNG TIỆN DI CHUYỂN",
          txt_rulesLanguag: "DI TÍCH & CẢNH QUAN",
          txt_tradeCenter: "TRUNG TÂM THƯƠNG MẠI",
          txt_healthFac: "CƠ SỞ Y TẾ",
          txt_entertainment: "GIẢI TRÍ",
          txt_edu: "TRƯỜNG HỌC",
        },
        menu: {
          views360: "Toàn cảnh",
          floorPlans: "Mặt bằng",
          locationMap: "Vị Trí",
          facilities: "Tiện ích",
        },
        apart: {
          balconyView: "Cảnh ban công",
          interiorView: "Ảnh nội thất",
          floorView: "Căn hộ",
        },
      },
      en: {
        location: {
          img_bg: img_bg,
          img_transpositon: img_transpositon,
          img_rulesLanguag: img_rulesLanguag,
          img_tradeCenter: img_tradeCenter,
          img_healthFac: img_healthFac,
          img_entertainment: img_entertainment,
          img_edu: img_edu,
          //=====

          txt_transpositon: "TRANSPOSTATION",
          txt_rulesLanguag: "monument",
          txt_tradeCenter: "shopping center",
          txt_healthFac: "Hospital",
          txt_entertainment: "ENTERTAINMENT",
          txt_edu: "EDUCATION",
        },
        menu: {
          views360: "360° Views",
          floorPlans: "Floor plans",
          locationMap: "Location Map",
          facilities: "Facilities",
        },
        apart: {
          balconyView: "Balcony View",
          interiorView: "Interior View",
          floorView: "Floor View",
        },
      },
    },
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    },

    setMap(state, map) {
      state.map = map;
    },

    setFacilites(state, facilites) {
      state.facilites = facilites;
    },

    setisShowQL(state, isshowQL) {
      state.isshowQL = isshowQL;
    },

    setisShowMenu(state, isshowMenu) {
      state.isshowMenu = isshowMenu;
    },

    setmf(state, mf) {
      state.mf = mf;
    },

    setRender(state, render) {
      state.render = render;
    },

    setMusicz(state, musicz) {
      state.musicz = musicz;
    },
    setMusicz2(state, musicz2) {
      state.musicz2 = musicz2;
    },
    setLang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    updateMinimap({ commit }, a) {
      commit("setMinimap", a);
    },
    // ======================
    updateTest({ commit }, a) {
      commit("setTest", a);
    },
  },
  modules: {},
  getters: {
    menu: (state) => state.menu,

    test: (state) => state.test,

    map: (state) => state.map,

    facilites: (state) => state.facilites,

    isshowQL: (state) => state.isshowQL,

    isshowMenu: (state) => state.isshowMenu,

    mf: (state) => state.mf,

    render: (state) => state.render,

    musicz: (state) => state.musicz,

    musicz2: (state) => state.musicz2,
    lang: (state) => state.lang,
    nn: (state) => state.nn,
  },
});

export default store;
