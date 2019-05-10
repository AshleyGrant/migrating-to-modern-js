define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ask = ask;

  function ask(message) {
    return new Promise(function (resolve) {
      var result = confirm(message);
      resolve(result);
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc2suanMiXSwibmFtZXMiOlsiYXNrIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzdWx0IiwiY29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxXQUFTQSxHQUFULENBQWFDLE9BQWIsRUFBc0I7QUFDM0IsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTyxFQUFJO0FBQzVCLFVBQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDSixPQUFELENBQXRCO0FBRUFFLE1BQUFBLE9BQU8sQ0FBQ0MsTUFBRCxDQUFQO0FBQ0QsS0FKTSxDQUFQO0FBS0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYXNrKG1lc3NhZ2UpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maXJtKG1lc3NhZ2UpO1xyXG5cclxuICAgIHJlc29sdmUocmVzdWx0KTtcclxuICB9KTtcclxufSBcclxuIl19