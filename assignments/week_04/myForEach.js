let myArr = [10, 20, 30, 40, 50];
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFun) {
    let originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      userFun(originalArray[i], i);
    }
  };
}
let rs = myArr.myForEach(function (value, index) {
  console.log(`My for each value at index : ${index} and value : ${value}`);
});

console.log(rs);
