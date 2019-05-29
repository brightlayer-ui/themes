/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';
import { typography, darkInput, darkBackground, darkAction } from './constants';

export const blueDarkTheme = 
{
	palette:{
	  primary: ThemeColors.blue,
	  secondary: ThemeColors.gray,
    error: ThemeColors.red,
    grey: ThemeColors.gray,
    background: darkBackground,
    text: {
      primary: ThemeColors.gray['300'],
      secondary: ThemeColors.black['300'],
      icon: ThemeColors.gray['300'],
      hint: ThemeColors.gray['300'],
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
    // APP BAR OVERRIDES
    MuiAppBar:{
      colorDefault:{
        color: ThemeColors.black['100'],
        backgroundColor: ThemeColors.black['A200']//'#13181b',//ThemeColors.black['900']
      },
      colorPrimary:{
        color: ThemeColors.black['50'],
        backgroundColor: ThemeColors.black['A700']
      },
      colorSecondary:{
        backgroundColor: ThemeColors.black['A100']
      }
    },
    
    // BACKDROP OVERRIDES
    MuiBackdrop:{
      root:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }
    },


    // BUTTON OVERRIDES
    MuiButton:{
      outlined:{
        borderColor: ThemeColors.black['100']
      },
      contained:{
        backgroundColor: ThemeColors.black['500'],
        color: ThemeColors.white['50'],
        '&:hover':{
          backgroundColor: ThemeColors.black['300'],
        }
      }
    },

    // CHIP OVERRIDES
    MuiChip:{
      root:{
        backgroundColor: ThemeColors.black['500']
      }
    },


    // DRAWER OVERRIDES
    MuiDrawer:{
      paper:{
        backgroundColor: ThemeColors.black['A400']
      },
      paperAnchorBottom:{
        backgroundColor: ThemeColors.black['900']
      }
    },

    // FAB OVERRIDES
    MuiFab:{
      root:{
        backgroundColor: ThemeColors.black['500'],
        color: ThemeColors.white['50'],
        '&:hover':{
          backgroundColor: ThemeColors.black['300'],
        }
      }
    },

    // ICON BUTTON OVERRIDES
    MuiIconButton:{
      root:{
        color: ThemeColors.black['500'],
      }
    },


    //LIST ITEM OVERRIDES (plus nav drawer)
    MuiListItem:{
      root:{
        color: ThemeColors.gray['300'],
        '&:hover':{
          backgroundColor: ThemeColors.black['A200']
         },
         // OVERRIDES FOR ACTIVE ROUTE IN SIDE NAVIGATION
         '&.routeActive':{
            color: ThemeColors.white['50'],
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
              backgroundColor: ThemeColors.blue['500'],
              borderRadius: '0px 24px 24px 0px'
            },
            '&.drawerOpen:hover:before':{
              backgroundColor: ThemeColors.blue['700'],
            },
            '& svg':{
              fill: ThemeColors.white['50'],
            }
         }
      }
    },

    // SNACKBAR OVERRIDES
    MuiSnackbar:{
      root:{
        backgroundColor: ThemeColors.black['A700'],
        color: ThemeColors.white['50']
      }
    },
    MuiSnackbarContent:{
      root:{
        backgroundColor: ThemeColors.black['A700'],
        color: ThemeColors.white['50']
      }
    },


    // TABLE OVERRIDES
    MuiTableCell:{
      head:{
        fontWeight: 600
      }
    },
    MuiTableHead:{
      root:{
        background: ThemeColors.black['A200']
      }
    },
    MuiTableRow:{
      root:{
        color: ThemeColors.gray['100'],
        "&$selected":{
          backgroundColor: ThemeColors.black['A400']
        }
      }      
    },

    // TABS OVERRIDES
    MuiTabs:{
      indicator:{
        backgroundColor: ThemeColors.blue['500']
      }
    }
  }
};