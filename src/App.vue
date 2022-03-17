<template>
  <div id="app" style="height: 100%">
    <router-view />
  </div>
</template>


<style lang="scss">
:root {
  --colBlue: #0a1c3d; //var(--colBlue);
  --colYellow: #d1af84; //var(--colYellow);
  --colBg: #faf8f3; //var(--colBg);
  --colBgBtn: #ffffff7e; //var(--colBgBtn);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colBlue);

  height: 100% !important;
  max-height: 1080px !important;
}
</style>