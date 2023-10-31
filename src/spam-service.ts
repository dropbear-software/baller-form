// A class that is responsible for loading the relevant captcha scripts and calculating 
// a spam score that can be used to decide if the form submission should proceed.
export class SpamService {
  readonly siteKey: string;

  scriptURL = new URL("https://www.google.com/recaptcha/api.js");

  serverSideValidationEndpoint = new URL('https://www.example.com/validateToken');

  minimumTrustRequired = 0.5;

  // Simple flag to set if we are actually using this feature or not
  featureEnabled = false;

  constructor(siteKey: string){
    this.siteKey = siteKey;
    // https://developers.google.com/recaptcha/docs/v3#programmatically_invoke_the_challenge
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
    if (this.featureEnabled && 'grecaptcha' in window) {
      // @ts-ignore
      window.grecaptcha.execute(this.siteKey, {action: 'submit'}).then(async (token: string) => {
        await this.validateTokenWithServer(token);
      });
    } else {
      // Simulate a valid score here for now
      calculatedScore = 1;
    }

    return (calculatedScore >= this.minimumTrustRequired);
  }

  // This function is responsible for sending the client token to the server side endpoint for validation
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  private async validateTokenWithServer(token: string) {
    throw new Error("Server side validation is not yet implemented");
    
    // const response = await fetch(this.serverSideValidationEndpoint, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify({
    //     "clientToken": token
    //   }), // body data type must match "Content-Type" header
    // });
    // return response.json(); // parses JSON response into native JavaScript objects
  }
}