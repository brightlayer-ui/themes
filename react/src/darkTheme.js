/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';
import { typography, darkInput, darkBackground, darkAction } from './constants';


export const darkTheme = 
{
	palette:{
	  primary: ThemeColors.blue,
	  secondary: ThemeColors.gray,
    error: ThemeColors.red,
    grey: ThemeColors.gray,
    background: darkBackground,
    text: {
      primary: ThemeColors.gray['100'],
      secondary: ThemeColors.black['100'],
      icon: ThemeColors.gray['100'],
      hint: ThemeColors.gray['100'],
      //disabled: ThemeColors.gray['500']
    },
    action: darkAction,
    line: {stepper: ThemeColors.black['500']},
    input: darkInput,
    type: 'dark'
  },
  typography: typography,
  direction: "ltr",
  overrides:{
    // BUTTON OVERRIDES
    MuiButton:{
      containedPrimary:{
        backgroundColor: ThemeColors.blue['400']
      },
      outlinedPrimary:{
        borderColor: ThemeColors.blue['400'],
        color: ThemeColors.blue['400']
      }
    },

    // APP BAR OVERRIDES
    MuiAppBar:{
      colorDefault:{
        color: ThemeColors.gray['100'],
        backgroundColor: '#13181b',//ThemeColors.black['900']
      },
      colorSecondary:{
        backgroundColor: ThemeColors.black['900']
      }
    },

    MuiTableRow:{
      root:{
        '&.striped:nth-of-type(even)': {
          backgroundColor: ThemeColors.black['900'],
        }
      }
    },

    MuiTableHead:{
      root:{
        background: ThemeColors.black['900']
      }
    },

    //LIST ITEM OVERRIDES
    MuiListItem:{
      root:{
        color: ThemeColors.gray['50'],
        '&:hover':{
          backgroundColor: ThemeColors.black['900']//'rgba(255, 255, 255, 0.07)'
         },
         // OVERRIDES FOR ACTIVE ROUTE IN SIDE NAVIGATION
         '&.routeActive':{
            color: ThemeColors.blue['100'],
            position: 'relative',
            '&:hover': {
              backgroundColor: 'transparent'
            },
            '&:before':{
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
            '&.drawerOpen:hover:before':{
              backgroundColor: ThemeColors.black['700'],
            },
            '& svg':{
              fill: ThemeColors.blue['100']
            }
         }
      },

    }
  }
};