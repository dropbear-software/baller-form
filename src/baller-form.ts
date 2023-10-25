import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/elevation/elevation.js';

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

  @property({ type: Number }) progress = 0.33;

  @query('md-filled-button[type="submit"]')
  submitButton!: MdFilledButton;

  @query('form')
  formElement!: HTMLFormElement;

  protected render() {
    return html`
      <section id="form-wrapper" class="level5">
        <md-elevation></md-elevation>
        <form>
          <p class="label-medium">Schritt 1 von 3</p>
          <md-linear-progress .value=${this.progress}></md-linear-progress>
          ${this._renderStepOne()}
        </form>
      </section>
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

  private _renderStepOne(){
    return html`
    <div class="row">
      <div class="column">
        <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
        <h3 class="headline-large">XING baller League</h3>
        <div class="form-elements-container column">
          <md-outlined-text-field
            label="Vorname"
            required
            autocomplete="given-name"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Nachname"
            required
            autocomplete="family-name"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Email"
            required
            autocomplete="email"
            type="email"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Phone"
            autocomplete="tel"
            type="tel"
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Geburtsdatum"
            required
            autocomplete="bday"
            type="date"
          ></md-outlined-text-field>
        </div>
      </div>
      <div class="column"></div>
    </div>
    <div class="row-reverse">
      <md-filled-button @click=${this._handleSubmission} type="submit">Weiter</md-filled-button>
    </div>
    `;
  }
}
