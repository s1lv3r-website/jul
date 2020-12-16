<template>
  <div id="app">
    <div id="container">
      <span id="julenissen">🎅</span>
      <h1>God jul!</h1>
      <h2>
        <a
          href="https://www.youtube.com/watch?v=ub82Xb1C8os"
          target="_blank"
          rel="noopener noreferrer"
          >Trykk her for en fin julehilsen</a
        >
      </h2>
    </div>
    <let-it-snow v-bind="snowConf" :show="show"></let-it-snow>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data() {
    return {
      snowConf: {
        windPower: 0.8,
        speed: 1,
        count: 15,
        size: 20,
        opacity: 1,
        images: [
          "https://raw.githubusercontent.com/bob-chen/let_it_snow/master/demo/snow.png",
        ],
      },
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Comic Sans", "Comic Sans MS", chalkboard, "apple color emoji",
    "segoe ui emoji", "noto color emoji", "android emoji", "emojisymbols",
    "emojione mozilla", "twemoji mozilla", "segoe ui symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container {
  // min-width: 100px;
  // max-width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;

  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);
  background-color: blanchedalmond;

  max-width: 100%;
  padding: 1rem 3rem;
  border-radius: 5px;
  margin: 0 auto;
  width: clamp(320px, 80%, 550px);

  #julenissen {
    font-size: 10rem;
    display: block;
  }

  h1 {
    font-size: 3rem;
    margin: 3rem, 0, 2rem;
  }

  a {
    font-size: 1.2rem;
    padding: 0.75em 2em;
    border: none;
    border-radius: 5px;
    background: firebrick;
    cursor: pointer;
    color: azure;
    text-decoration: none;
  }
}

html,
body {
  background-color: firebrick;
}
</style>
