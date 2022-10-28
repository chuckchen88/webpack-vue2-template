  <template>
    <div>
      我是菜单组件
      <div class="box"></div>
    </div>
  </template>
  
  <script>
    export default {
      name:'Menus'
    };
  </script>
  <style scoped lang="less">
    @color:red;
    @k:100px;
    .box{
      height:@k;
      background: @color;
    }
  </style>