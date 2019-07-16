<template>
  <div class="about">
    <h1>Instant Insanity Tutt Graph</h1>
    <!-- <button @click="nodeMaker()">Create Nodes</button> -->

    <network :net-nodes="nodes" :net-links="links" :options="options"></network>
  </div>
</template>

<script>
import network from "vue-d3-network";
export default {
  components: {
    network
  },
  data() {
    return {
      nodes: [
        { id: 1, name: "Red", _color: "Red" },
        { id: 2, name: "Red", _color: "Red" },
        { id: 3, name: "Red", _color: "Red" },
        { id: 4, name: "Red", _color: "Red" },
        { id: 7, name: "Green", _color: "Green" },
        { id: 8, name: "Green", _color: "Green" },
        { id: 9, name: "Green", _color: "Green" },
        { id: 12, name: "Blue", _color: "Blue" },
        { id: 13, name: "Blue", _color: "Blue" },
        { id: 14, name: "Blue", _color: "Blue" },
        { id: 16, name: "Yellow", _color: "Yellow" },
        { id: 17, name: "Yellow", _color: "Yellow" },
        { id: 19, name: "Yellow", _color: "Yellow" },
        { id: 20, name: "Yellow", _color: "Yellow" },
        ],
      links: [
        { name:"1",sid: 1, tid: 7, cube: 1 },
        { name:"4",sid: 2, tid: 8, cube: 4 },
        { name:"4",sid: 7, tid: 16, cube: 4 },
        { name:"3",sid: 8, tid: 17, cube: 3 },
        { name:"2",sid: 16, tid: 12, cube: 2 },
        { name:"1",sid: 17, tid: 13, cube: 1 },
        { name:"3",sid: 12, tid: 1, cube: 3 },
        { name:"2",sid: 13, tid: 2, cube: 2 },
        { name:"3",sid: 3, tid: 20, cube: 3 },
        { name:"4",sid: 14, tid: 19, cube: 4 },



      ],
      options: {
        force: 1000,
        nodeSize: 15,
        nodeLabels: true,
        linkLabels: true,
        linkWidth: 5
      },
      colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
      "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Black",
      "Indigo","SteelBlue","Linen","Silver",],
      nodeInput:'',
      
    };
  },
  methods: {
    nodeMaker(){
      console.log("nodeMaker")
      
      for (let index = 0; index < this.links.length; index++) { 
        this.nodes.push({id: index,name: this.colors[this.links[index].sid],_color:this.colors[this.links[index].sid]})
        
      }
    }
  },
};
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>
