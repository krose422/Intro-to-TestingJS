window.Foo = (function() {

  var plusOne = function (num) {
    return num + 1;
  };

  var sortArray = function (array) {
    return array.concat().sort();
  };

  var hasValue = function (array, value) {
    return array.indexOf(value) !== -1;
  };

  function Foo() {
    this.plusOne = plusOne;
    this.sortArray = sortArray;
    this.hasValue = hasValue;
  }

  Foo.greet = function (name) {
      return "Hello, " + name + "!";
    };

  Foo.prototype = {

  };

  return Foo;

})();
