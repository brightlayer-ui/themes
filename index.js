/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

// import * as RThemes from './react/dist';
// import * as RNThemes from './react-native/dist';

// export const ReactThemes = {
//     blue: RThemes.blue,
//     blueDark: RThemes.blueDark
// };
// export const ReactNativeThemes = {
//     blue: RNThemes.blue
// };

"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactNativeThemes = exports.ReactThemes = void 0;

var RThemes = _interopRequireWildcard(require("./react/dist"));

var RNThemes = _interopRequireWildcard(require("./react-native/dist"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReactThemes = {
  blue: RThemes.blue,
  blueDark: RThemes.blueDark
};
exports.ReactThemes = ReactThemes;
var ReactNativeThemes = {
  blue: RNThemes.blue
};
exports.ReactNativeThemes = ReactNativeThemes;