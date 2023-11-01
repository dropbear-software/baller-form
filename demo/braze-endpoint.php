<?php

/**
 * Sends a custom event to Braze.
 *
 * @param string $jsonBody The JSON object containing the event data.
 * @return string The response from the Braze API.
 *
 * @throws Exception If the event cannot be sent to Braze.
 */
function sendBrazeCustomEvent(string $jsonBody): string
{
  $braze_endpoint = "https://rest.api.appboy.eu/users/track";

  $braze_secrect_key = "YOUR_BRAZE_SECRET_KEY";

  // Create a new cURL object.
  $ch = curl_init();

  // Set the cURL options.
  curl_setopt($ch, CURLOPT_URL, $braze_endpoint);
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $braze_secrect_key",
    "Content-Type: application/json",
  ]);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonBody);
  curl_setopt($ch, CURLOPT_TIMEOUT, 5); // seconds

  // Execute the cURL request.
  $response = curl_exec($ch);

  // Check for any errors.
  if ($response === FALSE) {
    throw new Exception("Failed to call endpoint: $braze_endpoint");
  }

  // Close the cURL connection.
  curl_close($ch);

  // Return the response.
  return $response;
}

/**
 * Accepts a JSON submission and sends it to Braze.

 * @param string $submission The users application details represented as a JSON object.
 *
 * @return void
 */
function acceptSubmission()
{
  $baller_league_application = $_POST['submission'];

  // Get the content type of the POST request.
  $contentType = $_SERVER['CONTENT_TYPE'];

  // If the content type is not application/json, throw an exception.
  if ($contentType !== 'application/json') {
      header('HTTP/1.1 400 Bad Request');
      echo json_encode(['error' => 'Invalid content type.'], JSON_THROW_ON_ERROR);
      exit;
  }

  try {
    $braze_response = sendBrazeCustomEvent($baller_league_application);
    header('Content-Type: application/json');
    // As far as I am aware this should *already* be JSON 
    // Source: https://www.braze.com/docs/api/endpoints/user_data/post_user_track/#responses
    echo $braze_response;
  } catch (Exception $e) {
    // Return a JSON error.
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()], JSON_THROW_ON_ERROR);
    exit;
  }
}

acceptSubmission();