'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redDark = exports.blueDark = exports.red = exports.blue = undefined;

var _colors = require('@pxblue/colors');

var ThemeColors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var typography = {
  fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
  useNextVariants: true
}; /**
   Copyright (c) 2018-present, Eaton
    
   All rights reserved.
    
   This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
   **/

var darkText = {
  primary: "#ffffff",
  secondary: "#ffffff",
  disabled: "rgba(255,255,255,.25)",
  hint: "#ffffff",
  icon: "#ffffff",
  divider: "rgba(255,255,255,.05)"
};

var input = {
  bottomLine: ThemeColors.black['500'],
  helperText: ThemeColors.black['500'],
  labelText: ThemeColors.black['500'],
  inputText: ThemeColors.black['500']
};

var darkInput = {
  bottomLine: "#ffffff",
  helperText: "#ffffff",
  labelText: "#ffffff",
  inputText: "#ffffff",
  disabled: "rgba(255, 255, 255, .25)"
};

var background = {
  default: ThemeColors.gray['50'],
  paper: "#ffffff"
};

var darkBackground = {
  default: ThemeColors.black['500'],
  paper: ThemeColors.black['700'],
  appBar: ThemeColors.black['900']
};

var action = {
  active: "rgba(0, 0, 0, .6)",
  disabled: "rgba(0, 0, 0, .25)"
};
var darkAction = {
  active: "#ffffff",
  disabled: "rgba(255, 255, 255, .25)"
};

var blue = exports.blue = {
  palette: {
    primary: ThemeColors.blue,
    secondary: ThemeColors.lightBlue,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: { stepper: ThemeColors.blue['500'] },
    input: input
  },
  typography: typography,
  direction: "ltr"
};

var red = exports.red = {
  palette: {
    primary: ThemeColors.red,
    secondary: ThemeColors.black,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: { stepper: ThemeColors.red['500'] },
    input: input
  },
  typography: typography,
  direction: "ltr"
};

var blueDark = exports.blueDark = {
  palette: {
    primary: ThemeColors.black,
    secondary: ThemeColors.blue,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: { stepper: ThemeColors.black['500'] },
    input: input
  },
  typography: typography,
  direction: "ltr"
};

var redDark = exports.redDark = {
  palette: {
    primary: ThemeColors.black,
    secondary: ThemeColors.red,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: { stepper: ThemeColors.black['500'] },
    input: input
  },
  typography: typography,
  direction: "ltr"
};