import http from '../axios'

export default {
  //获取所有博客文章
  getAllBlogs() {
    return http('get', '/blog/getAllBlogs');
  },
  //获取分类的描述
  getDescribeByCate(cate) {
    return http('get', '/blog/getDescribeByCate', { cate: cate });
  },
  //获取分类的所有文章
  getBlogsByCate(cate) {
    return http('get', '/blog/getBlogsByCate', { cate: cate });
  },

  //获取网站参数信息
  getWebConfig() {
    return http('get', '/blog/getWebConfig');
  },
  //增加网站访问人数和访问次数
  addScanNumber() {
    return http('post', '/blog/addScanNumber');
  }
}