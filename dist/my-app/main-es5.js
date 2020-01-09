function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us-page/about-us-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us-page/about-us-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutUsPageAboutUsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n\n  <div class=\"about\">\n    <div class=\"container h-100\">\n      <div class=\"row h-100 align-items-center\">\n        <div class=\"col-12 text-center\">\n          <h1 class=\"font-weight-normal font-italic  display-3 text-light \">About Us</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-7\">\n      <a>\n        <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"/assets/images/pictureabout.jpg\">\n      </a>\n    </div>\n    <div class=\"col-md-5 \">\n      <br>\n      <hr>\n      <h3>Our Story</h3>\n      <br>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum\n        at\n        voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet\n        unde.\n      </p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum\n        libero\n        a neque ducimus. Porro rem illum quo nostrum quisquam asperiores, blanditiis, consectetur. Possimus facilis\n        velit, voluptatibus!\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti non, voluptate architecto, harum\n        suscipit dignissimos eaque voluptatibus nobis natus error iure exercitationem. Officia facilis, maiores atque\n        delectus commodi rerum.</p>\n      <hr>\n    </div>\n  </div>\n\n  <hr>\n  <br>\n\n  <div class=\"quote\">\n    <div class=\"container h-100\">\n      <div class=\"row h-100 align-items-center\">\n        <div class=\"col-12 text-center\">\n          <h2 class=\"font-weight-normal font-italic  text-dark \">“Pull up a chair. Take a taste. Come join\n            us. Life is so endlessly delicious. </h2>\n          <h5 class=\"font-weight-normal font-italic text-dark \">~Ruth Reichl~</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"hero\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-left\">\n      <div class=\"col-12 text-left\">\n        <br>\n        <br>\n        <div class=\"col-md-5 \">\n          <br>\n          <hr>\n          <h1>About Us</h1>\n          <br>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum\n            at\n            voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet\n            unde.\n          </p>\n          <br>\n          <button type=\"button\" class=\"btn btn-outline-light btn-lg font-italic font-weight-bold\"\n            routerLink='/about-us-page' routerLinkActive=\"active\">Read More</button>\n          <br>\n          <br>\n\n          <hr>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<br>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-map></app-map>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"picture\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"font-weight-normal font-italic  display-3 text-light \">Contact Us</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 mt-3 fadeInLeft\">\n\n        <br>\n\n        <div>\n          <h6> E-mail:</h6>\n          <p> <a href=\"kuduzovic.dorina1@gmail.com\">kuduzovic.dorina1@gmail.com</a></p>\n        </div>\n        <hr>\n        <div>\n          <h6>Address:</h6>\n          <p><a>1234 Altschul, New York, NY 10027-0000</a></p>\n        </div>\n        <hr>\n        <div>\n          <h6>Phone:</h6>\n          <p><a>+1 987 654 3210</a></p>\n        </div>\n        <hr>\n      </div>\n\n\n      <div class=\"col-md-6 fadeInRight\">\n        <form>\n          <br>\n          <div class=\"form-group\">\n            <label for=\"name\">First and Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"mail\">E-mail</label>\n            <input type=\"email\" class=\"form-control\" id=\"mail\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" class=\"form-control\" id=\"subject\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"message\">Message</label>\n            <input type=\"text\" class=\"form-control\" id=\"message\">\n          </div>\n          <br>\n          <button class=\"btn btn-outline-dark btn-lg font-italic\n       font-weight-bold\">Send a Message</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <br>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <h6>OPENING HOURS</h6>\n        <br>\n        <p>Monday - Thursday</p>\n        <p>09:00 AM - 11:00 PM</p>\n        <p>Friday - Sunday</p>\n        <p>11:00 AM - 01:00 AM</p>\n      </div>\n\n      <div class=\"col-xs-6 col-md-3\">\n        <h6>CONTACT INFO</h6>\n        <br>\n        <p>\n          <fa-icon [icon]=\"faMapMarkerAlt\"> </fa-icon>\n          1234 Altschul, New York, NY 10027-0000\n        </p>\n        <p>\n          <fa-icon [icon]=\"faPhone\"> </fa-icon> +1 987 654 3210\n        </p>\n        <p>\n          <fa-icon [icon]=\"faEnvelope\"> </fa-icon> admin@domain.com\n        </p>\n      </div>\n    </div>\n    <hr>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <p class=\"copyright-text\">Copyright &copy; 2020 All Rights Reserved by\n          <a href=\"#\">Dorina</a>.\n        </p>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"social-icons\">\n          <li><a class=\"facebook\" href=\"#\">\n              <fa-icon class=\"facebook\" [icon]=\"faFacebook\"> </fa-icon>\n            </a></li>\n          <li><a class=\"instagram\" href=\"#\">\n              <fa-icon class=\"instagram\" [icon]=\"faInstagram\"> </fa-icon>\n            </a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-page/gallery-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-page/gallery-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryPageGalleryPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"picture\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"font-weight-normal font-italic  display-3 text-light \">Our Gallery</h1>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<app-gallery></app-gallery>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"font-weight-normal font-italic  text-center mt-4 mb-0\">Our Gallery</h1>\n  <hr class=\"mt-2 mb-5\">\n  <div class=\"row text-center \">\n    <div class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let gallerylink of galleryphotos\">\n      <a class=\"d-block mb-4 h-100\">\n        <img class=\"img-fluid\" src={{gallerylink.img}} alt=\"\">\n      </a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hero/hero.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hero/hero.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeroHeroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"hero\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"naslov font-weight normal font-italic \">Welcome to</h1>\n        <h1 class=\"naslov font-weight-normal font-italic  display-2 \">Cafe Istanbul Restaurant</h1>\n        <button type=\"button\" class=\"btn btn-outline-light btn-lg font-italic font-weight-bold\"\n          routerLink='/reservation-page' routerLinkActive=\"active\">Make\n          Reservation</button>\n      </div>\n    </div>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-hero></app-hero>\n<app-aboutus></app-aboutus>\n<app-menu></app-menu>\n<app-online></app-online>\n<app-gallery></app-gallery>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"map-container-google-1\" class=\"z-depth-1-half map-container\" style=\"height: 500px\">\n  <iframe src=\"https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\"\n    style=\"border:0\" allowfullscreen></iframe>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuPageMenuPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"picture\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"font-weight-normal font-italic  display-3 text-light \">Our Menu</h1>\n      </div>\n    </div>\n  </div>\n</div>\n<hr>\n<app-menu></app-menu>\n<app-online></app-online>\n<br>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Menu -->\n<div class=\"content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n        <div class=\"page-section\">\n          <h1 class=\"page-title font-weight normal font-italic\">Our Menu </h1>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n\n      <!--Cold Starters -->\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n        <div class=\"menu-block\">\n          <h3 class=\"menu-title\">Cold Starters</h3>\n          <div *ngFor=\"let menuitem of menumenu\">\n            <div *ngIf=\"menuitem.section === 1\">\n              <div class=\"menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                    <div class=\"dish-img\"><a><img src={{menuitem.photo}} alt=\"\" class=\"img-circle\"></a>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                    <div class=\"dish-content\">\n                      <h5 class=\"dish-title\"><a>{{menuitem.name}}</a></h5>\n                      <span class=\"dish-meta\"> {{ menuitem.description }} </span>\n                      <div class=\"dish-price\">\n                        <p> ${{ menuitem.price }}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!--Soups -->\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n        <div class=\"menu-block\">\n          <h3 class=\"menu-title\">Soups</h3>\n          <div *ngFor=\"let menuitem of menumenu\">\n            <div *ngIf=\"menuitem.section === 2\">\n              <div class=\"menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                    <div class=\"dish-img\"><a><img src={{menuitem.photo}} alt=\"\" class=\"img-circle\"></a>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                    <div class=\"dish-content\">\n                      <h5 class=\"dish-title\"><a>{{menuitem.name}}</a></h5>\n                      <span class=\"dish-meta\"> {{ menuitem.description }} </span>\n                      <div class=\"dish-price\">\n                        <p> ${{ menuitem.price }}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!--From the Oven -->\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n        <div class=\"menu-block\">\n          <h3 class=\"menu-title\">From the Oven</h3>\n          <div *ngFor=\"let menuitem of menumenu\">\n            <div *ngIf=\"menuitem.section === 3\">\n              <div class=\"menu-content\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                    <div class=\"dish-img\"><a><img src={{menuitem.photo}} alt=\"\" class=\"img-circle\"></a>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                    <div class=\"dish-content\">\n                      <h5 class=\"dish-title\"><a>{{menuitem.name}}</a></h5>\n                      <span class=\"dish-meta\"> {{ menuitem.description }} </span>\n                      <div class=\"dish-price\">\n                        <p> ${{ menuitem.price }}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler btn btn-outline-primary\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n    (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarTogglerDemo02\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n </nav> -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top navbar\">\n  <div class=\"container\">\n    <a class=\"logo navbar-brand\" routerLink='/' routerLinkActive=\"active\">CAFE ISTANBUL</a>\n    <button class=\"navbar-toggler btn \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarTogglerDemo02\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='' routerLinkActive=\"active\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/about-us-page' routerLinkActive=\"active\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/menu-page' routerLinkActive=\"active\">Menu</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/reservation-page' routerLinkActive=\"active\">Reservation</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/gallery-page' routerLinkActive=\"active\">Gallery</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink='/contact' routerLinkActive=\"active\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotfoundNotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"notfound\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"font-weight-normal font-italic  display-3 text-dark \">404</h1>\n        <h1 class=\"font-weight-normal font-italic  display-3 text-dark \">Page not found</h1>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/online/online.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/online/online.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOnlineOnlineComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-5 \">\n      <hr>\n      <h3>Make Online Reservation</h3>\n      <br>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at\n        voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet\n        unde.\n      </p>\n      <br>\n      <a class=\"btn btn-outline-dark btn-lg font-italic font-weight-bold\" routerLink='/reservation-page'\n        routerLinkActive=\"active\">Reserve a Table</a>\n\n    </div>\n    <div class=\"col-md-7\">\n      <br>\n      <a>\n        <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"/assets/images/reservation2.jpg\" alt=\"\">\n      </a>\n    </div>\n  </div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reservation-page/reservation-page.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reservation-page/reservation-page.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReservationPageReservationPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"picture\">\n  <div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center\">\n      <div class=\"col-12 text-center\">\n        <h1 class=\"naslov font-weight-normal font-italic  display-3 text-light \">Online Table Reservation</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"forma container-fluid\">\n  <div class=\"container\">\n    <div>\n      <form>\n        <br>\n        <div class=\"form-group\">\n          <label for=\"name\">First and Last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input type=\"number\" class=\"form-control\" id=\"phoneNumber\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"mail\">E-mail</label>\n          <input type=\"email\" class=\"form-control\" id=\"mail\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"date\">Set date</label>\n          <input type=\"date\" class=\"form-control\" id=\"date\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"time\">Set time</label>\n          <input type=\"time\" class=\"form-control\" id=\"time\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"seats\">Seats</label>\n          <select class=\"form-control\" id=\"seats\">\n            <option *ngFor=\"let seats of seats\" [value]=\"seats\">{{seats}}</option>\n          </select>\n        </div>\n        <br>\n        <button type=\"submit\" class=\"btn btn-outline-dark btn-lg font-italic\n       font-weight-bold\">Reserve a Table</button>\n      </form>\n    </div>\n    <br>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about-us-page/about-us-page.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/about-us-page/about-us-page.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutUsPageAboutUsPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/aboutuspage.jpg\");\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.row {\r\n  padding-right: 75px;\r\n  padding-left: 75px;\r\n\r\n}\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n}\r\n\r\n.text {\r\n  border: darkgray;\r\n}\r\n\r\n.quote {\r\n  background-color: #EEE;\r\n  height: 30vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n@media only screen and (max-height: 823px) {\r\n\r\n  .quote {\r\n    height: 50vh;\r\n    min-height: 300px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMtcGFnZS9hYm91dC11cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4R0FBOEc7RUFDOUcsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4Qjs7QUFHQTs7RUFFRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy1wYWdlL2Fib3V0LXVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjUpLCByZ2JhKDAsIDAsIDAsIC41KSksIHVybChcIi9hc3NldHMvaW1hZ2VzL2Fib3V0dXNwYWdlLmpwZ1wiKTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG5cclxufVxyXG5cclxuYm9keSB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgYm9yZGVyOiBkYXJrZ3JheTtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgyM3B4KSB7XHJcblxyXG4gIC5xdW90ZSB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/about-us-page/about-us-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/about-us-page/about-us-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutUsPageComponent */

  /***/
  function srcAppAboutUsPageAboutUsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function () {
      return AboutUsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsPageComponent =
    /*#__PURE__*/
    function () {
      function AboutUsPageComponent() {
        _classCallCheck(this, AboutUsPageComponent);
      }

      _createClass(AboutUsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsPageComponent;
    }();

    AboutUsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us-page/about-us-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us-page.component.css */
      "./src/app/about-us-page/about-us-page.component.css")).default]
    })], AboutUsPageComponent);
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.css":
  /*!***********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutusAboutusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " .hero {\r\n   height: 80vh;\r\n   min-height: 400px;\r\n   background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/aboutusss.jpg\");\r\n   background-size: cover;\r\n   background-position: center;\r\n   background-repeat: no-repeat;\r\n   color: #EBECEC;\r\n\r\n }\r\n\r\n @media only screen and (max-width: 320px) {\r\n\r\n   .hero {\r\n     height: 100vh;\r\n     min-height: 400px;\r\n   }\r\n\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSxZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLHNHQUFzRztHQUN0RyxzQkFBc0I7R0FDdEIsMkJBQTJCO0dBQzNCLDRCQUE0QjtHQUM1QixjQUFjOztDQUVoQjs7Q0FFQTs7R0FFRTtLQUNFLGFBQWE7S0FDYixpQkFBaUI7R0FDbkI7O0NBRUYiLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuaGVybyB7XHJcbiAgIGhlaWdodDogODB2aDtcclxuICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAuNSkpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hYm91dHVzc3MuanBnXCIpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIGNvbG9yOiAjRUJFQ0VDO1xyXG5cclxuIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblxyXG4gICAuaGVybyB7XHJcbiAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgfVxyXG5cclxuIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutusComponent =
    /*#__PURE__*/
    function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aboutus.component.css */
      "./src/app/aboutus/aboutus.component.css")).default]
    })], AboutusComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _online_online_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./online/online.component */
    "./src/app/online/online.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-us-page/about-us-page.component */
    "./src/app/about-us-page/about-us-page.component.ts");
    /* harmony import */


    var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./menu-page/menu-page.component */
    "./src/app/menu-page/menu-page.component.ts");
    /* harmony import */


    var _reservation_page_reservation_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reservation-page/reservation-page.component */
    "./src/app/reservation-page/reservation-page.component.ts");
    /* harmony import */


    var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./gallery-page/gallery-page.component */
    "./src/app/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");

    var routes = [{
      path: 'navbar',
      component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'hero',
      component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"]
    }, {
      path: 'aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"]
    }, {
      path: 'menu',
      component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
    }, {
      path: 'online',
      component: _online_online_component__WEBPACK_IMPORTED_MODULE_8__["OnlineComponent"]
    }, {
      path: 'gallery',
      component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]
    }, {
      path: 'footer',
      component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
    }, {
      path: 'about-us-page',
      component: _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsPageComponent"]
    }, {
      path: 'menu-page',
      component: _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_12__["MenuPageComponent"]
    }, {
      path: 'reservation-page',
      component: _reservation_page_reservation_page_component__WEBPACK_IMPORTED_MODULE_13__["ReservationPageComponent"]
    }, {
      path: 'gallery-page',
      component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_14__["GalleryPageComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
    }, {
      path: '**',
      component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"]
    }, {
      path: 'map',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _online_online_component__WEBPACK_IMPORTED_MODULE_8__["OnlineComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsPageComponent"], _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_12__["MenuPageComponent"], _reservation_page_reservation_page_component__WEBPACK_IMPORTED_MODULE_13__["ReservationPageComponent"], _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_14__["GalleryPageComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'MyApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/hero/hero.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _online_online_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./online/online.component */
    "./src/app/online/online.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./about-us-page/about-us-page.component */
    "./src/app/about-us-page/about-us-page.component.ts");
    /* harmony import */


    var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./menu-page/menu-page.component */
    "./src/app/menu-page/menu-page.component.ts");
    /* harmony import */


    var _reservation_page_reservation_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./reservation-page/reservation-page.component */
    "./src/app/reservation-page/reservation-page.component.ts");
    /* harmony import */


    var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./gallery-page/gallery-page.component */
    "./src/app/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_9__["HeroComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__["AboutusComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _online_online_component__WEBPACK_IMPORTED_MODULE_12__["OnlineComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsPageComponent"], _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_16__["MenuPageComponent"], _reservation_page_reservation_page_component__WEBPACK_IMPORTED_MODULE_17__["ReservationPageComponent"], _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_18__["GalleryPageComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_20__["NotfoundComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_21__["MapComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".picture {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/contactpage.jpg\");\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.contact {\r\n  background-color: #eeeeee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4R0FBOEc7RUFDOUcsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAuNSksIHJnYmEoMCwgMCwgMCwgLjUpKSwgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGFjdHBhZ2UuanBnXCIpO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".site-footer {\r\n  background-color: #26272b;\r\n  padding: 45px 0 20px;\r\n  font-size: 15px;\r\n  line-height: 24px;\r\n  color: #737373;\r\n}\r\n\r\n.site-footer hr {\r\n  border-top-color: #bbb;\r\n  opacity: 0.5\r\n}\r\n\r\n.site-footer hr.small {\r\n  margin: 20px 0\r\n}\r\n\r\n.site-footer h6 {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  margin-top: 5px;\r\n  letter-spacing: 2px\r\n}\r\n\r\n.site-footer a {\r\n  color: #737373;\r\n}\r\n\r\n.site-footer a:hover {\r\n  color: #3366cc;\r\n  text-decoration: none;\r\n}\r\n\r\n.site-footer .social-icons {\r\n  text-align: right\r\n}\r\n\r\n.site-footer .social-icons a {\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-left: 6px;\r\n  margin-right: 0;\r\n  border-radius: 100%;\r\n  background-color: #33353d\r\n}\r\n\r\n.copyright-text {\r\n  margin: 0\r\n}\r\n\r\n@media (max-width:991px) {\r\n  .site-footer [class^=col-] {\r\n    margin-bottom: 30px\r\n  }\r\n}\r\n\r\n@media (max-width:767px) {\r\n  .site-footer {\r\n    padding-bottom: 0\r\n  }\r\n\r\n  .site-footer .copyright-text,\r\n  .site-footer .social-icons {\r\n    text-align: center\r\n  }\r\n}\r\n\r\n.social-icons {\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none\r\n}\r\n\r\n.social-icons li {\r\n  display: inline-block;\r\n  margin-bottom: 4px\r\n}\r\n\r\n.social-icons li.title {\r\n  margin-right: 15px;\r\n  text-transform: uppercase;\r\n  color: #96a2b2;\r\n  font-weight: 700;\r\n  font-size: 13px\r\n}\r\n\r\n.social-icons a {\r\n  background-color: #eceeef;\r\n  color: #818a91;\r\n  font-size: 16px;\r\n  display: inline-block;\r\n  line-height: 44px;\r\n  width: 44px;\r\n  height: 44px;\r\n  text-align: center;\r\n  margin-right: 8px;\r\n  border-radius: 100%;\r\n  transition: all .2s linear\r\n}\r\n\r\n.social-icons a:active,\r\n.social-icons a:focus,\r\n.social-icons a:hover {\r\n  color: #fff;\r\n  background-color: #29aafe\r\n}\r\n\r\n.social-icons.size-sm a {\r\n  line-height: 34px;\r\n  height: 34px;\r\n  width: 34px;\r\n  font-size: 14px\r\n}\r\n\r\n.social-icons a.facebook:hover {\r\n  background-color: #3b5998\r\n}\r\n\r\n.social-icons a.instagram:hover {\r\n  background-color: #ea4c89\r\n}\r\n\r\n@media (max-width:767px) {\r\n  .social-icons li.title {\r\n    display: block;\r\n    margin-right: 0;\r\n    font-weight: 600\r\n  }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO0VBQ0Y7O0VBRUE7O0lBRUU7RUFDRjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQjtBQUNGOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZjtFQUNGOzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjcyYjtcclxuICBwYWRkaW5nOiA0NXB4IDAgMjBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBociB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2JiYjtcclxuICBvcGFjaXR5OiAwLjVcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIGhyLnNtYWxsIHtcclxuICBtYXJnaW46IDIwcHggMFxyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgaDYge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciBhIHtcclxuICBjb2xvcjogIzczNzM3MztcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzM2NmNjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0XHJcbn1cclxuXHJcbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM1M2RcclxufVxyXG5cclxuLmNvcHlyaWdodC10ZXh0IHtcclxuICBtYXJnaW46IDBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIC5zaXRlLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG4gIH1cclxuXHJcbiAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCxcclxuICAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmVcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweFxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGxpLnRpdGxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzk2YTJiMjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XHJcbiAgY29sb3I6ICM4MThhOTE7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogNDRweDtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhclxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGE6YWN0aXZlLFxyXG4uc29jaWFsLWljb25zIGE6Zm9jdXMsXHJcbi5zb2NpYWwtaWNvbnMgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWFmZVxyXG59XHJcblxyXG4uc29jaWFsLWljb25zLnNpemUtc20gYSB7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OThcclxufVxyXG5cclxuXHJcbi5zb2NpYWwtaWNvbnMgYS5pbnN0YWdyYW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODlcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAuc29jaWFsLWljb25zIGxpLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/gallery-page/gallery-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/gallery-page/gallery-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryPageGalleryPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".picture {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/ourgallery.jpg\");\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkdBQTZHO0VBQzdHLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7O0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3R1cmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAuNSkpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9vdXJnYWxsZXJ5LmpwZ1wiKTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/gallery-page/gallery-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/gallery-page/gallery-page.component.ts ***!
    \********************************************************/

  /*! exports provided: GalleryPageComponent */

  /***/
  function srcAppGalleryPageGalleryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function () {
      return GalleryPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GalleryPageComponent =
    /*#__PURE__*/
    function () {
      function GalleryPageComponent() {
        _classCallCheck(this, GalleryPageComponent);
      }

      _createClass(GalleryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryPageComponent;
    }();

    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-page/gallery-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery-page.component.css */
      "./src/app/gallery-page/gallery-page.component.css")).default]
    })], GalleryPageComponent);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _galleryphotos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./galleryphotos */
    "./src/app/gallery/galleryphotos.ts");

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);

        this.galleryphotos = _galleryphotos__WEBPACK_IMPORTED_MODULE_2__["galleryphotos"];
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default
    })], GalleryComponent);
    /***/
  },

  /***/
  "./src/app/gallery/galleryphotos.ts":
  /*!******************************************!*\
    !*** ./src/app/gallery/galleryphotos.ts ***!
    \******************************************/

  /*! exports provided: galleryphotos */

  /***/
  function srcAppGalleryGalleryphotosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "galleryphotos", function () {
      return galleryphotos;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var galleryphotos = [{
      img: '/assets/images/gallery1.jpg'
    }, {
      img: '/assets/images/gallery2.jpg'
    }, {
      img: '/assets/images/gallery3.jpg'
    }, {
      img: '/assets/images/gallery4.jpg'
    }, {
      img: '/assets/images/gallery5.jpg'
    }, {
      img: '/assets/images/gallery6.jpg'
    }, {
      img: '/assets/images/gallery7.jpg'
    }, {
      img: '/assets/images/gallery8.jpg'
    }, {
      img: '/assets/images/gallery9.jpg'
    }, {
      img: '/assets/images/gallery10.jpg'
    }, {
      img: '/assets/images/gallery11.jpg'
    }, {
      img: '/assets/images/gallery12.jpg'
    }];
    /***/
  },

  /***/
  "./src/app/hero/hero.component.css":
  /*!*****************************************!*\
    !*** ./src/app/hero/hero.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeroHeroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero {\r\n  height: 100vh;\r\n  min-height: 500px;\r\n  background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/hero.jpg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  color: #EBECEC;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n\r\n  .naslov {\r\n    font-size: 3em;\r\n\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlHQUFpRztFQUNqRyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRTtJQUNFLGNBQWM7O0VBRWhCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAuNSkpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9oZXJvLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGNvbG9yOiAjRUJFQ0VDO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG5cclxuICAubmFzbG92IHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG5cclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/hero/hero.component.ts":
  /*!****************************************!*\
    !*** ./src/app/hero/hero.component.ts ***!
    \****************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hero',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hero/hero.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero.component.css */
      "./src/app/hero/hero.component.css")).default]
    })], HeroComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/map/map.component.css":
  /*!***************************************!*\
    !*** ./src/app/map/map.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-container {\r\n  overflow: hidden;\r\n  padding-bottom: 56.25%;\r\n  position: relative;\r\n  height: 0;\r\n  margin-bottom: 0%;\r\n  margin-top: 0%;\r\n  padding-bottom: 0%;\r\n}\r\n\r\n.map-container iframe {\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5tYXAtY29udGFpbmVyIGlmcmFtZSB7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapComponent;
    }();

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.css */
      "./src/app/map/map.component.css")).default]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/menu-page/menu-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/menu-page/menu-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuPageMenuPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".picture {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/menupage.jpg\");\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wYWdlL21lbnUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkdBQTJHO0VBQzNHLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7O0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvbWVudS1wYWdlL21lbnUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3R1cmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIC41KSwgcmdiYSgwLCAwLCAwLCAuNSkpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tZW51cGFnZS5qcGdcIik7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu-page/menu-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/menu-page/menu-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MenuPageComponent */

  /***/
  function srcAppMenuPageMenuPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function () {
      return MenuPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuPageComponent =
    /*#__PURE__*/
    function () {
      function MenuPageComponent() {
        _classCallCheck(this, MenuPageComponent);
      }

      _createClass(MenuPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuPageComponent;
    }();

    MenuPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-page.component.css */
      "./src/app/menu-page/menu-page.component.css")).default]
    })], MenuPageComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n  letter-spacing: 0px;\r\n  font-size: 16px;\r\n  color: #6e726e;\r\n  font-weight: 400;\r\n  line-height: 27px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  color: #121312;\r\n  margin: 0px 0px 15px 0px;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: 38px;\r\n  line-height: 48px;\r\n}\r\n\r\nh2 {\r\n  font-size: 36px;\r\n  line-height: 42px;\r\n}\r\n\r\nh3 {\r\n  font-size: 26px;\r\n  line-height: 36px;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n  line-height: 26px;\r\n}\r\n\r\nh5 {\r\n  font-size: 16px;\r\n}\r\n\r\nh6 {\r\n  font-size: 12px;\r\n}\r\n\r\np {\r\n  margin: 0 0 24px;\r\n  line-height: 1.6;\r\n}\r\n\r\np:last-child {\r\n  margin: 0px;\r\n}\r\n\r\nul,\r\nol {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #121312;\r\n  transition: all 0.3s;\r\n}\r\n\r\na:focus,\r\na:hover {\r\n  text-decoration: none;\r\n  color: #e03c23;\r\n}\r\n\r\n.menu-block {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-title {\r\n  border-bottom: 3px solid #e0e6e3;\r\n  margin-bottom: 36px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.menu-content {\r\n  border-bottom: 1px solid #e0e6e3;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.dish-content {\r\n  margin-top: 12px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.dish-meta {\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  display: block;\r\n  width: 210px;\r\n  line-height: 1.7;\r\n}\r\n\r\n.dish-title {\r\n  margin-bottom: 6px;\r\n  font-size: 15px;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  position: relative;\r\n}\r\n\r\n.dish-price {\r\n  position: absolute;\r\n  right: 16px;\r\n  top: 0px;\r\n  font-size: 26px;\r\n  color: #e03c23;\r\n  font-weight: 500;\r\n  font-family: 'Zilla Slab', serif;\r\n}\r\n\r\n.well-block .dish-meta {\r\n  width: 100%;\r\n}\r\n\r\n.well-block .dish-price {\r\n  font-size: 26px;\r\n  color: #e03c23;\r\n  font-weight: 500;\r\n  font-family: 'Zilla Slab', serif;\r\n  position: inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUdkLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNmU3MjZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIGNvbG9yOiAjMTIxMzEyO1xyXG4gIG1hcmdpbjogMHB4IDBweCAxNXB4IDBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbnA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbnVsLFxyXG5vbCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMTIxMzEyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuYTpmb2N1cyxcclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZTAzYzIzO1xyXG59XHJcblxyXG4ubWVudS1ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1lbnUtdGl0bGUge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTBlNmUzO1xyXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRlbnQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlNmUzO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5kaXNoLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmRpc2gtbWV0YSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi5kaXNoLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaXNoLXByaWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiAjZTAzYzIzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XHJcbn1cclxuXHJcbi53ZWxsLWJsb2NrIC5kaXNoLW1ldGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2VsbC1ibG9jayAuZGlzaC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiAjZTAzYzIzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWY7XHJcbiAgcG9zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _menumenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../menumenu */
    "./src/app/menumenu.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);

        this.menumenu = _menumenu__WEBPACK_IMPORTED_MODULE_2__["menumenu"];
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/menumenu.ts":
  /*!*****************************!*\
    !*** ./src/app/menumenu.ts ***!
    \*****************************/

  /*! exports provided: menumenu */

  /***/
  function srcAppMenumenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "menumenu", function () {
      return menumenu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var menumenu = [{
      section: 1,
      name: 'Hummus',
      description: 'Pureed chickpeas / Tahini',
      price: 7,
      photo: '/assets/images/hummus.jpg'
    }, {
      section: 1,
      name: 'Appetizer Sampler',
      description: 'Ezme / Babaganush',
      price: 24,
      photo: '/assets/images/menu6.jpg'
    }, {
      section: 1,
      name: 'Pinto Beans',
      description: 'Pinto beans / Green peppers',
      price: 7,
      photo: '/assets/images/menu4.jpg'
    }, {
      section: 2,
      name: 'Lentil Soup',
      description: 'Red lentils / Celery',
      price: 12,
      photo: '/assets/images/menu2.jpg'
    }, {
      section: 2,
      name: 'Tomato soup',
      description: 'Cheesiy / Creamy / Sweet',
      price: 13,
      photo: '/assets/images/menu7.jpg'
    }, {
      section: 2,
      name: 'Chicken Vegetable Soup',
      description: 'Chicken in a tomato-based broth',
      price: 19,
      photo: '/assets/images/menu9.jpg'
    }, {
      section: 3,
      name: 'Cheese Pide',
      description: 'Flat bread / Cheese / Tomato',
      price: 15,
      photo: '/assets/images/menu3.jpg'
    }, {
      section: 3,
      name: 'Lamb Shish Kebab',
      description: 'Lamb marinated',
      price: 30,
      photo: '/assets/images/menu5.jpg'
    }, {
      section: 3,
      name: 'Mixed Grill Kebab',
      description: 'Chicken / Doner / Adana / Shish',
      price: 45,
      photo: '/assets/images/menu8.jpg'
    }];
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\r\n  font-family: Verdana, Tahoma, sans-serif;\r\n  background-color: transparent;\r\n}\r\n\r\n.logo {\r\n  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtFQUFrRTtBQUNwRSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.isCollapsed = true;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/notfound/notfound.component.css":
  /*!*************************************************!*\
    !*** ./src/app/notfound/notfound.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotfoundNotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notfound {\r\n  background-color: #eeeeee;\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4QiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90Zm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/notfound/notfound.component.ts":
  /*!************************************************!*\
    !*** ./src/app/notfound/notfound.component.ts ***!
    \************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotfoundComponent =
    /*#__PURE__*/
    function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notfound.component.css */
      "./src/app/notfound/notfound.component.css")).default]
    })], NotfoundComponent);
    /***/
  },

  /***/
  "./src/app/online/online.component.css":
  /*!*********************************************!*\
    !*** ./src/app/online/online.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOnlineOnlineComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n  overflow-x: hidden;\r\n  padding-right: 75px;\r\n  padding-left: 75px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25saW5lL29ubGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9vbmxpbmUvb25saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1yaWdodDogNzVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/online/online.component.ts":
  /*!********************************************!*\
    !*** ./src/app/online/online.component.ts ***!
    \********************************************/

  /*! exports provided: OnlineComponent */

  /***/
  function srcAppOnlineOnlineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineComponent", function () {
      return OnlineComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OnlineComponent =
    /*#__PURE__*/
    function () {
      function OnlineComponent() {
        _classCallCheck(this, OnlineComponent);
      }

      _createClass(OnlineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OnlineComponent;
    }();

    OnlineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-online',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./online.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/online/online.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./online.component.css */
      "./src/app/online/online.component.css")).default]
    })], OnlineComponent);
    /***/
  },

  /***/
  "./src/app/reservation-page/reservation-page.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/reservation-page/reservation-page.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReservationPageReservationPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".picture {\r\n  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(\"/assets/images/reservationpage.jpg\");\r\n  height: 70vh;\r\n  min-height: 250px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.forma {\r\n  background-color: #eeeeee;\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .naslov {\r\n    font-size: 3em;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb24tcGFnZS9yZXNlcnZhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrSEFBa0g7RUFDbEgsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7O0VBRUU7SUFDRSxjQUFjO0VBQ2hCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcmVzZXJ2YXRpb24tcGFnZS9yZXNlcnZhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljdHVyZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgLjUpLCByZ2JhKDAsIDAsIDAsIC41KSksIHVybChcIi9hc3NldHMvaW1hZ2VzL3Jlc2VydmF0aW9ucGFnZS5qcGdcIik7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4uZm9ybWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcblxyXG4gIC5uYXNsb3Yge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/reservation-page/reservation-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/reservation-page/reservation-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: ReservationPageComponent */

  /***/
  function srcAppReservationPageReservationPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationPageComponent", function () {
      return ReservationPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReservationPageComponent =
    /*#__PURE__*/
    function () {
      function ReservationPageComponent() {
        _classCallCheck(this, ReservationPageComponent);

        this.seats = ['1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons', '6 Persons'];
      }

      _createClass(ReservationPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReservationPageComponent;
    }();

    ReservationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reservation-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reservation-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reservation-page/reservation-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reservation-page.component.css */
      "./src/app/reservation-page/reservation-page.component.css")).default]
    })], ReservationPageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dorina\Desktop\Restoran\my-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map