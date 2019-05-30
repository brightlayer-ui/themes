'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkAction = exports.action = exports.darkBackground = exports.background = exports.darkInput = exports.input = exports.darkText = exports.typography = undefined;

var _colors = require('@pxblue/colors');

var ThemeColors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var typography = exports.typography = {
  fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
  useNextVariants: true
}; /**
   Copyright (c) 2018-present, Eaton
    
   All rights reserved.
    
   This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
   **/

var darkText = exports.darkText = {
  primary: ThemeColors.gray['300'],
  secondary: ThemeColors.black['300'],
  icon: ThemeColors.gray['300'],
  hint: ThemeColors.gray['300']
  //divider: "rgba(255,255,255,.05)",
  //disabled: ThemeColors.gray['500']
};
var input = exports.input = {
  bottomLine: ThemeColors.black['500'],
  helperText: ThemeColors.black['500'],
  labelText: ThemeColors.black['500'],
  inputText: ThemeColors.black['500']
};
var darkInput = exports.darkInput = {
  bottomLine: ThemeColors.black['500'],
  helperText: ThemeColors.black['500'],
  labelText: ThemeColors.black['500'],
  inputText: ThemeColors.black['500']
};
var background = exports.background = {
  default: ThemeColors.gray['50'],
  paper: ThemeColors.white['50']
};
var darkBackground = exports.darkBackground = {
  default: ThemeColors.black['A200'],
  paper: ThemeColors.black['900'],
  appBar: ThemeColors.black['200']
};
var action = exports.action = {
  active: "rgba(0, 0, 0, .6)",
  disabled: "rgba(0, 0, 0, .25)"
};
var darkAction = exports.darkAction = {
  active: ThemeColors.gray['300']
};