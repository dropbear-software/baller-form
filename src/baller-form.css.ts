import { css } from 'lit';

export const componentStyles = css`
  :host {
    display: block;
    padding: 25px;
    color: var(--baller-form-color-on-background, #1b1c17);
    font-family: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);

    --md-sys-color-primary: var(--baller-form-color-primary);
    --md-sys-color-on-primary: var(--baller-form-color-on-primary);
    --md-sys-color-primary-container: var(--baller-form-color-primary-container);
    --md-sys-color-on-primary-container: var(--baller-form-color-on-primary-container);

    --md-sys-color-error: var(--baller-form-color-error, #ba1a1a);
    --md-sys-color-on-error: var(--baller-form-color-on-error: #ffffff);
    --md-sys-color-error-container: var(--baller-form-color-error-container, #ffdad6);
    --md-sys-color-on-error-container: var(--baller-form-color-on-error-container: #410002);

    --md-sys-color-secondary: var(--baller-form-color-secondary);
    --md-sys-color-on-secondary: var(--baller-form-color-on-secondary);
    --md-sys-color-secondary-container: var(--baller-form-color-secondary-container);
    --md-sys-color-on-secondary-container: var(--baller-form-color-on-secondary-container);

    --md-sys-color-tertiary: var(--baller-form-color-tertiary);
    --md-sys-color-on-tertiary: var(--baller-form-color-on-tertiary);
    --md-sys-color-tertiary-container: var(--baller-form-color-tertiary-container);
    --md-sys-color-on-tertiary-container: var(--baller-form-color-on-tertiary-container);

    --md-sys-color-surface: var(--baller-form-color-surface);
    --md-sys-color-on-surface: var(--baller-form-color-on-surface);
    --md-sys-color-surface-container: var(--baller-form-color-surface-container);
    --md-sys-color-on-surface-container: var(--baller-form-color-on-surface-container);

    --md-ref-typeface-plain: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-filled-select {
    --md-filled-select-text-field-container-color: #F4F4F5;
    --md-filled-select-text-field-input-text-color: #5E737D;
    --md-filled-select-text-field-label-text-color: #5E737D;
    --md-menu-item-label-text-color: var(--baller-form-color-secondary, #5E737D);
  }

  md-checkbox {
    
    --md-checkbox-outline-color: #BCC9D1;
    --md-checkbox-selected-container-color: var(--baller-form-selected-container-color, #4b6700);
    --md-checkbox-selected-icon-color: var(--baller-form-selected-icon-color, #ffffff);
  }

  md-filled-text-field {
    --md-filled-text-field-container-color: #F4F4F5;
    --md-filled-text-field-input-text-color: #5E737D;
    --md-filled-field-label-text-color: #5E737D;
    --md-filled-field-hover-label-text-color: #5E737D;
    --md-filled-field-hover-input-text-color: #5E737D;
    --md-filled-text-field-focus-outline-color: var(--baller-form-text-field-focus-outline-color, #4b6700);
    --md-filled-text-field-label-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    --md-filled-text-field-input-text-font: var(--baller-form-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
  }

  md-outlined-button {
    --md-outlined-button-label-text-size: 18px;
    --md-outlined-button-label-text-weight: 700;
    --md-outlined-button-outline-width: 2px;
    --md-outlined-button-outline-color: var(--baller-form-color-primary);
    --md-outlined-button-label-text-color: var(--baller-form-color-primary);
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
    /* border: 1px solid var(--baller-form-color-outline, #76786b); */
    padding: 1.5rem;
    /* border-radius: 5px; */
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

  .invisible-icon {
    height: 18px;
    width: 18px;
  }

  /* Typography */
  .display-small {
    font-family: var(--baller-form-display-headline-large-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 700;
    font-size: 32px;
    letter-spacing: var(--baller-form-display-headline-large-letter-spacing, 0px);
    line-height: 38px;
    color: #1D2124;
  }

  .headline-small {
    font-family: var(--baller-form-display-headline-small-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 400;
    font-size: 18px;
    letter-spacing: var(--baller-form-display-headline-small-letter-spacing, 0px);
    line-height: 27px;
    color: #1D2124;
  }

  .label-medium {
    font-family: var(--baller-form-display-label-medium-font-family, "Open Sans", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: var(--baller-form-display-label-medium-letter-spacing, 0.5px);
    line-height: 20px;
    color: #1D2124;
  }

  /* Tooltip */
  .field-with-tooltip {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tooltip-toggle {
    cursor: pointer;
    position: relative;
  }

  .tooltip-toggle svg {
    height: 18px;
    width: 18px;
  }
  
  .tooltip-toggle::before {
    position: absolute;
    top: -100px;
    left: -250px;
    background-color: var(--baller-form-color-surface-variant);
    border-radius: 5px;
    color: #fff;
    content: attr(aria-label);
    padding: 1rem;
    text-transform: none;
    transition: all 0.5s ease;
    min-width: 160px;
    z-index:50;
    border: 1px solid var(--baller-form-color-outline);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  
  .tooltip-toggle::before, .tooltip-toggle::after {
    color: var(--baller-form-color-on-surface-variant);
    opacity: 0;
    pointer-events: none;
    text-align: center;
  }
  
  .tooltip-toggle:focus::before, .tooltip-toggle:focus::after, .tooltip-toggle:hover::before, .tooltip-toggle:hover::after {
    opacity: 1;
    transition: all 0.75s ease;
  }
`;
