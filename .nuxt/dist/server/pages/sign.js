exports.ids = [7,1];
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("51213a6a", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_0_id_9dbfb61e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_0_id_9dbfb61e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_0_id_9dbfb61e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_0_id_9dbfb61e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sign_vue_vue_type_style_index_0_id_9dbfb61e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content[data-v-9dbfb61e]{width:1200px;margin:0 auto}.content .inner[data-v-9dbfb61e]{display:flex;flex-direction:column;align-items:center;margin-top:20px}.content .inner h3[data-v-9dbfb61e]{font-size:30px}.content .inner p[data-v-9dbfb61e]{font-size:12px;margin:10px 0;color:#5cb85c;cursor:pointer}.content .inner button[data-v-9dbfb61e]{padding:10px 20px;margin-top:10px;border-radius:6px}input[data-v-9dbfb61e]{width:400px;border:1px solid #ddd;padding:10px 15px;margin:10px 0;border-radius:10px;font-size:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign.vue?vue&type=template&id=9dbfb61e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sign"},[_c('Header'),_vm._ssrNode(" <div class=\"content\" data-v-9dbfb61e><div class=\"inner\" data-v-9dbfb61e>"+(((_vm.Status = _vm.isLogin ? 'SignIn' : 'SignOut'))?("<h3 data-v-9dbfb61e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.Status)+"\n      ")+"</h3>"):"<!---->")+" "+(((_vm.Desc = _vm.isLogin ? 'Need an account?' : 'Have an account?'))?("<p data-v-9dbfb61e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.Desc)+"\n      ")+"</p>"):"<!---->")+" "+((!_vm.isLogin)?("<input type=\"text\" placeholder=\"username\""+(_vm._ssrAttr("value",(_vm.userInfo.username)))+" class=\"username\" data-v-9dbfb61e>"):"<!---->")+" <input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.userInfo.email)))+" class=\"email\" data-v-9dbfb61e> <input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.userInfo.password)))+" class=\"password\" data-v-9dbfb61e> <button data-v-9dbfb61e>"+_vm._ssrEscape("\n        "+_vm._s(_vm.isLogin ? "login" : "register")+"\n      ")+"</button></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign.vue?vue&type=template&id=9dbfb61e&scoped=true&

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(34);

// EXTERNAL MODULE: ./utils/axios.js
var axios = __webpack_require__(35);

// CONCATENATED MODULE: ./api/register.js

const register = data => {
  return Object(axios["a" /* default */])({
    url: "api/users",
    method: "post",
    data
  });
};
// CONCATENATED MODULE: ./api/login.js

const login = data => {
  return Object(axios["a" /* default */])({
    url: "api/users/login",
    method: "post",
    data
  });
};
const update = data => {
  return Object(axios["a" /* default */])({
    url: "api/users/login",
    method: "post",
    data
  });
};
// CONCATENATED MODULE: ./utils/common.js
const checkEmail = email => {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(email) ? true : false;
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign.vue?vue&type=script&lang=js&




/* harmony default export */ var signvue_type_script_lang_js_ = ({
  components: Header["default"],

  // middleware: ["auth"],
  data() {
    return {
      Status: "",
      Desc: "",
      userInfo: {
        email: "",
        password: "",
        username: ""
      }
    };
  },

  computed: {
    isLogin() {
      const id = parseInt(this.$route.query.id.toString());
      return id == 1 ? true : false;
    }

  },
  methods: {
    handleAccount() {
      let index = parseInt(this.$route.query.id.toString());
      index = index == 1 ? 2 : 1;
      this.$router.push({
        path: "/sign",
        query: {
          id: index.toString()
        }
      });
    },

    handleLogic() {
      const result = checkEmail(this.userInfo.email);

      if (result) {
        if (!this.isLogin) {
          register({
            user: {
              email: this.userInfo.email,
              password: this.userInfo.password,
              username: this.userInfo.username
            }
          }).then(res => {
            if (res.data.user) {
              this.$router.push({
                path: "/sign?id=1"
              });
              this.userInfo.email = "";
              this.userInfo.password = "";
            }
          });
        } else {
          login({
            user: {
              email: this.userInfo.email,
              password: this.userInfo.password
            }
          }).then(res => {
            if (res.data.user) {
              const Cookie =  false ? undefined : undefined;
              Cookie.set("user", res.data.user);
              this.$store.commit("setUser", res.data.user);
              this.$router.push({
                name: "index"
              });
            }
          });
        }
      } else {
        alert("邮箱格式错误");
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/sign.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signvue_type_script_lang_js_ = (signvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/sign.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9dbfb61e",
  "fbdc8ce4"
  
)

/* harmony default export */ var sign = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=sign.js.map