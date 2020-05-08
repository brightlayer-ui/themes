## v5.0.0
Themes have been updated for use with Material UI v4+. If you are using version 3 of Material UI, please read their [update guide](https://material-ui.com/guides/migration-v3/). To use this package with PX Blue components, you must be using @pxblue/react-components v4+.

Notable changes in this theme:
- Theme palettes are simplified (3 color variants instead of 10).
    ```
    // before
    backgroundColor: theme.palette.primary[500]
    backgroundColor: theme.palette.primary[50]
    backgroundColor: theme.palette.primary[700]

    // now
    backgroundColor: theme.palette.primary.main
    backgroundColor: theme.palette.primary.light
    backgroundColor: theme.palette.primary.dark
    ```
- Older typography variants no longer supported
- Spacing function replaces value
    ```
    // before
    theme.spacing.unit * 5

    // now
    theme.spacing(5)

## v4.0.0
Themes have been broken out into their own packages. This package was originally part of @pxblue/themes. If you are switching to this package, you'll need to update some import statements (refer to the usage instructions in the README).

- Updates default text colors to match PX Blue palette
- Disables automatic UPPERCASE transform on buttons