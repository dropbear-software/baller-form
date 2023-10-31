// A class that is responsible for loading the relevant captcha scripts and calculating 
// a spam score that can be used to decide if the form submission should proceed.
export class SpamService {
  readonly siteKey: string;

  scriptURL = new URL("https://www.google.com/recaptcha/api.js");

  serverSideValidationEndpoint = new URL('https://www.example.com/validateToken');

  minimumTrustRequired = 0.5;

  // Set to false to actually use the service otherwise simulate it passing for now
  mockingEnabled = true;

  constructor(siteKey: string){
    this.siteKey = siteKey;
    this.scriptURL.searchParams.append('render', siteKey);
  }

  generateScriptElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.async = true;
    script.src = this.scriptURL.toString();
    return script;
  }

  // https://developers.google.com/recaptcha/docs/v3#programmatically_invoke_the_challenge
  isValidUser(){
    let calculatedScore = 0;
    if('grecaptcha' in window) {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      window.grecaptcha.execute(this.siteKey, {action: 'submit'}).then(async (token: string) => {
        if (this.mockingEnabled) {
          calculatedScore = 1;
          console.log(`The captcha token was: ${token}`);
        } else {
          // await this.validateTokenWithServer(token);
          console.error("This service is not currently enabled");
        }
      });
    }

    return (calculatedScore >= this.minimumTrustRequired);
  }

  // This function is responsible for sending the client token to the server side endpoint for validation
  private async validateTokenWithServer(token: string) {
    const response = await fetch(this.serverSideValidationEndpoint, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        "clientToken": token
      }), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}