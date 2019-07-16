<template>
  <div>
      
    <v-layout justify-space-around align-start>
      <v-card v-bind:class="{inValid: validity()}">
          <h1>{{this.title}}</h1>
          <v-sheet><v-btn>Cube#</v-btn><v-btn>Pair1</v-btn><v-btn>Pair2</v-btn><v-btn>Pair3</v-btn>  </v-sheet>
        <v-sheet v-for="(pair, key, index) in pair1">
          <v-list-tile> 
              <v-btn>{{key}}</v-btn> 
              <v-btn v-on:click="toggle(selectedPair1,selectedPair1[key],key,pair1)" 
                v-bind:class="{ 
                  isDouble: isDouble(pair1[key]), 
                  isSelect1: isSelect1(selectedPair1[key]),
                  isSelect2: isSelect2(selectedPair1[key]),
                  hasOneAvailable1: hasOne(pair1[key]),
                  hasNoneAvailable1: hasNone(pair1[key]),
                  hasOneAvailable2: hasOne2(pair1[key]),
                  hasNoneAvailable2: hasNone2(pair1[key]),
                  hasNoneAvailableboth: hasNoneBoth(pair1[key],isSelect1(selectedPair1[key]),isSelect2(selectedPair1[key])),  
                  }">
                  [{{pair1[key][0]}}-{{pair1[key][1]}}]
                </v-btn> 
              <v-btn v-on:click="toggle(selectedPair2,selectedPair2[key],key,pair2)"  
                v-bind:class="{ isDouble: isDouble(pair2[key]), 
                isSelect1: isSelect1(selectedPair2[key]),
                isSelect2: isSelect2(selectedPair2[key]),
                hasOneAvailable1: hasOne(pair2[key]),
                hasNoneAvailable1: hasNone(pair2[key]),
                hasOneAvailable2: hasOne2(pair2[key]),
                hasNoneAvailable2: hasNone2(pair2[key]),
                hasNoneAvailableboth: hasNoneBoth(pair2[key],isSelect1(selectedPair2[key]),isSelect2(selectedPair2[key])),  
                }">[{{pair2[key][0]}}-{{pair2[key][1]}}]
              </v-btn>  
              <v-btn v-on:click="toggle(selectedPair3,selectedPair3[key],key,pair3)"  
              v-bind:class="{ isDouble: isDouble(pair3[key]), 
                isSelect1: isSelect1(selectedPair3[key]),
                isSelect2: isSelect2(selectedPair3[key]),
                hasOneAvailable1: hasOne(pair3[key]),
                hasNoneAvailable1: hasNone(pair3[key]),
                hasOneAvailable2: hasOne2(pair3[key]),
                hasNoneAvailable2: hasNone2(pair3[key]),
                hasNoneAvailableboth: hasNoneBoth(pair3[key],isSelect1(selectedPair3[key]),isSelect2(selectedPair3[key])),  
                }">[{{pair3[key][0]}}-{{pair3[key][1]}}]
              </v-btn>
              <!-- <v-btn :click="resetToggle(key)">X</v-btn>   -->
          </v-list-tile>
          <v-divider></v-divider>
        </v-sheet>
      </v-card>
      <v-sheet><h1>Valid: {{this.isValid}} </h1> <h1>Minimum Obstacle: 3</h1>
        <v-list-tile v-for="(pair, key, index) in answer1">{{key}} - {{answer1[key]}} - {{answer2[key]}}</v-list-tile>
      </v-sheet>
      <v-card v-bind:class="{inValid: colorsInvalid()}"><h1>Color Analysis {{this.title}}</h1> <h3 v-if="colorsInvalid()">There is no solution for this puzzle (Color Occurance < 4)</h3>
        <v-sheet><v-btn>Color</v-btn><v-btn>Pair1</v-btn><v-btn>Pair2</v-btn><v-btn>Pair3</v-btn><v-btn>Total</v-btn></v-sheet>
        <v-sheet v-for="(pair, key, index) in pair1CO" >
          <v-list-tile v-if="key != 0"> 
              <v-btn v-bind:style="{ 'background-color': colors[key] }">{{key}}</v-btn> 
              <v-btn v-bind:class="{ isZero: isZero([pair1CO[key]]) }">{{pair1CO[key]}}</v-btn> 
              <v-btn v-bind:class="{ isZero: isZero([pair2CO[key]]) }">{{pair2CO[key]}}</v-btn>  
              <v-btn v-bind:class="{ isZero: isZero([pair3CO[key]]) }">{{pair3CO[key]}}</v-btn>  
              <v-btn v-bind:class="{ isZero: isZero([colorOccurnce[key]]) }">{{colorOccurnce[key]}}</v-btn> 
          </v-list-tile>
          <v-divider></v-divider>
        </v-sheet>
      </v-card>

    </v-layout>
  </div>
</template>
<script>
export default {
    name:'Min-Table',
    props:['left','middle','right','header'],
  data() {
    return {
    title:this.header,
      // Array size N
    pair1: ['','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pair2: ['','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pair3: ['','','','','','','','','','','','','','','','','','','','','','','','','','',''],
 
    input1:
        this.left,
    input2:
        this.middle,
    input3:
        this.right,
    selectedPair1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    selectedPair2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    selectedPair3:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    answer1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    answer2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


    // Array size N+1
    colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
      "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Plum",
      "Indigo","SteelBlue","Linen","Silver","OliveDrab","Crimson","DeepPink","DeepSkyBlue",
      "SlateBlue","Khaki","Tomato","Lime","Aquamarine","DarkKhaki",],

    pair1CO:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    pair2CO:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    pair3CO:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    colorOccurnce:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    isValid: true,

    };
  },
  created() {
      this.initializePairs(),
      this.colorAnalysis()
  },
  methods: {
      colorsInvalid(){
          var truthy = false
          for (let index = 1; index < this.colorOccurnce.length; index++) {
              if (this.colorOccurnce[index] < 4) {
                  truthy = true
              }
              
          }
          return truthy
      },
    initializePairs() {
      this.input1 = this.input1.split('-');

      for (let index = 0; index < this.pair1.length; index++) {
        this.pair1[index] = this.input1[index].split(',');
        
      }

        this.input2 = this.input2.split('-');

      for (let index = 0; index < this.pair2.length; index++) {
        this.pair2[index] = this.input2[index].split(',');
        
      }

        this.input3 = this.input3.split('-');

      for (let index = 0; index < this.pair3.length; index++) {
        this.pair3[index] = this.input3[index].split(',');
        
      }
    },
    colorAnalysis(){
        for (let index = 0; index < this.colorOccurnce.length; index++) {
            this.pair1CO[this.pair1[index][0]]++
            this.pair1CO[this.pair1[index][1]]++
            this.colorOccurnce[this.pair1[index][0]]++
            this.colorOccurnce[this.pair1[index][1]]++

            this.pair2CO[this.pair2[index][0]]++
            this.pair2CO[this.pair2[index][1]]++
            this.colorOccurnce[this.pair2[index][0]]++
            this.colorOccurnce[this.pair2[index][1]]++

            this.pair3CO[this.pair3[index][0]]++
            this.pair3CO[this.pair3[index][1]]++

            this.colorOccurnce[this.pair3[index][0]]++
            this.colorOccurnce[this.pair3[index][1]]++
            
        }
    },
    isZero(input){
        if (input == 0) {
            return true
        }
        else return false
    },
    isDouble(input) {
        return input[0] == input[1]
    },
    hasOne(input) {
        return this.answer1[input[0]] < 2 && this.answer1[input[1]] < 2
    },
    hasNone(input) {
        return this.answer1[input[0]] == 2 || this.answer1[input[1]] == 2
    },
    hasOne2(input) {
        return this.answer2[input[0]] < 2 && this.answer2[input[1]] < 2
    },
    hasNone2(input) {
        return this.answer2[input[0]] == 2 || this.answer2[input[1]] == 2
    },
    hasNoneBoth(input,isSelected1,isSelected2) {
        return (this.answer2[input[0]] == 2 || this.answer2[input[1]] == 2) && (this.answer1[input[0]] == 2 || this.answer1[input[1]] == 2) && (isSelected1 == 0 && isSelected2 == 0)
    },         
    isSelect1(input) {
        return input == 1
    },
    isSelect2(input) {
        return input == 2
    },
    checkIfValid(){
      var result = true
      for (let index = 0; index < this.answer1.length; index++) {
        if (this.answer1[index] > 2 || this.answer2[index] > 2) {
          result = false
        }
        
      }
      this.isValid = result
    },
    validity(){
      return !this.isValid
    },
    toggle(selectedPair,currentSelection,key,pair){
        switch (currentSelection) {
            case 0:
                selectedPair[key] = 1
                this.answer1[pair[key][0]]++
                this.answer1[pair[key][1]]++
                break;
            case 1:
                selectedPair[key] = 2
                this.answer1[pair[key][0]]--
                this.answer1[pair[key][1]]--
                this.answer2[pair[key][0]]++
                this.answer2[pair[key][1]]++
                break;
            case 2:
                selectedPair[key] = 0
                this.answer2[pair[key][0]]--
                this.answer2[pair[key][1]]--
                break;                
            default:
                break;
        }
        this.checkIfValid()
        this.$forceUpdate();
    }
  }
};
</script>

<style>
.isZero{
    border: 1px solid red;
}
.isDouble{
    /* border: 1px solid Fuchsia; */
}
.isSelect1{
    border: 1px solid green !important;
    background-color: Lime !important;
}
.isSelect2{
    border: 1px solid blue !important;
    background-color: Aqua !important;
}
.hasOneAvailable1{
  border: 1px solid Teal;
}
.hasNoneAvailable1{
  border: 1px solid red;
}
.hasOneAvailable2{
  color: Teal !important;
}
.hasNoneAvailable2{
  color: red !important;
}
.hasNoneAvailableboth{
  opacity: 0.2;
}
.inValid{
  background-color: DarkGray !important;
  opacity: .5;
}
.stats{
  position: fixed !important;
  top: 71px;
  right: 800px;
  overflow-y: scroll;
  max-height: 700px;
  overflow-y: scroll;
}
</style>