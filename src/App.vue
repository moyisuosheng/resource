<script setup>
import {ref,reactive} from 'vue'

import grid from './components/grid.vue';

</script>

<template>
  <div>
    <nav>
      <router-link class="to-a" to="/">首页</router-link>
      <router-link class="to-a" to="/upload">上传</router-link>
      <router-link class="to-a" to="/cache">缓存</router-link>
      <router-link class="to-a" to="/bt">磁力</router-link>
      <router-link class="to-a" to="/about">关于</router-link>
    </nav>
    <RouterView></RouterView>
    <!-- <grid></grid> -->
  </div>

</template>

<style scoped>
/* .container{
  height: 800px;
  width: 600px;
} */
/* .child{
  display: flex;
  justify-content: center;
  align-items: center; 
} */

.to-a{
  margin: 0 1rem;
}
</style>

