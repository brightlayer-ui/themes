import * as EatonColors from './EatonColors';

const typography = {
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
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
  bottomLine:"#424e54",
  helperText:"#424e54",
  labelText:"#424e54",
  inputText:"#424e54"
};

const darkInput = {
  bottomLine:"#ffffff",
  helperText:"#ffffff",
  labelText:"#ffffff",
  inputText:"#ffffff",
  disabled:"rgba(255, 255, 255, .25)"
};


const background = {
    default: "#eef0f0",
    paper: "#ffffff"
};

const darkBackground = {
  default: "#424e54",
  paper: "#333d43",
  appBar: "#1f1f1f"
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
	  primary: EatonColors.blue,
	  secondary: EatonColors.lightBlue,
    error: EatonColors.red,
    background: background,
    action: action,
    line: {stepper: EatonColors.blue['500']},
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
	  primary: EatonColors.red,
	  secondary: EatonColors.black,
    error: EatonColors.red,
    background: background,
    action: action,
    line: {stepper: EatonColors.red['500']},
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
	  primary: EatonColors.black,
	  secondary: EatonColors.blue,
    error: EatonColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: EatonColors.black['500']},
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
	  primary: EatonColors.black,
	  secondary: EatonColors.red,
    error: EatonColors.red,
    background: darkBackground,
    action: action,
    line: {stepper: EatonColors.black['500']},
    input: input
  },
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif'
  },
  direction: "ltr"
};