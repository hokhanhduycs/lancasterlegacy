<template>
  <v-container fluid class="test">
    <!-- <h1>Test {{test}}</h1>
      <h1>Count is {{count}}</h1>
       <v-btn @click.prevent="activate">+1</v-btn>
       <v-btn @click="this.count = 3"> thay text</v-btn>
       <v-btn @click="(updateTest)"> thay text sadff</v-btn>
       <div> ttttttttt {{type}}</div> -->
    <v-btn @click="nhac"> nhac</v-btn>
    <!-- <v-btn @click="t()"> nhac off</v-btn> -->
    <!-- <audio id="music" class="newaudio" controls  loop>
    <source src="../assets/IntheMomentofInspiration.mp3">
</audio>
<video autoplay controls  loop id="video">
  <source src="../assets/d.mp4">
</video> -->
  </v-container>
</template>

<script>
// import {mapState} from "vuex"
import { mapGetters, mapMutations, mapActions } from "vuex";
// const music = document.getElementById("video")
// var video = document.getElementById("video")
var audio = new Audio(require("../assets/IntheMomentofInspiration.mp3"));
export default {
  data() {
    return {
      count: 0,
      // music: document.getElementById("video"),
      type: this.$route.params.type,
      //   file: 'http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3',
      n: false,
    };
  },
  components: {
    // VuetifyAudio: () => import('vuetify-audio'),
  },
  mounted() {
    //

    // this.music.play();
    // video.play();
    audio.play();
  },
  computed: {
    ...mapGetters(["test"]),
  },
  methods: {
    activate() {
      console.log("+1 Pressed");
    },
    ...mapMutations(["setTest"]),
    ...mapActions(["updateTest"]),

    nhac() {
      if (this.n == false) {
        audio.play();
        this.n = true;
      } else {
        audio.pause();
        this.n = false;
      }
    },
    //   t (){

    //   // music.pause();

    // }
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>