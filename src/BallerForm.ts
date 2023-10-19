import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { typographyBaseline } from "./design-system.css.js";
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';

/**
 * @tagname baller-form
 * 
 * @summary The Baller League Player Registration Form
 * 
 * @property {number} counter - some description
 * @property {string} header - some description
 *
 * @cssproperty --baller-form-text-color - Controls the color of the text
 */
export class BallerForm extends LitElement {
  static styles = [
    typographyBaseline,
    componentStyles
  ];

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  private __increment() {
    this.counter += 1;
  }

  protected render() {
    return html`
      <h2 class="title-large">${this.header} Nr. ${this.counter}!</h2>
      <md-filled-button @click=${this.__increment}>Increment</md-filled-button>
    `;
  }
}
