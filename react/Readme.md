# React Theme
```
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import * as PXBlueThemes from '@pxblue/themes/react';
...
<MuiThemeProvider theme={createMuiTheme(PXBlueThemes.blue)}>
    <App />
</MuiThemeProvider>
```
>**NOTE:** Our theme has been updated to use the new v2 Typography variants. You may see warning in your console output if you are still using the older variants. Read the [Migration Guide](https://material-ui.com/style/typography/#migration-to-typography-v2) to learn how to update your application.
