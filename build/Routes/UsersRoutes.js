"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
var Common_1 = require("../Common");
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, "UsersRoutes") || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route("/users").get();
        return this.app;
    };
    return UsersRoutes;
}(Common_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=UsersRoutes.js.map