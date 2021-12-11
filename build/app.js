"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var path = require("path");
var winston = require("winston");
var expressWinston = require("express-winston");
var cors = require("cors");
var sassMiddleware = require("node-sass-middleware");
var cookieParser = require("cookie-parser");
var debug_1 = require("debug");
var Routes_1 = require("./Routes");
var app = express();
var server = http.createServer(app);
var port = 3000;
var routes = [];
var debugLog = (0, debug_1.default)("app");
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(sassMiddleware({
    src: path.join(__dirname, "../public"),
    dest: path.join(__dirname, "../public"),
    indentedSyntax: true,
    sourceMap: true,
    outputStyle: "compressed",
}));
app.use(express.static(path.join(__dirname, "../public")));
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new Routes_1.UsersRoutes(app));
routes.push(new Routes_1.IndexRoutes(app));
var runningMessage = "Server running at http://localhost:".concat(port);
server.listen(port, function () {
    routes.forEach(function (route) {
        debugLog("Routes configured for ".concat(route.getName()));
    });
    console.log(runningMessage);
});
//# sourceMappingURL=app.js.map