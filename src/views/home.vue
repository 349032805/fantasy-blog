<template>
  <div class="home">
    <div class="poetry">
      <p>落英缤纷 繁花似锦</p>
      <p>四季依旧周而复始</p>
      <p>而我们却终将死去</p>
      <p>那</p>
      <p>还有什么美好值得留下的呢</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.$router.push({ name: 'blogs' });
    }, 5000)
  },
};
</script>

<style lang="less" scoped>
.home {
  .poetry {
    font-size: 16px;
    color: #666;
    line-height: 40px;
    width: 400px;
    height: 180px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    letter-spacing: 4px;
  }
}
</style>
