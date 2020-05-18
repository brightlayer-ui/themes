import { create } from '@storybook/theming/create';
import * as colors from '@pxblue/colors';

export const pxblueTheme = create({
    base: 'light',

    colorPrimary: colors.blue[500],
    colorSecondary: colors.white[500],

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: colors.gray[100],
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: colors.black[500],
    textInverseColor: 'white',

    // Toolbar default and active colors
    barTextColor: colors.blue[100],
    barSelectedColor: colors.white[50],
    barBg: colors.blue[500],

    // Form colors
    inputBg: colors.white[50],
    inputBorder: colors.gray[100],
    inputTextColor: colors.black[500],
    inputBorderRadius: 4,

    /*
    // This section needs to be added within individual storybook applications.

    brandTitle: 'PX Blue Angular Component Library',
    brandImage: 'https://pxblue.github.io/static/media/pxblue.d5fa6462.svg',
    brandUrl: 'https://pxblue.github.io',
     */

    // This section can be used to apply classes to our Markdown documents.
    addonNotesTheme: {
        a: {
            color: colors.blue[500]+'!important'
        },
        h1: {
            color: colors.blue[500],
            fontWeight: '400!important'
        },
        h2: {
            color: colors.blue[500],
        },
        h3: {
            color: colors.blue[500],
        },
        h4: {
            color: colors.blue[500],
        },
        h5: {
            color: colors.blue[500],
        },
        h6: {
            color: colors.blue[500]
        },
        table: {
            width: '100%'
        }
    }
});
