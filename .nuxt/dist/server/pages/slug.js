exports.ids = [8,1];
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f729415e", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a6f25dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a6f25dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a6f25dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a6f25dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_a6f25dc0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slug .detail[data-v-a6f25dc0]{background:#333;color:#fff}.slug .detail .content[data-v-a6f25dc0]{width:1200px;margin:0 auto}.slug .detail .content .title[data-v-a6f25dc0]{padding-top:30px;font-size:30px}.slug .detail .content .introduce[data-v-a6f25dc0]{display:flex;align-items:center;padding:30px 0}.slug .detail .content .introduce .self[data-v-a6f25dc0]{display:flex;align-items:center;margin-right:10px}.slug .detail .content .introduce .self img[data-v-a6f25dc0]{width:32px;height:32px;border-radius:50%}.slug .detail .content .introduce .self .name[data-v-a6f25dc0]{margin-left:10px;font-size:12px}.slug .detail .content .introduce .self .name h5[data-v-a6f25dc0]{margin-top:4px;color:#fff}.slug .detail .content .introduce button[data-v-a6f25dc0]{border-radius:4px;padding:1px 10px;margin:0 2px;font-size:12px;background:none;border:1px solid #ddd}.slug .bodys[data-v-a6f25dc0]{width:1200px;margin:20px auto;padding-bottom:20px;border-bottom:1px solid #f5f5f5}.slug .comment[data-v-a6f25dc0]{margin:0 auto;width:600px}.slug .comment textarea[data-v-a6f25dc0]{width:600px;border:1px solid #ddd;height:200px;border-radius:6px}.slug .btn[data-v-a6f25dc0]{display:flex;align-items:center;justify-content:space-between;width:600px;margin:0 auto;background:#f5f5f5;padding:10px;border-radius:6px}.slug .btn img[data-v-a6f25dc0]{height:30px;width:30px;border-radius:50%}.slug .btn button[data-v-a6f25dc0]{color:#fff;background-color:#5cb85c;border-color:#5cb85c;font-size:14px;padding:6px;border-radius:6px}.slug .comments[data-v-a6f25dc0]{width:600px;margin:10px auto}.slug .comments ul[data-v-a6f25dc0]{padding-bottom:20px}.slug .comments ul li[data-v-a6f25dc0]{border:1px solid #bbb;border-radius:10px;margin:10px auto}.slug .comments ul li .input-content[data-v-a6f25dc0]{border-bottom:1px solid #bbb;padding:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:600px}.slug .comments ul li .bottom[data-v-a6f25dc0]{display:flex;align-items:center;justify-content:space-between;padding:10px;background:#e5e5e5;border-radius:0 0 10px 10px}.slug .comments ul li .bottom .left[data-v-a6f25dc0]{display:flex;align-items:center;font-size:12px}.slug .comments ul li .bottom .left img[data-v-a6f25dc0]{height:20px;width:20px;border-radius:50%}.slug .comments ul li .bottom .left h6[data-v-a6f25dc0]{margin:0 10px;color:#5cb85c}.slug .comments ul li .bottom .left p[data-v-a6f25dc0]{color:#bbb}.slug .comments ul li .bottom button[data-v-a6f25dc0]{background:#5cb85c;font-size:12px;border-radius:4px;padding:2px 4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/slug.vue?vue&type=template&id=a6f25dc0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slug"},[_c('Header'),_vm._ssrNode(" <div class=\"detail\" data-v-a6f25dc0><div class=\"content\" data-v-a6f25dc0><div class=\"title\" data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(_vm.slugInfo.body))+"</div> <div class=\"introduce\" data-v-a6f25dc0><div class=\"self\" data-v-a6f25dc0><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-a6f25dc0> <div class=\"name\" data-v-a6f25dc0><p data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(_vm.userName))+"</p> <h5 data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(_vm.createTime))+"</h5></div></div> <button data-v-a6f25dc0>Edit</button> <button data-v-a6f25dc0>Delete</button></div></div></div> <div class=\"bodys\" data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(_vm.slugInfo.body))+"</div> <div class=\"comment\" data-v-a6f25dc0><textarea data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(_vm.commentValue))+"</textarea></div> <div class=\"btn\" data-v-a6f25dc0><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-a6f25dc0> <button data-v-a6f25dc0>comment</button></div> "+((_vm.commentUser.length > 0)?("<div class=\"comments\" data-v-a6f25dc0><ul data-v-a6f25dc0>"+(_vm._ssrList((_vm.commentUser),function(item){return ("<li data-v-a6f25dc0><div class=\"input-content\" data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(item.body))+"</div> <div class=\"bottom\" data-v-a6f25dc0><div class=\"left\" data-v-a6f25dc0><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" data-v-a6f25dc0> <h6 data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(item.author.username))+"</h6> <p data-v-a6f25dc0>"+_vm._ssrEscape(_vm._s(item.createdAt.toString().substring(0, 10)))+"</p></div> <button data-v-a6f25dc0>Delete</button></div></li>")}))+"</ul></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/slug.vue?vue&type=template&id=a6f25dc0&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var slugvue_type_script_lang_js_ = ({
  computed: {
    Header: Header["default"]
  },

  data() {
    return {
      slugInfo: {},
      commentUser: {},
      userName: "",
      createTime: "",
      commentValue: ""
    };
  },

  async mounted() {
    const token = this.$store.state.user.token;
    const slugParams = this.$route.query.slug;
    Object(article["k" /* slug */])(token, slugParams).then(res => {
      this.slugInfo = res.data.article;
      this.userName = this.slugInfo.author.username;
      this.createTime = this.slugInfo.createdAt.substring(0, 10);
    });
    this.getComments(token, slugParams, "get");
  },

  methods: {
    getComments(token, slugParams, method) {
      Object(article["d" /* discuss */])(token, slugParams, method).then(res => {
        this.commentUser = res.data.comments;
      });
    },

    handleSubmit() {
      if (this.commentValue == "") {
        alert("comment can not be blank");
      } else {
        const token = this.$store.state.user.token;
        const slugParams = this.$route.query.slug;
        Object(article["d" /* discuss */])(token, slugParams, "post", {
          comment: {
            body: this.commentValue
          }
        }).then(res => {
          this.getComments(token, slugParams, "get");
        });
      }
    },

    handleDelete(id) {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      Object(article["c" /* deleteComment */])(token, slugParams, id).then(res => {
        this.getComments(token, slugParams, "get");
      });
    },

    handleDelArticle() {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      Object(article["b" /* deleteArticle */])(token, slugParams).then(res => {
        this.$router.replace({
          path: "/"
        });
      });
    },

    handleEdit() {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      Object(article["k" /* slug */])(token, slugParams).then(res => {
        this.$router.push({
          name: "article",
          query: {
            queryInfo: res.data.article
          }
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a6f25dc0",
  "38459f7c"
  
)

/* harmony default export */ var slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=slug.js.map