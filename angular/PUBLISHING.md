# Publishing Instructions

To update the version number, edit the version in `angular/package.json`.

To publish a new package through NPM, run the following commands from the root folder:

```
npm publish --tag <alpha | beta>
```

> The above command should only be run for `alpha` or `beta` packages. This repo's CircleCI will automatically publish latest packages from the master branch.
