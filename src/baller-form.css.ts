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

  #form-wrapper {
    border: 1px solid var(--md-sys-color-outline);
    padding: 1.5rem;
    border-radius: 5px;
  }

  .form-container {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 0.5fr 2fr 0fr; 
    gap: 1em 1em; 
    grid-template-areas: 
      "form-header form-header"
      "form-fields form-image"
      "form-footer form-footer"; 
  }
  .form-image { grid-area: form-image; }
  .form-fields { 
    grid-area: form-fields;
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
  }
  .form-header { grid-area: form-header; }
  .form-footer { 
    grid-area: form-footer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .form-image img {
    max-width: 100%;
  }

  .slide-hidden {
    display: none;
  }

  .slides-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    padding: 1em;
    overflow: hidden;
    position: relative;
  }

  .inline-label {
    display: flex;
    align-items: center;
  }
`;
