let myArr = [10, 20, 30, 40, 50];
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFun) {
    const rs = [];
    for (let i = 0; i < this.length; i++) {
      let value = userFun(this[i], i);
      rs.push(value);
    }
    return rs;
  };
}
let result = myArr.myMap(function (value, index) {
  console.log(`My map value at index : ${index} and value is : ${value}`);
});
