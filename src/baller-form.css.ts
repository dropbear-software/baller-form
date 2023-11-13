import { css } from 'lit';

export const componentStyles = css`
  :host {
    display: block;
    padding: 25px;
    color: var(--baller-form-color-on-background, #1b1c17);
    font-family: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-sys-color-primary: var(--baller-form-color-primary);
    --md-sys-color-on-primary: var(--baller-form-color-on-primary);
    --md-sys-color-error: var(--baller-form-color-error, #ba1a1a);
    --md-sys-color-error-container: var(--baller-form-color-error-container, #ffdad6);
    --md-sys-color-on-error: var(--baller-form-color-on-error: #ffffff);
    --md-sys-color-on-error-container: var(--baller-form-color-on-error-container: #410002);
    --md-ref-typeface-plain: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-select {
    --md-menu-item-label-text-color: var(--baller-form-color-secondary, #5a6148);
  }

  md-checkbox {
    --md-checkbox-outline-color: var(--baller-form-checkbox-outline-color, #45483c);
    --md-checkbox-selected-container-color: var(--baller-form-selected-container-color, #4b6700);
    --md-checkbox-selected-icon-color: var(--baller-form-selected-icon-color, #ffffff);
  }

  md-outlined-text-field {
    --md-outlined-text-field-focus-outline-color: var(--baller-form-text-field-focus-outline-color, #4b6700);
    --md-outlined-text-field-label-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-outlined-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-filled-button {
    --md-filled-button-container-color: var(--baller-form-filled-button-container-color, #4b6700);
    --md-filled-button-container-shape: var(--baller-form-filled-button-container-shape, 9999px);
  }

  md-outlined-select {
    --md-outlined-select-text-field-outline-color: var(--baller-form-outlined-select-text-field-outline-color, #76786b);
    --md-outlined-select-text-field-input-text-color: var(--baller-form-outlined-select-text-field-input-text-color, #1b1c17);
    --md-outlined-select-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-select::part(menu) {
    --md-menu-container-color: var(--baller-form-menu-background, #f4fbfa);
  }

  #form-wrapper {
    background-color: var(--baller-form-color-background, #fefcf4);
    border: 1px solid var(--baller-form-color-outline, #76786b);
    padding: 1.5rem;
    border-radius: 5px;
    margin: 0 auto;
  }

  .form-fields { 
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
  }
  .form-footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .inline-label {
    display: flex;
    align-items: center;
  }

  .hidden {
    display: none;
  }

  /* Typography */
  .display-small {
    font-family: var(--baller-form-display-headline-large-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-headline-large-font-weight, 700);
    font-size: var(--baller-form-display-headline-large-font-size, 36px);
    letter-spacing: var(--baller-form-display-headline-large-letter-spacing, 0px);
    line-height: var(--baller-form-display-headline-large-line-height, 44px);
    color: var(--baller-form-display-headline-large-color, #1b1c17);
  }

  .headline-small {
    font-family: var(--baller-form-display-headline-small-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-headline-small-font-weight, 100);
    font-size: var(--baller-form-display-headline-small-font-size, 24px);
    letter-spacing: var(--baller-form-display-headline-small-letter-spacing, 0px);
    line-height: var(--baller-form-display-headline-small-line-height, 32px);
    color: var(--baller-form-display-headline-small-color, #5a6148);
  }

  .label-medium {
    font-family: var(--baller-form-display-label-medium-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: var(--baller-form-display-label-medium-font-weight, 500);
    font-size: var(--baller-form-display-label-medium-font-size, 12px);
    letter-spacing: var(--baller-form-display-label-medium-letter-spacing, 0.5px);
    line-height: var(--baller-form-display-label-medium-line-height, 16px);
    color: var(--baller-form-display-label-medium-color, #1b1c17);
  }
`;
