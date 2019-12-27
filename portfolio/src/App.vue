<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- ナビゲーションに router-link コンポーネントを使う -->
      <!-- リンク先を `to` プロパティに指定します -->
      <!-- デフォルトで `<router-link>` は `<a>` タグとして描画されます -->
      <router-link to="/">top</router-link>
      <router-link to="/link">link</router-link>
      <router-link to="/carrer">carrer</router-link>
    </p>
    <!-- ルートアウトレット -->
    <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>



<!--
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
