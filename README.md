# Baller Form

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i baller-form
```

## Usage

```html
<script type="module" src="path/to/baller-form-bundle.js"></script>

<baller-form></baller-form>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

Begin by running the following command to setup headless cross-browser testing support

```bash
npx playwright install --with-deps
```

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Building

To compile the Typescript run:

```bash
npm run build
```

To bundle everything together into a single file run:

```bash
npm run bundle
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
