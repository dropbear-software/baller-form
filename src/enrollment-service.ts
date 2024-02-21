import { ApplicationData } from './application-data.js';

interface BrazeResponse {
  message: string,
  errors?: Array<object>,
  attributes_processed?: number
  events_processed?: number
  purchases_processed?: number
}

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
   * Handles the response from Braze.
   *
   * @param {object} response The response from Braze.
   *
   * @returns {void}
   */
  private static handleBrazeResponse(response: BrazeResponse) {
    // console.log(`[DEBUG] Server Response \n ${JSON.stringify(response, null, "\t")}`);

    if (response.errors) {
      console.error(response);
      throw new Error("Invalid Braze API response.");
    }

  }

  /**
   * Processes an application data object and sends it to Braze.
   * @param {ApplicationData} data The application data object to process.
   * 
   * @returns {Promise<void>} A promise that resolves when the application data has been successfully sent to Braze.
   */
  async process(data: ApplicationData) {
    const jsonData = EnrollmentService.prepareDataForBraze(data);
    // console.log(`[DEBUG]: Sending the followig data to Braze \n ${JSON.stringify(jsonData, null, "\t")}`);
    const brazeResponse = await this.sendDataToBraze(jsonData);
    const parsedResponse = JSON.parse(brazeResponse);
    EnrollmentService.handleBrazeResponse(parsedResponse);
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
          name: 'Jersey_Sweepstake_Submission',
          time: new Date().toISOString(),
        },
      ],
      attributes: [
        {
          email: data.email,
          first_name: data.givenName,
          last_name: data.familyName,
          xing_member: data.xingMember,
          selected_teams: data.selectedTeam,
          accepted_conditions: data.acceptedTos,
        }
      ]
    }

    return brazeEvent;
  }
}

