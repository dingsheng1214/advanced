/**
 * 字符串拼接
 */
const a = 100 + 10 // 110
const b = 100 + '10' // 10010
const c = true + '10' // true10

/**
 * == 运算符
 */
100 == '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true

/**
 * if语句与逻辑运算
 * truly: !!a === true的变量
 * falsely: !!a === false的变量
 *  falsely值:  '', +0, -0, NaN,  false, null, undefinde
 */
!!0 === false // true
!!NaN === false // true
!!'' === false // true
!!null === false // true
!!undefined === false // true
!!false === false // true
