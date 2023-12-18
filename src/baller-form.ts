import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

import type { MdFilledButton } from '@material/web/button/filled-button.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import type { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
import type { MdDialog } from '@material/web/dialog/dialog.js';

import { componentStyles } from './baller-form.css.js';
import { ApplicationData, ApplicationDataInit } from './application-data.js';
import { EnrollmentService } from './enrollment-service.js';
import { SpamService } from './spam-service.js';
import { tooltipMessages } from './tooltips.js';

import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/elevation/elevation.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/icon/icon.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import '@material/web/dialog/dialog.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

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
 * @fires {CustomEvent} submission_error - When the user attempts to submit the form but an error occurs
 */
@customElement('baller-form')
export class BallerForm extends LitElement {
  private _internals: any;
  
  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.loadPolyfills();
  }
  // Public Static Fields

  static styles = [componentStyles];

  // Private Static Methods

  private static _reportFieldValidity(event: FocusEvent) {
    // @ts-ignore
    event.target.reportValidity();
  }

  private static _renderTooltip(message: string){
    return html`
      <span class="tooltip-toggle" aria-label="${message}" tabindex="0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 11V17H11V11H13ZM13 7V9H11V7H13Z" fill="#1D2124"/>
        </svg>
      </span>
    `;
  }

  // Public Class Fields

  @property({ type: String, attribute: 'site-key' }) captchaSiteKey =
    'RECAPTCHA-SITE-KEY';

  @property({ type: String, attribute: 'captcha-endpoint' }) captchaEndpoint =
    '/ballerleague/v1/spam_check';

  @property({ type: String, attribute: 'braze-endpoint' }) brazeEndpoint =
    '/ballerleague/v1/submit_application';

  @query('md-outlined-button[name="apply"]')
  submitButton!: MdFilledButton;

  @query('form#application-form')
  applicationFormElement!: HTMLFormElement;

  @query('md-filled-text-field[autocomplete="given-name"]')
  firstName!: MdFilledTextField;

  @query('md-filled-text-field[autocomplete="family-name"]')
  familyName!: MdFilledTextField;

  @query('md-filled-text-field[autocomplete="email"]')
  email!: MdFilledTextField;

  @query('[data-element="tos"]')
  termsOfServiceBox!: MdCheckbox;

  @query('md-dialog[data-reason="success"]')
  successDialog!: MdDialog;

  @query('md-dialog[data-reason="error"]')
  errorDialog!: MdDialog;

  @query('md-dialog[data-reason="dates"]')
  datePicker!: MdDialog;

  // Private Class Fields

  @state()
  private successPage = new URL('/bewerbung-erfolgreich/', window.location.origin);

  private _enrollmentService?: EnrollmentService;

  private _spamService?: SpamService;

  private _submissionTask = new Task(this, {
    task: async() => {
      if (this._enrollmentService && this._spamService) {
        const isValidUser = await this._spamService.isValidUser();

        if (isValidUser) {
          const userApplication = this._normalizeData();
          const applicationSubmissionResult = await this._enrollmentService.process(userApplication);
          return applicationSubmissionResult;
        }

        throw new Error("Failed reCAPTCHA check");
      }
        
      throw new Error("ApplicationData, SpamService or EnrollmentService fields not set");
    }
  });

  // Method Overrides

  protected override firstUpdated() {
    this._initializeServices();
    this.dispatchEvent(
      new CustomEvent('signup-form-displayed', { bubbles: true })
    );
  }

  protected override render() {
    return html`
      ${this._renderForm()}

      ${this._submissionTask.render({
        initial: () => this._renderInitialState(),
        pending: () => this._renderPendingState(),
        complete: (value) => this._renderSuccessState(value),
        error: (error) => this._renderErrorState(error),
      })}
    `;
  }

  // Private Methods

  private async loadPolyfills(){
    // Feature detection
    const supportsDialog = (!!document.createElement("dialog").close);
    const supportsElementInternals = (('FormDataEvent' in window) && ('ElementInternals' in window &&
    'setFormValue' in window.ElementInternals.prototype));
  
    if (!supportsDialog) {
      try {
        // Install polyfill
        // @ts-ignore
        const { dialogPolyfill } = await import('https://ga.jspm.io/npm:dialog-polyfill@0.5.6/dist/dialog-polyfill.esm.js');

        // Register all dialogs we need to support
        dialogPolyfill.registerDialog(this.successDialog);
        dialogPolyfill.registerDialog(this.errorDialog);
        dialogPolyfill.registerDialog(this.datePicker);
        console.info('Dialog element polyfill installed');
      } catch (error) {
        console.error('Unable to load Dialog element polyfill support\n', error);
      }
    }
  
    if (!supportsElementInternals) {
      try {
        // Install polyfill
        // @ts-ignore
        await import('https://ga.jspm.io/npm:element-internals-polyfill@1.3.9/dist/index.js');
        this._internals = this.attachInternals();
        console.info('Element Internals polyfill installed');
      } catch (error) {
        console.error('Unable to load Element Internals polyfill support\n', error);
      }
    }
  }

  private _initializeServices(){
    this._enrollmentService = new EnrollmentService(this.brazeEndpoint);
    this._spamService = new SpamService(
      this.captchaSiteKey,
      this.captchaEndpoint
    );

    // Add the reCAPTCHA script to the page if the feature is enabled
    if (this._spamService.featureEnabled) {
      this.applicationFormElement.insertAdjacentElement(
        'afterbegin',
        this._spamService.generateScriptElement()
      );
    }
  }

  // Take all the fields in the form and put them into a class to normalize the data
  private _normalizeData(): ApplicationData {
    const userData: ApplicationDataInit = {
      familyName: this.familyName.value,
      givenName: this.firstName.value,
      email: this.email.value,
      acceptedTos: this.termsOfServiceBox.checked
    };

    const applicationData = new ApplicationData(userData);

    return applicationData;
  }

  private _shouldEnableSubmit(): boolean {
    const hasAcceptedDatenschutz = this.termsOfServiceBox.checked;

    return hasAcceptedDatenschutz;
  }

  

  // Event Handlers

  private _onSuccessDialogClose(){
    this.successDialog.close();
    this.applicationFormElement.reset();
  }

  private _onDateSelection(){
    this.datePicker.close();
  }

  private _onErrorDialogClose(){
    this.errorDialog.close();
  }

  private _onSubmitEvent(e: SubmitEvent){
    e.preventDefault();

    // First check that the form data is valid before proceeding
    if (this.applicationFormElement.checkValidity()) {
      this._submissionTask.run();
    } else {
      // Some field in the form isn't valid so find it and scroll to it
      const formFields = this.applicationFormElement.querySelectorAll('md-filled-text-field, md-filled-select');
      
      for (const field of Array.from(formFields)) {
        // @ts-ignore
        if (!field.checkValidity()) {
          // @ts-ignore
          field.reportValidity();

          field.scrollIntoView();
          // @ts-ignore
          field.focus();

          this.dispatchEvent(new CustomEvent('invalid-field', {
            detail: field.localName,
            bubbles: true
          }));

          break;
        }
      }
    }
  }

  private _handleLegalChange() {
    if (this._shouldEnableSubmit()) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  // Templates

  // eslint-disable-next-line class-methods-use-this
  private _renderInitialState(){
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderPendingState(){

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _renderSuccessState(_data: void){
    window.location.href = this.successPage.href;
  }

  private _renderErrorState(error: unknown){
    this.dispatchEvent(new CustomEvent('submission_error', {detail: error}));
    console.error(error);
    this.errorDialog.open = true;
  }

  private _openDatePicker(){
    this.datePicker.open = true;
  }

  private _renderForm(){
    return html`
    <section id="form-wrapper">
      <form id="application-form">
        <div>
          ${this._renderPersonalQuestions()}
        </div>
        <div class="form-footer">
          <md-outlined-button
            @click=${this._onSubmitEvent}
            type="button"
            name="apply"
            disabled
            style="width: 100%"
          >
          Jetzt bewerben
          </md-outlined-button>
        </div>
      </form>
    </section>

    ${this._renderDateSelectionDialog()}
    ${this._renderSuccessDialog()}
    ${this._renderErrorDialog()}
    `;
  }

  private _renderDateSelectionDialog(){
    const availableDates = [
      new Date("2024-01-08T14:00:00.000+01:00"),
      new Date("2024-01-15T14:00:00.000+01:00"),
      new Date("2024-01-22T14:00:00.000+01:00"),
      new Date("2024-01-29T14:00:00.000+01:00"),
      new Date("2024-02-05T14:00:00.000+01:00"),
      new Date("2024-02-12T14:00:00.000+01:00"),
      new Date("2024-02-19T14:00:00.000+01:00"),
      new Date("2024-02-26T14:00:00.000+01:00"),
      new Date("2024-03-04T14:00:00.000+01:00"),
      new Date("2024-03-11T14:00:00.000+01:00"),
      new Date("2024-03-18T14:00:00.000+01:00"),
      new Date("2024-03-23T14:00:00.000+01:00"),
    ];

    return html`
      <md-dialog type="alert" data-reason="dates">
        <div slot="headline" class="display-small">Headline</div>

        <md-list slot="content">
          <p class="label-medium">
            Some supporting text
          </p>
        ${availableDates.map((matchDate) => 
          html`
          <md-list-item type="button">
            <div slot="headline">
              ${matchDate.toLocaleDateString('de-DE', {
                weekday: 'long',
                day: 'numeric',
                year: 'numeric',
                month: 'long',
              })}
            </div>
            <div slot="supporting-text">
              ${matchDate.toLocaleTimeString('de-DE', {
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'CET',
                timeZoneName: 'longGeneric'
              })}
            </div>
            <div slot="trailing-supporting-text">+</div>
          </md-list-item>
          `
        )}
        </md-list>
        <div slot="actions">
          <md-filled-button form="date-selection" value="close" @click=${this._onDateSelection}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `;
  }

  private _renderSuccessDialog(){
    return html`
      <md-dialog type="alert" data-reason="success">
        <div slot="headline" class="display-small">Glückwunsch</div>
        <form slot="content" id="form-id" method="dialog">
          Wir haben Ihre Bewerbung erhalten.
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this._onSuccessDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `;
  }

  private _renderErrorDialog(){
    return html`
      <md-dialog type="alert" data-reason="error">
        <div slot="headline" class="display-small">ein Fehler ist aufgetreten</div>
        <form slot="content" id="form-id" method="dialog">
          Bitte versuchen Sie es morgen noch einmal
        </form>
        <div slot="actions">
          <md-filled-button form="form-id" value="close" @click=${this._onErrorDialogClose}>
            Schließen
          </md-filled-button>
        </div>
      </md-dialog>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderPersonalQuestions() {
    return html`
      <div>
        <div class="form-header">
          <p class="label-medium">
            Wie Du dabei sein kannst? Einfach für den XING Newsletter anmelden.
          </p>
          <p class="label-medium">
            Damit nimmst Du nicht nur an der Verlosung für die Tickets teil – Du bleibst auch mit den News um die Baller League immer am Ball.
          </p>
        </div>
        <div class="form-fields">
          <div class="field-with-tooltip">
            <md-filled-text-field
              label="E-Mail"
              required
              autocomplete="email"
              type="email"
              max="250"
              style="width: 100%"
              @blur=${BallerForm._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Vorname"
              required
              autocomplete="given-name"
              max="250"
              style="width: 100%"
              @blur=${BallerForm._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Nachname"
              required
              max="250"
              autocomplete="family-name"
              style="width: 100%"
              @blur=${BallerForm._reportFieldValidity}
            ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="XING Member"
              name="xing-member"
              style="width: 100%;"
            >
              <md-select-option value="true">
                <div slot="headline">Ja</div>
              </md-select-option>
              <md-select-option value="false">
                <div slot="headline">Nein</div>
              </md-select-option>
            </md-filled-select>
            ${BallerForm._renderTooltip(tooltipMessages.xing)}
          </div>

          <div class="field-with-tooltip">
            <md-filled-tonal-button
              @click=${this._openDatePicker}
              type="button"
              name="apply"
              style="width: 100%"
            >
              Termine auswählen
            </md-filled-tonal-button>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            
            <label class="label-medium inline-label">
              <md-checkbox
                touch-target="wrapper"
                @change=${this._handleLegalChange}
                data-element="tos"
                style="min-width: 1.2rem"
              ></md-checkbox>
              <span>
                Ja, ich möchte den regelmäßig erscheinenden E-Mail Newsletter von XING mit exklusiven Ticketverlosungen und Angeboten rund um die Baller League 
                erhalten. Abmeldung jederzeit möglich. Es gelten die
                <a href="https://www.new-work.se/de/datenschutz" target="_blank" style="color: #0698A0; text-decoration: none;">Datenschutzbestimmungen</a>
                der New Work SE. Mit der Teilnahme am Gewinnspiel stimmst Du unseren 
                <a href="#" target="_blank" style="color: #0698A0; text-decoration: none;">Teilnahmebedingungen</a>
                zu.
              </span>
            </label>
            <div class="invisible-icon"></div>
          </div>

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
