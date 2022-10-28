  <template>
    <div>
      我是示例2组件
      <div class="box"></div>
    </div>
  </template>
  
  <script>
    export default {
      name:'Example2'
    };
  </script>
  <style scoped lang="less">
    @color:green;
    @k:100px;
    .box{
      height:@k;
      background: @color;
    }
  </style>