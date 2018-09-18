module.exports = function getZerosCount(number) {
  // your implementation

  let ZerosResult = 0;

  while(number > 0){
    number = Math.floor(number / 5);
    ZerosResult = ZerosResult + number;
  }
  return ZerosResult;
}
