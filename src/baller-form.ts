import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { Task } from '@lit/task';

import type { MdFilledButton } from '@material/web/button/filled-button.js';
import type { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import type { MdFilledTextField } from '@material/web/textfield/filled-text-field.js';
import type { MdFilledSelect } from '@material/web/select/filled-select.js';
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
  // Public Static Fields

  static styles = [componentStyles];

  // Private Static Methods

  private static _reportFieldValidity(event: FocusEvent) {
    // @ts-ignore
    event.target.reportValidity();
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

  @query('md-filled-text-field[autocomplete="tel"]')
  tel!: MdFilledTextField;

  @query('md-filled-text-field[autocomplete="bday"]')
  birthday!: MdFilledTextField;

  @query('md-filled-select[name="shirt-size"]')
  shirt!: MdFilledSelect

  @query('md-filled-select[name="experience"]')
  experience!: MdFilledSelect;

  @query('md-filled-select[name="bundesland"]')
  bundesland!: MdFilledSelect;

  @query('md-filled-select[name="current-country"]')
  currentCountry!: MdFilledSelect;

  @query('md-filled-select[name="position"]')
  position!: MdFilledSelect;

  @query('md-filled-select[name="active-experience"]')
  activeExperience!: MdFilledSelect;

  @query('md-filled-text-field[name="international-current-team-country"]')
  currentInternationalTeamCountry!: MdFilledSelect;

  @query('md-filled-text-field[name="current-international-league"]')
  currentInternationalLeague!: MdFilledSelect;

  @query('md-filled-select[name="team-type"]')
  teamType!: MdFilledSelect;

  @query('md-filled-select[name="spielklasse"]')
  spielklasse!: MdFilledSelect;

  @query('md-filled-text-field[name="other-experience"]')
  otherExperience!: MdFilledTextField;

  @query('md-filled-select[name="highest-domestic-experience"]')
  highestSpielklasse!: MdFilledSelect;
  
  @query('md-filled-select[name="highest-experience"]')
  highestExperience!: MdFilledSelect;

  @query('md-filled-text-field[name="historical-experience-country"]')
  highestExperienceCountry!: MdFilledTextField;

  @query('md-filled-text-field[name="historical-experience-league"]')
  highestExperienceLeague!: MdFilledTextField;

  @query('md-filled-text-field[name="club"]')
  clubName!: MdFilledTextField;

  @query('md-filled-text-field[name="highlight-tape"]')
  highlightTape!: MdFilledTextField;

  @query('md-filled-text-field[name="transfermarkt"]')
  transfermarkt!: MdFilledTextField;

  @query('md-filled-text-field[name="youtube"]')
  youtube!: MdFilledTextField;

  @query('md-filled-text-field[name="instagram"]')
  instagram!: MdFilledTextField;

  @query('md-filled-text-field[name="tiktok"]')
  tiktok!: MdFilledTextField;

  @query('md-filled-text-field[name="xing"]')
  xing!: MdFilledTextField;

  @query('md-filled-text-field[name="freeform"]')
  freeform!: MdFilledTextField;

  @query('md-filled-select[name="availability"]')
  availability!: MdFilledSelect;

  @query('[data-element="tos"]')
  termsOfServiceBox!: MdCheckbox;

  @query('[data-element="teilnahmebedingungen"]')
  teilnahmebedingungenBox!: MdCheckbox;

  @query('md-dialog[data-reason="success"]')
  successDialog!: MdDialog;

  @query('md-dialog[data-reason="error"]')
  errorDialog!: MdDialog;

  // Private Class Fields

  @state()
  leageOptions = this._renderMensLeagueDropdown();

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
      telephone: this.tel.value,
      birthDate: this.birthday.valueAsDate!,
      shirtSize: this.shirt.value,
      bundesland: this.bundesland.value,
      customCurrentCountry: this.currentCountry.value,
      position: this.position.value,
      currentPlayingStatus: this.activeExperience.value,
      currentFootballCountry: this.currentInternationalTeamCountry.value,
      teamType: this.teamType.value,
      germanLeague: this.spielklasse.value,
      internationalLeague: this.currentInternationalLeague.value,
      otherExperience: this.otherExperience.value,
      highestDomesticLeague: this.highestSpielklasse.value,
      highestExperience: this.highestExperience.value,
      highestInternationalCountry: this.highestExperienceCountry.value,
      highestInternationalLeague: this.highestExperienceLeague.value,
      clubName: this.clubName.value,
      highlightTape: this.highlightTape.value,
      transfermarktProfile: this.transfermarkt.value,
      youTube: this.youtube.value,
      instagram: this.instagram.value,
      tiktok: this.tiktok.value,
      xing: this.xing.value,
      comments: this.freeform.value,
      availability: this.availability.value,
      acceptedPrivacy: this.termsOfServiceBox.checked,
      acceptedTos: this.teilnahmebedingungenBox.checked
    };

    const applicationData = new ApplicationData(userData);

    return applicationData;
  }

  private _validateAge(){
    let isOldEnough = false;

    // Calculate the difference between the date input field and today's date.
    const today = new Date();
    const dateInputFieldDate = new Date(this.birthday.value);
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
      this.birthday.errorText = 'Du musst mindestens 18 Jahre alt sein.'
      this.birthday.setCustomValidity('Sie müssen mindestens 18 Jahre alt sein.');
      this.birthday.dispatchEvent(new Event('invalid'));
      
      this.birthday.reportValidity();      
    }
  }

  private _shouldEnableSubmit(): boolean {
    const hasAcceptedDatenschutz = this.termsOfServiceBox.checked;
    const hasAcceptedTeilnahmebedingungen = this.teilnahmebedingungenBox.checked;

    return hasAcceptedDatenschutz && hasAcceptedTeilnahmebedingungen;
  }

  

  // Event Handlers

  private _onSuccessDialogClose(){
    this.successDialog.close();
    this.applicationFormElement.reset();
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
          // @ts-ignore
          field.focus({preventScroll: false});

          this.dispatchEvent(new CustomEvent('invalid-field', {
            detail: field.localName,
            bubbles: true
          }));

          break;
        }
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private _handleFederalStateSelection(e: Event){
    // @ts-ignore
    if (e.target.value === 'Ausland') {
      this.currentCountry.hidden = false;
      this.currentCountry.classList.remove('hidden');
    } else {
      this.currentCountry.hidden = true;
      this.currentCountry.classList.add('hidden');
    }
  }

  private _handleExperienceSelection(e: Event){
    // @ts-ignore
    if (e.target.value === 'andere') {
      this.otherExperience.hidden = false;
      this.otherExperience.classList.remove('hidden');
    } else {
      this.otherExperience.hidden = true;
      this.otherExperience.classList.add('hidden');
    }
  }

  private _handleActiveExperienceSelection(e: Event){
    // @ts-ignore
    const activeExperience = e.target.value;

    switch (activeExperience) {
      case 'deutschland':
        // Unhide the German active experience section
        this.shadowRoot?.getElementById('domestic-active-experience')?.classList.remove('hidden');
        this.shadowRoot?.getElementById('international-active-experience')?.classList.add('hidden');
        this.clubName.classList.remove('hidden');
        break;
      case 'international':
        // Unhide the international active experience section
        this.shadowRoot?.getElementById('international-active-experience')?.classList.remove('hidden');
        this.shadowRoot?.getElementById('domestic-active-experience')?.classList.add('hidden');
        this.clubName.classList.remove('hidden');
        break;
      default:
        this.shadowRoot?.getElementById('international-active-experience')?.classList.add('hidden');
        this.shadowRoot?.getElementById('domestic-active-experience')?.classList.add('hidden');
        this.clubName.classList.add('hidden');
        break;
    }
  }

  private _handleHighestExperienceSelection(e: Event){
    // @ts-ignore
    const highestExperience = e.target.value;

    switch (highestExperience) {
      case 'deutschland':
        // Unhide the German active experience section
        this.shadowRoot?.getElementById('domestic-historical-experience')?.classList.remove('hidden');
        this.shadowRoot?.getElementById('international-historical-experience')?.classList.add('hidden');
        break;
      case 'international':
        // Unhide the international active experience section
        this.shadowRoot?.getElementById('international-historical-experience')?.classList.remove('hidden');
        this.shadowRoot?.getElementById('domestic-historical-experience')?.classList.add('hidden');
        break;
      default:
        this.shadowRoot?.getElementById('international-historical-experience')?.classList.add('hidden');
        this.shadowRoot?.getElementById('domestic-historical-experience')?.classList.add('hidden');
        break;
    }
  }

  private _handleLegalChange() {
    if (this._shouldEnableSubmit()) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }


  private async _handleTeamTypeSelection(e: Event){
    // @ts-ignore
    const selectedTeamType = e.target.value;

    switch (selectedTeamType) {
      case 'herren':
        this.leageOptions = this._renderMensLeagueDropdown();
        break;
      case 'a-junioren':
        this.leageOptions = this._renderBoysLeagueDropdown();
        break;
      case 'frauen':
        this.leageOptions = this._renderWomensLeagueDropdown();
        break;
      case 'a-juniorinnen':
        this.leageOptions = this._renderGirlsLeagueDropdown();
        break;
      default:
        break;
    }

    this.spielklasse.reset();
    this.spielklasse.disabled = false;

    this.requestUpdate();
    await this.updateComplete;
  }

  // Templates

  // eslint-disable-next-line class-methods-use-this
  private _renderInitialState(){
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderPendingState(){

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
  private _renderSuccessState(data: void){
    const successPage = new URL('/bewerbung-erfolgreich/', window.location.origin);
    window.location.href = successPage.href;
  }

  private _renderErrorState(error: unknown){
    this.dispatchEvent(new CustomEvent('submission_error', {detail: error}));
    console.error(error);
    this.errorDialog.open = true;
  }

  private _renderForm(){
    return html`
    <section id="form-wrapper">
      <form id="application-form">
        <div>
          ${this._renderPersonalQuestions()}
          ${this._renderFootballQuestions()}
          ${this._renderSocialQuestions()}
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

    ${this._renderSuccessDialog()}
    ${this._renderErrorDialog()}
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

  private _renderPersonalQuestions() {
    return html`
      <div>
        <div class="form-header">
          <h2 class="display-small">Über Dich:</h2>
        </div>
        <div class="form-fields">
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
            <md-filled-text-field
              label="Geburtsdatum"
              required
              autocomplete="bday"
              type="date"
              style="width: 100%"
              @blur=${this._validateAge}
            ></md-filled-text-field>
            ${this._renderTooltip(tooltipMessages.birthday)}
          </div>

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
              label="Telefon"
              autocomplete="tel"
              type="tel"
              max="20"
              @blur=${BallerForm._reportFieldValidity}
              style="width: 100%"
            ></md-filled-text-field>
          ${this._renderTooltip(tooltipMessages.phone)}
          </div>
          
          <div class="field-with-tooltip">
            <md-filled-select
              label="Kleidergröße"
              name="shirt-size"
              required
              style="width: 100%;"
            >
            <md-select-option value="XS">
              <div slot="headline">XS</div>
            </md-select-option>
            <md-select-option value="S">
              <div slot="headline">S</div>
              </md-select-option>
              <md-select-option value="M">
              <div slot="headline">M</div>
              </md-select-option>
              <md-select-option value="L">
                <div slot="headline">L</div>
              </md-select-option>
              <md-select-option value="XL">
                <div slot="headline">XL</div>
              </md-select-option>
            </md-filled-select>
            ${this._renderTooltip(tooltipMessages.clothes)}
          </div>

          <div class="field-with-tooltip">
          <md-filled-select
            label="Dein Bundesland"
            name="bundesland"
            required
            @change=${this._handleFederalStateSelection}
            style="width: 100%"
          >
          <md-select-option value="Baden-Württemberg">
            <div slot="headline">Baden-Württemberg</div>
           </md-select-option>
           <md-select-option value="Bayern">
             <div slot="headline">Bayern</div>
            </md-select-option>
            <md-select-option value="Berlin">
             <div slot="headline">Berlin</div>
            </md-select-option>
            <md-select-option value="Brandenburg">
              <div slot="headline">Brandenburg</div>
            </md-select-option>
            <md-select-option value="Bremen">
              <div slot="headline">Bremen</div>
            </md-select-option>
            <md-select-option value="Hamburg">
              <div slot="headline">Hamburg</div>
            </md-select-option>
            <md-select-option value="Hessen">
              <div slot="headline">Hessen</div>
            </md-select-option>
            <md-select-option value="Mecklenburg-Vorpommern">
              <div slot="headline">Mecklenburg-Vorpommern</div>
            </md-select-option>
            <md-select-option value="Niedersachsen">
              <div slot="headline">Niedersachsen</div>
            </md-select-option>
            <md-select-option value="Nordrhein-Westfalen">
              <div slot="headline">Nordrhein-Westfalen</div>
            </md-select-option>
            <md-select-option value="Rheinland-Pfalz">
              <div slot="headline">Rheinland-Pfalz</div>
            </md-select-option>
            <md-select-option value="Saarland">
              <div slot="headline">Saarland</div>
            </md-select-option>
            <md-select-option value="Sachsen">
              <div slot="headline">Sachsen</div>
            </md-select-option>
            <md-select-option value="Sachsen-Anhalt">
              <div slot="headline">Sachsen-Anhalt</div>
            </md-select-option>
            <md-select-option value="Schleswig-Holstein">
              <div slot="headline">Schleswig-Holstein</div>
            </md-select-option>
            <md-select-option value="Thüringen">
              <div slot="headline">Thüringen</div>
            </md-select-option>
            <md-select-option value="Ausland">
              <div slot="headline">Ich wohne im Ausland</div>
            </md-select-option>
          </md-filled-select>
          <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="Land"
              name="current-country"
              class="hidden"
              style="width: 100%"
            >

            <md-select-option value="Belgien">
              <div slot="headline">Belgien</div>
            </md-select-option>
            <md-select-option value="Bulgarien">
              <div slot="headline">Bulgarien</div>
              </md-select-option>
              <md-select-option value="Dänemark">
              <div slot="headline">Dänemark</div>
              </md-select-option>
              <md-select-option value="Estland">
                <div slot="headline">Estland</div>
              </md-select-option>
              <md-select-option value="Finnland">
                <div slot="headline">Finnland</div>
              </md-select-option>
              <md-select-option value="Frankreich">
                <div slot="headline">Frankreich</div>
              </md-select-option>
              <md-select-option value="Griechenland">
                <div slot="headline">Griechenland</div>
              </md-select-option>
              <md-select-option value="Irland">
                <div slot="headline">Irland</div>
              </md-select-option>
              <md-select-option value="Italien">
                <div slot="headline">Italien</div>
              </md-select-option>
              <md-select-option value="Kroatien">
                <div slot="headline">Kroatien</div>
              </md-select-option>
              <md-select-option value="Lettland">
                <div slot="headline">Lettland</div>
              </md-select-option>
              <md-select-option value="Litauen">
                <div slot="headline">Litauen</div>
              </md-select-option>
              <md-select-option value="Luxemburg">
                <div slot="headline">Luxemburg</div>
              </md-select-option>
              <md-select-option value="Malta">
                <div slot="headline">Malta</div>
              </md-select-option>
              <md-select-option value="Niederlande">
                <div slot="headline">Niederlande</div>
              </md-select-option>
              <md-select-option value="Polen">
                <div slot="headline">Polen</div>
              </md-select-option>
              <md-select-option value="Portugal">
                <div slot="headline">Portugal</div>
              </md-select-option>
              <md-select-option value="Rumänien">
                <div slot="headline">Rumänien</div>
              </md-select-option>
              <md-select-option value="Schweden">
                <div slot="headline">Schweden</div>
              </md-select-option>
              <md-select-option value="Slowakei">
                <div slot="headline">Slowakei</div>
              </md-select-option>
              <md-select-option value="Slowenien">
                <div slot="headline">Slowenien</div>
              </md-select-option>
              <md-select-option value="Spanien">
                <div slot="headline">Spanien</div>
              </md-select-option>
              <md-select-option value="Tschechische Republik">
                <div slot="headline">Tschechische Republik</div>
              </md-select-option>
              <md-select-option value="Ungarn">
                <div slot="headline">Ungarn</div>
              </md-select-option>
              <md-select-option value="Zypern">
                <div slot="headline">Zypern</div>
              </md-select-option>
              <md-select-option value="Österreich">
                <div slot="headline">Österreich</div>
              </md-select-option>
            </md-filled-select>
            <div class="invisible-icon"></div>
          </div>
        </div>
      </div>
    `;
  }

  private _renderTeamTypeDropdown(){
    return html`
      <div class="field-with-tooltip">
        <md-filled-select
          label="Teamtyp"
          name="team-type"
          @change=${this._handleTeamTypeSelection}
          style="width: 100%"
        >
          <md-select-option value="herren">
            <div slot="headline">Herren</div>
          </md-select-option>
          <md-select-option value="a-junioren">
            <div slot="headline">A-Junioren</div>
          </md-select-option>
          <md-select-option value="frauen">
            <div slot="headline">Frauen</div>
          </md-select-option>
          <md-select-option value="a-juniorinnen">
            <div slot="headline">A-Juniorinnen</div>
          </md-select-option>
        </md-filled-select>
      <div class="invisible-icon"></div>
      </div>
    `;
  }

  private _renderFootballQuestions() {
    return html`
    <div>
      <div class="form-header">
        <h2 class="display-small">Deine Fußballerfahrung</h2>
      </div>
      <div class="form-fields">
      <div class="field-with-tooltip">
        <md-filled-select
          label="Deine Position"
          name="position"
          required
          style="width: 100%"
        >
          <md-select-option value="stürmer">
            <div slot="headline">Stürmer</div>
          </md-select-option>
          <md-select-option value="mittelfeldspieler">
            <div slot="headline">Mittelfeldspieler</div>
          </md-select-option>
          <md-select-option value="verteidiger">
            <div slot="headline">Verteidiger</div>
          </md-select-option>
          <md-select-option value="torwart">
            <div slot="headline">Torwart</div>
          </md-select-option>
        </md-filled-select>
        <div class="invisible-icon"></div>
      </div>
        ${this._renderActiveExperience()}
        <div id="international-active-experience" class="hidden form-fields">
          ${this._renderInternationalActiveExperience()}
        </div>
        <div id="domestic-active-experience" class="hidden form-fields">
          ${this._renderTeamTypeDropdown()}
          ${this._renderSpielklasse()}
        </div>

        
        <md-filled-text-field
          label="Welche sonstige Spielklasse?"
          name="other-experience"
          hidden
          max="250"
          class="hidden"
        ></md-filled-text-field>
        
          <md-filled-text-field
            label="In welchem Verein spielst Du"
            name="club"
            max="250"
            style="width: 100%"
            @blur=${BallerForm._reportFieldValidity}
            class="hidden"
          ></md-filled-text-field>

        ${this._renderHistoricalExperience()}
        <div id="domestic-historical-experience" class="hidden form-fields">
          ${this._renderDomesticHistoricalExperience()}
        </div>

        <div id="international-historical-experience" class="hidden form-fields">
          ${this._renderInternationalHistoricalExperience()}
        </div>
        
      </div>
    </div>
  `;
  }

  private _renderSocialQuestions() {
    return html`
      <div>
        <div class="form-header">
          <h2 class="display-small">Zeig uns, was Du kannst</h2>
          <h3 class="headline-small">Um so mehr wir von Dir wissen, um so höher sind Deine Chancen.</h3>
        </div>
        <div class="form-fields">
        <div class="field-with-tooltip">
          <md-filled-text-field
            label="Highlight Tape (URL)"
            name="highlight-tape"
            max="250"
            style="width: 100%"
            @blur=${BallerForm._reportFieldValidity}
          ></md-filled-text-field>
          
          ${this._renderTooltip(tooltipMessages.highlight)}
        </div>
          <div class="field-with-tooltip">
          <md-filled-text-field
            label="Link Transfermarkt"
            name="transfermarkt"
            max="250"
            style="width: 100%"
            @blur=${BallerForm._reportFieldValidity}
          ></md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="YouTube"
              autocomplete="username"
              max="250"
              name="youtube"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="Instagram"
              autocomplete="username"
              max="250"
              name="instagram"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="TikTok"
              autocomplete="username"
              max="250"
              name="tiktok"
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field
              label="XING"
              autocomplete="username"
              max="250"
              name="xing" 
              style="width: 100%"
            >
            </md-filled-text-field>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <md-filled-text-field type="textarea" rows="6" name="freeform" label="Achievements oder Anmerkungen" maxLength=250 style="width: 100%">
            </md-filled-text-field>
            ${this._renderTooltip(tooltipMessages.achievments)}
          </div>

          <div class="field-with-tooltip">
            <md-filled-select
              label="Ich bin verfügbar am"
              name="availability"
              required
              style="width: 100%"
            >
              <md-select-option value="16 Dezember">
                <div slot="headline">16 Dezember 2023</div>
              </md-select-option>
              <md-select-option value="17 Dezember">
                <div slot="headline">17 Dezember 2023</div>
              </md-select-option>
              <md-select-option value="An beiden Tagen">
                <div slot="headline">An beiden Tagen</div>
              </md-select-option>
              <md-select-option value="An einem anderen Tag">
                <div slot="headline">An einem anderen Tag</div>
              </md-select-option>
            </md-filled-select>
            ${this._renderTooltip(tooltipMessages.dates)}
          </div>

          <div class="field-with-tooltip medium-top-padding">
            <label class="label-medium inline-label">
              <md-checkbox
                touch-target="wrapper"
                @change=${this._handleLegalChange}
                data-element="tos"
                style="min-width: 1.2rem"
              ></md-checkbox>
              <span>
              Ja, ich bin jederzeit widerruflich damit einverstanden, dass die von mir angegeben Daten an die Baller League GmbH für meine Anmeldung zur Baller League übertragen werden und ich zukünftig den E-Mail-Newsletter von XING zu ihrem Baller League Sponsoring, zu interessanten Angeboten und Jobangeboten von Partnern von XING erhalte.
              </span>
            </label>
            <div class="invisible-icon"></div>
          </div>

          <div class="field-with-tooltip">
            <label class="label-medium inline-label">
              <md-checkbox
                touch-target="wrapper"
                @change=${this._handleLegalChange}
                data-element="teilnahmebedingungen"
                style="min-width: 1.2rem"
              ></md-checkbox>
              <span>
                Ich stimme den <a href="/datenschutz/" style="color: #0698A0; text-decoration: none;">Datenschutzbestimmungen</a> der Baller League zu.
              </span>
            </label>
            <div class="invisible-icon"></div>
          </div>
        </div>
      </div>
    `;
  

}

  // eslint-disable-next-line class-methods-use-this
  private _renderMensLeagueDropdown(){
    return html`
      <md-select-option value="1-bundesliga">
        <div slot="headline">1. Bundesliga</div>
      </md-select-option>
      <md-select-option value="2-bundesliga">
        <div slot="headline">2. Bundesliga</div>
      </md-select-option>
      <md-select-option value="3-liga">
        <div slot="headline">3. Liga</div>
      </md-select-option>
      <md-select-option value="regionalliga">
        <div slot="headline">Regionalliga</div>
      </md-select-option>
      <md-select-option value="oberliga">
        <div slot="headline">Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="bezirks-kreisklasse">
        <div slot="headline">Bezirks/Kreisklasse</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderBoysLeagueDropdown(){
    return html`
      <md-select-option value="bundesliga">
        <div slot="headline">Bundesliga</div>
      </md-select-option>
      <md-select-option value="regionalliga-oberliga">
        <div slot="headline">Regionalliga/Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderWomensLeagueDropdown(){
    return html`
      <md-select-option value="1-bundesliga">
        <div slot="headline">1. Bundesliga</div>
      </md-select-option>
      <md-select-option value="2-bundesliga">
        <div slot="headline">2. Bundesliga</div>
      </md-select-option>
      <md-select-option value="regionalliga">
        <div slot="headline">Regionalliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderGirlsLeagueDropdown(){
    return html`
      <md-select-option value="regionalliga-oberliga">
        <div slot="headline">Regionalliga/Oberliga</div>
      </md-select-option>
      <md-select-option value="verbands-landesliga">
        <div slot="headline">Verbands/Landesliga</div>
      </md-select-option>
      <md-select-option value="andere">
        <div slot="headline">Andere</div>
      </md-select-option>
    `;
  }

  private _renderSpielklasse() {

    return html`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Spielklasse"
        name="spielklasse"
        @change=${this._handleExperienceSelection}
        style="width: 100%;"
      >
      ${this.leageOptions}
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>
    `;
  }

  private _renderActiveExperience(){
    return html`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Wie bist Du gerade aktiv"
        name="active-experience"
        required
        @change=${this._handleActiveExperienceSelection}
        style="width: 100%;"
      >
        <md-select-option value="deutschland">
          <div slot="headline">Ich spiele in Deutschland</div>
        </md-select-option>
        <md-select-option value="vereinslos">
          <div slot="headline">Bin aktuell vereinslos</div>
        </md-select-option>
        <md-select-option value="international">
          <div slot="headline">Ich spiele im Ausland</div>
        </md-select-option>
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderInternationalActiveExperience(){
    return html`
    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Land"
        maxLength="100"
        @blur=${BallerForm._reportFieldValidity}
        name="international-current-team-country"
        style="width: 100%;"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>

    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Liga"
        maxLength="100"
        @blur=${BallerForm._reportFieldValidity}
        name="current-international-league"
        style="width: 100%;"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>
    `;
  }

  private _renderHistoricalExperience(){
    return html`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Deine höchstgespielte Spielklasse"
        name="highest-experience"
        required
        @change=${this._handleHighestExperienceSelection}
        style="width: 100%"
      >
        <md-select-option value="dasselbe">
          <div slot="headline">die, in der ich jetzt gerade spiele</div>
        </md-select-option>
        <md-select-option value="deutschland">
          <div slot="headline">In Deutschland</div>
        </md-select-option>
        <md-select-option value="international">
          <div slot="headline">Im Ausland</div>
        </md-select-option>
      </md-filled-select>
      ${this._renderTooltip(tooltipMessages.experience)}
    </div>
    `;
  }

   // eslint-disable-next-line class-methods-use-this
   private _renderInternationalHistoricalExperience(){
    return html`
    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Land"
        maxLength="100"
        @blur=${BallerForm._reportFieldValidity}
        name="historical-experience-country"
        style="width: 100%"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>

    <div class="field-with-tooltip">
      <md-filled-text-field
        label="Liga"
        maxLength="100"
        @blur=${BallerForm._reportFieldValidity}
        name="historical-experience-league"
        style="width: 100%"
      ></md-filled-text-field>
      <div class="invisible-icon"></div>
    </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderDomesticHistoricalExperience(){
    return html`
    <div class="field-with-tooltip">
      <md-filled-select
        label="Deine höchstgespielte Spielklasse"
        name="highest-domestic-experience"
        style="width: 100%"
      >
        ${this.leageOptions}
      </md-filled-select>
      <div class="invisible-icon"></div>
    </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  private _renderTooltip(message: string){
    return html`
      <span class="tooltip-toggle" aria-label="${message}" tabindex="0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 11V17H11V11H13ZM13 7V9H11V7H13Z" fill="#1D2124"/>
        </svg>
      </span>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'baller-form': BallerForm;
  }
}
