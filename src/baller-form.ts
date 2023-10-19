import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/outlined-text-field.js';

/**
 * @tagname baller-form
 *
 * @summary The Baller League Player Registration Form
 *
 * @property {number} progress - A value between 0 and 1 representing the progress of the application process
 *
 * @cssproperty --baller-form-text-color - Controls the color of the text
 *
 * @fires {CustomEvent} completed-application - When the form is successfully submitted
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  static styles = [typographyBaseline, componentStyles];

  @property({ type: Number }) progress = 0;

  @query('md-filled-button[type="submit"]')
  submitButton!: MdFilledButton;

  @query('form')
  formElement!: HTMLFormElement;

  protected render() {
    return html`
      <form>
        <md-outlined-text-field
          label="First Name"
          required
          autocomplete="given-name"
        ></md-outlined-text-field>
        <md-outlined-text-field
          label="Family Name"
          required
          autocomplete="family-name"
        ></md-outlined-text-field>
        <md-outlined-text-field
          label="Email"
          required
          autocomplete="email"
          type="email"
        ></md-outlined-text-field>
        <md-filled-button @click=${this._handleSubmission} type="submit"
          >Submit</md-filled-button
        >
      </form>
    `;
  }

  private _handleSubmission(e: SubmitEvent) {
    // Set the progress to 100%
    this.progress = 1;

    // Only submit the form if it is valid
    e.preventDefault();
    if (this.formElement.checkValidity()) {
      this.dispatchEvent(new CustomEvent('completed-application'));
      this.formElement.submit();
    }
  }
}
