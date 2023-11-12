interface RecaptchaValidationResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}

/**
 * A service for using reCAPTCHA v3 to prevent spam.
 *
 * This service provides a number of methods for generating reCAPTCHA challenges,
 * validating responses, and determining if a user is likely to be a bot.
 *
 * To use the service, you must first create an instance of it,
 * passing in your reCAPTCHA site key and server-side validation endpoint
 */
export class SpamService {
  readonly siteKey: string;

  readonly serverSideValidationEndpoint: URL;

  readonly scriptURL: URL;

  readonly minimumTrustRequired = 0.5;

  // Simple flag to set if we are actually using this feature or not
  featureEnabled = true;

  constructor(siteKey: string, endpoint: string) {
    this.siteKey = siteKey;
    this.scriptURL = SpamService.generateScriptUrl(siteKey);
    this.serverSideValidationEndpoint = new URL(endpoint, window.location.origin);
  }

  /**
   * Generates an HTML script element for the Google reCAPTCHA script.
   *
   * @returns An HTML script element for the Google reCAPTCHA script.
   */
  generateScriptElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.async = true;
    script.src = this.scriptURL.href;
    return script;
  }

  /**
   * Determines if the current user is likely to be valid user or a bot.
   *
   * This function uses reCAPTCHA v3 to verify the user's identity.
   * If reCAPTCHA is enabled and available, the function will execute a reCAPTCHA
   * challenge and use the response score to determine if the user is valid.
   * If reCAPTCHA is disabled or unavailable, the function will simulate a valid score.
   *
   * @returns `true` if the user meets our reCAPTCHA validation scoring criteria, `false` otherwise.
   *
   * @link https://developers.google.com/recaptcha/v3/
   * @link https://developers.google.com/recaptcha/docs/v3#programmatically_invoke_the_challenge
   */
  async isValidUser() {
    let calculatedScore = 0;
    if (this.featureEnabled && 'grecaptcha' in window) {
      // @ts-ignore
      window.grecaptcha
        .execute(this.siteKey, { action: 'submit' })
        .then(async (token: string) => {
          // TODO: Handle errors here if something goes wrong with the server validation
          const response = await this.validateTokenWithServer(token);
          calculatedScore = response.score;
        });
    } else {
      // Simulate a valid score here for now
      calculatedScore = 1;
    }

    return calculatedScore >= this.minimumTrustRequired;
  }

  /**
   * Validates the given token with the server.
   *
   * @param token The reCAPTCHA v3 token to validate.
   * @returns A Promise that resolves to an object containing the validation results, or rejects with an error if the validation fails.
   */
  private async validateTokenWithServer(
    token: string
  ): Promise<RecaptchaValidationResponse> {
    // Time out after 5 seconds if we don't already have a response
    const abortSignal = AbortSignal.timeout(5000); // milliseconds

    const response = await fetch(this.serverSideValidationEndpoint, {
      method: 'POST',
      signal: abortSignal,
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      throw new Error('Unable to validate Recaptcha Token with the server');
    }

    return response.json();
  }

  /**
   * Generates a URL to the Google reCAPTCHA script.
   *
   * @param siteKey The reCAPTCHA site key.
   * @returns A URL to the Google reCAPTCHA script.
   */
  private static generateScriptUrl(siteKey: string): URL {
    const scriptUrl = new URL('https://www.google.com/recaptcha/api.js');
    scriptUrl.searchParams.append('render', siteKey);
    return scriptUrl;
  }
}
