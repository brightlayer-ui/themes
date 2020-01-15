"use strict";
/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
var ThemeColors = require("@pxblue/colors");
exports.typography = {
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
    useNextVariants: true
};
exports.darkText = {
    primary: ThemeColors.gray['300'],
    secondary: ThemeColors.black['300'],
    icon: ThemeColors.gray['300'],
    hint: ThemeColors.gray['300'],
};
exports.input = {
    bottomLine: ThemeColors.black['500'],
    helperText: ThemeColors.black['500'],
    labelText: ThemeColors.black['500'],
    inputText: ThemeColors.black['500']
};
exports.darkInput = {
    bottomLine: ThemeColors.black['500'],
    helperText: ThemeColors.black['500'],
    labelText: ThemeColors.black['500'],
    inputText: ThemeColors.black['500']
};
exports.background = {
    default: ThemeColors.gray['50'],
    paper: ThemeColors.white['50']
};
exports.darkBackground = {
    default: ThemeColors.black['A200'],
    paper: ThemeColors.black['900'],
    appBar: ThemeColors.black['200']
};
exports.action = {
    active: "rgba(0, 0, 0, .6)",
    disabled: "rgba(0, 0, 0, .25)"
};
exports.darkAction = {
    active: ThemeColors.gray['300']
};
