import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';

import { typographyBaseline } from "./design-system.css.js";
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';

/**
 * @tagname baller-form
 * 
 * @summary The Baller League Player Registration Form
 * 
 * @property {number} progress - A value between 0 and 1 representing the progress of the application process
 *
 * @cssproperty --baller-form-text-color - Controls the color of the text
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  static styles = [
    typographyBaseline,
    componentStyles
  ];

  @query('md-filled-button[type="submit"]')
  submitButton!: MdFilledButton;

  @property({ type: Number }) progress = 0;

  private _handleSubmission() {
    this.progress += 1;
  }

  protected render() {
    return html`
      <md-filled-button @click=${this._handleSubmission} type="submit">Submit</md-filled-button>
    `;
  }
}
