<template>
  <div>
    <div class="nut" @click="goto360view()"></div>
    <!-- <div class="nut2" @click="showInfo()"  v-show="isShow"></div> -->
    <v-container
      text-center
      fluid
      align="center"
      class="logo"
      @click="goto360view()"
    >
      <!-- 
      <div class="infomation" v-show="isShow">
    
      <v-row text-center justify="center">
      <v-col  cols="6" class="tieude">SPG LAND</v-col>
      </v-row>

      <v-row align="center"  justify="center">
      <v-col cols="6" class="tieude2">The Artisan in International Real Estate</v-col>
    </v-row> 

    <v-row justify="center">
    <v-col cols="9" class="nd">Founded in 1998 in Australia, SPG Land is an international real estate group dedicated to investing in high-end real estate, premium hospitality, urban infrastructure and smart city technology. 
    We are proud to be recognized for the excellence of our work and our innovative initiatives  in real estate developments that shape and transform the  urban living landscape of  cities. 
    SPG Land knows what living is like today and what cities want to be tomorrow. An international perspective, the spirit of innovation, great partnerships, and a deep belief in the value of human capital enables us to become a true Platform of Creators. Committed to our goal of Local Innovation. Global Transformation.
    </v-col>
    
    </v-row>
<div class="cach"></div>
    <v-row justify="center">
        <v-col  cols="6" class="tieude">DISPLAY GALLERY NOW OPEN</v-col>
    </v-row>
    <v-row justify="center">
        <v-col  cols="5" class="ndd">To arrange your private appointment in our display gallery call 1300 103 111 </v-col>
        
    </v-row>
    <hr>
    <v-row justify="center">
        <v-col  cols="9">
            <v-row>
         <v-col  cols="4" class="nt">
            <div class="tt">
                SALES & ENQUIRIES
            </div>
            <div class="ndd">Total Property Group</div>
             <div class="ndd">1300 103 111</div>

        </v-col>
         <v-col  cols="4" class="nt">
            <div class="tt">
                Display Suite
            </div>
            <div class="ndd">103 Ferny Avenue,</div>
             <div class="ndd">Surfers Paradise QLD 4217</div>

        </v-col>
               <v-col  cols="4" class="nt">
            <div class="tt">
                Development Address
            </div>
            <div class="ndd">103 Ferny Avenue,</div>
             <div class="ndd">Surfers Paradise QLD 4217</div>

        </v-col>
        </v-row>
        </v-col>
    </v-row>
           <v-btn class=" exit-info " 
    @click="showInfo()"
    >
        <img width="23" class="icon-show" src="../assets/1x/exitinfo.png"/>   
    </v-btn>
    </div> -->
      <div class="logo-row">
        <v-img class="img-logo mr-10" src="../assets/logob.png" />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapGetters(["mf", "menu"]),
  },
  methods: {
    ...mapMutations(["setmf", "setMenu", "setRender"]),
    goto360view() {
      this.setRender(false);
      this.setMenu(1);
      this.$router.push("/");
    },

    showInfo() {
      console.log(this.mf);
      if (this.isShow == false) {
        this.setmf(true);
        this.isShow = true;
      } else {
        this.setmf(false);
        this.isShow = false;
      }
    },
  },
};
</script>
<style scoped>
/* @import url('../assets/font/Silk Serif Bold.otf'); */
.bg {
  padding: 0px !important;
}
.exit-info {
  position: absolute !important;
  top: 10px;
  right: 10px !important;
  border-radius: 0 !important;
  height: 48px !important;
  min-width: 48px !important;
  background-color: #033348 !important;
  /* border: 10px solid #ffffff7e; */
  z-index: 999 !important;
}
.nut {
  height: 80px;
  width: 45%;
  /* background: rgba(44, 224, 224, 0.281) !important; */
  z-index: 999;
  position: fixed;
  top: 0 !important;
  left: 0 !important;
}

@media only screen and (max-width: 900px) {
  .nut {
    height: 0px;
  }
}
@media only screen and (max-width: 1366px) {
  .nut {
    width: 27% !important;
    height: 150px;
  }
}

.nut2 {
  height: 50px;
  width: 50px;
  /* background: red !important; */
  z-index: 999;
  position: fixed;
  right: 40px !important;
  top: 20px !important;
}
.logo {
  position: fixed;
  /* top: 20% */
  z-index: 2;
  pointer-events: none;
  margin-left: 3%;
  /* margin-top: 1%; */
}

.img-logo {
  width: 9% !important;
}
@media only screen and (max-width: 810px) {
  .img-logo {
    width: 9% !important;
  }
}
@media only screen and (max-width: 400px) {
  .img-logo {
    width: 35% !important;
  }
}
@media only screen and (max-width: 1366px) {
  .img-logo {
    width: 9% !important;
  }
}

.infomation {
  background: rgba(248, 246, 239);
  width: 100%;
  padding-bottom: 50px;
  border: 10px solid #ffffff7e;
  position: fixed;
  top: 0;
  left: 0;
  height: 1080px;
  padding: auto;
  padding-top: 10%;
  z-index: 9999;
  overflow-y: scroll;
}
@font-face {
  font-family: tieude;
  src: url("~@/assets/fonts/Silk Serif Light.otf");
}
.tieude {
  margin-bottom: 10px;
  font-family: tieude;
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1;
  color: #a49c87 !important;
}
.tieude2 {
  margin-bottom: 10px;
  font-family: tieude;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1;
  color: #a49c87 !important;
}
@font-face {
  font-family: sql;
  src: url("~@/assets/fonts/Campton-Light.otf");
}
.nd {
  font-family: sql;
  /* font-family: serif; */
  font-weight: 100;
  color: #a49c87 !important;
  text-align: justify;
  padding: 0 50px;
}
.cach {
  margin: 30px;
}
.tt {
  text-transform: uppercase;
  color: #a49c87 !important;
  font-weight: bold;
  margin-bottom: 15px;
}
hr {
  margin: 30px;
  color: #a49c87 !important;
  border-color: #a49c87 !important;
}
.ndd {
  font-family: sql;
  color: #a49c87 !important;
}
.logo {
  z-index: 1999 !important;
}
.logo-row {
  z-index: 1999 !important;
}
.img-logo {
  z-index: 1999 !important;
}
</style>