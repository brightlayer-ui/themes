'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = undefined;

var _colors = require('@pxblue/colors');

var ThemeColors = _interopRequireWildcard(_colors);

var _constants = require('./constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

var darkTheme = exports.darkTheme = {
  palette: {
    primary: ThemeColors.blue,
    secondary: ThemeColors.gray,
    error: ThemeColors.red,
    grey: ThemeColors.gray,
    background: _constants.darkBackground,
    text: {
      primary: ThemeColors.gray['100'],
      secondary: ThemeColors.black['100'],
      icon: ThemeColors.gray['100'],
      hint: ThemeColors.gray['100']
      //disabled: ThemeColors.gray['500']
    },
    action: _constants.darkAction,
    line: { stepper: ThemeColors.black['500'] },
    input: _constants.darkInput,
    type: 'dark'
  },
  typography: _constants.typography,
  direction: "ltr",
  overrides: {
    // BUTTON OVERRIDES
    MuiButton: {
      containedPrimary: {
        backgroundColor: ThemeColors.blue['400']
      },
      outlinedPrimary: {
        borderColor: ThemeColors.blue['400'],
        color: ThemeColors.blue['400']
      }
    },

    // APP BAR OVERRIDES
    MuiAppBar: {
      colorDefault: {
        color: ThemeColors.gray['100'],
        backgroundColor: '#13181b' //ThemeColors.black['900']
      },
      colorSecondary: {
        backgroundColor: ThemeColors.black['900']
      }
    },

    MuiTableRow: {
      root: {
        '&.striped:nth-of-type(even)': {
          backgroundColor: ThemeColors.black['900']
        }
      }
    },

    MuiTableHead: {
      root: {
        background: ThemeColors.black['900']
      }
    },

    //LIST ITEM OVERRIDES
    MuiListItem: {
      root: {
        color: ThemeColors.gray['50'],
        '&:hover': {
          backgroundColor: ThemeColors.black['900'] //'rgba(255, 255, 255, 0.07)'
        },
        // OVERRIDES FOR ACTIVE ROUTE IN SIDE NAVIGATION
        '&.routeActive': {
          color: ThemeColors.blue['100'],
          position: 'relative',
          '&:hover': {
            backgroundColor: 'transparent'
          },
          '&:before': {
            content: '""',
            zIndex: -1,
            position: 'absolute',
            height: '100%',
            width: 'calc(100% - 8px)',
            left: 0,
            top: 0,
            backgroundColor: ThemeColors.black['900'],
            borderRadius: '0px 24px 24px 0px'
          },
          '&.drawerOpen:hover:before': {
            backgroundColor: ThemeColors.black['700']
          },
          '& svg': {
            fill: ThemeColors.blue['100']
          }
        }
      }

    }
  }
};