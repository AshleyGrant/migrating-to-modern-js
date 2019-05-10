define(["./ask"], function (_ask) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  document.getElementById('clickMe').addEventListener('click',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ask.ask)('Did you learn something?');

          case 2:
            result = _context.sent;
            document.getElementById('result').innerText = result ? 'Yes' : 'No';

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUFBLEVBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsZ0JBQW5DLENBQW9ELE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3RDLGNBQUksMEJBQUosQ0FEc0M7O0FBQUE7QUFDckRDLFlBQUFBLE1BRHFEO0FBRzNESCxZQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NHLFNBQWxDLEdBQThDRCxNQUFNLEdBQUcsS0FBSCxHQUFXLElBQS9EOztBQUgyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzayB9IGZyb20gXCIuL2Fzay5qc1wiO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrTWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhc2soJ0RpZCB5b3UgbGVhcm4gc29tZXRoaW5nPycpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJUZXh0ID0gcmVzdWx0ID8gJ1llcycgOiAnTm8nO1xyXG59KTsiXX0=