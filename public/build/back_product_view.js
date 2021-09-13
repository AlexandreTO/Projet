(self["webpackChunk"] = self["webpackChunk"] || []).push([["back_product_view"],{

/***/ "./assets/js/components/back/ProductsView.js":
/*!***************************************************!*\
  !*** ./assets/js/components/back/ProductsView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ProductsView = /*#__PURE__*/function (_Component) {
  _inherits(ProductsView, _Component);

  var _super = _createSuper(ProductsView);

  function ProductsView() {
    var _this;

    _classCallCheck(this, ProductsView);

    _this = _super.call(this);
    _this.state = {
      product: {
        id: null,
        name: "",
        description: "",
        categorie_id: "",
        code_promo_id: "",
        prix: "",
        image: "",
        promo: "",
        status: "",
        quantite: "",
        slug: "",
        date_creation: "",
        date_modification: ""
      },
      loading: true
    };
    return _this;
  }

  _createClass(ProductsView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProduct(window.location.pathname);
    }
  }, {
    key: "getProduct",
    value: function getProduct(path) {
      var _this2 = this;

      var path = path.split('/');
      axios__WEBPACK_IMPORTED_MODULE_18___default().get(window.location.origin + "/api/".concat(path[2], "/").concat(path[3]), {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        _this2.setState({
          product: response.data,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          product = _this$state.product,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(react__WEBPACK_IMPORTED_MODULE_16__.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("div", {
        className: 'container row text-center'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("div", {
        className: "row mt-3 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("img", {
        src: "https://via.placeholder.com/600x400",
        alt: product.name,
        className: "img-fluid"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("h1", {
        className: "mt-4 mt-md-0"
      }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("h2", null, product.prix, "\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("b", null, "Description:"), product.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("a", {
        href: window.location.origin + "/back/update-product/".concat(product.id),
        className: "btn btn-primary"
      }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("form", {
        method: "post",
        action: window.location.origin + "/back/delete-product/".concat(product.id),
        onClick: function onClick() {
          return window.confirm('Are you sure you want to delete this product?');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("button", {
        className: "btn btn-danger"
      }, "Supprimer"))))));
    }
  }]);

  return ProductsView;
}(react__WEBPACK_IMPORTED_MODULE_16__.Component);

react_dom__WEBPACK_IMPORTED_MODULE_17__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement(ProductsView, null), document.getElementById('back_product_view'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsView);

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_object_create_js-node_mod-729503","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_strin-af505a"], () => (__webpack_exec__("./assets/js/components/back/ProductsView.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixjQUFNLEVBQUVlLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkssTUFBaEIsa0NBQWlEdEIsT0FBTyxDQUFDQyxFQUF6RCxDQUE1QjtBQUEyRixlQUFPLEVBQUU7QUFBQSxpQkFBTWUsTUFBTSxDQUFDWSxPQUFQLENBQWUsK0NBQWYsQ0FBTjtBQUFBO0FBQXBHLHNCQUNJO0FBQVEsaUJBQVMsRUFBQztBQUFsQixxQkFESixDQVBKLENBSkosQ0FESixDQU5SLENBREo7QUE0Qkg7Ozs7RUExRXNCbEM7O0FBNkUzQkUsOENBQUEsZUFBZ0Isa0RBQUMsWUFBRCxPQUFoQixFQUFpQ2tDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixtQkFBeEIsQ0FBakM7QUFFQSxpRUFBZWpDLFlBQWY7Ozs7Ozs7Ozs7QUNuRkEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELHFCQUFxQiw4SEFBZ0Q7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYmFjay9Qcm9kdWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFByb2R1Y3RzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVfaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2RlX3Byb21vX2lkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcHJpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcHJvbW86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHNsdWc6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX2NyZWF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9tb2RpZmljYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3Qod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0KHBhdGgpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IHBhdGguc3BsaXQoJy8nKTtcclxuICAgICAgICBheGlvcy5nZXQod2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpLyR7cGF0aFsyXX0vJHtwYXRoWzNdfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHtwcm9kdWN0LGxvYWRpbmd9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lciByb3cgdGV4dC1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIgYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IG10LW1kLTBcIj57cHJvZHVjdC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0LnByaXh94oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlc2NyaXB0aW9uOjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9iYWNrL3VwZGF0ZS1wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Nb2RpZmllcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9iYWNrL2RlbGV0ZS1wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2R1Y3Q/Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+U3VwcHJpbWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFByb2R1Y3RzVmlldy8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja19wcm9kdWN0X3ZpZXcnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1ZpZXc7IiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJSZWFjdERPTSIsImF4aW9zIiwiUHJvZHVjdHNWaWV3Iiwic3RhdGUiLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yaWVfaWQiLCJjb2RlX3Byb21vX2lkIiwicHJpeCIsImltYWdlIiwicHJvbW8iLCJzdGF0dXMiLCJxdWFudGl0ZSIsInNsdWciLCJkYXRlX2NyZWF0aW9uIiwiZGF0ZV9tb2RpZmljYXRpb24iLCJsb2FkaW5nIiwiZ2V0UHJvZHVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYXRoIiwic3BsaXQiLCJnZXQiLCJvcmlnaW4iLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwiY29uZmlybSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9