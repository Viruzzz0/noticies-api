"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    app: function() {
        return app;
    },
    server: function() {
        return server;
    }
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _noticies = require("./routes/noticies.js");
require("dotenv/config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var PORT = process.env.PORT | 3000;
var app = (0, _express.default)();
app.use("/api", _noticies.router);
var server = app.listen(PORT, function() {
    return console.log("Server is listening PORT: ".concat(PORT));
});
