"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
var CommonRoutesConfig = /** @class */ (function () {
    function CommonRoutesConfig(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    CommonRoutesConfig.prototype.getName = function () {
        return this.name;
    };
    return CommonRoutesConfig;
}());
exports.CommonRoutesConfig = CommonRoutesConfig;
//# sourceMappingURL=RoutesConfig.js.map