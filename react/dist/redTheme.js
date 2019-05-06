'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redTheme = undefined;

var _colors = require('@pxblue/colors');

var ThemeColors = _interopRequireWildcard(_colors);

var _constants = require('./constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

var redTheme = exports.redTheme = {
  palette: {
    primary: ThemeColors.red,
    secondary: ThemeColors.black,
    error: ThemeColors.red,
    background: _constants.background,
    action: _constants.action,
    line: { stepper: ThemeColors.red['500'] },
    input: _constants.input
  },
  typography: _constants.typography,
  direction: "ltr",
  overrides: {
    // APP BAR OVERRIDES
    MuiAppBar: {
      colorDefault: {
        color: ThemeColors.black['500'],
        backgroundColor: ThemeColors.gray['100'] //ThemeColors.black['900']
      },
      colorSecondary: {
        backgroundColor: ThemeColors.gray['200']
      }
    }
  }
};