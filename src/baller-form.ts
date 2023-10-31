import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import type { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';
import type { MdOutlinedSelect } from '@material/web/select/outlined-select.js';

import { typographyBaseline } from './design-system.css.js';
import { componentStyles } from './baller-form.css.js';
import { icons } from './icons.js';
import { ApplicationData } from './application-data.js';
import { EnrollmentService } from './application-enroller.js';
import { SpamService } from './spam-service.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/textfield/outlined-text-field.js';
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

  @property({ type: String, attribute: 'braze-key' }) brazeAPI = 'BRAZE-API-KEY-GOES-HERE';

  @property({ type: String, attribute: 'site-key' }) captchaSiteKey = 'RECAPTCHA-SITE-KEY';

  @query('md-filled-button[name="apply"]')
  submitButton!: MdFilledButton;

  @query('form')
  formElement!: HTMLFormElement;

  @query('md-outlined-text-field[autocomplete="given-name"]')
  firstName!: MdOutlinedTextField;

  @query('md-outlined-text-field[autocomplete="family-name"]')
  familyName!: MdOutlinedTextField;

  @query('md-outlined-text-field[autocomplete="email"]')
  email!: MdOutlinedTextField;

  @query('md-outlined-text-field[autocomplete="tel"]')
  tel!: MdOutlinedTextField;

  @query('md-outlined-text-field[autocomplete="bday"]')
  birthday!: MdOutlinedTextField;

  @query('md-outlined-select[name="experience"]')
  experience!: MdOutlinedSelect;

  @query('md-outlined-text-field[name="club"]')
  clubName!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="highlight-tape"]')
  highlightTape!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="transfermarkt"]')
  transfermarkt!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="youtube"]')
  youtube!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="instagram"]')
  instagram!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="tiktok"]')
  tiktok!: MdOutlinedTextField;

  @query('md-outlined-text-field[name="freeform"]')
  freeform!: MdOutlinedTextField;
  
  @query('[data-element="tos"]')
  termsOfServiceBox!: MdCheckbox;

  private enrollmentService? :EnrollmentService;

  private spamService?: SpamService;

  protected render() {
    return html`
      <section id="form-wrapper">
        <form>
          <div>
            ${this._renderStepOne()}
            ${this._renderStepTwo()}
            ${this._renderStepThree()}
            ${this._renderStepFour()}
          </div>
          <div>
            <md-filled-button trailing-icon @click=${this._handleSubmission} type="button" name="apply" disabled>Absenden ${icons.send}</md-filled-button>
          </div>
        </form>
      </section>
    `;
  }

  override firstUpdated() {
    this.enrollmentService = new EnrollmentService(this.brazeAPI);
    this.dispatchEvent(new CustomEvent('signup-form-displayed', {bubbles: true}));
    this.spamService = new SpamService(this.captchaSiteKey);
    this.formElement.insertAdjacentElement('afterbegin', this.spamService.generateScriptElement());
  }

  private _handleSubmission(e: SubmitEvent) {
    e.preventDefault();

    // First check that the form data is valid before proceeding
    if (this.formElement.checkValidity()) {

      const applicationData = new ApplicationData(
        this.firstName.value, 
        this.familyName.value, 
        this.email.value,
        this.tel.value,
        this.birthday.valueAsDate!,
        this.experience.value,
        this.clubName.value,
        this.highlightTape.value,
        this.transfermarkt.value,
        this.youtube.value,
        this.instagram.value,
        this.tiktok.value,
        this.freeform.value,
        this.termsOfServiceBox.checked
      );

      // Do a final spam check before attempting to submit the form data
      if (this.spamService?.isValidUser()) {
        this.enrollmentService!.process(applicationData);

        this.dispatchEvent(new CustomEvent('completed-application', {
          detail: {
            experience: applicationData.experience,
            club: applicationData.clubName
          },
          bubbles: true
        }));
      }
    }
  }

  private handleLegalChange(){
    if (this.termsOfServiceBox.checked) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
    
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderStepOne(){
    return html`
    <div>
      <div class="form-header">
        <h2 class="display-small">Erzähle uns etwas über Dich:</h2>
        <h3 class="headline-small">XING Baller League</h3>
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
    </div>
    `;
  }

  private static reportFieldValidity(event: FocusEvent){
    // @ts-ignore
    event.target.reportValidity();
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderStepTwo(){
    return html`
    <div>
      <div class="form-header">
        <h2 class="display-small">Welche Skills zeichnen Dich aus?</h2>
        <h3 class="headline-small">Deine Fußballerfahrung</h3>
      </div>
      <div class="form-fields">
        <md-outlined-select label="Deine höchste Spielklasse" supporting-text="Aktuelles oder vorheriges Level" name="experience">
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
            name="club"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Highlight Tape (URL)"
            type="url"
            name="highlight-tape"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
          <md-outlined-text-field
            label="Link Transfermarkt"
            type="url"
            name="transfermarkt"
            @blur=${BallerForm.reportFieldValidity}
          ></md-outlined-text-field>
      </div>
    </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderStepThree(){
    return html`
    <div>
      <div class="form-header">
        <h2 class="display-small">Zeig uns wer Du bist!</h2>
        <h3 class="headline-small">Dein Social Media Auftritt</h3>
      </div>
      <div class="form-fields">
        <md-outlined-text-field
            label="YouTube"
            autocomplete="username"
            name="youtube"
          >
          <md-icon slot="trailing-icon">
            ${icons.youtube}
          </md-icon>
        </md-outlined-text-field>
          <md-outlined-text-field
            label="Instagram"
            autocomplete="username"
            name="instagram"
          >
            <md-icon slot="trailing-icon">
              ${icons.instagram}
            </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="TikTok"
            autocomplete="username"
            name="tiktok"
          >
            <md-icon slot="trailing-icon">
            ${icons.tiktok}
            </md-icon>
          </md-outlined-text-field>
      </div>
    </div>
    `;
  }

  private _renderStepFour(){
    return html`
    <div>
      <div class="form-header">
        <h2 class="display-small">Anmerkungen</h2>
        <h3 class="headline-small">Möchtest Du uns noch etwas über Dich sagen?</h3>
      </div>
      <div class="form-fields">
        <md-outlined-text-field
          type="textarea"
          rows="10"
          name="freeform"
        >
        </md-outlined-text-field>
        <label class="label-medium inline-label">
          <md-checkbox touch-target="wrapper" @change=${this.handleLegalChange} data-element="tos" style="width: 4rem"></md-checkbox>
          Datenschutz Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut varius turpis, nec vestibulum massa. 
          Curabitur ex odio, laoreet id quam sit amet, tempus finibus neque. Duis convallis lorem et ornare auctor. 
          Nam efficitur elit urna, nec sollicitudin nisi suscipit vitae. Ut rhoncus vitae mi non ullamcorper. 
          Vivamus lorem quam, hendrerit in enim ut, pretium sodales augue. 
          Cras nisl velit, efficitur quis urna nec, eleifend sagittis felis. 
        </label>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "baller-form": BallerForm;
  }
}