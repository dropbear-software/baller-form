<?php

/**
 * Validates a reCAPTCHA v3 token.
 *
 * @param string $token The reCAPTCHA v3 token to validate.
 * @return string The response from the reCAPTCHA API.
 *
 * @throws Exception If the reCAPTCHA token cannot be validated.
 *
 * [Documentation](https://developers.google.com/recaptcha/docs/verify)
 */
function validateRecaptchaToken(string $token): string
{
  // Set the reCAPTCHA secret key.
  $secretKey = 'YOUR_RECAPTCHA_SECRET_KEY';

  // Create a new curl object.
  $ch = curl_init();

  // Set the curl options.
  curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
  curl_setopt($ch, CURLOPT_POST, TRUE);
  curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['secret' => $secretKey, 'response' => $token]));
  curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/x-www-form-urlencoded"]);
  curl_setopt($ch, CURLOPT_TIMEOUT, 5); // seconds

  // Execute the curl request.
  $response = curl_exec($ch);

  // Check for any errors.
  if ($response === FALSE) {
    // Handle the error gracefully.
    // For example, log the error to the console or return a JSON response with the error message.
    throw new Exception("Failed to validate reCAPTCHA token: $token");
  }

  // Close the curl connection.
  curl_close($ch);

  // Return the response.
  return $response;
}

/**
 * Validates a reCAPTCHA v3 token from a POST request.
 *
 * Returns a string containing the reCAPTCHA API response, or a JSON error
 * if the token cannot be validated.
 *
 * @return string The reCAPTCHA API response, or a JSON error if the token cannot be validated.
 */
function recaptcha_check(): string
{
  // Get the token from the request body.
  $token = $_POST['token'];

  try {
    // Validate the token.
    $validation_response = validateRecaptchaToken($token);
    header('Content-Type: application/json');
    // As far as I am aware this should *already* be JSON 
    // Source: https://developers.google.com/recaptcha/docs/verify#api-response
    echo $validation_response;
  } catch (Exception $e) {
    // Return a JSON error.
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()], JSON_THROW_ON_ERROR);
    exit;
  }
}

recaptcha_check();