<template>
  <div id="app">

    <transition name='router-fade' mode='out-in'>
      <router-view></router-view>
    </transition>

    <div class="thank">Express by Vue2.0 Nodejs(koa)</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function() {
    createSnow('', 15)
  },
}
</script>

<style lang="less">
@import 'common/css/common';
@import 'common/css/rest';
@import 'common/css/app';
</style>
