/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';

export const typography = {
  fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
  useNextVariants: true
};
export const darkText = {
    primary: "#ffffff",
    secondary: "#ffffff",
    disabled: "rgba(255,255,255,.25)",
    hint: "#ffffff",
    icon: "#ffffff",
    divider: "rgba(255,255,255,.05)"
};
export const input = {
  bottomLine: ThemeColors.black['500'],
  helperText: ThemeColors.black['500'],
  labelText: ThemeColors.black['500'],
  inputText: ThemeColors.black['500']
};
export const darkInput = {
    bottomLine: ThemeColors.black['500'],
    helperText: ThemeColors.black['500'],
    labelText: ThemeColors.black['500'],
    inputText: ThemeColors.black['500']
};
export const background = {
    default:  ThemeColors.gray['50'],
    paper: "#ffffff"
};
export const darkBackground = {
    default: '#182022',
    paper:  '#0b0e0f',
    appBar:  '#13181b'
};
export const action = {
  active:"rgba(0, 0, 0, .6)",
  disabled:"rgba(0, 0, 0, .25)"
};
export const darkAction = {
    active: ThemeColors.gray['50']//"rgba(255, 255, 255, 0.6)",
    //disabled: "rgba(255, 255, 255, 0.25)"
};
