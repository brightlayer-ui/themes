import * as EatonColors from './EatonColors.js';

const typography = {
  typography:{
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
    //htmlFontSize: '10px',
    // body1:{
    //   //fontWeight: 800
    // },
    // button:{
    //   //fontStyle: 'italic',
    //   //fontWeight: 700,
    //   //textTransform: "lowercase"
    // }
  }
};

// const text = {
//     //primary: "#424e54",
//     //secondary: "#424e54",
//     //disabled: "",
//     //hint: "",
//     //icon: "",
//     //divider: "#424e54"
// };

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
  inputText:"#424e54",
  //disabled:"rgba(0, 0, 0, .42)"
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
    paper: "#ffffff",
    //appBar: "#909090",
    //contentFrame: "606060"
};

const darkBackground = {
  default: "#424e54",
  paper: "#333d43",
  appBar: "#1f1f1f",
  //contentFrame: "606060"
};

// const spacing = {
//   //unit: 30
// };

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
    background:{...background},
    action: {...action//,
      //active: EatonColors.blue['500'],
      //disabled: 'rgba(0,0,0,.25)'
    },
    line: {
      stepper: EatonColors.blue['500']
    },
    input: {...input},
    //text:{...text}
  },
  ...typography,
  // spacing:{...spacing},
  direction: "ltr"
};

export const red = 
{
	palette:{
	  primary: EatonColors.red,
	  secondary: EatonColors.black,
    error: EatonColors.red,
    background:{...background},
    action: {...action//,
      //active: EatonColors.blue['500'],
      //disabled: 'rgba(0,0,0,.25)'
    },
    line: {
      stepper: EatonColors.red['500']
    },
    input: {...input},
    //text:{...text}
  },
  ...typography,
  // spacing:{...spacing},
  direction: "ltr"
};

export const blueDark = 
{
	palette:{
	  primary: EatonColors.black,
	  secondary: EatonColors.blue,
    error: EatonColors.red,
    background:{...darkBackground},
    action: {...darkAction//,
      //active: EatonColors.blue['500'],
      //disabled: 'rgba(0,0,0,.25)'
    },
    line: {
      stepper: EatonColors.black['500']
    },
    input: {...darkInput},
    text:{...darkText}
  },
  ...typography,
  // spacing:{...spacing},
  direction: "ltr"
};

export const redDark = 
{
	palette:{
	  primary: EatonColors.black,
	  secondary: EatonColors.red,
    error: EatonColors.red,
    background:{...darkBackground},
    action: {...darkAction//,
      //active: EatonColors.blue['500'],
      //disabled: 'rgba(0,0,0,.25)'
    },
    line: {
      stepper: EatonColors.black['500']
    },
    input: {...darkInput},
    text:{...darkText}
  },
  ...typography,
  // spacing:{...spacing},
  direction: "ltr"
};