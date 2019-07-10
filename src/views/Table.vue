<template>
  <div>
      
    <v-layout justify-space-around align-start>
      <v-card>
          <h1>Table Method</h1>
          <v-sheet><v-btn>Cube#</v-btn><v-btn>Pair1</v-btn><v-btn>Pair2</v-btn><v-btn>Pair3</v-btn></v-sheet>
        <v-sheet v-for="(pair, key, index) in pair1">
          <v-list-tile > <v-btn>{{key}}</v-btn> <v-btn>[{{pair1[key][0]}}-{{pair1[key][1]}}]</v-btn> <v-btn>[{{pair2[key][0]}}-{{pair2[key][1]}}]</v-btn>  <v-btn>[{{pair3[key][0]}}-{{pair3[key][1]}}]</v-btn>  </v-list-tile>
          <v-divider></v-divider>
        </v-sheet>
      </v-card>
      <v-card><h1>Color Analysis</h1>
        <v-sheet><v-btn>Color</v-btn><v-btn>Pair1</v-btn><v-btn>Pair2</v-btn><v-btn>Pair3</v-btn><v-btn>Total</v-btn></v-sheet>
        <v-sheet v-for="(pair, key, index) in pair1CO">
          <v-list-tile > 
              <v-btn>{{key}}</v-btn> 
              <v-btn>{{pair1CO[key]}}</v-btn> 
              <v-btn>{{pair2CO[key]}}</v-btn>  
              <v-btn>{{pair3CO[key]}}</v-btn>  
              <v-btn>{{colorOccurnce[key]}}</v-btn> 
          </v-list-tile>
          <v-divider></v-divider>
        </v-sheet>
      </v-card>

    </v-layout>
  </div>
</template>

<script>
export default {
    name:'Table',
  data() {
    return {
      pair1: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      pair2: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      pair3: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],

      input1:
        "11,13-4,19-13,18-11,23-5,27-12,15-10,16-2,7-4,13-11,19-7,14-17,23-12,22-23,24-3,8-9,18-1,14-14,16-25,29-18,30-4,22-5,9-11,12-9,22-22,23-15,27-4,20-8,12-11,27-17,17",
      input2:
        "1,5-15,26-2,15-5,10-10,14-4,10-21,28-10,12-8,19-7,24-8,20-14,22-5,21-1,3-28,30-23,14-4,29-16,18-24,27-2,13-6,26-7,17-26,29-2,20-21,26-1,16-13,20-6,7-16,26-2,20",
      input3:
        "9,19-25,30-1,9-19,26-6,24-28,29-3,21-20,29-19,24-12,25-7,30-9,24-17,30-23,27-29,30-5,8-15,28-17,28-27,28-6,22-3,6-8,16-6,11-15,25-3,25-2,21-21,25-3,13-1,10-18,18",

      colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
      "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Black",
      "Indigo","SteelBlue","Linen","Silver",],

    pair1CO:['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pair2CO:['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    pair3CO:['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],

      colorOccurnce:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
  },
  created() {
      this.initializePairs()

  },
  methods: {
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
  }
};
</script>