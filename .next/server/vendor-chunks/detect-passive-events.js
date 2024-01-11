"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-passive-events";
exports.ids = ["vendor-chunks/detect-passive-events"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md\nvar detectPassiveEvents = {\n    update: function update() {\n        if (false) { var noop, options, passive; }\n    }\n};\ndetectPassiveEvents.update();\nexports[\"default\"] = detectPassiveEvents;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSw4Q0FBNkM7SUFDM0NHLE9BQU87QUFDVCxDQUFDLEVBQUM7QUFDRix1RkFBdUY7QUFDdkYsSUFBSUMsc0JBQXNCO0lBQ3hCQyxRQUFRLFNBQVNBO1FBQ2YsSUFBSSxLQUFvRSxFQUFZLCtCQWVuRjtJQUNIO0FBQ0Y7QUFFQUQsb0JBQW9CQyxNQUFNO0FBQzFCSCxrQkFBZSxHQUFHRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9kZXRlY3QtcGFzc2l2ZS1ldmVudHMvbGliL2luZGV4LmpzP2Q0MzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL0V2ZW50TGlzdGVuZXJPcHRpb25zL2Jsb2IvZ2gtcGFnZXMvZXhwbGFpbmVyLm1kXG52YXIgZGV0ZWN0UGFzc2l2ZUV2ZW50cyA9IHtcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHBhc3NpdmUgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcGFzc2l2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gbm90ZTogaGF2ZSB0byBzZXQgYW5kIHJlbW92ZSBhIG5vLW9wIGxpc3RlbmVyIGluc3RlYWQgb2YgbnVsbFxuICAgICAgLy8gKHdoaWNoIHdhcyB1c2VkIHByZXZpb3VzbHkpLCBiZWNhc3VlIEVkZ2UgdjE1IHRocm93cyBhbiBlcnJvclxuICAgICAgLy8gd2hlbiBwcm92aWRpbmcgYSBudWxsIGNhbGxiYWNrLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhZmdyYXBoL2RldGVjdC1wYXNzaXZlLWV2ZW50cy9wdWxsLzNcbiAgICAgIHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgbm9vcCwgb3B0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVFdmVudFN1cHBvcnQnLCBub29wLCBvcHRpb25zKTtcbiAgICAgIGRldGVjdFBhc3NpdmVFdmVudHMuaGFzU3VwcG9ydCA9IHBhc3NpdmU7XG4gICAgfVxuICB9XG59O1xuXG5kZXRlY3RQYXNzaXZlRXZlbnRzLnVwZGF0ZSgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGV0ZWN0UGFzc2l2ZUV2ZW50czsiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZXRlY3RQYXNzaXZlRXZlbnRzIiwidXBkYXRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvcHRpb25zIiwiZ2V0Iiwibm9vcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXNTdXBwb3J0IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-passive-events/lib/index.js\n");

/***/ })

};
;