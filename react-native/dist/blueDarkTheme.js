"use strict";
/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueDarkTheme = void 0;
var react_native_paper_1 = require("react-native-paper");
var colors_1 = require("@pxblue/colors");
var shared_1 = require("./shared");
var color_1 = __importDefault(require("color"));
exports.blueDarkTheme = __assign(__assign({}, react_native_paper_1.DefaultTheme), { dark: true, roundness: 4, fonts: react_native_paper_1.configureFonts(shared_1.fontConfig), colors: __assign(__assign({}, react_native_paper_1.DefaultTheme.colors), { primary: colors_1.blue[200], accent: colors_1.lightBlue[200], background: colors_1.darkBlack[800], surface: colors_1.black[900], error: colors_1.red[200], text: colors_1.black[50], placeholder: colors_1.black[200], onBackground: colors_1.black[50], onSurface: colors_1.black[50], notification: colors_1.lightBlue[200], disabled: color_1.default(colors_1.black[300]).alpha(0.36).rgb().string() }) });
