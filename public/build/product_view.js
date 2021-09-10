(self["webpackChunk"] = self["webpackChunk"] || []).push([["product_view"],{

/***/ "./assets/js/components/front/ProductsView.js":
/*!****************************************************!*\
  !*** ./assets/js/components/front/ProductsView.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
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

      axios__WEBPACK_IMPORTED_MODULE_15___default().get(window.location.origin + "/api".concat(path), {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: 'container row text-center'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "row mt-3 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col-md-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("img", {
        src: "https://via.placeholder.com/600x400",
        alt: product.name,
        className: "img-fluid"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
        className: "col-md-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h1", {
        className: "mt-4 mt-md-0"
      }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("h2", null, product.prix, "\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("b", null, "Description:"), product.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("form", {
        className: "mt-4 p-4 bg-light",
        method: "post"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("a", {
        className: "btn btn-info",
        href: window.location.origin + "/cart/add/".concat(product.id)
      }, "Add to Cart"))))));
    }
  }]);

  return ProductsView;
}(react__WEBPACK_IMPORTED_MODULE_13__.Component);

react_dom__WEBPACK_IMPORTED_MODULE_14__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(ProductsView, null), document.getElementById('product_view'));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_object_create_js-node_mod-729503"], () => (__webpack_exec__("./assets/js/components/front/ProductsView.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWpDO0FBRUEsaUVBQWUvQixZQUFmOzs7Ozs7Ozs7O0FDL0VBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsOEhBQWdEOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zyb250L1Byb2R1Y3RzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgUHJvZHVjdHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZV9pZDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvZGVfcHJvbW9faWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwcml4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9tbzogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICAgIHF1YW50aXRlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2x1ZzogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGVfY3JlYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX21vZGlmaWNhdGlvbjogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3Qod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0KHBhdGgpIHtcclxuICAgICAgICBheGlvcy5nZXQod2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpJHtwYXRofWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHtwcm9kdWN0LGxvYWRpbmd9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lciByb3cgdGV4dC1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIgYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IG10LW1kLTBcIj57cHJvZHVjdC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0LnByaXh94oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlc2NyaXB0aW9uOjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC00IHAtNCBiZy1saWdodFwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgaHJlZj17d2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvY2FydC9hZGQvJHtwcm9kdWN0LmlkfWB9PkFkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxQcm9kdWN0c1ZpZXcvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RfdmlldycpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzVmlldzsiLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlJlYWN0RE9NIiwiYXhpb3MiLCJQcm9kdWN0c1ZpZXciLCJzdGF0ZSIsInByb2R1Y3QiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3JpZV9pZCIsImNvZGVfcHJvbW9faWQiLCJwcml4IiwiaW1hZ2UiLCJwcm9tbyIsInN0YXR1cyIsInF1YW50aXRlIiwic2x1ZyIsImRhdGVfY3JlYXRpb24iLCJkYXRlX21vZGlmaWNhdGlvbiIsImxvYWRpbmciLCJnZXRQcm9kdWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhdGgiLCJnZXQiLCJvcmlnaW4iLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=