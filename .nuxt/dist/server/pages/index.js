exports.ids = [4,1,2];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7ce4839a", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=25119c0c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_vm._ssrNode("<div class=\"header\" data-v-25119c0c>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-25119c0c>conduit</div> "),_vm._ssrNode("<div class=\"right\" data-v-25119c0c>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),(!_vm.hasToken)?_c('nuxt-link',{attrs:{"to":"/sign?id=1"}},[_vm._v("SignIn")]):_vm._e(),_vm._ssrNode(" "),(!_vm.hasToken)?_c('nuxt-link',{attrs:{"to":"/sign?id=2"}},[_vm._v("SignOut")]):_vm._e(),_vm._ssrNode(" "),(_vm.hasToken)?_c('nuxt-link',{attrs:{"to":"/article"}},[_vm._v("Article")]):_vm._e(),_vm._ssrNode(" "),(_vm.hasToken)?_c('nuxt-link',{ref:"setActive",attrs:{"to":"/setting"}},[_vm._v("Setting")]):_vm._e(),_vm._ssrNode(" "),(_vm.hasToken)?_c('nuxt-link',{attrs:{"to":"/person"}},[_vm._v(_vm._s(_vm.$store.state.user.username))]):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=25119c0c&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&

/* harmony default export */ var Headervue_type_script_lang_js_ = (external_vue_default.a.extend({
  name: "Header",

  data() {
    return {
      HomeList: [{
        name: "Home",
        id: 0
      }, {
        name: "SignIn",
        id: 1
      }, {
        name: "SignOut",
        id: 2
      }],
      curentIndex: 0
    };
  },

  mounted() {
    if (this.$route.query.from === "person") {
      this.$refs.setActive.$el.className = "nuxt-link-exact-active";
    }
  },

  computed: {
    hasToken() {
      return this.$store.state.user ? true : false;
    }

  }
}));
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25119c0c",
  "e56be4ec"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_25119c0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_25119c0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_25119c0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_25119c0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_25119c0c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content[data-v-25119c0c]{width:1200px;margin:0 auto}.header[data-v-25119c0c]{display:flex;justify-content:space-between;align-items:center;padding:16px 0;font-size:12px;color:rgba(0,0,0,.3)}.header .left[data-v-25119c0c]{color:#5cb85c;font-size:24px}.header .right[data-v-25119c0c]{display:flex;align-items:center}.header .right a[data-v-25119c0c]{margin:0 5px;color:rgba(0,0,0,.3)}.header .right .nuxt-link-exact-active[data-v-25119c0c]{color:rgba(0,0,0,.8)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return publishArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return slug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return discuss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return personArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return personInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setting; });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
 //获取文章数据

const articles = query => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "api/articles",
    method: "get",
    params: query
  });
}; //发表文章

const publishArticle = (data, token) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "api/articles",
    method: "post",
    headers: {
      authorization: `Token ${token}`
    },
    data
  });
}; //获取单篇文章详情

const slug = (token, slug) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/${slug}`,
    method: "get",
    headers: {
      authorization: `Token ${token}`
    }
  });
};
const favorite = (token, slug, method) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/${slug}/favorite`,
    method,
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //获取单篇文章评论

const discuss = (token, slug, method, data = "") => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/${slug}/comments`,
    method,
    data,
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //删除评论

const deleteComment = (token, slug, id) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/${slug}/comments/${id}`,
    method: "delete",
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //删除文章

const deleteArticle = (token, slug) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/${slug}`,
    method: "delete",
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //个人文章列表

const personArticle = (token, params) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/articles/feed`,
    method: "get",
    params,
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //查看个人信息

const personInfo = (token, name) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/profiles/${name}`,
    method: "get",
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //订阅某人或取消订阅

const follow = (token, name, method) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/profiles/${name}/follow`,
    method,
    headers: {
      authorization: `Token ${token}`
    }
  });
}; //设置个人信息

const setting = (token, data) => {
  return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `api/user`,
    method: 'put',
    data,
    headers: {
      authorization: `Token ${token}`
    }
  });
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gift.3a2f78c.jpg";

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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("107ffc08", content, true, context)
};

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

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4eb2fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4eb2fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4eb2fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4eb2fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c4eb2fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content[data-v-c4eb2fae]{width:1200px;margin:0 auto;position:relative}.scope[data-v-c4eb2fae]{background:#5cb85c;text-align:center;height:150px}.scope h1[data-v-c4eb2fae]{padding-top:34px;text-shadow:0 1px 3px #fff;font-weight:700;font-size:44px;color:#fff}.scope p[data-v-c4eb2fae]{font-weight:300;color:#fff;font-size:20px;padding-top:24px}.page .col-header[data-v-c4eb2fae]{width:800px;border-bottom:1px solid #c7c7c7;margin-top:40px;padding-bottom:10px}.page .col-header ul[data-v-c4eb2fae]{display:flex;align-items:center}.page .col-header ul li[data-v-c4eb2fae]{margin:0 10px;cursor:pointer}.page .col-header ul li.active[data-v-c4eb2fae]{color:#5cb85c}.page .page-ul[data-v-c4eb2fae]{width:800px}.page .page-ul li[data-v-c4eb2fae]{border-bottom:1px solid #bbb;padding-bottom:20px}.page .page-ul li .info[data-v-c4eb2fae]{width:800px;display:flex;justify-content:space-between;padding-top:30px}.page .page-ul li .info .left[data-v-c4eb2fae]{display:flex;align-items:center}.page .page-ul li .info .left img[data-v-c4eb2fae]{height:32px;width:32px;border-radius:50%}.page .page-ul li .info .left .detail[data-v-c4eb2fae]{margin-left:10px;cursor:pointer}.page .page-ul li .info .left .detail p[data-v-c4eb2fae]{color:#5cb85c;font-size:10px}.page .page-ul li .info .left .detail span[data-v-c4eb2fae]{color:#bbb;font-size:10px}.page .page-ul li .info .right[data-v-c4eb2fae]{cursor:pointer;border:1px solid #ddd;padding:8px;border-radius:5px;display:flex;align-items:center;justify-content:center}.page .page-ul li .info .right.active[data-v-c4eb2fae]{background:#5cb85c}.page .page-ul li .title[data-v-c4eb2fae]{font-size:20px;margin:15px 0 10px}.page .page-ul li .desc[data-v-c4eb2fae]{color:#999;font-size:15px}.page .page-ul li .more[data-v-c4eb2fae]{margin-top:10px;font-size:12px;color:#bbb}.page .btns[data-v-c4eb2fae]{width:1200px;margin:0 auto}.page .btns ul[data-v-c4eb2fae]{display:flex;align-items:center;flex-wrap:wrap}.page .btns ul li button[data-v-c4eb2fae]{margin:10px;padding:2px 10px}.page .btns ul li button.active[data-v-c4eb2fae]{background:#5cb85c;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=c4eb2fae&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('Header'),_vm._ssrNode(" <div class=\"scope\" data-v-c4eb2fae><div class=\"content\" data-v-c4eb2fae><h1 data-v-c4eb2fae>conduit</h1> <p data-v-c4eb2fae>A place to share your knowledge</p></div></div> "),_vm._ssrNode("<div class=\"page\" data-v-c4eb2fae>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-c4eb2fae>","</div>",[_vm._ssrNode("<div class=\"col-header\" data-v-c4eb2fae><ul data-v-c4eb2fae>"+(_vm._ssrList((_vm.tabList),function(item,index){return ("<li"+(_vm._ssrClass(null,{ active: _vm.currentIndex === index }))+" data-v-c4eb2fae>"+_vm._ssrEscape("\n            "+_vm._s(item)+"\n          ")+"</li>")}))+"</ul></div> "),_c('Tags',{on:{"tagClick":_vm.tagClick}}),_vm._ssrNode(" <ul class=\"page-ul\" data-v-c4eb2fae>"+(_vm._ssrList((_vm.list),function(item){return ("<li data-v-c4eb2fae><div class=\"info\" data-v-c4eb2fae><div class=\"left\" data-v-c4eb2fae>"+((item.author.image)?("<img"+(_vm._ssrAttr("src",item.author.image))+" alt data-v-c4eb2fae>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-c4eb2fae>"))+" <div class=\"detail\" data-v-c4eb2fae><p data-v-c4eb2fae>"+_vm._ssrEscape(_vm._s(item.author.username))+"</p> <span data-v-c4eb2fae>"+_vm._ssrEscape(_vm._s(item.createdAt))+"</span></div></div> <div"+(_vm._ssrClass("right",{ active: item.favorited }))+" data-v-c4eb2fae>"+_vm._ssrEscape("\n              ❤ "+_vm._s(item.favoritesCount)+"\n            ")+"</div></div> <div class=\"area\" data-v-c4eb2fae><div class=\"title\" data-v-c4eb2fae>"+_vm._ssrEscape(_vm._s(item.slug))+"</div> <div class=\"desc\" data-v-c4eb2fae>"+_vm._ssrEscape(_vm._s(item.description))+"</div> <h6 class=\"more\" data-v-c4eb2fae>read more...</h6></div></li>")}))+"</ul>")],2),_vm._ssrNode(" <div class=\"btns\" data-v-c4eb2fae><ul data-v-c4eb2fae>"+(_vm._ssrList((_vm.totalCount),function(item,index){return ("<li data-v-c4eb2fae><button"+(_vm._ssrClass(null,{ active: _vm.btnIndex === index }))+" data-v-c4eb2fae>"+_vm._ssrEscape("\n            "+_vm._s(item)+"\n          ")+"</button></li>")}))+"</ul></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=c4eb2fae&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Tag.vue + 5 modules
var Tag = __webpack_require__(49);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = (external_vue_default.a.extend({
  middleware: ["auth"],
  components: {
    Header: Header["default"],
    Tags: Tag["default"]
  },

  data() {
    return {
      list: [],
      currentIndex: 0,
      btnIndex: 0,
      tabList: ["GlobalFeed", "Your Feed"],
      totalCount: [],
      tag: ""
    };
  },

  methods: {
    initData() {
      this.getArticles(0, true); //没有登录不展示tab信息

      if (!this.$store.state.user) {
        this.tabList.pop();
      }
    },

    tagClick(data) {
      if (this.tabList.length > 2) {
        this.tabList.pop();
      }

      this.tabList.push(`#${data}`);
      this.currentIndex = 2;
      this.btnIndex = 0;
      this.tag = data;
      this.handleTagList(0);
    },

    handleTabClick(index) {
      this.currentIndex = index; //初始化feedList数组

      this.btnIndex = 0;

      if (this.tabList.length > 2 && index !== 2) {
        this.tabList.pop();
      }

      if (index === 0) {
        this.initData();
      } else if (index === 1) {
        this.handleFeedArticle(0, true);
      }
    },

    handleFeedArticle(index, falg) {
      const token = this.$store.state.user.token;
      const offset = index * 10;
      Object(article["g" /* personArticle */])(token, {
        limit: 10,
        offset
      }).then(res => {
        this.list = res.data.articles;

        if (falg) {
          this.totalCount = Math.ceil(res.data.articlesCount / 10);
        }
      });
    },

    handleAvatar(userName) {
      this.$router.push({
        name: "person",
        query: {
          userName,
          from: "index"
        }
      });
    },

    handleArticle() {},

    getArticles(index, flag) {
      //获取文章数据
      const offset = index * 10;
      Object(article["a" /* articles */])({
        limit: 10,
        offset
      }).then(res => {
        this.list = res.data.articles;

        if (flag) {
          this.totalCount = Math.ceil(res.data.articlesCount / 10);
        }
      });
    },

    handleFavorite(item) {
      const slug = item.slug;
      const token = this.$store.state.user.token;
      const method = item.favorited ? "delete" : "post";
      Object(article["e" /* favorite */])(token, slug, method).then(res => {
        //点赞完成将状态设置成返回的状态
        item.favoritesCount = res.data.article.favoritesCount;
        item.favorited = res.data.article.favorited;
      });
    },

    handleTagList(index) {
      const offset = index * 10;
      Object(article["a" /* articles */])({
        limit: 10,
        offset,
        tag: this.tag
      }).then(res => {
        this.list = res.data.articles;
        this.totalCount = Math.ceil(res.data.articlesCount / 10);
      });
    },

    handlePage(index) {
      this.btnIndex = index;

      if (this.currentIndex === 0) {
        this.getArticles(index, false);
      } else if (this.currentIndex === 1) {
        this.handleFeedArticle(index, false);
      } else {
        this.handleTagList(index);
      }
    }

  },

  mounted() {
    if (!this.$store.state.user) {
      this.tabList.pop();
    }

    this.initData();
  }

}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c4eb2fae",
  "52c2c9d1"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=index.js.map