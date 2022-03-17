<template>
  <v-container fluid class="pano-viewer-contain">
    <div ref="panoviewer" class="pano-viewer"></div>

    <div
      v-for="item in hotspots"
      :key="item.name"
      class="text-center pano-hotspot"
      :style="`top:${item.pos2d.y - 30}px;left:${item.pos2d.x + 10}px`"
    >
      <!-- <v-img src="@/assets/label.png" class="align-center">{{item.fullname}}</v-img> -->
      {{ item.fullname }}
    </div>
    <mini-map
      v-if="panoid != 'overview'"
      :width="mapwidth"
      :campos="position"
      :camrot="rotation"
    ></mini-map>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-snackbar v-model="snackbar" :timeout="timeout" centered>
      {{ snackbartext }}
    </v-snackbar>
    <img
      ref="cursor"
      src="@/assets/imgs/cursor2.png"
      alt=""
      class="invisible"
    />
    <img
      ref="hotspot"
      src="@/assets/imgs/target.png"
      alt=""
      class="invisible"
    />
    <img
      ref="airhotspot"
      src="@/assets/imgs/airtarget.png"
      alt=""
      class="invisible"
    />
    <img
      ref="infohotspot"
      src="@/assets/imgs/hotspot.png"
      alt=""
      class="invisible"
    />
    <img
      ref="control"
      src="@/assets/imgs/arrow-move.png"
      alt=""
      class="invisible"
    />
  </v-container>
</template>

<script>
import PanoViewer from "../app/viewer";
import MiniMap from "./MiniMap2";
import panomodel from "../model/pano";

export default {
  props: {
    panoid: [String, Number],
    firstload: [String, Number],
  },
  components: {
    MiniMap,
  },

  data() {
    return {
      viewer: null,
      overlay: false,
      position: null,
      rotation: null,
      mapwidth: 360,
      panodata: null,
      snackbar: false,
      snackbartext: "",
      timeout: 2500,
      isShowMap: true,
      icons: ["cursor", "hotspot", "airhotspot", "infohotspot", "control"],
      hotspots: [],
    };
  },
  watch: {
    panoid() {
      this.LoadPano();
    },
    quality() {
      this.LoadPano();
    },
    uievent(val) {
      if (!val) return;
      console.log(val);
      if (val === "capture")
        this.viewer.capturescreen(this.$store.state.uieventval);

      this.$store.commit("SET_UI_EVENT", "");
    },
  },
  mounted() {
    this.mapwidth = window.innerHeight / 2;
    if (this.mapwidth > window.innerWidth * 0.65)
      this.mapwidth = parseInt(window.innerWidth * 0.65);
    const icons = {};
    for (const item of this.icons) {
      icons[item] = this.$refs[item];
    }
    this.viewer = new PanoViewer(
      this.$refs.panoviewer,
      this.$store.state.API_PATH,
      icons
    );
    this.$refs.panoviewer.addEventListener("loadpano", (e) => {
      switch (e.detail.type) {
        case 1:
        case 2:
          if (e.detail.name != this.$route.params.viewId)
            this.$router.push({
              name: "View360",
              params: { viewId: e.detail.name },
            });
          break;
        case 3:
          if (
            e.detail.name != this.$route.params.viewId
            // e.detail.name.length > 5
          ) {
            this.$router.push({
              name: "View360",
              params: { viewId: e.detail.name },
              query: { f: 1 },
            });
          } else {
            console.log(e.detail);
            // this.snackbartext = e.detail.fullname;
            // this.snackbar = true;
          }

          break;
        case 4:
          this.dialog = true;
          break;
        default:
          console.log(e.detail.name);
          break;
      }
    });

    this.viewer.onChangeRot = (z) => {
      this.rotation = z;
    };
    this.viewer.onChangeHotspot = (ls) => {
      this.hotspots = ls;
    };

    this.LoadPano();
  },
  methods: {
    MoveUp() {
      if (this.targetname != this.$route.params.viewId) {
        this.viewer.hotspotManager.MoveToTarget();
        this.targetname = "";
      }
    },
    async LoadPano() {
      if (!this.panoid) return;
      this.overlay = true;
      const data = await panomodel.FETCH(this.panoid);
      if (data.guid) {
        this.panodata = data;
        this.position = data.pos;
        if (this.$route.query && (this.$route.query.f || this.firstload))
          await this.viewer.loadPano(data, true);
        else await this.viewer.loadPano(data);
      }
      this.overlay = false;
    },
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    API_PATH() {
      return this.$store.state.API_PATH;
    },
    uievent() {
      return this.$store.state.uievent;
    },
  },
};
</script>