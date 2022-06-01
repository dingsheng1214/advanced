/**
 * 假设urlIds数组预先就存在，数组中的每一项都可以按照规则拼接成一个完整的图片地址
 * 根据这个数组，依次请求图片进行预加载
 */
const _ = require('lodash');

const urlIds = [1, 2, 3, 4, 5]
const loadImg = (urlId) => {
    const url = `http://www.image.com/${urlId}.jpg`;
    return new Promise((resolve, reject) => {
        resolve(url)
    })
}
urlIds.reduce((prevPromise, curr) => {
    return prevPromise.then(() => {
        console.log(curr)
        return loadImg(curr);
    })
}, Promise.resolve())

/**
 * 希望最大并发数我3，最多一起发出3个请求
 * 1 -> [0, 1, 2]
 * 2 -> [3, 4, 5]
 * 3 -> [6, 7, 8]
 */
const ids = _.chunk(urlIds, 3);
console.log(ids)

ids.reduce((prevPromise, curr) => {
    return prevPromise.then(() => {
        console.log(curr)
        return Promise.all(curr.map(id => loadImg(id)));
    })
}, Promise.resolve())