<?php

/**
 * Sends a custom event to Braze.
 *
 * @param string $jsonBody The JSON object containing the event data.
 * @return string The response from the Braze API.
 *
 * @throws Exception If the event cannot be sent to Braze.
 */
function add_bl_application(WP_REST_Request $incoming_request): string
{
  // Make sure the incoming request is infact JSON
  if ($incoming_request->get_content_type() != "application/json") {
    error_log('Invalid content-type');
    // QUESTION: Should I throw here? What kind of HTTP response do I get by returning false?
    return false;
  }

  // QUESTION: This should already be a JSON string at this point do I need to wrap with json_encode?
  $jsonBody = $incoming_request->get_body();

  $braze_endpoint = "https://rest.api.appboy.eu/users/track";

  $braze_secrect_key = "YOUR_BRAZE_SECRET_KEY";

  $braze_request = array(
    'headers' => array(
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer ' . $braze_secrect_key
    ),
    'body' => $jsonBody
  );

  $response = wp_remote_post($braze_endpoint, $braze_request);
    
  if (is_wp_error($response)) {
    error_log($response->get_error_message());
    return false;
  }
  
  $body = wp_remote_retrieve_body($response);
  return json_decode($body);
}

// Route any incoming requests at this URL to our custom handler
add_action('rest_api_init', function () {
  register_rest_route('ballerleague/v1', '/submit_application', array(
      'methods' => 'POST',
      'callback' => 'add_bl_application',
      'permission_callback' => '__return_true'
  ));
});