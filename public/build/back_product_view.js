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
      axios__WEBPACK_IMPORTED_MODULE_18___default().get("http://localhost:8000/api/".concat(path[2], "/").concat(path[3]), {
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
        className: 'row text-center'
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
        href: "http://localhost:8000/back/update-product/".concat(product.id),
        className: "btn btn-primary"
      }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16__.createElement("form", {
        method: "post",
        action: "http://localhost:8000/back/delete-product/".concat(product.id),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNXLE9BQVAsQ0FBZSwrQ0FBZixDQUFOO0FBQUE7QUFBaEcsc0JBQ0k7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHFCQURKLENBUEosQ0FKSixDQURKLENBTlIsQ0FESjtBQTRCSDs7OztFQTFFc0JqQzs7QUE2RTNCRSw4Q0FBQSxlQUFnQixrREFBQyxZQUFELE9BQWhCLEVBQWlDaUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLG1CQUF4QixDQUFqQztBQUVBLGlFQUFlaEMsWUFBZjs7Ozs7Ozs7OztBQ25GQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLDhIQUFnRDs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9iYWNrL1Byb2R1Y3RzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgUHJvZHVjdHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZV9pZDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvZGVfcHJvbW9faWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwcml4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9tbzogXCJcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICAgIHF1YW50aXRlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2x1ZzogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGVfY3JlYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX21vZGlmaWNhdGlvbjogXCJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3QocGF0aCkge1xyXG4gICAgICAgIHZhciBwYXRoID0gcGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS8ke3BhdGhbMl19LyR7cGF0aFszXX1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7cHJvZHVjdCxsb2FkaW5nfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtc3BpbiBmYS1zcGlubmVyIGZhLTR4XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4NDAwXCIgYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00IG10LW1kLTBcIj57cHJvZHVjdC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0LnByaXh94oKsPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkRlc2NyaXB0aW9uOjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JhY2svdXBkYXRlLXByb2R1Y3QvJHtwcm9kdWN0LmlkfWB9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPk1vZGlmaWVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2BodHRwOi8vbG9jYWxob3N0OjgwMDAvYmFjay9kZWxldGUtcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0gb25DbGljaz17KCkgPT4gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwcm9kdWN0PycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxQcm9kdWN0c1ZpZXcvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tfcHJvZHVjdF92aWV3JykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNWaWV3OyIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiUmVhY3RET00iLCJheGlvcyIsIlByb2R1Y3RzVmlldyIsInN0YXRlIiwicHJvZHVjdCIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcmllX2lkIiwiY29kZV9wcm9tb19pZCIsInByaXgiLCJpbWFnZSIsInByb21vIiwic3RhdHVzIiwicXVhbnRpdGUiLCJzbHVnIiwiZGF0ZV9jcmVhdGlvbiIsImRhdGVfbW9kaWZpY2F0aW9uIiwibG9hZGluZyIsImdldFByb2R1Y3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGF0aCIsInNwbGl0IiwiZ2V0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImNvbmZpcm0iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==