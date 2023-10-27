import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import { styleMap } from "lit/directives/style-map.js";

import type { MdFilledButton } from '@material/web/button/filled-button.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';
import {
  AnimationTuple,
  SLIDE_LEFT_IN,
  SLIDE_LEFT_OUT,
  SLIDE_RIGHT_IN,
  SLIDE_RIGHT_OUT,
} from "./constants.js";
import { icons } from './icons.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/progress/linear-progress.js';
import '@material/web/elevation/elevation.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

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

  
  @query('[data-element="tos"]')
  termsOfServiceBox!: MdCheckbox

  @queryAll('[data-slide]')
  private readonly slideElements!: HTMLElement[];

  protected render() {
    const containerStyles = {
      height: `${this.containerHeight}px`,
    };

    return html`
      <section id="form-wrapper">
        <form>
          <p class="label-medium">Schritt ${this.slideIndex + 1} von ${this.slideElements.length}</p>
          <md-linear-progress .value=${(this.slideIndex + 1)  / this.slideElements.length}></md-linear-progress>
          <div class="slides-container" style="${styleMap(containerStyles)}">
            ${this._renderStepOne()}
            ${this._renderStepTwo()}
            ${this._renderStepThree()}
            ${this._renderStepFour()}
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

  private handleLegalChange(){
    if (this.termsOfServiceBox.checked) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
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
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Nachname"
            required
            autocomplete="family-name"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Email"
            required
            autocomplete="email"
            type="email"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Phone"
            autocomplete="tel"
            type="tel"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Geburtsdatum"
            required
            autocomplete="bday"
            type="date"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
      </div>
      <div class="form-image">
        <slot name="image-one"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button trailing-icon @click=${this.navigateToNextSlide} type="button">Weiter ${icons.forwardArrow}</md-filled-button>
      </div>
    </div>
    `;
  }

  private static reportFieldValidity(event: FocusEvent){
    // @ts-ignore
    event.target.reportValidity();
  }

  private _renderStepTwo(){
    return html`
    <div class="form-container slide-hidden" data-slide="2">
      <div class="form-header">
        <h2 class="display-small">Welche Skills zeichnen Dich aus?</h2>
        <h3 class="headline-small">Deine Fußballerfahrung</h3>
      </div>
      <div class="form-fields">
        <md-outlined-select label="Deine höchste Spielklasse" supporting-text="Aktuelles oder vorheriges Level">
          <md-select-option selected value="regionalliga">
            <div slot="headline">Regionalliga</div>
          </md-select-option>
          <md-select-option value="oberliga">
            <div slot="headline">Oberliga</div>
          </md-select-option>
          <md-select-option value="verbandsliga">
            <div slot="headline">Verbandsliga</div>
          </md-select-option>
          <md-select-option value="landesliga">
            <div slot="headline">Landesliga</div>
          </md-select-option>
          <md-select-option value="bezirkslga">
            <div slot="headline">Bezirkslga</div>
          </md-select-option>
          <md-select-option value="kreisklasse">
            <div slot="headline">Kreisklasse</div>
          </md-select-option>
          <md-select-option value="sonstiges">
            <div slot="headline">Sonstiges</div>
          </md-select-option>
        </md-outlined-select>
          <md-outlined-text-field
            label="In welchem Verein spielst du"
            required
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Highlight Tape (URL)"
            type="url"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Link Transfermarkt"
            type="url"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
      </div>
      <div class="form-image">
        <slot name="image-two"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button trailing-icon @click=${this.navigateToNextSlide} type="button">Weiter ${icons.forwardArrow}</md-filled-button>
        <md-filled-tonal-button @click=${this.navigateToPrevSlide} type="button">Back ${icons.backArrow}</md-filled-tonal-button>
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
            ${icons.youtube}
          </md-icon>
        </md-outlined-text-field>
          <md-outlined-text-field
            label="Instagram"
            autocomplete="username"
          >
            <md-icon slot="trailing-icon">
              ${icons.instagram}
            </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="TikTok"
            autocomplete="username"
          >
            <md-icon slot="trailing-icon">
            ${icons.tiktok}
            </md-icon>
          </md-outlined-text-field>
      </div>
      <div class="form-image">
        <slot name="image-three"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button trailing-icon @click=${this.navigateToNextSlide} type="button">Weiter ${icons.forwardArrow}</md-filled-button>
        <md-filled-tonal-button @click=${this.navigateToPrevSlide} type="button">Back ${icons.backArrow}</md-filled-tonal-button>
      </div>
    </div>
    `;
  }

  private _renderStepFour(){
    return html`
    <div class="form-container slide-hidden" data-slide="4">
      <div class="form-header">
        <h2 class="display-small">Achievements oder Anmerkungen</h2>
        <h3 class="headline-small">Mochtest Du uns noch etwas sagen</h3>
      </div>
      <div class="form-fields">
        <md-outlined-text-field
          type="textarea"
          rows="10">
        </md-outlined-text-field>
        <label class="label-medium inline-label">
          <md-checkbox touch-target="wrapper" @change=${this.handleLegalChange} data-element="tos"></md-checkbox>
          Ich stimme den Datenschutz zu
        </label>
      </div>
      <div class="form-image">
        <slot name="image-four"></slot>
      </div>
      <div class="form-footer">
        <md-filled-button trailing-icon @click=${this._handleSubmission} type="submit" disabled>Absenden ${icons.send}</md-filled-button>
        <md-filled-tonal-button @click=${this.navigateToPrevSlide} type="button">Back ${icons.backArrow}</md-filled-tonal-button>
      </div>
    </div>
    `;
  }
}

