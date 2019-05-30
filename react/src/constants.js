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
  primary: ThemeColors.gray['300'],
  secondary: ThemeColors.black['300'],
  icon: ThemeColors.gray['300'],
  hint: ThemeColors.gray['300'],
  //divider: "rgba(255,255,255,.05)",
  //disabled: ThemeColors.gray['500']
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
    paper: ThemeColors.white['50']
};
export const darkBackground = {
    default: ThemeColors.black['A200'],
    paper:  ThemeColors.black['900'],
    appBar:  ThemeColors.black['200']
};
export const action = {
  active:"rgba(0, 0, 0, .6)",
  disabled:"rgba(0, 0, 0, .25)"
};
export const darkAction = {
    active: ThemeColors.gray['300']
};
