# 同源策略

+ ajax请求时, 浏览器要求当前网页和server必须同源
+ 同源: 协议, 域名, 端口 三者必须一致
+ 加载图片, js, css可以无视同源策略
  + <img src='跨域的图片地址' />
  + <link href='跨域的长沙市地址' />
  + <script src='跨域的js地址' />

## 跨域
所有的跨域,都必须经过server端的允许和配合

### JSONP
利用script标签无视同源策略的原理,加载js文件

### CORS - 服务器设置 http header
纯服务器设置跨域
```js
// 第二个参数允许填写跨域的域名称, 不建议直接写*
response.setHeader('Access-Control-Allow-Origin', "http://localhost:8011")
response.setHeader('Access-Control-Allow-Header', "X-Requested-With")
response.setHeader('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS")

// 接收跨域的cookie
response.setHeader('Access-Control-Allow-Credentials', "true")
```
