<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> <h1>Instant Insanity Sovler</h1>

    <!-- <HelloWorld msg="Instant Insanity Solver"/> -->

    <div class="parent">
  <div class="cube cube1">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>

  <div class="cube cube2">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>

  <div class="cube cube3">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>

  <div class="cube cube4">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>

  <div class="cube cube5">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>

  <div class="cube cube6">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  <div class="cube cube7">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  <div class="cube cube8">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube9">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube10">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube11">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube12">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube13">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube14">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube15">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube16">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube17">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube18">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube19">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
  </div>
  
    <div class="cube cube20">
    <div class="bottom"></div>
    <div class="back"></div>
    <div class="left"></div>
    <div class="top"></div>
    <div class="right"></div>
    <div class="front"></div>
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
  position: relative;
  left: 40px;
  top: -73px;
  opacity: 0.4;
}

.front {
  position: relative;
  top: -74px;
}

</style>

