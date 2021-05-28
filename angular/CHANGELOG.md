# Changelog

## v6.1.0 (May 28, 2021)

### Added

-   Added support for `<pxb-user-menu>` bottomsheet overlay.

## v6.0.3 (April 8, 2021)

### Fixed

-   Fixed disabled icon & text color for `<pxb-info-list-item>` and `<mat-menu-item>`.
-   Fixed dark-mode active item text color for `<pxb-drawer>` rail variant.

## v6.0.2 (April 5, 2021)

### Fixed

-   Fixed default `<pxb-drawer-header>` and `<pxb-dropdown-toolbar>` background color.

## v6.0.1 (March 31, 2021)

### Added

-   Added `<pxb-score-card>` badge background theme.

### Fixed

-   Fixed missing navigation rail active-item font-color bug.
-   Fixed missing navigation rail hover highlight.

### Changed

-   Adjusted `<mat-form-field>` blue-theme colors.
-   Updated deprecated `typeface-open-sans` dependency to `@fontsource/open-sans`.
-   Changed several dark mode defaults.
-   Updated `<pxb-empty-state>` default colors.
-   Updated CSS rule-specificity for some default styles. If you have been using custom style overrides, check to make sure that your rules are specific enough to take precedence over the defaults.

## v5.2.0 (December 10, 2020)

### Added

-   Add theme for `<pxb-mobile-stepper>`.

### Changed

-   Update `filled` input field light-themed background color.
-   Update `<pxb-drawer>` theme.

## v5.1.2 (September 30, 2020)

### Added

-   Add style rules for `<mat-stepper>`.

### Changed

-   Rename class used to highlight `<pxb-drawer>` selection.

### Removed

-   Remove `<mat-button>` uppercase default behavior.

## v5.1.1 (August 14, 2020)

### Fixed

-   Fix an issue with with setting a color for `<pxb-info-list-item>` text.

## v5.1.0 (July 22, 2020)

### Added

-   Add UserMenu theme.

## v5.0.0 (June 30, 2020)

### Changed

-   Update theme definitions to use the [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) version 3.0.0.
<!-- - Update color schemes to address accessibility concerns. -->
-   Update default typography styles for consistency.

## v4.0.0 (February 24, 2020)

### Changed

Themes have been broken out into their own packages. This package was originally part of @pxblue/themes. If you are switching to this package, you'll need to update some import statements (refer to the usage instructions in the README).

-   Includes minor color adjustments for outlined buttons in blue theme and cards in dark theme.
