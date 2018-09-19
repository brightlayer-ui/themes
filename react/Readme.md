# React Theme Readme

## Publishing to npm
make sure to run:
```
yarn build
```
before publishing to npm. This will transpile the src directory with babel and create a dist directory which is what gets published to npm. If you forget this step, you will publish a new version with the same old code (or no code).
