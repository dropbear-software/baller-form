import { ApplicationData } from './application-data.js';

/**
 * A service for processing and sending application data to Braze.
 *
 * @constructor
 * @param {string} endpoint The endpoint URL for the Braze API.
 */
export class EnrollmentService {
  readonly endpoint: URL;

  constructor(endpoint: string) {
    this.endpoint = new URL(endpoint, window.location.origin);
  }

  /**
   * Processes an application data object and sends it to Braze.
   * @param {ApplicationData} data The application data object to process.
   * 
   * @returns {Promise<void>} A promise that resolves when the application data has been successfully sent to Braze.
   */
  async process(data: ApplicationData) {
    const jsonData = EnrollmentService.prepareDataForBraze(data);
    const brazeResponse = await this.sendDataToBraze(jsonData);
    this.handleBrazeResponse(brazeResponse);
  }

  /**
   * Sends data to Braze.
   * 
   * @param {object} data The data to send to Braze.
   * 
   * @returns {Promise<object>} A promise that resolves to the JSON response from Braze.
   */
  private async sendDataToBraze(data: object) {
    // Default options are marked with *
    const response = await fetch(this.endpoint, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  /**
   * Prepares data for sending to Braze.
   * 
   * @param {ApplicationData} data The application data to prepare.
   * @returns {object} The data prepared for sending to Braze.
   */
  private static prepareDataForBraze(data: ApplicationData) {
    const brazeEvent = {
      events: [
        {
          email: data.email,
          app_id: '220983e3-8db5-49d5-8272-620b09b1f7fa',
          name: 'Submit_BallerLeague_Application',
          time: new Date().toISOString(),
        },
      ],
      attributes: [
        {
          email: data.email,
          first_name: data.givenName,
          last_name: data.familyName,
          phone: data.telephone,
          dob: data.birthDate,
          highest_league: data.experience,
          soccer_club: data.clubName,
          highlight_tape_url: data.highlightTape,
          link_transfermarket: data.transfermarktProfile,
          youtube_link: data.youTube,
          instagram_link: data.instagram,
          tiktok_link: data.tikTok,
          comment: data.freeform,
        },
      ],
    };

    return brazeEvent;
  }

  /**
   * Handles the response from Braze.
   *
   * @param {object} response The response from Braze.
   *
   * @returns {void}
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  private handleBrazeResponse(response: object) {
    // TODO: Handle the response here so we can show a confirmation message
    console.log(`Braze Response \n ${response}`);
  }
}
