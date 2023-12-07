// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iZQ9B":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "16df5292ac9dc4ba";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aR1JP":[function(require,module,exports) {
/** const let 等の変数宣言*/ var var1 = "var\u5909\u6570";
console.log(var1);
// var変数は上書き可能
var1 = "var\u5909\u6570\u3092\u4E0A\u66F8\u304D";
console.log(var1);
// // var変数は再宣言可能
var var1 = "var\u5909\u6570\u3092\u518D\u5BA3\u8A00";
console.log(var1);
let val2 = "let\u5909\u6570";
console.log(val2);
// val2 = "let変数を上書き";
console.log(val2);
let val2 = "let\u5909\u6570\u3092\u518D\u5BA3\u8A00";
// const val3 = "const変数";
console.log(val3);
// val3 = "const変数を上書き";
console.log(val3);
// const val3 = "const変数を再宣言";
console.log(val3);
// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
    name: "\u30B8\u30E3\u30B1\u3048",
    age: 31
};
console.log(val4);
val4.name = "jack";
val4.address = "hiroshima";
console.log(val4);
const val5 = [
    "dog",
    "cat"
];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
/**
 * テンプレート文字列
 */ const name = "\u3058\u3083\u3051\u3048";
const age = 31;
// 私の名前はじゃけぇです。年齢は31歳です。
// 従来の方法
const message1 = "\u79C1\u306E\u540D\u524D\u306F" + name + "\u3067\u3059\u3002\u5E74\u9F62\u306F" + age + "\u3067\u3059\u3002";
console.log(message1);
const message2 = `\u{79C1}\u{306E}\u{540D}\u{524D}\u{306F}${name}\u{3067}\u{3059}\u{3002}\u{5E74}\u{9F62}\u{306F}${age}\u{3067}\u{3059}\u{3002}`;
console.log(message2);
/**
 * アロー関数
 */ // 従来の関数
function func1(str) {
    return str;
}
const func1 = function func1(str) {
    return str;
};
console.log(func1("func1\u3067\u3059"));
const func2 = (str)=>{
    return str;
};
// 引数１個の場合は括弧の省略が可能
// lintで戻されはする
const func2 = (str)=>{
    return str;
};
//{}とreturnを変えられることも
const func2 = (str)=>str;
console.log(func2("func2\u3067\u3059"));
const func3 = (num1, num2)=>num1 + num2;
console.log(func3(11, 2));
// オブジェクトを返却する場合など複数行での定義もできる
const func3 = (num1, num2)=>({
        hoge: num1,
        fuga: num2
    });
console.log(func3(10, 20));
//従来の関数とアロー関数の文法や中身なども違います
/*
 * 分割代入
//  */ const myProfile = {
    name: "\u3058\u3083\u3051\u3047",
    age: 31
};
const message1 = `\u{540D}\u{524D}\u{306F}${myProfile.name}\u{3067}\u{3059}\u{3002}\u{5E74}\u{9F62}\u{306F}${myProfile.age}\u{3067}\u{3059}\u{3002}`;
console.log(message1);
//　必要な情報だけ取り出す
const { name, age } = myProfile;
const message2 = `\u{540D}\u{524D}\u{306F}${name}\u{3067}\u{3059}\u{3002}\u{5E74}\u{9F62}\u{306F}${age}\u{3067}\u{3059}\u{3002}`;
console.log(message2);
const myProfile = [
    "\u3058\u3083\u3051\u3047",
    31
];
const message3 = `\u{540D}\u{524D}\u{306F}${myProfile[0]}\u{3067}\u{3059}\u{3002}\u{5E74}\u{9F62}\u{306F}${myProfile[1]}\u{3067}\u{3059}\u{3002}`;
console.log(message3);
//　自分で好きな変数名で受け取る
const [name, age] = myProfile;
const message4 = `\u{540D}\u{524D}\u{306F}${name}\u{3067}\u{3059}\u{3002}\u{5E74}\u{9F62}\u{306F}${age}\u{3067}\u{3059}\u{3002}`;
console.log(message4);
/**
 * デフォルト値(引数、分割代入)
 */ const sayHello = (name = "\u30B2\u30B9\u30C8")=>console.log(`\u{3053}\u{3093}\u{306B}\u{3061}\u{306F}\u{FF01}${name}\u{3055}\u{3093}\u{FF01}`);
sayHello();
const myProfile = {
    age: 31
};
const { age, name = "\u30B2\u30B9\u30C8" } = myProfile;
console.log(age);
console.log(name);
/***
 * オブジェクトの省略機能
 */ const name = "\u3058\u3083\u3051\u3048";
const age = 31;
const myProfile = {
    // 変数名が一緒なら省略できる
    //name: name,
    //age: age
    name,
    age
};
console.log(myProfile);
/**
 * スプレッド構文
 */ \u914D\u5217\u306E\u5C55\u958B;
const arr1 = [
    1,
    2
];
console.log(arr1);
// ...で配列を順に展開してくれる
console.log(...arr1);
const sumFunc = (num1, num2)=>console.log(num1 + num2);
// 配列の中身わたす
sumFunc(arr1[0], arr1[1]);
// スプレッド構文でじゅんじゅんに頭から渡してる
sumFunc(...arr1);
\u307E\u3068\u3081\u308B;
const arr2 = [
    1,
    2,
    3,
    4,
    5
];
// 分割代入
// 最初は1つずつ、次も一つずつ、その次から最後までは配列オブジェクトとして
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
// 配列のコピー
const arr4 = [
    10,
    20
];
const arr5 = [
    30,
    40
];
// 配列のコピー
const arr6 = [
    ...arr4
];
arr6[0] = 100;
// 全く新しい配列として扱われる
console.log(arr6);
console.log(arr4);
const arr7 = [
    ...arr4,
    ...arr5
];
console.log(arr7);
const arr8 = arr4; //　参照先がおなじ
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
/**
 * mapやfilterを使った配列の処理
 */ // for分
const nameArr = [
    "\u7530\u4E2D",
    "\u5C71\u7530",
    "\u3058\u3083\u3051\u3047"
];
for(let index = 0; index < nameArr.length; index++)console.log(nameArr[index]);
// map
nameArr.map((name)=>{
    console.log(name);
});
// // 新しい配列の生成
const nameArr2 = nameArr.map((name)=>{
    return name;
});
console.log(nameArr2);
// 新しい配列の生成をアロー関数で簡潔にかき直す
nameArr.map((name)=>console.log(name));
// // 奇数のみ取り出して扱う
const numArr = [
    1,
    2,
    3,
    4,
    5
];
const newNumArr = numArr.filter((num)=>{
    return num % 2 === 1;
});
console.log(newNumArr);
const nameArr = [
    "\u7530\u4E2D",
    "\u5C71\u7530",
    "\u3058\u3083\u3051\u3047"
];
for(let index = 0; index < nameArr.length; index++)console.log(`${index + 1}\u{756A}\u{76EE}\u{306F}${nameArr[index]}\u{3067}\u{3059}`);
// // mapでかき直す
nameArr.map((name, index)=>{
    console.log(`${index + 1}\u{756A}\u{76EE}\u{306F}${name}\u{3067}\u{3059}`);
});
// // アロー関数
nameArr.map((name, index)=>console.log(`${index + 1}\u{756A}\u{76EE}\u{306F}${name}\u{3067}\u{3059}`));
// mapでかき直す
// UIのだしわけでも結構使う　reactでも
const newnameArr = nameArr.map((name)=>{
    const jake = "\u3058\u3083\u3051\u3047";
    if (name == jake) return name;
    else return `${name}\u{3055}\u{3093}`;
});
console.log(newnameArr);
nameArr.map((name, index)=>{
    console.log(`${index + 1}\u{756A}\u{76EE}\u{306F}${name}\u{3067}\u{3059}`);
});
/**
 * 三項演算子
 */ // ある条件 ? 条件がtrueの場合 : 条件がfalseの場合
const val1 = "true";
console.log(val1);
const num = "1300";
// // 数値に使えるメソッド(3桁区切りにしてくれる)
// // 文字列だとただ文字列が変換される
console.log(num.toLocaleString());
const formattedNum = typeof num === "number" ? num.toLocaleString() : "\u6570\u5024\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044";
console.log(formattedNum);
const checkSum = (num1, num2)=>{
    return num1 + num2 > 100 ? "100\u3092\u8D85\u3048\u3066\u3044\u307E\u3059!" : "\u8A31\u5BB9\u7BC4\u56F2\u5185\u3067\u3059";
};
// console.log(checkSum(40, 50));
/**
 * 論理演算子の本当に身を知ろう
 */ //ABC truthy
//0 falsy
//10 truthy
//undefined falsy
// null falsy
// false falsy
// NaN falsy
// "" falsy
// [] truthy
// {} truthy
const val = {};
if (val) console.log("truthy");
else console.log("falsy");
//||
const flag1 = true;
const flag2 = true;
if (flag1 || flag2) console.log("1\u304B2\u306Ftrue\u306B\u306A\u308A\u307E\u3059");
if (flag1 && flag2) console.log("1\u30822\u3082true\u306B\u306A\u308A\u307E\u3059");
//// nullはfalcy なので 以下のようにできる
const num = 0;
//// || は左側がtruthyの時その時点で返却する
//// 左にくるものがfalsyだったら右側を実行
//// 左にくるものがtruthyだったらその時点で返却
const fee = num || "\u91D1\u984D\u672A\u8A2D\u5B9A\u3067\u3059";
console.log(fee);
const num2 = NaN;
// || は左側がfalsyの時その時点で返却する
// 左にくるものがfalsyだったらその時点で返却
// 左にくるものがtruthyだったら右側を実行
const fee = num2 && "\u4F55\u304B\u8A2D\u5B9A\u3055\u308C\u307E\u3057\u305F";
console.log(fee);

},{}]},["iZQ9B","aR1JP"], "aR1JP", "parcelRequirebaba")

//# sourceMappingURL=index.ac9dc4ba.js.map
