module.exports = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    },
    multiply: function(x, y) {
      return x * y;
    },
    divide: function(x, y) {
      if (y === 0) {
        throw new Error("Cannot divide by zero");
      }
      return x / y;
    }
  };
  