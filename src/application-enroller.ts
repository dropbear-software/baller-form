import { ApplicationData } from "./application-data.js";

export class EnrollmentService {
  readonly brazeAPIKey: string;

  readonly endpoint = 'https://rest.iad-01.braze.com/users/track';

  constructor(brazeAPIKey: string){
    this.brazeAPIKey = brazeAPIKey;
  }

  // We call this method once the user clicks submit and we have validated the data
  async process(data: ApplicationData) {
    await this.sendDataToBraze(data);
  }

  // Send Data to Braze:
  private async sendDataToBraze(data: ApplicationData){
    // Default options are marked with *
    const response = await fetch(this.endpoint, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Authorization": this.brazeAPIKey
      },
      redirect: "manual", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}