"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (function (snowpackConfig, pluginOptions) {
    var acornPlugins = [];
    if (Array.isArray(pluginOptions === null || pluginOptions === void 0 ? void 0 : pluginOptions.plugins)) {
        for (var _i = 0, _a = pluginOptions.plugins; _i < _a.length; _i++) {
            var acornPluginName = _a[_i];
            acornPlugins.push(require(acornPluginName));
        }
    }
    return {
        name: "snowpack-plugin-acorn-injection",
        config: function (snowpackConfig) {
            var _a;
            var _b;
            ((_a = (_b = snowpackConfig.packageOptions.rollup).plugins) !== null && _a !== void 0 ? _a : (_b.plugins = [])).push({
                name: "rollup-plugin-acorn-injection",
                options: function (options) {
                    if (acornPlugins.length !== 0) {
                        if (Array.isArray(options.acornInjectPlugins)) {
                            for (var _i = 0, acornPlugins_1 = acornPlugins; _i < acornPlugins_1.length; _i++) {
                                var acorn = acornPlugins_1[_i];
                                options.acornInjectPlugins.push(acorn);
                            }
                        }
                        else if (typeof options.acornInjectPlugins !== "undefined") {
                            options.acornInjectPlugins = __spreadArrays([options.acornInjectPlugins], acornPlugins);
                        }
                        else {
                            options.acornInjectPlugins = acornPlugins;
                        }
                    }
                    return options;
                },
            });
        },
    };
});
