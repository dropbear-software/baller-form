import { css } from 'lit';

export const componentStyles = css`
  :host {
    display: block;
    padding: 25px;
    color: var(--baller-form-text-color, var(--md-sys-color-on-surface));
  }

  md-linear-progress {
    width: 100%;
  }

  .level0 {
    --md-elevation-level: 0;
  }

  .level1 {
    --md-elevation-level: 1;
  }

  .level2 {
    --md-elevation-level: 2;
  }

  .level3 {
    --md-elevation-level: 3;
  }

  .level4 {
    --md-elevation-level: 4;
  }

  .level5 {
    --md-elevation-level: 5;
  }

  #form-wrapper {
    border: 1px solid var(--md-sys-color-outline);
    padding: 1.5rem;
    border-radius: 5px;
  }

  .row {
    display: flex;
  }

  .row-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .form-elements-container {
    gap: 1rem;
  }
`;
