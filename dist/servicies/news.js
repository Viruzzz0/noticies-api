"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNoticie", {
    enumerable: true,
    get: function() {
        return getNoticie;
    }
});
var _cheerio = /*#__PURE__*/ _interop_require_default(require("cheerio"));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function getNoticie(name) {
    return _getNoticie.apply(this, arguments);
}
function _getNoticie() {
    _getNoticie = _async_to_generator(function(name) {
        var newsName, url, customHeaders, requestOptions, html, $, divContent, noticies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    newsName = name.split(" ").join("+");
                    url = "https://www.bing.com/news/search?q=".concat(newsName, "&qs=n&form=QBNT&sp=-1&lq=0&pq=persona+5&sc=10-9&sk=&cvid=621A2A47EB7247F591B0AFEF91B3692E&ghsh=0&ghacc=0&ghpl=");
                    customHeaders = {
                        "Accept-Language": "es"
                    };
                    requestOptions = {
                        headers: customHeaders,
                        method: "GET"
                    };
                    return [
                        4,
                        fetch(url, requestOptions).then(function(response) {
                            if (!response.ok) {
                                throw new Error("HTTP error! Status: ".concat(response.status));
                            }
                            return response.text();
                        }).catch(function(error) {
                            console.error("Error:", error);
                        })
                    ];
                case 1:
                    html = _state.sent();
                    $ = _cheerio.default.load(html);
                    divContent = $("#algocore").find("div.news-card");
                    noticies = [];
                    divContent.each(function(index, element) {
                        var title = $(element).find("a.title").text();
                        var content = $(element).find("div.snippet").text();
                        var url = $(element).attr("url");
                        var imageUrl = $(element).find("div.image").find("img").attr("data-src-hq");
                        noticies.push({
                            title: title,
                            content: content,
                            url: url,
                            imageUrl: "https://th.bing.com".concat(imageUrl)
                        });
                    });
                    return [
                        2,
                        noticies
                    ];
            }
        });
    });
    return _getNoticie.apply(this, arguments);
}
