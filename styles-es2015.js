(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"//fonts.googleapis.com/css?family=Muli:400,400italic\");\n@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\ninput {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  line-height: 100%;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nul {\n  list-style: none;\n  list-style-position: inside;\n}\nol {\n  list-style-type: decimal;\n  list-style-position: inside;\n}\nblockquote,\nq {\n  quotes: \"“\" \"”\" \"‘\" \"’\";\n}\nblockquote:before,\nq:before {\n  content: open-quote;\n}\nblockquote:after,\nq:after {\n  content: close-quote;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nlabel:focus,\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\nstrong,\nb {\n  font-weight: normal;\n}\nem,\ni {\n  font-style: italic;\n}\n@-webkit-keyframes animation {\n  0% {\n    -webkit-transform: scale(1.5, 1.5);\n  }\n  50% {\n    -webkit-transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n  }\n}\n@keyframes animation {\n  0% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n  50% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    -webkit-transform: scale(1.5, 1.5);\n            transform: scale(1.5, 1.5);\n  }\n}\n/* Portfolio hover animations */\n/* inRight */\n@-webkit-keyframes in-right {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-right {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inLeft */\n@-webkit-keyframes in-left {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-left {\n  0% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inTop */\n@-webkit-keyframes in-top {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-top {\n  0% {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* inBottom */\n@-webkit-keyframes in-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes in-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n/* outRight */\n@-webkit-keyframes out-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes out-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n}\n/* outLeft */\n@-webkit-keyframes out-left {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes out-left {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n}\n/* outTop */\n@-webkit-keyframes out-top {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes out-top {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, -100%, 0);\n            transform: translate3d(0, -100%, 0);\n  }\n}\n/* outBottom */\n@-webkit-keyframes out-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes out-bottom {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  font-family: \"Muli\", sans-serif;\n  background: #f2f2e9;\n  color: #231f20;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: opacity 0.3s 0.4s ease-in;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n/**********************************************************\n  Common classes\n***********************************************************/\n.red {\n  color: #bd2031;\n}\n.blue, a {\n  color: #006295;\n}\n.lightblue {\n  color: #9be1fb;\n}\n.lighterblue {\n  color: #c5effd;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.hidden {\n  display: none;\n}\n.table {\n  display: table;\n}\n.tr {\n  display: table-row;\n}\n.td,\n.th {\n  display: table-cell;\n}\n.only4print {\n  display: none;\n}\n/***********************************************************\n  Global\n***********************************************************/\np {\n  line-height: 150%;\n  margin-bottom: 1em;\n}\np:last-child {\n  margin-bottom: 0;\n}\nh1 {\n  font-size: 3em;\n  margin-bottom: 0;\n  text-shadow: 0px -1px 0px #fff, 1px 1px 0 #231f20;\n}\n@media print {\n  h1 {\n    text-shadow: none;\n    font-weight: 600;\n    font-size: 2em;\n  }\n}\nh2 {\n  text-shadow: 1px 0 0 #231f20;\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n@media print {\n  h2 {\n    text-shadow: none;\n    font-size: 1.7em;\n    margin-bottom: 0.2em;\n  }\n}\nh3 {\n  text-shadow: 1px 0 0 #231f20;\n  font-size: 1.5em;\n  margin-bottom: 0.1em;\n}\n@media print {\n  h3 {\n    text-shadow: none;\n    font-size: 1.2em;\n    font-weight: 600;\n  }\n}\nh4 {\n  font-weight: normal;\n  font-style: italic;\n  margin-bottom: 1.2em;\n}\n@media print {\n  h4 {\n    margin-bottom: 0.5em;\n  }\n}\na {\n  cursor: pointer;\n}\na:focus, a:active {\n  outline: none;\n}\nstrong,\nb {\n  text-shadow: 1px 0 0 #231f20;\n}\na strong,\na b {\n  text-shadow: 1px 0 0 #006295;\n}\n@media print {\n  strong,\nb {\n    text-shadow: none;\n    font-weight: 600;\n  }\n}\n.placeholder, :-ms-input-placeholder, ::-moz-placeholder, :-moz-placeholder, ::-webkit-input-placeholder {\n  color: #aaa;\n}\ninput:not([type]),\ninput[type=color],\ninput[type=email],\ninput[type=number],\ninput[type=password],\ninput[type=tel],\ninput[type=url],\ninput[type=text],\ninput[type=search],\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  border: 1px #e8e8c6 solid;\n  box-sizing: border-box;\n  font: inherit;\n  line-height: 1;\n  transition: all 0.2s 0s ease-in-out;\n}\ninput:not([type]):hover, input:not([type]):focus,\ninput[type=color]:hover,\ninput[type=color]:focus,\ninput[type=email]:hover,\ninput[type=email]:focus,\ninput[type=number]:hover,\ninput[type=number]:focus,\ninput[type=password]:hover,\ninput[type=password]:focus,\ninput[type=tel]:hover,\ninput[type=tel]:focus,\ninput[type=url]:hover,\ninput[type=url]:focus,\ninput[type=text]:hover,\ninput[type=text]:focus,\ninput[type=search]:hover,\ninput[type=search]:focus,\nselect:hover,\nselect:focus,\ntextarea:hover,\ntextarea:focus {\n  border-color: #231f20;\n}\ninput:not([type]):focus,\ninput[type=color]:focus,\ninput[type=email]:focus,\ninput[type=number]:focus,\ninput[type=password]:focus,\ninput[type=tel]:focus,\ninput[type=url]:focus,\ninput[type=text]:focus,\ninput[type=search]:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\nselect {\n  padding-left: 5px;\n}\ntextarea {\n  height: 10em;\n  resize: vertical;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\ninput[type=radio] + label,\ninput[type=checkbox] + label {\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\ninput[type=radio] + label:before, input[type=radio] + label:after,\ninput[type=checkbox] + label:before,\ninput[type=checkbox] + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  box-sizing: border-box;\n  transition: all 0.2s 0s ease-in-out;\n}\ninput[type=radio] + label:before,\ninput[type=checkbox] + label:before {\n  top: -2px;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  border: 1px #e8e8c6 solid;\n}\ninput[type=radio] + label:after,\ninput[type=checkbox] + label:after {\n  top: 5px;\n  left: 5px;\n  width: 10px;\n  height: 5px;\n  border-left: 2px #006295 solid;\n  border-bottom: 2px #006295 solid;\n  -webkit-transform: rotate(-45deg) scale(0, 0);\n  transform: rotate(-45deg) scale(0, 0);\n}\ninput[type=radio] + label:hover:before,\ninput[type=checkbox] + label:hover:before {\n  border-color: #231f20;\n}\ninput[type=radio]:focus + label:before,\ninput[type=checkbox]:focus + label:before {\n  border-color: #231f20;\n}\ninput[type=radio]:checked + label:after,\ninput[type=checkbox]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1, 1);\n  transform: rotate(-45deg) scale(1, 1);\n}\ninput[type=submit],\ninput[type=button] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 150px;\n  max-width: 100%;\n  padding: 12px 0 10px;\n  border-radius: 2px;\n  background: #9be1fb;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-shadow: 1px 0 0 #231f20;\n  box-shadow: 0 1px 2px #dad9ba, inset 0 0 0 rgba(255, 255, 255, 0);\n  transition: all 0.2s 0s ease-in-out;\n}\ninput[type=submit]:hover,\ninput[type=button]:hover {\n  box-shadow: 0 2px 5px #dad9ba, inset 0 0 0 rgba(255, 255, 255, 0);\n}\ninput[type=submit]:active,\ninput[type=button]:active {\n  box-shadow: 0 1px 1px #dad9ba, inset 0 0 0 rgba(255, 255, 255, 0);\n  transition: all 0.1s 0s ease-in-out;\n}\ninput[type=submit]:disabled,\ninput[type=button]:disabled {\n  cursor: not-allowed;\n}\nfigure img {\n  max-width: 100%;\n  display: block;\n}\n/*_________________________________________________________*/\n.app {\n  display: flex;\n  height: 100%;\n}\n@media print, (max-width: 1000px) {\n  .app {\n    display: block;\n    height: auto;\n  }\n}\n@media print {\n  .not4print {\n    display: none;\n  }\n\n  .only4print {\n    display: block;\n  }\n\n  body {\n    font-family: serif;\n    background: #fff;\n  }\n\n  .no-pagebreak {\n    display: block;\n    page-break-inside: avoid;\n  }\n\n  .page-break {\n    page-break-before: always;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXE15a3l0YV9EYXRza29cXFByb2plY3RzXFxuaWtcXG5pa2RhdHNrby5naXRodWIuaW8vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXE15a3l0YV9EYXRza29cXFByb2plY3RzXFxuaWtcXG5pa2RhdHNrby5naXRodWIuaW8vYXNzZXRzXFxzdHlsZXNcXF9yZXNldC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcTXlreXRhX0RhdHNrb1xcUHJvamVjdHNcXG5pa1xcbmlrZGF0c2tvLmdpdGh1Yi5pby9hc3NldHNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcTXlreXRhX0RhdHNrb1xcUHJvamVjdHNcXG5pa1xcbmlrZGF0c2tvLmdpdGh1Yi5pby9hc3NldHNcXHN0eWxlc1xcX2dsb2JhbC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcTXlreXRhX0RhdHNrb1xcUHJvamVjdHNcXG5pa1xcbmlrZGF0c2tvLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLG1FQUFBO0FDRFIsZ0JBQWdCO0FEQWhCLDhFQUFBO0FFQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FESUY7QUNGQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FES0Y7QUNIQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QURNRjtBQ0pBO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtBRE9GO0FDTEE7O0VBRUUsdUJBQUE7QURRRjtBQ05BOztFQUVFLG1CQUFBO0FEU0Y7QUNQQTs7RUFFRSxvQkFBQTtBRFVGO0FDUkE7RUFDRSx5QkFBQTtFQUNB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SDRpQkY7O0VHMWlCQTtJQUNFLGNBQUE7SUFDQSx3QkFBQTtFSDZpQkY7O0VHM2lCQTtJQUNFLHlCQUFBO0VIOGlCRjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCB1cmwoJy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NdWxpOjQwMCw0MDBpdGFsaWMnKTtcclxuQGltcG9ydCAnYXNzZXRzL3N0eWxlcy9yZXNldC5zY3NzJztcclxuQGltcG9ydCAnYXNzZXRzL3N0eWxlcy9taXhpbnMuc2Nzcyc7XHJcbkBpbXBvcnQgJ2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NdWxpOjQwMCw0MDBpdGFsaWNcIik7XG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8sXG5pbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IFwi4oCcXCIgXCLigJ1cIiBcIuKAmFwiIFwi4oCZXCI7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxucTpiZWZvcmUge1xuICBjb250ZW50OiBvcGVuLXF1b3RlO1xufVxuXG5ibG9ja3F1b3RlOmFmdGVyLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG5sYWJlbDpmb2N1cyxcbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5zdHJvbmcsXG5iIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuZW0sXG5pIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xuICB9XG59XG4vKiBQb3J0Zm9saW8gaG92ZXIgYW5pbWF0aW9ucyAqL1xuLyogaW5SaWdodCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGluLXJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBpbi1yaWdodCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIGluLXJpZ2h0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaW4tcmlnaHQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4vKiBpbkxlZnQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBpbi1sZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW4tbGVmdCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBpbi1sZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogaW5Ub3AgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBpbi10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBpbi10b3Age1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgaW4tdG9wIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGluLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4vKiBpbkJvdHRvbSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGluLWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaW4tYm90dG9tIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLyogb3V0UmlnaHQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtcmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG91dC1yaWdodCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG91dC1yaWdodCB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG91dC1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cbi8qIG91dExlZnQgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtbGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG91dC1sZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG91dC1sZWZ0IHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG91dC1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbn1cbi8qIG91dFRvcCAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIG91dC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBvdXQtdG9wIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG91dC10b3Age1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgb3V0LXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG4vKiBvdXRCb3R0b20gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtYm90dG9tIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBvdXQtYm90dG9tIHtcbiAgMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG91dC1ib3R0b20ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogI2YyZjJlOTtcbiAgY29sb3I6ICMyMzFmMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMC40cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyAwLjRzIGVhc2UtaW47XG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMC40cyBlYXNlLWluO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMC40cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgMC40cyBlYXNlLWluO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgQ29tbW9uIGNsYXNzZXNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnJlZCB7XG4gIGNvbG9yOiAjYmQyMDMxO1xufVxuXG4uYmx1ZSwgYSB7XG4gIGNvbG9yOiAjMDA2Mjk1O1xufVxuXG4ubGlnaHRibHVlIHtcbiAgY29sb3I6ICM5YmUxZmI7XG59XG5cbi5saWdodGVyYmx1ZSB7XG4gIGNvbG9yOiAjYzVlZmZkO1xufVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4udGQsXG4udGgge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4ub25seTRwcmludCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBHbG9iYWxcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xucCB7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5wOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMHB4ICNmZmYsIDFweCAxcHggMCAjMjMxZjIwO1xufVxuQG1lZGlhIHByaW50IHtcbiAgaDEge1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cblxuaDIge1xuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAjMjMxZjIwO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5AbWVkaWEgcHJpbnQge1xuICBoMiB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgfVxufVxuXG5oMyB7XG4gIHRleHQtc2hhZG93OiAxcHggMCAwICMyMzFmMjA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xufVxuQG1lZGlhIHByaW50IHtcbiAgaDMge1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG59XG5AbWVkaWEgcHJpbnQge1xuICBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmE6Zm9jdXMsIGE6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuc3Ryb25nLFxuYiB7XG4gIHRleHQtc2hhZG93OiAxcHggMCAwICMyMzFmMjA7XG59XG5hIHN0cm9uZyxcbmEgYiB7XG4gIHRleHQtc2hhZG93OiAxcHggMCAwICMwMDYyOTU7XG59XG5AbWVkaWEgcHJpbnQge1xuICBzdHJvbmcsXG5iIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5wbGFjZWhvbGRlciwgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgOjotbW96LXBsYWNlaG9sZGVyLCA6LW1vei1wbGFjZWhvbGRlciwgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbmlucHV0Om5vdChbdHlwZV0pLFxuaW5wdXRbdHlwZT1jb2xvcl0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT11cmxdLFxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCAjZThlOGM2IHNvbGlkO1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2UtaW4tb3V0O1xufVxuaW5wdXQ6bm90KFt0eXBlXSk6aG92ZXIsIGlucHV0Om5vdChbdHlwZV0pOmZvY3VzLFxuaW5wdXRbdHlwZT1jb2xvcl06aG92ZXIsXG5pbnB1dFt0eXBlPWNvbG9yXTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOmhvdmVyLFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG5pbnB1dFt0eXBlPW51bWJlcl06aG92ZXIsXG5pbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpob3ZlcixcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxuaW5wdXRbdHlwZT10ZWxdOmhvdmVyLFxuaW5wdXRbdHlwZT10ZWxdOmZvY3VzLFxuaW5wdXRbdHlwZT11cmxdOmhvdmVyLFxuaW5wdXRbdHlwZT11cmxdOmZvY3VzLFxuaW5wdXRbdHlwZT10ZXh0XTpob3ZlcixcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG5pbnB1dFt0eXBlPXNlYXJjaF06aG92ZXIsXG5pbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMsXG5zZWxlY3Q6aG92ZXIsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpob3ZlcixcbnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjMxZjIwO1xufVxuaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMsXG5pbnB1dFt0eXBlPWNvbG9yXTpmb2N1cyxcbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzLFxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsXG5pbnB1dFt0eXBlPXRlbF06Zm9jdXMsXG5pbnB1dFt0eXBlPXVybF06Zm9jdXMsXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDEwZW07XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dLFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG5pbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsLFxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbDpiZWZvcmUsIGlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWw6YWZ0ZXIsXG5pbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dFt0eXBlPXJhZGlvXSArIGxhYmVsOmJlZm9yZSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCAjZThlOGM2IHNvbGlkO1xufVxuaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbDphZnRlcixcbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YWZ0ZXIge1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1sZWZ0OiAycHggIzAwNjI5NSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICMwMDYyOTUgc29saWQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLCAwKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLCAwKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwLCAwKTtcbn1cbmlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWw6aG92ZXI6YmVmb3JlLFxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpob3ZlcjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMyMzFmMjA7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpmb2N1cyArIGxhYmVsOmJlZm9yZSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3VzICsgbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjMxZjIwO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEsIDEpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSwgMSk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEsIDEpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEsIDEpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEsIDEpO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzliZTFmYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAjMjMxZjIwO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDJweCAjZGFkOWJhLCBpbnNldCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCAjZGFkOWJhLCBpbnNldCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggI2RhZDliYSwgaW5zZXQgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIDBzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyAwcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMHMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAjZGFkOWJhLCBpbnNldCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAjZGFkOWJhLCBpbnNldCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggI2RhZDliYSwgaW5zZXQgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlIHtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggI2RhZDliYSwgaW5zZXQgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggI2RhZDliYSwgaW5zZXQgMCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICNkYWQ5YmEsIGluc2V0IDAgMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgMHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgMHMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xcyAwcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgMHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIDBzIGVhc2UtaW4tb3V0O1xufVxuaW5wdXRbdHlwZT1zdWJtaXRdOmRpc2FibGVkLFxuaW5wdXRbdHlwZT1idXR0b25dOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuZmlndXJlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cbi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgcHJpbnQsIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYXBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLm5vdDRwcmludCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vbmx5NHByaW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgLm5vLXBhZ2VicmVhayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG5cbiAgLnBhZ2UtYnJlYWsge1xuICAgIHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXM7XG4gIH1cbn0iLCJodG1sLFxyXG5ib2R5LFxyXG5kaXYsXHJcbnNwYW4sXHJcbmFwcGxldCxcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYSxcclxuYWJicixcclxuYWNyb255bSxcclxuYWRkcmVzcyxcclxuYmlnLFxyXG5jaXRlLFxyXG5jb2RlLFxyXG5kZWwsXHJcbmRmbixcclxuZW0sXHJcbmltZyxcclxuaW5zLFxyXG5rYmQsXHJcbnEsXHJcbnMsXHJcbnNhbXAsXHJcbnNtYWxsLFxyXG5zdHJpa2UsXHJcbnN0cm9uZyxcclxuc3ViLFxyXG5zdXAsXHJcbnR0LFxyXG52YXIsXHJcbmIsXHJcbnUsXHJcbmksXHJcbmNlbnRlcixcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbnVsLFxyXG5saSxcclxuZmllbGRzZXQsXHJcbmZvcm0sXHJcbmxhYmVsLFxyXG5sZWdlbmQsXHJcbnRhYmxlLFxyXG5jYXB0aW9uLFxyXG50Ym9keSxcclxudGZvb3QsXHJcbnRoZWFkLFxyXG50cixcclxudGgsXHJcbnRkLFxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuY2FudmFzLFxyXG5kZXRhaWxzLFxyXG5lbWJlZCxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbm91dHB1dCxcclxucnVieSxcclxuc2VjdGlvbixcclxuc3VtbWFyeSxcclxudGltZSxcclxubWFyayxcclxuYXVkaW8sXHJcbnZpZGVvLFxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbn1cclxub2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcclxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbn1cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgcXVvdGVzOiAnXFwyMDFjJyAnXFwyMDFkJyAnXFwyMDE4JyAnXFwyMDE5JztcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxucTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XHJcbn1cclxuYmxvY2txdW90ZTphZnRlcixcclxucTphZnRlciB7XHJcbiAgY29udGVudDogY2xvc2UtcXVvdGU7XHJcbn1cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxubGFiZWw6Zm9jdXMsXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbnN0cm9uZyxcclxuYiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5lbSxcclxuaSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiIsIkBtaXhpbiBjYSB7XHJcbiAgLy8gY2xlYXJhZnRlclxyXG4gICY6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdmEge1xyXG4gIC8vIHZlcnRpY2FsIGFsaWdubWVudFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAmID4gKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbn1cclxuQG1peGluIGNsIHtcclxuICAvLyBjbGVhbiBsaXN0c1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbiAgJiA+ICoge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBub3NlbGVjdCB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbkBtaXhpbiBub3RyYW5zZm9ybSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAtbW96LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAtby10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1peGluIG5vdHJhbnNpdGlvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAtby10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkZHVyYXRpb246IDAuMnMsICRkZWxheTogMHMsICR0cmFuc2l0aW9uOiBhbGwsICRlYXNpbmc6IGVhc2UtaW4tb3V0KSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGRlbGF5ICRlYXNpbmc7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGRlbGF5ICRlYXNpbmc7XHJcbiAgLW1zLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkZGVsYXkgJGVhc2luZztcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGRlbGF5ICRlYXNpbmc7XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRkZWxheSAkZWFzaW5nO1xyXG59XHJcbkBtaXhpbiBib3gtc2l6aW5nKCRib3g6IGJvcmRlci1ib3gpIHtcclxuICAtbW96LWJveC1zaXppbmc6ICRib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94O1xyXG4gIGJveC1zaXppbmc6ICRib3g7XHJcbn1cclxuQG1peGluIGJveC1zaGFkb3coJHNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgJGluc2V0OiBpbnNldCAwIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSB7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93LCAkaW5zZXQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93LCAkaW5zZXQ7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdywgJGluc2V0O1xyXG59XHJcbkBtaXhpbiBncmFkaWVudC1oKCRsZWZ0OiAjMDAwMGZmLCAkcmlnaHQ6ICNmZmZmMDAsICRzaGlmdExlZnQ6IDAlLCAkc2hpZnRSaWdodDogMTAwJSkge1xyXG4gIGJhY2tncm91bmQ6ICRsZWZ0O1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRsZWZ0ICRzaGlmdExlZnQsICRyaWdodCAkc2hpZnRSaWdodCk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcclxuICAgIGxpbmVhcixcclxuICAgIGxlZnQgdG9wLFxyXG4gICAgcmlnaHQgdG9wLFxyXG4gICAgY29sb3Itc3RvcCgkc2hpZnRMZWZ0LCAkbGVmdCksXHJcbiAgICBjb2xvci1zdG9wKCRzaGlmdFJpZ2h0LCAkcmlnaHQpXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgIGxlZnQsXHJcbiAgICAkbGVmdCAkc2hpZnRMZWZ0LFxyXG4gICAgJHJpZ2h0ICRzaGlmdFJpZ2h0XHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJGxlZnQgJHNoaWZ0TGVmdCwgJHJpZ2h0ICRzaGlmdFJpZ2h0KTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRsZWZ0ICRzaGlmdExlZnQsICRyaWdodCAkc2hpZnRSaWdodCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbGVmdCAkc2hpZnRMZWZ0LCAkcmlnaHQgJHNoaWZ0UmlnaHQpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFxyXG4gICAgICBzdGFydENvbG9yc3RyPSRsZWZ0LFxyXG4gICAgICBlbmRDb2xvcnN0cj0kcmlnaHQsXHJcbiAgICAgIEdyYWRpZW50VHlwZT0xXHJcbiAgICApO1xyXG59XHJcbkBtaXhpbiBncmFkaWVudC12KCR0b3A6ICMwMDAwZmYsICRib3R0b206ICNmZmZmMDAsICRzaGlmdFRvcDogMCUsICRzaGlmdEJvdHRvbTogMTAwJSkge1xyXG4gIGJhY2tncm91bmQ6ICR0b3A7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAkdG9wICRzaGlmdFRvcCwgJGJvdHRvbSAkc2hpZnRCb3R0b20pO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICBsaW5lYXIsXHJcbiAgICBsZWZ0IHRvcCxcclxuICAgIGxlZnQgYm90dG9tLFxyXG4gICAgY29sb3Itc3RvcCgkc2hpZnRUb3AsICR0b3ApLFxyXG4gICAgY29sb3Itc3RvcCgkc2hpZnRCb3R0b20sICRib3R0b20pXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgIHRvcCxcclxuICAgICR0b3AgJHNoaWZ0VG9wLFxyXG4gICAgJGJvdHRvbSAkc2hpZnRCb3R0b21cclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgJHNoaWZ0VG9wLCAkYm90dG9tICRzaGlmdEJvdHRvbSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICR0b3AgJHNoaWZ0VG9wLCAkYm90dG9tICRzaGlmdEJvdHRvbSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHRvcCAkc2hpZnRUb3AsICRib3R0b20gJHNoaWZ0Qm90dG9tKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcclxuICAgICAgc3RhcnRDb2xvcnN0cj0kdG9wLFxyXG4gICAgICBlbmRDb2xvcnN0cj0kYm90dG9tLFxyXG4gICAgICBHcmFkaWVudFR5cGU9MFxyXG4gICAgKTtcclxufVxyXG5AbWl4aW4gZ3JhZGllbnQtcigkaW5uZXI6ICMwMDAwZmYsICRvdXRlcjogI2ZmZmYwMCwgJHNoaWZ0SW5uZXI6IDAlLCAkc2hpZnRPdXRlcjogMTAwJSkge1xyXG4gIGJhY2tncm91bmQ6ICRpbm5lcjtcclxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcclxuICAgIGNlbnRlcixcclxuICAgIGVsbGlwc2UgY292ZXIsXHJcbiAgICAkaW5uZXIgJHNoaWZ0SW5uZXIsXHJcbiAgICAkb3V0ZXIgJHNoaWZ0T3V0ZXJcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXHJcbiAgICByYWRpYWwsXHJcbiAgICBjZW50ZXIgY2VudGVyLFxyXG4gICAgMHB4LFxyXG4gICAgY2VudGVyIGNlbnRlcixcclxuICAgICRzaGlmdE91dGVyLFxyXG4gICAgY29sb3Itc3RvcCgkc2hpZnRJbm5lciwgJGlubmVyKSxcclxuICAgIGNvbG9yLXN0b3AoJHNoaWZ0T3V0ZXIsICRvdXRlcilcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgY2VudGVyLFxyXG4gICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICRpbm5lciAkc2hpZnRJbm5lcixcclxuICAgICRvdXRlciAkc2hpZnRPdXRlclxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgY2VudGVyLFxyXG4gICAgZWxsaXBzZSBjb3ZlcixcclxuICAgICRpbm5lciAkc2hpZnRJbm5lcixcclxuICAgICRvdXRlciAkc2hpZnRPdXRlclxyXG4gICk7XHJcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChcclxuICAgIGNlbnRlcixcclxuICAgIGVsbGlwc2UgY292ZXIsXHJcbiAgICAkaW5uZXIgJHNoaWZ0SW5uZXIsXHJcbiAgICAkb3V0ZXIgJHNoaWZ0T3V0ZXJcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxyXG4gICAgJGlubmVyICRzaGlmdElubmVyLFxyXG4gICAgJG91dGVyICRzaGlmdE91dGVyXHJcbiAgKTtcclxufVxyXG5AbWl4aW4gZ3JhZGllbnQtYSgkY29sb3IxOiAjMDAwMGZmLCAkY29sb3IyOiAjZmZmZjAwLCAkYW5nbGU6IDQ1LCAkc2hpZnQxOiAwJSwgJHNoaWZ0MjogMTAwJSkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwZmY7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoKCRhbmdsZSswKWRlZywgJGNvbG9yMSAwJSwgJGNvbG9yMiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxyXG4gICAgbGluZWFyLFxyXG4gICAgbGVmdCB0b3AsXHJcbiAgICByaWdodCBib3R0b20sXHJcbiAgICBjb2xvci1zdG9wKDAlLCAkY29sb3IxKSxcclxuICAgIGNvbG9yLXN0b3AoMTAwJSwgJGNvbG9yMilcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCgkYW5nbGUrMClkZWcsICRjb2xvcjEgMCUsICRjb2xvcjIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCgkYW5nbGUrMClkZWcsICRjb2xvcjEgMCUsICRjb2xvcjIgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgoJGFuZ2xlKzApZGVnLCAkY29sb3IxIDAlLCAkY29sb3IyIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgoJGFuZ2xlKzApZGVnLCAkY29sb3IxIDAlLCAkY29sb3IyIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KFxyXG4gICAgICBzdGFydENvbG9yc3RyPSRjb2xvcjEsXHJcbiAgICAgIGVuZENvbG9yc3RyPSRjb2xvcjIsXHJcbiAgICAgIEdyYWRpZW50VHlwZT0xXHJcbiAgICApO1xyXG59XHJcbkBtaXhpbiByb3RhdGUoJGFuZ2xlOiA0NWRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpO1xyXG59XHJcbkBtaXhpbiB0cmFuc2xhdGUoJHg6IDAsICR5OiAwICkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpO1xyXG59XHJcbkBtaXhpbiB0cmFuc2xhdGUzZCgkeDogMCwgJHk6IDAsICR6OiAwICkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xyXG59XHJcbkBtaXhpbiBzY2FsZVhZKCRzY2FsZVg6IDEuNSwgJHNjYWxlWTogMS41KSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbn1cclxuQG1peGluIHNjYWxlKCRzY2FsZTogMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoJHNjYWxlKTtcclxufVxyXG5AbWl4aW4gcm90YXRlKCRkZWc6IDMwZGVnKSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKCRkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgkZGVnKTtcclxufVxyXG5AbWl4aW4gcm90YXRlc2NhbGUoJHNjYWxlWDogMSwgJHNjYWxlWTogMSwgJGFuZ2xlOiAtNDVkZWcpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSkgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkYW5nbGUpIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKCRhbmdsZSkgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoJGFuZ2xlKSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxufVxyXG5AbWl4aW4gdHJhbnNsYXRlc2NhbGUoJHg6IDAsICR5OiAwLCAkejogMCwgJHNjYWxlWDogMSwgJHNjYWxlWTogMSkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeikgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeikgc2NhbGUoJHNjYWxlWCwgJHNjYWxlWSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSBzY2FsZSgkc2NhbGVYLCAkc2NhbGVZKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopIHNjYWxlKCRzY2FsZVgsICRzY2FsZVkpO1xyXG59XHJcbkBtaXhpbiByb2xsKCRwZXJzcGVjdGl2ZTogOTAwcHgsICRyb3RhdGVZOiA5MGRlZykge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHJvdGF0ZVkoJHJvdGF0ZVkpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHJvdGF0ZVkoJHJvdGF0ZVkpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgcm90YXRlWSgkcm90YXRlWSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHJvdGF0ZVkoJHJvdGF0ZVkpO1xyXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSByb3RhdGVZKCRyb3RhdGVZKTtcclxufVxyXG4kc2NhbGU6IDEuNTtcclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSwgJHNjYWxlKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlLCAkc2NhbGUpO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlLCAkc2NhbGUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHNjYWxlLCAkc2NhbGUpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSwgJHNjYWxlKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgkc2NhbGUsICRzY2FsZSk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGlvbjogYW5pbWF0aW9uLCAkZHVyYXRpb246IDMwcykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG4vKiBQb3J0Zm9saW8gaG92ZXIgYW5pbWF0aW9ucyAqL1xyXG4kc3BlZWQ6IDAuM3M7XHJcbi8qIGluUmlnaHQgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgaW4tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgaW4tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW4tcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIGluUmlnaHQoJGFuaW1hdGlvbjogaW4tcmlnaHQsICRkdXJhdGlvbjogJHNwZWVkKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxufVxyXG4vKiBpbkxlZnQgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgaW4tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgaW4tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW4tbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIGluTGVmdCgkYW5pbWF0aW9uOiBpbi1sZWZ0LCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuLyogaW5Ub3AgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBpbi10b3Age1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIGluLXRvcCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW4tdG9wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5AbWl4aW4gaW5Ub3AoJGFuaW1hdGlvbjogaW4tdG9wLCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuLyogaW5Cb3R0b20gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluLWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGluLWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBpbi1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW4tYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBpbkJvdHRvbSgkYW5pbWF0aW9uOiBpbi1ib3R0b20sICRkdXJhdGlvbjogJHNwZWVkKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgLW8tYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxufVxyXG4vKiBvdXRSaWdodCAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgb3V0LXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG91dC1yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBvdXQtcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQG1peGluIG91dFJpZ2h0KCRhbmltYXRpb246IG91dC1yaWdodCwgJGR1cmF0aW9uOiAkc3BlZWQpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG59XHJcbi8qIG91dExlZnQgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIG91dC1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIG91dC1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBvdXQtbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgb3V0LWxlZnQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBvdXRMZWZ0KCRhbmltYXRpb246IG91dC1sZWZ0LCAkZHVyYXRpb246ICRzcGVlZCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICBhbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbn1cclxuLyogb3V0VG9wICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvdXQtdG9wIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIG91dC10b3Age1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5ALW8ta2V5ZnJhbWVzIG91dC10b3Age1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG91dC10b3Age1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBvdXRUb3AoJGFuaW1hdGlvbjogb3V0LXRvcCwgJGR1cmF0aW9uOiAkc3BlZWQpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG59XHJcbi8qIG91dEJvdHRvbSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIG91dC1ib3R0b20ge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcbkAtby1rZXlmcmFtZXMgb3V0LWJvdHRvbSB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBvdXQtYm90dG9tIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBvdXRCb3R0b20oJGFuaW1hdGlvbjogb3V0LWJvdHRvbSwgJGR1cmF0aW9uOiAkc3BlZWQpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbjogJGFuaW1hdGlvbiAkZHVyYXRpb24gMSBmb3J3YXJkcztcclxuICAtby1hbmltYXRpb246ICRhbmltYXRpb24gJGR1cmF0aW9uIDEgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uICRkdXJhdGlvbiAxIGZvcndhcmRzO1xyXG59XHJcbiIsIkBpbXBvcnQgJ35zcmMvYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAkZ3JheS1iZztcclxuICBjb2xvcjogJGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcywgMC40cywgb3BhY2l0eSwgIGVhc2UtaW4pO1xyXG59XHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgQ29tbW9uIGNsYXNzZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAkcmVkO1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogJGJsdWU7XHJcbn1cclxuLmxpZ2h0Ymx1ZSB7XHJcbiAgY29sb3I6ICRsaWdodGJsdWU7XHJcbn1cclxuLmxpZ2h0ZXJibHVlIHtcclxuICBjb2xvcjogJGxpZ2h0ZXJibHVlO1xyXG59XHJcbi5sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLnRyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbn1cclxuLnRkLFxyXG4udGgge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuLm9ubHk0cHJpbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgR2xvYmFsXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5wIHtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbmgxIHtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtc2hhZG93OiAwcHggLTFweCAwcHggI2ZmZiwgMXB4IDFweCAwICRibGFjaztcclxuXHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxufVxyXG5oMiB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgJGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbiAgfVxyXG59XHJcbmgzIHtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAkYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcclxuXHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbmg0IHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuXHJcbiAgQG1lZGlhIHByaW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxufVxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQGV4dGVuZCAuYmx1ZTtcclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbnN0cm9uZyxcclxuYiB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgJGJsYWNrO1xyXG5cclxuICBhICYge1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAwIDAgJGJsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgcHJpbnQge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIEBleHRlbmQgLnBsYWNlaG9sZGVyO1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBAZXh0ZW5kIC5wbGFjZWhvbGRlcjtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIEBleHRlbmQgLnBsYWNlaG9sZGVyO1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIEBleHRlbmQgLnBsYWNlaG9sZGVyO1xyXG59XHJcbmlucHV0Om5vdChbdHlwZV0pLFxyXG5pbnB1dFt0eXBlPSdjb2xvciddLFxyXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSxcclxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcclxuaW5wdXRbdHlwZT0ndGVsJ10sXHJcbmlucHV0W3R5cGU9J3VybCddLFxyXG5pbnB1dFt0eXBlPSd0ZXh0J10sXHJcbmlucHV0W3R5cGU9J3NlYXJjaCddLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4ICRncmF5LWJvcmRlciBzb2xpZDtcclxuICBAaW5jbHVkZSBib3gtc2l6aW5nKCk7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJsYWNrO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbnNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTBlbTtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbmlucHV0W3R5cGU9J3JhZGlvJ10sXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gICYgKyBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAaW5jbHVkZSBub3NlbGVjdCgpO1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIEBpbmNsdWRlIGJveC1zaXppbmcoKTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0b3A6IC0ycHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4ICRncmF5LWJvcmRlciBzb2xpZDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggJGJsdWUgc29saWQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAkYmx1ZSBzb2xpZDtcclxuICAgICAgQGluY2x1ZGUgcm90YXRlc2NhbGUoMCwgMCwgLTQ1ZGVnKTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJjpjaGVja2VkIHtcclxuICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIHJvdGF0ZXNjYWxlKDEsIDEsIC00NWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW5wdXRbdHlwZT0nc3VibWl0J10sXHJcbmlucHV0W3R5cGU9J2J1dHRvbiddIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgQGluY2x1ZGUgYm94LXNpemluZygpO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAwIDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICRsaWdodGJsdWU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAkYmxhY2s7XHJcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDFweCAycHggJGdyYXktc2hhZG93KTtcclxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMnB4IDVweCAkZ3JheS1zaGFkb3cpO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDAgMXB4IDFweCAkZ3JheS1zaGFkb3cpO1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigwLjFzKTtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuZmlndXJlIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cclxuXHJcbi5hcHAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBAbWVkaWEgcHJpbnQsIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5ub3Q0cHJpbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm9ubHk0cHJpbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcbiAgLm5vLXBhZ2VicmVhayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICB9XHJcbiAgLnBhZ2UtYnJlYWsge1xyXG4gICAgcGFnZS1icmVhay1iZWZvcmU6IGFsd2F5cztcclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRibHVlOiAjMDA2Mjk1O1xyXG4kbGlnaHRibHVlOiAjOWJlMWZiO1xyXG4kbGlnaHRlcmJsdWU6ICNjNWVmZmQ7XHJcbiRyZWQ6ICNiZDIwMzE7XHJcbiRncmVlbjogIzJjYTAyYztcclxuJGJsYWNrOiAjMjMxZjIwO1xyXG4kZ3JheS1iZzogI2YyZjJlOTtcclxuJGdyYXktYm9yZGVyOiAjZThlOGM2O1xyXG4kZ3JheS1zaGFkb3c6ICNkYWQ5YmE7XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mykyta_Datsko\Projects\nik\nikdatsko.github.io\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map