import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/elevation/elevation.js';

import {
  AnimationTuple,
  SLIDE_LEFT_IN,
  SLIDE_LEFT_OUT,
  SLIDE_RIGHT_IN,
  SLIDE_RIGHT_OUT,
} from "./constants.js";

/**
 * @tagname baller-form
 *
 * @summary The Baller League Player Registration Form
 *
 * @property {number} currentStep - The current step of the form the user is completing
 *
 * @cssproperty --baller-form-text-color - Controls the color of the text
 *
 * @fires {CustomEvent} completed-application - When the form is successfully submitted
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  static styles = [typographyBaseline, componentStyles];

  @property({ type: Number }) slideIndex = 0;

  @query('md-filled-button[type="submit"]')
  submitButton!: MdFilledButton;

  @query('form')
  formElement!: HTMLFormElement;

  @queryAll('[data-slide]')
  private readonly slideElements!: HTMLElement[];

  protected render() {
    return html`
      <section id="form-wrapper" class="level5">
        <md-elevation></md-elevation>
        <form>
          <p class="label-medium">Schritt ${this.slideIndex + 1} von 3</p>
          <md-linear-progress .value=${this.slideIndex + 1  / 3}></md-linear-progress>
          ${this._renderStepOne()}
          ${this._renderStepTwo()}
        </form>
      </section>
    `;
  }

  override firstUpdated() {
    this.initializeSlides();
  }

  override updated(changedProperties: PropertyValues<this>): void {
    // Not covered in the video, but if you want to drive animations from the
    // 'slideindex' attribute and property, we can calculate the animation in
    // the 'updated' lifecycle callback.
    if (changedProperties.has("slideIndex")) {
      const oldSlideIndex = changedProperties.get("slideIndex");
      if (oldSlideIndex === undefined) {
        return;
      }
      const isAdvancing = this.slideIndex > oldSlideIndex;

      if (isAdvancing) {
        // Animate forwards
        this.navigateWithAnimation(1, SLIDE_LEFT_OUT, SLIDE_RIGHT_IN);
      } else {
        // Animate backwards
        this.navigateWithAnimation(-1, SLIDE_RIGHT_OUT, SLIDE_LEFT_IN);
      }
    }
  }

  navigateToNextSlide() {
    // Animation driven by the `updated` lifecycle.
    this.slideIndex += 1;
  }

  navigateToPrevSlide() {
    // Animation driven by the `updated` lifecycle.
    this.slideIndex -= 1;
  }

  /**
   * Return slide index in the range of [0, slideElement.length)
   */
  get wrappedIndex(): number {
    return BallerForm.wrapIndex(this.slideIndex, this.slideElements.length);
  }

  private static wrapIndex(idx: number, max: number): number {
    return ((idx % max) + max) % max;
  }

  private static showSlide(el: HTMLElement) {
    el.classList.remove("slide-hidden");
  }

  private static hideSlide(el: HTMLElement) {
    el.classList.add("slide-hidden");
  }

  private async navigateWithAnimation(
    nextSlideOffset: number,
    leavingAnimation: AnimationTuple,
    enteringAnimation: AnimationTuple
  ) {
    this.initializeSlides();
    const leavingElIndex = BallerForm.wrapIndex(
      this.slideIndex - nextSlideOffset,
      this.slideElements.length
    );
    const elLeaving = this.slideElements[leavingElIndex];
    BallerForm.showSlide(elLeaving);

    // Animate out current element
    const leavingAnim = elLeaving.animate(
      leavingAnimation[0],
      leavingAnimation[1]
    );

    // Entering slide
    const newSlideEl = this.slideElements[this.wrappedIndex];

    // Show the new slide
    BallerForm.showSlide(newSlideEl);

    // Teleport it out of view and animate it in
    const enteringAnim = newSlideEl.animate(
      enteringAnimation[0],
      enteringAnimation[1]
    );

    try {
      // Wait for animations
      await Promise.all([leavingAnim.finished, enteringAnim.finished]);

      // Hide the element that left
      BallerForm.hideSlide(elLeaving);
    } catch {
      /* Animation was cancelled */
    }
  }

  private initializeSlides() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.slideElements.length; i++) {
      const slide = this.slideElements[i];
      slide.getAnimations().forEach((anim) => anim.cancel());
      if (i === this.wrappedIndex) {
        BallerForm.showSlide(slide);
      } else {
        BallerForm.hideSlide(slide);
      }
    }
  }

  private _handleSubmission(e: SubmitEvent) {
    // Set the progress to 100%
    this.slideIndex += 1;

    // Only submit the form if it is valid
    e.preventDefault();
    if (this.formElement.checkValidity()) {
      this.dispatchEvent(new CustomEvent('completed-application'));
      this.formElement.submit();
    }
  }

  private _renderStepOne(){
    return html`
    <div class="form-container" data-slide="1">
      <div class="form-header">
        <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
        <h3 class="headline-large">XING baller League</h3>
      </div>
      <div class="form-fields">
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
      <div class="form-image">
        <slot name="image-one"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button @click=${this.navigateToNextSlide} type="button">Weiter</md-filled-button>
      </div>
    </div>
    `;
  }

  private _renderStepTwo(){
    return html`
    <div class="form-container slide-hidden" data-slide="2">
      <div class="form-header">
        <h2 class="display-small">Welche Skills zeichnen Dich aus?</h2>
        <h3 class="headline-large">Deine Fußballerfahrung</h3>
      </div>
      <div class="form-fields">
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
      <div class="form-image">
        <slot name="image-two"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button @click=${this.navigateToNextSlide} type="button">Weiter</md-filled-button>
        <md-filled-button @click=${this.navigateToPrevSlide} type="button" class="secondary text-on-secondary">Vorherige</md-filled-button>
      </div>
    </div>
    `;
  }
}

