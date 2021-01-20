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
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueDarkTheme = void 0;
var react_native_paper_1 = require("react-native-paper");
var colors_1 = require("@pxblue/colors");
var shared_1 = require("./shared");
exports.blueDarkTheme = __assign(__assign({}, react_native_paper_1.DefaultTheme), { dark: true, roundness: 4, fonts: react_native_paper_1.configureFonts(shared_1.fontConfig), colors: __assign(__assign({}, react_native_paper_1.DefaultTheme.colors), { primary: colors_1.blue[500], accent: colors_1.lightBlue[500], background: colors_1.darkBlack[100], surface: colors_1.black[900], error: colors_1.red[500], text: colors_1.gray[300], onBackground: colors_1.gray[300], onSurface: colors_1.gray[300], notification: colors_1.lightBlue[500] }) });
