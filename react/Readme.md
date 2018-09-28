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