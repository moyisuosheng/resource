<script setup>
import {ref,reactive} from 'vue'
import myvideo from './video.vue';

const data = reactive({

  url : [
    '/minio-path/rms/all/2023/12/01/6773cb76-a598-49cc-b18d-e063d67140f4-' + encodeURIComponent('中国八大阶级分层现状——当代中国社会各阶级的分析.mp4'),
    '/minio-path/rms/all/2023/12/01/d704b07c-59b9-48d9-88eb-7dcbb0e6355b-%E9%80%8F%E8%BF%87%E5%8E%86%E5%8F%B2%E8%BF%9B%E7%A8%8B%EF%BC%8C%E5%88%86%E6%9E%90%E4%B8%AD%E5%9B%BD%E6%94%BF%E6%B2%BB%E7%BB%8F%E6%B5%8E%E7%9A%84%E8%BF%90%E8%A1%8C%E9%80%BB%E8%BE%91.mp4',

  ]
 })

// console.log(data.url);

</script>

<template>
  <a-row :gutter="[16,16]">
    
    <a-col :span="12" v-for="(index,item) in data.url">
      <myvideo :datas=item></myvideo>
    </a-col>


  </a-row>
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
</style>
