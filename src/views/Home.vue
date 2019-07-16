<template>
  <div class="home">

    <div class="parent">
      <div v-for="(cube, key, index) in cubes">
            <div v-bind:class=[CubeCutoutClass] >
              <div v-bind:style="{ 'background-color': colors[cube[0]] }">{{cube[0]}}</div>
              <div v-bind:style="{ 'background-color': colors[cube[1]] }">{{cube[1]}}</div>
              <div v-bind:style="{ 'position': 'relative','left':'-40px','opacity': '0.6','background-color': colors[cube[4]] }">{{cube[4]}}</div>
              <div v-bind:style="{ 'position': 'relative','top':'-37px','background-color': colors[cube[2]] }">{{cube[2]}}</div>
              <div v-bind:style="{ 'position': 'relative','left':'40px','top':'-73px','opacity': '0.6','background-color': colors[cube[5]] }">{{cube[5]}}</div>
              <div v-bind:style="{ 'position': 'relative','top':'-74px','background-color': colors[cube[3]] }">{{cube[3]}}</div>
            </div>
      </div>

    </div>
      <v-btn color="blue" v-on:click="this.start">Start</v-btn>
      <v-btn color ="red" v-on:click="this.stop">Stop</v-btn>

      <h1>BackSolved: {{this.solutionBoard[0]}}</h1>
      <h1>BottomSolved: {{this.solutionBoard[1]}}</h1>
      <h1>TopSolved: {{this.solutionBoard[2]}}</h1>
      <h1>FrontSolved: {{this.solutionBoard[3]}}</h1>


  </div>
</template>

<script>
import { clearInterval } from 'timers';
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      //Midterm 3 question 20 Cubes
      // cubes: ['','','','','','','','','','','','','','','','','','','',''],
      // input: "1,1,2,13,8,13-7,12,5,11,1,1-4,8,1,1,15,18-19,20,3,6,1,1-14,20,1,1,11,19-2,9,1,1,2,5-1,1,1,16,17,20-1,1,11,19,3,4-1,1,17,18,1,20-9,12,1,1,11,15-5,15,16,19,1,1-1,1,10,18,1,10-1,1,12,17,7,13-6,7,3,10,1,1-6,9,1,1,5,14-12,13,1,1,16,17-1,1,4,7,15,16-4,18,8,10,1,1-9,14,1,14,1,1-2,6,1,1,3,8",
      
      //All Distinct Except One 3 Cubes
      // cubes: ['','',''],
      
      // input: "7,2,3,4,5,6-7,8,9,10,11,12-13,14,15,16,17,18",
      //Original Puzzle With Unique Solution 4 Cubes
      // cubes: ['','','',''],
      // input: "3,1,1,1,2,4-2,3,4,3,1,2-4,1,3,2,1,4-3,4,1,2,3,4",      
      
      //Mutando
      cubes: ['','','',''],
      input: "3,1,4,1,2,4-3,4,4,3,3,2-4,2,3,2,1,1-3,4,1,3,3,4",

      // Drive Ya Crazy 6 Cubes
      // cubes: ['','','','','',''],
      // input: "4,3,2,5,6,1-4,1,2,5,6,3-1,4,2,3,6,5-1,5,2,3,6,4-5,1,2,4,6,3-3,4,2,1,6,5",   
         
      colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
      "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Black",
      "Indigo","SteelBlue","Linen","Silver",],
      subArrays:['','','',''],

      solutionBoard:[false,false,false,false],

      //Css Classes
      CubeCutoutClass: ['cube'],


    }
  },
  created() {
    this.determineColorInput();
    this.validateCubes(this.cubes);
  },
  computed: {
    backSolved(){
      return this.allDistinct(this.subArrays[0])
    },
    bottomSolved(){
      return this.allDistinct(this.subArrays[1])
    },
    topSolved(){
      return this.allDistinct(this.subArrays[2])
    },
    frontSolved(){
      return this.allDistinct(this.subArrays[3])
    },
    isSolved() {
      return this.backSolved && this.bottomSolved && this.topSolved && this.frontSolved
    }
  },
  methods: {
    start() {
      this.scrambleCube = setInterval(() => this.rotate(Math.floor(Math.random() * 3) + 1,this.cubes[Math.floor(Math.random() * this.cubes.length)]), 0);
    },
    stop(){

    },
    rotate(key,cube) {
      this.checkForSolution()
      console.log("rotating")
      var top = cube[0]
      var back = cube[1]
      var bottom = cube[2]
      var front = cube[3]
      var left = cube[4]
      var right = cube[5]
      switch (key) {
        case 1:
          var temp = left
          cube[4] = cube[3]
          cube[3] = cube[5]
          cube[5] = cube[1]
          cube[1] = temp
          this.validateCubes(this.cubes)
          this.$forceUpdate();
          break;
        case 2:
          var temp = top
          cube[0] = cube[3]
          cube[3] = cube[2]
          cube[2] = cube[1]
          cube[1] = temp
          this.validateCubes(this.cubes)
          this.$forceUpdate();          
          break;
        case 3:
          var temp = top
          cube[0] = cube[5]
          cube[5] = cube[2]
          cube[2] = cube[4]
          cube[4] = temp
          this.validateCubes(this.cubes)
          this.$forceUpdate();          
          break;      
        default:
          break;
      }
      this.checkForSolution()
    },
    permute() {


    },
    checkForSolution(){
      if (this.solutionBoard[0] &&this.solutionBoard[1]&& this.solutionBoard[2] &&this.solutionBoard[3]) {
        alert("Solution has been found!")
      }
    },
    allDistinct(arr){
      var arr2 = {};
      for (let index = 0; index < arr.length; index++) {
        arr2[arr[index]] = 1;
      }
      
      var arr2length  = Object.keys(arr2).length;
      return arr2length == arr.length;
    },
    validateCubes(cubes) {
      var backArr = [];
      var bottomArr = [];
      var topArr = [];
      var frontArr = [];

      for (let index = 0; index < cubes.length; index++) {
        backArr.push(cubes[index][0])
        bottomArr.push(cubes[index][1])    
        topArr.push(cubes[index][5])
        frontArr.push(cubes[index][3])
      }

      this.subArrays[0] = backArr.map(Number)
      this.subArrays[1] = bottomArr.map(Number)
      this.subArrays[2] = topArr.map(Number)
      this.subArrays[3] = frontArr.map(Number)

      this.solutionBoard[0] = this.allDistinct(this.subArrays[0])
      this.solutionBoard[1] = this.allDistinct(this.subArrays[1])
      this.solutionBoard[2] = this.allDistinct(this.subArrays[2])
      this.solutionBoard[3] = this.allDistinct(this.subArrays[3])

      this.$forceUpdate();

    },
    determineColorInput(){
      this.input = this.input.split('-');

      for (let index = 0; index < this.cubes.length; index++) {
        this.cubes[index] = this.input[index].split(',');
        
      }
    }
    
  },
  watch: {
    cubes: function(){
      this.$forceUpdate();
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


.top {
    position: relative;
    top: -37px;
}
.left {
    position: relative;
    left: -40px;
    opacity: 0.4;
}

.right {
    position:relative;
    left: 40px;
    top: -74px;
    opacity: 0.4;
}

.front {
    position: relative;
    top: -74px;
}
</style>

