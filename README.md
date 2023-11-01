# Baller Form

The Baller League Sign up application form implemented as a self contained HTML Web Component

## Installation

```bash
npm i baller-form
```

## Usage

```html
<!-- NOTE: You can see an example in demo/index.html -->
<script type="module" src="path/to/baller-form-bundle.js"></script>

<baller-form 
  site-key="RECAPTCHA_V3_SITE_KEY" 
  captcha-endpoint="RECAPTCHA_TOKEN_VALIDATION_ENDPOINT"
  braze-endpoint="BRAZE_SERVER_SIDE_ENDPOINT"
>
</baller-form>

<!-- Elements can be styled using the following CSS custom property tokens -->
<style>
  baller-form {
    /* Component Color Palette */
    --baller-form-color-primary: #4b6700;
    --baller-form-color-on-primary: #ffffff;
    --baller-form-color-primary-container: #c6f16d;
    --baller-form-color-on-primary-container: #141f00;

    --baller-form-color-secondary: #5a6148;
    --baller-form-color-on-secondary: #ffffff;
    --baller-form-color-secondary-container: #dee6c5;
    --baller-form-color-on-secondary-container: #171e09;

    --baller-form-color-tertiary: #396660;
    --baller-form-color-on-tertiary: #ffffff;
    --baller-form-color-tertiary-container: #bcece4;
    --baller-form-color-on-tertiary-container: #00201d;

    --baller-form-color-error: #ba1a1a;
    --baller-form-color-error-container: #ffdad6;
    --baller-form-color-on-error: #ffffff;
    --baller-form-color-on-error-container: #410002;

    --baller-form-color-surface: #fefcf4;
    --baller-form-color-on-surface: #1b1c17;
    --baller-form-color-surface-variant: #e2e4d4;
    --baller-form-color-on-surface-variant: #45483c;

    --baller-form-color-outline: #76786b;
    --baller-form-color-shadow: #000000;
    --baller-form-color-surface-tint: #4b6700;
    --baller-form-color-outline-variant: #c6c8b9;
    --baller-form-color-scrim: #000000;

    /* Overall styles */
    --baller-form-color-background: var(--baller-form-color-surface);
    --baller-form-color-on-background: var(--baller-form-color-on-surface);

    /* Checkbox styling */
    --baller-form-checkbox-outline-color: var(--baller-form-color-on-surface-variant);
    --baller-form-selected-container-color: var(--baller-form-color-primary);
    --baller-form-selected-icon-color: var(--baller-form-color-on-primary);

    /* Textfield Styling */
    --baller-form-text-field-focus-outline-color: var(--baller-form-color-primary);

    /* Button Styling */
    --baller-form-filled-button-container-color: var(--baller-form-color-primary);
    --baller-form-filled-button-container-shape: 9999px;

    /* Select Menu */
    --baller-form-outlined-select-text-field-outline-color: var(--baller-form-color-outline);
    --baller-form-outlined-select-text-field-input-text-color: var(--baller-form-color-on-surface);
    --baller-form-menu-background: var(--baller-form-color-surface-variant);

    /* Typography */
    --baller-form-font-family: "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif;
    
    --baller-form-display-headline-large-font-size: 36px;
    --baller-form-display-headline-large-font-weight: 700;
    --baller-form-display-headline-large-line-height: 44px;
    --baller-form-display-headline-large-letter-spacing: 0px;
    --baller-form-display-headline-large-color: var(--baller-form-color-on-background);
    --baller-form-display-headline-large-font-family: var(--baller-form-font-family);

    --baller-form-display-headline-small-font-size: 24px;
    --baller-form-display-headline-small-font-weight: 100;
    --baller-form-display-headline-small-line-height: 32px;
    --baller-form-display-headline-small-letter-spacing: 0px;
    --baller-form-display-headline-small-color: var(--baller-form-color-secondary);
    --baller-form-display-headline-small-font-family: var(--baller-form-font-family);

    --baller-form-display-label-medium-font-size: 12px;
    --baller-form-display-label-medium-font-weight: 500;
    --baller-form-display-label-medium-line-height: 16px;
    --baller-form-display-label-medium-letter-spacing: 0.5px;
    --baller-form-display-label-medium-color: var(--baller-form-color-on-background);
    --baller-form-display-label-medium-font-family: var(--baller-form-font-family);
  }
</style>
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
