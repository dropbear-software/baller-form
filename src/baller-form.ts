import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import { styleMap } from "lit/directives/style-map.js";

import type { MdFilledButton } from '@material/web/button/filled-button.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/elevation/elevation.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';

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
 * @fires {CustomEvent} signup-form-displayed - When the form is first shown to the user
 * @fires {CustomEvent} next-form-step - When the user proceeds to the next step of the form
 * @fires {CustomEvent} prev-form-step - When the user proceeds to the previous step of the form
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  static styles = [typographyBaseline, componentStyles];

  @property({ type: Number }) slideIndex = 0;

  @state() private containerHeight = 0;

  @query('md-filled-button[type="submit"]')
  submitButton!: MdFilledButton;

  @query('form')
  formElement!: HTMLFormElement;

  @queryAll('[data-slide]')
  private readonly slideElements!: HTMLElement[];

  protected render() {
    const containerStyles = {
      height: `${this.containerHeight}px`,
    };

    return html`
      <section id="form-wrapper">
        <form>
          <p class="label-medium">Schritt ${this.slideIndex + 1} von 3</p>
          <md-linear-progress .value=${(this.slideIndex + 1)  / 4}></md-linear-progress>
          <div class="slides-container" style="${styleMap(containerStyles)}">
            ${this._renderStepOne()}
            ${this._renderStepTwo()}
            ${this._renderStepThree()}
          </div>
        </form>
      </section>
    `;
  }

  override firstUpdated() {
    this.containerHeight = BallerForm.getMaxElHeight(this.slideElements);
    this.initializeSlides();
    this.dispatchEvent(new CustomEvent('signup-form-displayed', {bubbles: true}));
  }

  override updated(changedProperties: PropertyValues<this>): void {
    // If you want to drive animations from the
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
    const currentSlide = this.slideElements[this.slideIndex];
    const canProceed = BallerForm.isSlideDataValid(currentSlide);

    if (canProceed) {
      // Animation driven by the `updated` lifecycle.
      this.slideIndex += 1;
      const slideUpdatedEvent = new CustomEvent("next-form-step", {
        detail: {
          step: this.slideIndex + 1,
        },
        bubbles: true
      });
      this.dispatchEvent(slideUpdatedEvent);
    }
  }

  navigateToPrevSlide() {
    // Animation driven by the `updated` lifecycle.
    this.slideIndex -= 1;
    const slideUpdatedEvent = new CustomEvent("prev-form-step", {
      detail: {
        step: this.slideIndex + 1,
      },
      bubbles: true
    });
    this.dispatchEvent(slideUpdatedEvent);
  }

  static isSlideDataValid(currentSlide: HTMLElement): boolean {
    const formFields = Array.from(currentSlide.querySelectorAll('.form-fields > *')!);
    // eslint-disable-next-line consistent-return
    const validFields = formFields.every((field) => {
      if ('willValidate' in field && 'reportValidity' in field) {
        // @ts-ignore
        field.reportValidity();
        // @ts-ignore
        return field.checkValidity();
      }
      return true;
    });
    
    return validFields;
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

  private static getMaxElHeight(els: HTMLElement[]): number {
    const slideHeights = Array.from(els).map((el) => el.getBoundingClientRect().height);
    return Math.max(0, ...slideHeights);
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
    // Only submit the form if it is valid
    e.preventDefault();
    if (this.formElement.checkValidity()) {
      this.dispatchEvent(new CustomEvent('completed-application', {bubbles: true}));
      this.formElement.submit();
    }
  }

  private _renderStepOne(){
    return html`
    <div class="form-container" data-slide="1">
      <div class="form-header">
        <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
        <h3 class="headline-small">XING baller League</h3>
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
        <h3 class="headline-small">Deine Fußballerfahrung</h3>
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
        <md-filled-tonal-button @click=${this.navigateToPrevSlide} type="button">Back</md-filled-tonal-button>
      </div>
    </div>
    `;
  }

  private _renderStepThree(){
    return html`
    <div class="form-container slide-hidden" data-slide="3">
      <div class="form-header">
        <h2 class="display-small">Zeig uns wer Du bist!</h2>
        <h3 class="headline-small">Deine Social Media Auftritt</h3>
      </div>
      <div class="form-fields">
        <md-outlined-text-field
            label="YouTube"
            autocomplete="username"
          >
          <md-icon slot="trailing-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" xml:space="preserve">
              <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" y1="199" x2="400" y2="199" gradientTransform="matrix(0 1 1 0 1 0)">
                <stop offset="0" style="stop-color:#e52d27"/>
                <stop offset="1" style="stop-color:#bf171d"/>
              </linearGradient>
              <path fill="url(#a)" d="M0 0h400v400H0z"/>
              <path opacity=".12" d="m170.6 159.9 63.9 42.7 9-4.6-72.9-38.1z"/>
              <path fill="#FFF" d="M332.2 146.1s-2.6-18.6-10.7-26.8c-10.2-10.8-21.8-10.8-27-11.4-37.8-2.7-94.4-2.7-94.4-2.7h-.1s-56.6 0-94.4 2.7c-5.3.6-16.8.7-27 11.4-8.1 8.2-10.7 26.8-10.7 26.8s-2.7 21.8-2.7 43.7v20.5c0 21.8 2.7 43.7 2.7 43.7s2.6 18.6 10.7 26.8c10.3 10.8 23.7 10.4 29.7 11.5 21.6 2.1 91.7 2.7 91.7 2.7s56.7-.1 94.5-2.8c5.3-.6 16.8-.7 27-11.4 8.1-8.2 10.7-26.8 10.7-26.8s2.7-21.8 2.7-43.7v-20.5c0-21.9-2.7-43.7-2.7-43.7zM172.1 235v-75.8l72.9 38-72.9 37.8z"/>
            </svg>
          </md-icon>
        </md-outlined-text-field>
          <md-outlined-text-field
            label="Instagram"
            autocomplete="username"
          >
            <md-icon slot="trailing-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="132.004" height="132" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 132 132" xml:space="preserve">
                <defs>
                  <radialGradient id="c" cx="158.429" cy="578.088" r="65" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/>
                  <radialGradient id="d" cx="147.694" cy="473.455" r="65" xlink:href="#b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/>
                  <linearGradient id="b">
                    <stop offset="0" stop-color="#3771c8"/>
                    <stop stop-color="#3771c8" offset=".128"/>
                    <stop offset="1" stop-color="#60f" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="a">
                    <stop offset="0" stop-color="#fd5"/>
                    <stop offset=".1" stop-color="#fd5"/>
                    <stop offset=".5" stop-color="#ff543e"/>
                    <stop offset="1" stop-color="#c837ab"/>
                  </linearGradient>
                </defs>
                <path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
                <path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0 0 17.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
                <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 1 0 5.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/>
              </svg>
            </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="TikTok"
            autocomplete="username"
          >
            <md-icon slot="trailing-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 300 300">
              <g transform="translate(-221.857 -376.148)" style="display:inline">
                <rect ry="71.309" y="376.148" x="221.857" height="299.999" width="299.999" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:3.14339042;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                <path d="M462.5 465.934c-56.071-5.358-55-54.643-55-54.643h-36.154v155.645c-.912 16.646-14.675 29.676-31.346 29.676-17.338 0-31.393-14.055-31.393-31.393 0-17.337 14.055-31.392 31.393-31.392 3.659 0 7.29.64 10.728 1.89l.355-41.094a69.286 69.286 0 0 0-11.583-.975c-38.265 0-69.286 31.02-69.286 69.286 0 38.265 31.02 69.285 69.286 69.285 36.959 0 67.411-29.009 69.204-65.924v-81.076s19.867 17.143 53.796 17.857z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
              </g>
            </svg>
            </md-icon>
          </md-outlined-text-field>
          <label class="label-medium inline-label">
            <md-checkbox touch-target="wrapper"></md-checkbox>
            Ich stimme den Datenschutz zu
          </label>
      </div>
      <div class="form-image">
        <slot name="image-three"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button @click=${this._handleSubmission} type="submit">Absenden</md-filled-button>
        <md-filled-tonal-button @click=${this.navigateToPrevSlide} type="button">Back</md-filled-tonal-button>
      </div>
    </div>
    `;
  }
}

