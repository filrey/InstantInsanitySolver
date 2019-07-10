<template>
  <div>
        <router-link :to='this.destination'>
    <v-list-tile @click>
      <v-list-tile-action>
        <v-icon>{{this.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title >{{this.name}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    </router-link>
  </div>
</template>

<script>
export default {
    props:['name','icon','destination']
}
</script>

<style>
a { color: inherit; text-decoration: none; } 
</style>

