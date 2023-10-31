import { ApplicationData } from "./application-data.js";

export class EnrollmentService {
  readonly brazeAPIKey: string;

  readonly endpoint = 'https://rest.api.appboy.eu/users/track';

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
        "Authorization": `Bearer ${this.brazeAPIKey}`
      },
      redirect: "manual", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: EnrollmentService.prepareDataForBraze(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // This is the specific shape the data should be in for Braze integration
  private static prepareDataForBraze(data: ApplicationData) {
    const brazeEvent = {
      "events": [
        {
          "email": data.email,
          "app_id": "220983e3-8db5-49d5-8272-620b09b1f7fa",
          "name": "Submit_BallerLeague_Application",
          "time": new Date().toISOString()
        }
      ],
      "attributes": [
        {
          "email": data.email,
          "first_name": data.givenName,
          "last_name": data.familyName,
          "phone": data.telephone,
          "dob": data.birthDate,
          "highest_league": data.experience,
          "soccer_club": data.clubName,
          "highlight_tape_url": data.highlightTape,
          "link_transfermarket": data.transfermarktProfile,
          "youtube_link": data.youTube,
          "instagram_link": data.instagram,
          "tiktok_link": data.tikTok,
          "comment": data.freeform
        }
      ]
    };

    return JSON.stringify(brazeEvent);
  }
}