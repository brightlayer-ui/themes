/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export declare const blueDarkTheme: {
    palette: {
        primary: any;
        secondary: any;
        error: any;
        grey: any;
        background: {
            default: any;
            paper: any;
            appBar: any;
        };
        text: {
            primary: any;
            secondary: any;
            icon: any;
            hint: any;
        };
        action: {
            active: any;
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
        type: string;
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
            colorPrimary: {
                color: any;
                backgroundColor: any;
            };
            colorSecondary: {
                backgroundColor: any;
            };
        };
        MuiBackdrop: {
            root: {
                backgroundColor: string;
            };
        };
        MuiButton: {
            outlined: {
                borderColor: any;
            };
            contained: {
                backgroundColor: any;
                color: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
        };
        MuiChip: {
            root: {
                backgroundColor: any;
            };
        };
        MuiDrawer: {
            paper: {
                backgroundColor: any;
            };
            paperAnchorBottom: {
                backgroundColor: any;
            };
        };
        MuiFab: {
            root: {
                backgroundColor: any;
                color: any;
                '&:hover': {
                    backgroundColor: any;
                };
            };
        };
        MuiIconButton: {
            root: {
                color: any;
            };
        };
        MuiListItem: {
            root: {
                color: any;
                '&:hover': {
                    backgroundColor: any;
                };
                '&.routeActive': {
                    color: any;
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
        MuiSnackbarContent: {
            root: {
                backgroundColor: any;
                color: any;
            };
        };
        MuiTableCell: {
            head: {
                fontWeight: number;
            };
        };
        MuiTableHead: {
            root: {
                background: any;
            };
        };
        MuiTableRow: {
            root: {
                color: any;
                "&$selected": {
                    backgroundColor: any;
                };
            };
        };
        MuiTabs: {
            indicator: {
                backgroundColor: any;
            };
        };
    };
};
