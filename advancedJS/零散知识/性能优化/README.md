# 性能优化

## 性能优化原则

+ 多使用内存, 缓存或其它方法
+ 减少CPU计算量,减少网络加载耗时
+ 适用所有编程的性能优化---空间换时间

## 如何入手

+ 让加载更快
  + 减少资源体积: 压缩代码
  + 减少访问次数: 合并请求, SSR服务端渲染, 缓存
  + 使用更快的网络: CDN
+ 让渲染更快
  + css放在head里, js放在body的最下面
  + 尽早执行JS, 用DOMContentLoaded触发
  + 懒加载(图片懒加载, 上滑加载更多)
  + 对DOM查询操作进行缓存
  + 频繁的DOM操作, 合并到一起插入DOM结构
  + 节流 throttle, 防抖 debounce
