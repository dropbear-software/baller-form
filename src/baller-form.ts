import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import type { MdFilledButton } from '@material/web/button/filled-button.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import type { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';
import type { MdOutlinedSelect } from '@material/web/select/outlined-select.js';
import type { MdDialog } from '@material/web/dialog/dialog.js';

import { componentStyles } from './baller-form.css.js';
import { icons } from './icons.js';
import { ApplicationData } from './application-data.js';
import { EnrollmentService } from './enrollment-service.js';
import { SpamService } from './spam-service.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/elevation/elevation.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/dialog/dialog.js';

/**
 * @tagname baller-form
 *
 * @summary The Baller League Player Registration Form
 *
 * @property {string} brazeEndpoint - The URL we will send the application form to
 * @property {string} captchaSiteKey - The Recaptcha v3 site key
 * @property {string} captchaEndpoint - The URL we will validate our Recaptcha token at
 *
 * @fires {CustomEvent} completed-application - When the form is successfully submitted
 * @fires {CustomEvent} signup-form-displayed - When the form is first shown to the user
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  static styles = [componentStyles];

  @property({ type: String, attribute: 'site-key' }) captchaSiteKey =
    'RECAPTCHA-SITE-KEY';

  @property({ type: String, attribute: 'captcha-endpoint' }) captchaEndpoint =
    '/ballerleague/v1/spam_check';

  @property({ type: String, attribute: 'braze-endpoint' }) brazeEndpoint =
    '/ballerleague/v1/submit_application';

  @query('md-filled-button[name="apply"]')
  submitButton!: MdFilledButton;

  @query('form#application-form')
  applicationFormElement!: HTMLFormElement;

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

  @query('md-outlined-text-field[name="other-experience"]')
  otherExperience!: MdOutlinedTextField;

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

  @query('md-dialog[data-reason="success"]')
  successDialog!: MdDialog;

  private enrollmentService?: EnrollmentService;

  private spamService?: SpamService;

  // Method Overrides

  override firstUpdated() {
    this.initializeServices();
    this.dispatchEvent(
      new CustomEvent('signup-form-displayed', { bubbles: true })
    );
  }

  // Protected Methods

  protected render() {
    return html`
      <section id="form-wrapper">
        <form id="application-form">
          <div>
            ${this._renderStepOne()} ${this._renderStepTwo()}
            ${this._renderStepThree()} ${this._renderStepFour()}
          </div>
          <div class="form-footer">
            <md-filled-button
              trailing-icon
              @click=${this._handleSubmission}
              type="button"
              name="apply"
              disabled
            >
              Absenden ${icons.send}
            </md-filled-button>
          </div>
        </form>
      </section>
      ${this._renderSuccessDialog()}
    `;
  }

  // Private Static Methods

  private static reportFieldValidity(event: FocusEvent) {
    // @ts-ignore
    event.target.reportValidity();
  }

  // Private Methods

  private initializeServices(){
    this.enrollmentService = new EnrollmentService(this.brazeEndpoint);
    this.spamService = new SpamService(
      this.captchaSiteKey,
      this.captchaEndpoint
    );

    // Add the reCAPTCHA script to the page if the feature is enabled
    if (this.spamService.featureEnabled) {
      this.applicationFormElement.insertAdjacentElement(
        'afterbegin',
        this.spamService.generateScriptElement()
      );
    }
  }

  private _handleSubmission(e: SubmitEvent) {
    e.preventDefault();

    // First check that the form data is valid before proceeding
    if (this.applicationFormElement.checkValidity()) {
      const applicationData = this.normalizeData();

      try {
        // Do a final spam check before attempting to submit the form data
        if (this.spamService!.isValidUser()) {
          this.enrollmentService!.process(applicationData);
          this.handleSuccessfulApplication(applicationData);
        } else {
          // TODO: Figure out what to do here
          throw new Error("User did not meet the reCAPTCHA requirements");
        }
      } catch (error) {
        // TODO: Handle things if something went wrong with reCAPTCHA or Braze
      }
    } else {
      // Some field in the form isn't valid so find it and scroll to it
      const fieldWithError = this.applicationFormElement.querySelector('[error]');
      if (fieldWithError) {
        // @ts-ignore
        fieldWithError.focus({preventScroll: false});
      }
    }
  }

  // Take all the fields in the form and put them into a class to normalize the data
  private normalizeData(): ApplicationData {
    const applicationData = new ApplicationData(
      this.firstName.value,
      this.familyName.value,
      this.email.value,
      this.tel.value,
      this.birthday.valueAsDate!,
      this.experience.value,
      this.otherExperience.value,
      this.clubName.value,
      this.highlightTape.value,
      this.transfermarkt.value,
      this.youtube.value,
      this.instagram.value,
      this.tiktok.value,
      this.freeform.value,
      this.termsOfServiceBox.checked
    );

    return applicationData;
  }

  private handleLegalChange() {
    // TODO: Also check if the age checkbox is ticked
    if (this.termsOfServiceBox.checked) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  private handleSuccessfulApplication(applicationData: ApplicationData){
    // Open the confirmation dialog
    this.successDialog.show();
    
    // Send an event for analytics integration
    this.dispatchEvent(
      new CustomEvent('completed-application', {
        detail: {
          experience: applicationData.experience,
          club: applicationData.clubName,
        },
        bubbles: true,
      })
    );
  }

  private validateAge(){
    const dateInputFieldValue = this.birthday.value;
    let isOldEnough = false;

    // Calculate the difference between the date input field and today's date.
    const today = new Date();
    const dateInputFieldDate = new Date(dateInputFieldValue);
    const differenceInDays = (today.getTime() - dateInputFieldDate.getTime()) / (1000 * 60 * 60 * 24);

    // Check if the number of days since the date input field value is greater than or equal to 18 years.
    if (differenceInDays >= 18 * 365.25) {
      isOldEnough = true;
      
      this.birthday.setCustomValidity('');
      this.birthday.error = false;
      this.birthday.errorText = '';

      this.birthday.reportValidity();
    }

    if (!isOldEnough) {
      this.birthday.error = true;
      this.birthday.errorText = 'Sie müssen mindestens 18 Jahre alt sein.'
      this.birthday.setCustomValidity('Sie müssen mindestens 18 Jahre alt sein.');
      this.birthday.dispatchEvent(new Event('invalid'));
      
      this.birthday.reportValidity();      
    }
  }

  private _renderSuccessDialog(){
    return html`
      <md-dialog type="alert" data-reason="success">
        <div slot="headline" class="display-small">Glückwunsch</div>
        <form slot="content" id="form-id" method="dialog">
          Wir haben Ihre Bewerbung erhalten.
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this.handleDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `;
  }

  private handleDialogClose(){
    this.successDialog.close();
    this.applicationFormElement.reset();
  }

  // eslint-disable-next-line class-methods-use-this
  private handleExperienceSelection(e: Event){
    // @ts-ignore
    if (e.target.value === 'sonstiges') {
      this.otherExperience.hidden = false;
      this.otherExperience.classList.remove('hidden');
    } else {
      this.otherExperience.hidden = true;
      this.otherExperience.classList.add('hidden');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderStepOne() {
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
            @blur=${this.validateAge}
          ></md-outlined-text-field>
        </div>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderStepTwo() {
    return html`
      <div>
        <div class="form-header">
          <h2 class="display-small">Welche Skills zeichnen Dich aus?</h2>
          <h3 class="headline-small">Deine Fußballerfahrung</h3>
        </div>
        <div class="form-fields">
          <md-outlined-select
            label="Deine höchste Spielklasse"
            supporting-text="Aktuelles oder vorheriges Level"
            name="experience"
            @change=${this.handleExperienceSelection}
          >
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
            label="Einzelheiten"
            name="other-experience"
            hidden
            class="hidden"
          ></md-outlined-text-field>
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
  private _renderStepThree() {
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
            <md-icon slot="trailing-icon"> ${icons.youtube} </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="Instagram"
            autocomplete="username"
            name="instagram"
          >
            <md-icon slot="trailing-icon"> ${icons.instagram} </md-icon>
          </md-outlined-text-field>
          <md-outlined-text-field
            label="TikTok"
            autocomplete="username"
            name="tiktok"
          >
            <md-icon slot="trailing-icon"> ${icons.tiktok} </md-icon>
          </md-outlined-text-field>
        </div>
      </div>
    `;
  }

  private _renderStepFour() {
    return html`
      <div>
        <div class="form-header">
          <h2 class="display-small">Anmerkungen</h2>
          <h3 class="headline-small">
            Möchtest Du uns noch etwas über Dich sagen?
          </h3>
        </div>
        <div class="form-fields">
          <md-outlined-text-field type="textarea" rows="10" name="freeform">
          </md-outlined-text-field>
          <label class="label-medium inline-label">
            <md-checkbox
              touch-target="wrapper"
              @change=${this.handleLegalChange}
              data-element="tos"
              style="width: 4rem"
            ></md-checkbox>
            Datenschutz Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean ut varius turpis, nec vestibulum massa. Curabitur ex odio,
            laoreet id quam sit amet, tempus finibus neque. Duis convallis lorem
            et ornare auctor. Nam efficitur elit urna, nec sollicitudin nisi
            suscipit vitae. Ut rhoncus vitae mi non ullamcorper. Vivamus lorem
            quam, hendrerit in enim ut, pretium sodales augue. Cras nisl velit,
            efficitur quis urna nec, eleifend sagittis felis.
          </label>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'baller-form': BallerForm;
  }
}
