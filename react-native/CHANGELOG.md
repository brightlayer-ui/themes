# Changelog

## v5.0.1 (Not Published)

### Changed

-   Updated peerDependencies to allow for use with react-native-paper version 4

## v5.0.0

-   Updated theme to comply with the [react-native-paper](https://callstack.github.io/react-native-paper/theming.html) specification.

** Breaking Changes **

-   Font weights available in the theme have changed. We now have `thin`, `light`, `regular`, and `medium` (previously `semiBold`). `Bold` and `ExtraBold` have been removed.
-   `onPrimary` color is no longer available
-   `sizes` property of the theme has been removed. If you need these size values, they are now exported from @pxblue/react-native-components.

## v4.0.0

Themes have been broken out into their own packages. This package was originally part of @pxblue/themes. If you are switching to this package, you'll need to update some import statements (refer to the usage instructions in the README).
