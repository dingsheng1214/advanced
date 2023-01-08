function selectSort(data: number[]) {
  // data[0...i]是有序的, data[i...n]是无序的
  for (let i = 0; i < data.length; i++) {
    // 选择 data[i...n]中的最小值的索引
    let minIndex = i
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j
      }
    }
    swap(data, i, minIndex)
  }
  return data
}
function swap(data: number[], i: number, j: number) {
  let temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

console.log(selectSort([6, 4, 2, 3, 1, 5]))
