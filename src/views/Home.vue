<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> <h1>Instant Insanity Sovler</h1>

    <!-- <HelloWorld msg="Instant Insanity Solver"/> -->

    <div class="parent">
      <div v-for="(cube, key, index) in cubes">
            <div v-bind:class=[CubeCutoutClass] >
              <div v-bind:style="{ 'background-color': colors[cube[0]] }">{{cube[0]}}</div>
              <div v-bind:style="{ 'background-color': colors[cube[1]] }">{{cube[1]}}</div>
              <div v-bind:style="{ 'position': 'relative','left':'-40px','opacity': '0.6','background-color': colors[cube[4]] }">{{cube[4]}}</div>
              <div v-bind:style="{ 'position': 'relative','top':'-37px','background-color': colors[cube[5]] }">{{cube[5]}}</div>
              <div v-bind:style="{ 'position': 'relative','left':'40px','top':'-73px','opacity': '0.6','background-color': colors[cube[2]] }">{{cube[2]}}</div>
              <div v-bind:style="{ 'position': 'relative','top':'-74px','background-color': colors[cube[3]] }">{{cube[3]}}</div>
            </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      numOfCubes: 20,
      colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
      "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Black",
      "Indigo","SteelBlue","Linen","Silver",],
      cubes: ['','','','','','','','','','','','','','','','','','','',''],
      input: "1,1,2,13,8,13-7,12,5,11,1,1-4,8,1,1,15,18-19,20,3,6,1,1-14,20,1,1,11,19-2,9,1,1,2,5-1,1,1,16,17,20-1,1,11,19,3,4-1,1,17,18,1,20-9,12,1,1,11,15-5,15,16,19,1,1-1,1,10,18,1,10-1,1,12,17,7,13-6,7,3,10,1,1-6,9,1,1,5,14-12,13,1,1,16,17-1,1,4,7,15,16-4,18,8,10,1,1-9,14,1,14,1,1-2,6,1,1,3,8",
      
      //Css Classes
      CubeCutoutClass: ['cube'],


    }
  },
  created() {
    this.determineColorInput();
  },
  computed: {
    isSolved() {
      return false
    }
  },
  methods: {
    rotate() {

    },
    permute() {

    },
    determineColorInput(){
      this.input = this.input.split('-');

      for (let index = 0; index < this.numOfCubes; index++) {
        this.cubes[index] = this.input[index].split(',');
        
      }
    }
    
  },
}


</script>

<style>
.cube {
  float: left;
  width: 50px;
  margin-right: 40px;
  margin-left: 40px;
}

.cube div {
  border: 1px solid black;
  height: 30px;
  width: 30px;
  margin: 5px auto;
}

</style>

