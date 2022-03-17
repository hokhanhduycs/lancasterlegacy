<template>
  <v-card
    :width="fullscreen ? '100%' : width"
    :height="fullscreen ? '100%' : 'auto'"
    max-height="100%"
    max-width="70%"
    tile
    :style="`transform: translateX(${show ? 0 : 100}%);`"
    class="minimap-panel"
  >
    <v-responsive :aspect-ratio="2 / 1" max-height="100vh">
      <v-container
        :style="`background-color:#272727;padding: ${bordersize}px ${bordersize}px 0px 0px;`"
      >
        <v-row>
          <v-col cols="12">
            <div class="editable-img">
              <div
                ref="minimap"
                @click="ClickMinimap"
                class="editable-svg"
                v-html="html"
                :style="`background-image: url('${mapimg}');`"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
    <v-btn
      absolute
      small
      left
      dark
      class="rounded-tl-xl"
      style="
        margin-left: -39px;
        height: 100%;
        min-width: 20px;
        width: 20px;
        top: 0;
      "
      @click="show = !show"
    >
      <v-icon>{{
        show ? "mdi-chevron-double-right" : "mdi-chevron-double-left"
      }}</v-icon>
    </v-btn>
    <v-img
      :width="iconsize"
      :height="iconsize"
      src="@/assets/imgs/laban.png"
      class="minimap-compass"
      :style="`transform: translateY(-${iconsize * 0.8}px);`"
    >
      <v-img ref="kimlaban" src="@/assets/imgs/kimlaban.png"></v-img>
    </v-img>
  </v-card>
</template>

<script>
import MiniMap from "../app/minimap";
export default {
  components: {},
  watch: {
    campos() {
      this.SetCamPos();
      //   if (this.map) console.log(this.map.GetGPS(this.campos));
    },
    camrot() {
      this.SetCamPos();
    },
  },
  props: {
    campos: Object,
    camrot: Number,
    width: [Number, String],
    showfullscreen: Boolean,
  },
  data() {
    return {
      language: {},
      map: {},
      show: true,
      fullscreen: false,
      landscape: true,
      html: "",
      camElement: null,
      droppoint: null,
      scene: {},
      mapimg: "",
    };
  },
  async created() {
    if (this.showfullscreen) {
      this.fullscreen = this.showfullscreen;
      this.show = true;
    }
  },
  mounted() {
    this.LoadMinimap().then(this.MiniMapLoaded);
  },
  methods: {
    DeviceDetect() {
      this.landscape = window.innerWidth > window.innerHeight;
    },
    SetCamPos() {
      if (!this.campos || !this.map || !this.$refs.minimap || !this.droppoint)
        return;
      const { x, y } = this.map.Get2DPos(this.campos);
      const z =
        (this.map.data.rot.z * Math.PI) / 180 - this.camrot + Math.PI / 4;
      this.droppoint.setAttribute("cx", x);
      this.droppoint.setAttribute("cy", y);
      this.camElement.style = `transform: translate(${Math.ceil(
        x
      )}px, ${Math.ceil(y)}px)  rotateZ(${z}rad);`;
      this.$refs.kimlaban.$el.style = `transform: rotateZ(${
        -this.camrot - Math.PI / 2
      }rad)`;
    },
    async LoadMinimap() {
      let defaultmap = "0";
      if (this.$route.params.sceneId) {
        defaultmap = this.$route.params.sceneId;
      }
      this.scene = await fetch(
        `${this.API_PATH}/scene/${defaultmap}.json?t=` + Math.random()
      ).then((res) => res.json());
      console.log(this.scene);
      this.mapimg = `${this.API_PATH}/${this.scene.map.path}`;
      this.map = new MiniMap(this.scene);
      this.html = this.map.svg;

      if (this.scene.points.length == 1) {
        this.SetPano(this.scene.points[0].name);
      }
    },
    MiniMapLoaded() {
      if (!this.$refs.minimap) return;
      this.camElement = this.$refs.minimap.querySelector(
        'path[id="cameraviewer"]'
      );
      this.camElement.style = `transform: translate(${-100}px, ${Math.ceil(
        -100
      )}px)  rotateZ(${0}deg);`;
      this.droppoint = this.$refs.minimap.querySelector(
        'circle[id="droppoint"]'
      );
      this.SetCamPos(this.campos);
      console.log("MiniMapLoaded");
    },
    ClickMinimap(ev) {
      const x = (ev.offsetX * this.map.width) / this.$refs.minimap.offsetWidth;
      let y = (ev.offsetY * this.map.height) / this.$refs.minimap.offsetHeight;
      const sca =
        (this.$refs.minimap.offsetHeight / this.$refs.minimap.offsetWidth) *
        (this.map.width / this.map.height);
      if (sca > 1) {
        y = (y - 360) * sca + 360;
      }
      let mind = 2000;
      let dropid = 0;
      this.$el.querySelectorAll("circle[dataid]").forEach((element) => {
        const cx = element.getAttribute("cx");
        const cy = element.getAttribute("cy");
        const d = (cx - x) * (cx - x) + (cy - y) * (cy - y);
        if (mind > d) {
          mind = d;
          dropid = element.getAttribute("dataid");
        }
      });
      if (dropid) this.SetPano(dropid);
    },
    SetPano(id, firstload = false) {
      if (id == this.$route.params.viewId) return;

      const targetlink = {
        name: "View360",
        params: {
          sceneId: this.$route.params.sceneId,
          viewId: id,
        },
      };
      if (firstload) {
        targetlink.query = {
          firstload: 1,
        };
      }
      this.$router.push(targetlink);
    },
  },
  computed: {
    iconsize() {
      return this.$store.state.isMobile ? 48 : 81;
    },
    bordersize() {
      return this.$store.state.isMobile ? 6 : 12;
    },
    API_PATH() {
      return this.$store.state.API_PATH;
    },
  },
};
</script>