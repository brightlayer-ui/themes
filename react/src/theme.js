/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';

const typography = {
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
    useNextVariants: true
  }
};

const darkText = {
    primary: "#ffffff",
    secondary: "#ffffff",
    disabled: "rgba(255,255,255,.25)",
    hint: "#ffffff",
    icon: "#ffffff",
    divider: "rgba(255,255,255,.05)"
};

const input = {
  bottomLine: ThemeColors.black['500'],
  helperText: ThemeColors.black['500'],
  labelText: ThemeColors.black['500'],
  inputText: ThemeColors.black['500']
};

const darkInput = {
  bottomLine:"#ffffff",
  helperText:"#ffffff",
  labelText:"#ffffff",
  inputText:"#ffffff",
  disabled:"rgba(255, 255, 255, .25)"
};


const background = {
    default:  ThemeColors.gray['50'],
    paper: "#ffffff"
};

const darkBackground = {
  default:  ThemeColors.black['500'],
  paper:  ThemeColors.black['700'],
  appBar:  ThemeColors.black['900']
};

const action = {
  active:"rgba(0, 0, 0, .6)",
  disabled:"rgba(0, 0, 0, .25)"
};
const darkAction = {
  active:"#ffffff",
  disabled:"rgba(255, 255, 255, .25)"
};

export const blue = 
{
	palette:{
	  primary: ThemeColors.blue,
	  secondary: ThemeColors.lightBlue,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: {stepper: ThemeColors.blue['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const red = 
{
	palette:{
	  primary: ThemeColors.red,
	  secondary: ThemeColors.black,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: {stepper: ThemeColors.red['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const blueDark = 
{
	palette:{
	  primary: ThemeColors.black,
	  secondary: ThemeColors.blue,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: ThemeColors.black['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};

export const redDark = 
{
	palette:{
	  primary: ThemeColors.black,
	  secondary: ThemeColors.red,
    error: ThemeColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: ThemeColors.black['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};
