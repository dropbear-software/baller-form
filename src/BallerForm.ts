import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--baller-form-text-color, var(--md-sys-color-on-surface));
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  private __increment() {
    this.counter += 1;
  }

  protected render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
