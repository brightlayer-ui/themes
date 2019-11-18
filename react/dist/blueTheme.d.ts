/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export declare const blueTheme: {
    palette: {
        primary: any;
        secondary: any;
        error: any;
        background: {
            default: any;
            paper: any;
        };
        action: {
            active: string;
            disabled: string;
        };
        line: {
            stepper: any;
        };
        input: {
            bottomLine: any;
            helperText: any;
            labelText: any;
            inputText: any;
        };
    };
    typography: {
        fontFamily: string;
        useNextVariants: boolean;
    };
    direction: string;
    overrides: {
        MuiAppBar: {
            colorDefault: {
                color: any;
                backgroundColor: any;
            };
            colorSecondary: {
                backgroundColor: any;
            };
        };
        MuiTabs: {
            indicator: {
                backgroundColor: any;
            };
        };
        MuiListItem: {
            root: {
                color: any;
                '&:hover': {
                    backgroundColor: string;
                };
                '&.routeActive': {
                    position: string;
                    '&:hover': {
                        backgroundColor: string;
                    };
                    '&:before': {
                        content: string;
                        zIndex: number;
                        position: string;
                        height: string;
                        width: string;
                        left: number;
                        top: number;
                        backgroundColor: any;
                        borderRadius: string;
                    };
                    '&.drawerOpen:hover:before': {
                        backgroundColor: any;
                    };
                    '& svg': {
                        fill: any;
                    };
                };
            };
        };
    };
};
