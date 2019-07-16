<template>
    <div>
        <h1>N = <input class="border" v-model="input" placeholder="edit me"></h1>
        <h1>Equation A: ⌈lglgn⌉!<sub>Base 2</sub></h1>
      {{this.eqA(this.input)}}     
        <h1>Equation B: 10lgn <sub>Base 2</sub></h1>
      {{this.eqB(this.input)}}                
        <h1>Is B < A?</h1> 
        {{this.isBLessA(this.input)}}   
    </div>
</template>
<script>
export default {
    data(){
        return{
            input: 4294967297,
            output:''
        }
    },
    created() {
        // this.findLowestNWhereBLessA(this.input)
    },
    methods: {
        factorial(value) {
            if (value <= 1) {
                return 1;
            } else {
                return value * this.factorial(--value);
            }
        },
        log(value){
            return Math.log2(value)
        },
        ceiling(value){
            return Math.ceil(value)
        },
        eqA(value){
            return this.factorial(this.ceiling(this.log(this.log(value))))
        },
        eqB(value){
            return 10 * this.log(value)
        },
        isBLessA(value){
            return this.eqB(value) < this.eqA(value)
        },
        // findLowestNWhereBLessA(value){
        //     while(!this.isBLessA(value)){
        //         value++
        //     }
        // }
    },
}
</script>
<style>
.border{
    border: 1px solid black;
}
</style>
