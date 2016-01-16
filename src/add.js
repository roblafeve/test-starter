module.exports = function add() {
  var num = 0;

  console.log(typeof(arguments));
  for (var i = 0; i < arguments.length; i++) {
    num += arguments[i];
  }
  return num;
}
