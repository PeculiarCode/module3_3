exports.ids = [2];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://conduit.productionready.io/"
});
request.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => Promise.reject(error) // Do something with request error
); // Add a response interceptor

request.interceptors.response.use(response => response, // Do something with response data
error => Promise.reject(error) // Do something with response error
);
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c527d9ba", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_48dbd5d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_48dbd5d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_48dbd5d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_48dbd5d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tag_vue_vue_type_style_index_0_id_48dbd5d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tags[data-v-48dbd5d2]{position:absolute;right:170px;padding:5px 10px 10px;background:#f3f3f3;border-radius:4px;width:200px}.tags ul[data-v-48dbd5d2]{display:flex;flex-wrap:wrap;margin-top:10px}.tags ul li[data-v-48dbd5d2]{padding:6px 10px;border-radius:10px;background-color:#969696;margin:4px;color:#fff;font-size:12px;cursor:pointer}.tags ul li[data-v-48dbd5d2]:hover{background:#6d6d6d}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tag.vue?vue&type=template&id=48dbd5d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$store.state.user)?_c('div',{staticClass:"tags"},[_vm._ssrNode("<p data-v-48dbd5d2>Popular Tags</p> <ul data-v-48dbd5d2>"+(_vm._ssrList((_vm.list),function(item,index){return ("<li data-v-48dbd5d2>"+_vm._ssrEscape("\n      "+_vm._s(item)+"\n    ")+"</li>")}))+"</ul>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tag.vue?vue&type=template&id=48dbd5d2&scoped=true&

// EXTERNAL MODULE: ./utils/axios.js
var axios = __webpack_require__(35);

// CONCATENATED MODULE: ./api/tags.js

const tags = params => {
  return Object(axios["a" /* default */])({
    url: "api/tags",
    method: "get",
    params
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tag.vue?vue&type=script&lang=js&

/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  data() {
    return {
      list: []
    };
  },

  mounted() {
    tags().then(res => {
      this.list = res.data.tags.slice(10);
    });
  },

  methods: {
    handleTabClick(data) {
      this.$emit("tagClick", data);
    }

  }
});
// CONCATENATED MODULE: ./components/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Tag.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48dbd5d2",
  "659d806d"
  
)

/* harmony default export */ var Tag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tag.js.map