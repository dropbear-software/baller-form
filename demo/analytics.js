// Example implementation for analytics that reports on any of the key events
// that occur when using the form.

// Set up the dataLayer objects if they don't already exist

// GTM Style DataLayer
window.dataLayer = window.dataLayer || [];
// Adobe Style DataLayer
window.adobeDataLayer = window.adobeDataLayer || [];

// When a user has completed a successful application
document.addEventListener('completed-application', (event) => {
  // GTM Version
  window.dataLayer.push({
    event: "completed-application",
    experience: event.detail.experience,
    club: event.detail.club
  });

  // Adobe Analytics Version
  window.adobeDataLayer.push({
    "event": "completed-application",
    "data": {
      "experience": event.detail.experience,
      "club": event.detail.club
    }
  });
});

// When the sign up form is fully loaded onto the page. 
document.addEventListener('signup-form-displayed', () => {
  // GTM Version
  window.dataLayer.push({event: "signup-form-displayed"})

  // Adobe Analytics Version
  window.adobeDataLayer.push({"event": "signup-form-displayed"});
});

// When a user proceeds to the next step in the form
document.addEventListener('next-form-step', (event) => {
  // GTM Version
  window.dataLayer.push({
    event: "next-form-step",
    formStep: event.detail.step
  });

  // Adobe Analytics Version
  window.adobeDataLayer.push({
    "event": "next-form-step",
    "data": event.detail.step
  });
});

// When a user goes back to a previous step in the form
document.addEventListener('prev-form-step', (event) => {
  // GTM Version
  window.dataLayer.push({
    event: "prev-form-step",
    formStep: event.detail.step
  });

  // Adobe Analytics Version
  window.adobeDataLayer.push({
    "event": "prev-form-step",
    "data": event.detail.step
  });
});