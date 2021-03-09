exports.ids = [5,1];
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c9ad638", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_3994cf00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_3994cf00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_3994cf00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_3994cf00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_person_vue_vue_type_style_index_0_id_3994cf00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".person .container[data-v-3994cf00]{width:1200px;margin:0 auto;text-align:center;background:#f3f3f3;padding-bottom:20px}.person .container .avatar .self[data-v-3994cf00]{display:flex;flex-direction:column;align-items:center;font-size:14px}.person .container .avatar .self .linkSet[data-v-3994cf00]{color:#333;background:#bbb;border:1px solid #eee;padding:6px;border-radius:10px;margin-top:10px}.person .container .avatar img[data-v-3994cf00]{width:100px;height:100px;border-radius:50%;margin-top:30px}.person .container .avatar p[data-v-3994cf00]{margin-top:30px}.person .container .avatar button[data-v-3994cf00]{padding:4px 12px;border-radius:5px;background:#bbb;margin-top:10px}.person .tab[data-v-3994cf00]{width:1200px;display:flex;align-items:center;margin:20px auto 0;border-bottom:1px solid #bbb;padding-bottom:10px}.person .tab li[data-v-3994cf00]{margin:0 6px;color:#bbb;cursor:pointer;font-size:14px}.person .tab li.active[data-v-3994cf00]{background:#fff;color:#5cb85c;position:relative}.person .tab li.active[data-v-3994cf00]:after{content:\"\";position:absolute;left:50%;transform:translateX(-50%);top:23px;width:100%;height:2px;border-radius:10px;background:#5cb85c}.person .article-content[data-v-3994cf00]{width:1200px;margin:20px auto;color:#bbb;font-size:14px}.person .article-content .page-ul[data-v-3994cf00]{width:800px}.person .article-content .page-ul li[data-v-3994cf00]{border-bottom:1px solid #bbb;padding-bottom:20px}.person .article-content .page-ul li .info[data-v-3994cf00]{width:800px;display:flex;justify-content:space-between;padding-top:30px}.person .article-content .page-ul li .info .left[data-v-3994cf00]{display:flex;align-items:center}.person .article-content .page-ul li .info .left img[data-v-3994cf00]{height:32px;width:32px;border-radius:50%}.person .article-content .page-ul li .info .left .detail[data-v-3994cf00]{margin-left:10px;cursor:pointer}.person .article-content .page-ul li .info .left .detail p[data-v-3994cf00]{color:#5cb85c;font-size:10px}.person .article-content .page-ul li .info .left .detail span[data-v-3994cf00]{color:#bbb;font-size:10px;display:block;margin-top:8px;transform:scale(.9);margin-left:-8px}.person .article-content .page-ul li .area[data-v-3994cf00]{margin-left:6px}.person .article-content .page-ul li .area .title[data-v-3994cf00]{color:#333;font-size:20px;margin:15px 0 10px}.person .article-content .page-ul li .area .desc[data-v-3994cf00]{color:#999;font-size:15px}.person .article-content .page-ul li .area .more[data-v-3994cf00]{margin-top:10px;font-size:12px;color:#bbb}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/person.vue?vue&type=template&id=3994cf00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person"},[_c('Header'),_vm._ssrNode(" <div class=\"container\" data-v-3994cf00><div class=\"avatar\" data-v-3994cf00>"+((Object.keys(_vm.userInfo).length > 0)?("<div data-v-3994cf00><img"+(_vm._ssrAttr("src",_vm.userInfo.image))+" data-v-3994cf00> <p data-v-3994cf00>"+_vm._ssrEscape(_vm._s(_vm.userInfo.username))+"</p> "+((_vm.location === 'index')?("<button data-v-3994cf00>"+_vm._ssrEscape("\n          "+_vm._s(_vm.userInfo.following ? "unflow" : "flow")+"\n        ")+"</button>"):("<button data-v-3994cf00>\n          setting\n        </button>"))+"</div>"):"<!---->")+"</div></div> <ul class=\"tab\" data-v-3994cf00>"+(_vm._ssrList((_vm.list),function(item,index){return ("<li"+(_vm._ssrClass(null,{ active: _vm.currentIndex === index }))+" data-v-3994cf00>"+_vm._ssrEscape("\n      "+_vm._s(item)+"\n    ")+"</li>")}))+"</ul> <div class=\"article-content\" data-v-3994cf00><ul class=\"page-ul\" data-v-3994cf00>"+(_vm._ssrList((_vm.pageList),function(item){return ("<li data-v-3994cf00><div class=\"info\" data-v-3994cf00><div class=\"left\" data-v-3994cf00>"+((item.author.image)?("<img"+(_vm._ssrAttr("src",item.author.image))+" alt data-v-3994cf00>"):("<img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-3994cf00>"))+" <div class=\"detail\" data-v-3994cf00><p data-v-3994cf00>"+_vm._ssrEscape(_vm._s(item.author.username))+"</p> <span data-v-3994cf00>"+_vm._ssrEscape(_vm._s(item.createdAt))+"</span></div></div> <div class=\"righ\" data-v-3994cf00>star</div></div> <div class=\"area\" data-v-3994cf00><div class=\"title\" data-v-3994cf00>"+_vm._ssrEscape(_vm._s(item.slug))+"</div> <div class=\"desc\" data-v-3994cf00>"+_vm._ssrEscape(_vm._s(item.description))+"</div> <h6 class=\"more\" data-v-3994cf00>read more...</h6></div></li>")}))+"</ul></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/person.vue?vue&type=template&id=3994cf00&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/person.vue?vue&type=script&lang=js&


/* harmony default export */ var personvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"]
  },

  mounted() {
    //从首页进入
    this.token = this.$store.state.user.token;
    this.name = this.$route.query.userName || this.$store.state.user.username;
    this.initData(this.token, this.name);
  },

  data() {
    return {
      list: ["MyArticle", "FavoriteArticles"],
      currentIndex: 0,
      userInfo: {},
      name: "",
      token: "",
      pageList: [],
      location: ""
    };
  },

  methods: {
    handleTagClick(index) {
      this.currentIndex = index;

      if (index === 1) {
        Object(article["a" /* articles */])({
          favorited: this.name,
          limit: 10,
          offset: 0
        }).then(res => {
          this.pageList = res.data.articles;
        });
      } else {
        Object(article["a" /* articles */])({
          author: this.name,
          limit: 10,
          offset: 0
        }).then(res => {
          this.pageList = res.data.articles;
        });
      }
    },

    initData(token, name) {
      Object(article["a" /* articles */])({
        author: name,
        limit: 10,
        offset: 0
      }).then(res => {
        this.pageList = res.data.articles;
      });
      this.location = this.$route.query.from;
      Object(article["h" /* personInfo */])(token, name).then(res => {
        this.userInfo = res.data.profile;
      });
    },

    handleFlow(flag) {
      const method = flag ? "delete" : "post";
      Object(article["f" /* follow */])(this.token, this.name, method).then(res => {
        this.userInfo.following = res.data.profile.following;
      });
    },

    handleSetting() {
      this.currentIndex = 2;
      this.$router.push({
        name: "setting",
        query: {
          from: "person"
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/person.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_personvue_type_script_lang_js_ = (personvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/person.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_personvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3994cf00",
  "0421e0e6"
  
)

/* harmony default export */ var person = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=person.js.map