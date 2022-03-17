<template>
  <v-container fluid class="bg">
    <!-- <v-img width="1920" height="100%" src="../assets/bg.png"/> -->
    <div id="streetview" class="app3d">
      <div id="hotspot-info"></div>
    </div>

    <div id="mini-map" class="mini-map"></div>
  </v-container>
</template>
<style scoped>
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
.mini-map {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 600px;
  height: 300px;
  border: 5px orange solid;
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
  background: #a49c87;
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
}
.title-hotspot:hover .img-hotspot {
  display: block;
}
</style>

<script>
import PanoViewer from "@/app/viewer";
import MiniMap from "@/app/minimap/mscene";
const baseUrl = "http://localhost:5000";
let minimap, info, curr;
export default {
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    const el = document.getElementById("streetview");
    info = document.getElementById("hotspot-info");
    const opt = {
      baseUrl: baseUrl,
      canZoom: true,
      updateOnChange: false,
      transitionscale: 5,
      // autorotdelay:3000
    };
    this.viewer = new PanoViewer(el, opt);

    const minimapopt = {
      baseUrl: baseUrl,
      runtime: true,
      border: "all",
      colorError: "#FF00FF",
      radius: 2,
      borderRadius: 1,
      canSelect: false,
      canPan: false,
      canZoom: false,
      camera: {
        path: "./imgs/navigation_black_24dp.svg",
        transform: {
          x: 32,
          y: 32,
          width: 64,
          height: 64,
          r: 180,
        },
      },
    };
    minimap = new MiniMap(document.getElementById("mini-map"), minimapopt);
    minimap.load("0");

    // let url_string = window.location.href
    // let url = new URL(url_string);
    // let panoname = url.searchParams.get("view") || 'overview'
    // let panoname ='overview'
    // console.log(panoname)
    // this.viewer.controls.enableDamping = true
    this.viewer.init().then(() => {
      this.loadPanoById("StreetViewPoint1", true);
    });

    this.viewer.onRequestLoadPano = (hp) => {
      this.loadPanoById(hp.name);
    };

    // create hotsport

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
                            <button class="btn-hotspot">
                            <div class="title-hotspot text-center" style="">
                            <p style="background: transparent";></p>
                            </div>
                            
                                <img class="icon-hotspot hpPP" src="./imgs/hpPP.png">
                            </button>
                        </div>
                        
                        `
              ),
            };
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }
          hp.el.style = `top:${item.pos2d.y - 70}px;left:${
            item.pos2d.x - 137
          }px;z-index:999`;
        }
        if (item.type == 2 && item.pp != true) {
          if (!hp) {
            hp = {
              name: item.name,
              // <p> ${item.name}  </p>
              el: createElementFromHTML(
                `
                        <div class="pano-hotspot hotspot" >
                            
                            <div class="title-hotspot text-center" style="">
                            <img class="img-hotspot" src="./imgs/imghotspot.png">
                            <p> ${baseUrl}/pano  </p>
                            </div>
                            <button class="btn-hotspot">
                                <img class="icon-hotspot" src="./imgs/hotspotT.png">
                            </button>
                        </div>
                        `
              ),
            };
            allhotspot.push(hp);
            info.appendChild(hp.el);
          }

          hp.el.style = `top:${item.pos2d.y - 70}px;left:${
            item.pos2d.x - 137
          }px;z-index:999`;
        }
      }
    };
    function createElementFromHTML(htmlString) {
      const div = document.createElement("img");
      div.innerHTML = htmlString.trim();

      // Change this to div.childNodes to support multiple top-level nodes
      return div.firstChild;
    }
  },
  methods: {
    loadPanoById(id, firstload = false) {
      fetch(`${baseUrl}/pano/${id}.json?t=${Math.random()}`)
        .then((res) => res.json())
        .then((res) => {
          this.viewer.loadPano(res, firstload);
        })
        .catch(console.log);
    },
  },
};
</script>
