<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <drawer-link :name="'Home'" :icon="'home'" :destination ="'/'"></drawer-link>
          <drawer-link :name="'Network Visualizer'" :icon="'graphic_eq'" :destination ="'/about'"></drawer-link>
          <drawer-link :name="'Table'" :icon="'table_chart'" :destination ="'/table'"></drawer-link>
          <drawer-link :name="'Bellman Ford'" :icon="'table_chart'" :destination ="'/bellman'"></drawer-link>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="primary" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Instant Insanity Solver</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex text-xs-center>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="primary" app inset>
        <span class="white--text">Created by Filiberto Reyes for Math 482 Combinatorial Algorithms</span>
      </v-footer>
    </v-app>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Network Visualizer</router-link> |
      <router-link to="/table">Table</router-link>
    </div>
    <router-view/>
  </div>-->
</template>
<script>
import drawerLink from '@/components/drawerLink.vue'
export default {
  components:{
    drawerLink
  },
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
