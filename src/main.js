import { initModal } from './js/modal.js';
import { startCountdown } from './js/countdown.js';
import { handleFormSubmit } from './js/formValidation.js';

initModal('open-modal', 'close-modal', 'modal');

// startCountdown('countdown-timer', '2025-03-01T00:00:00');

handleFormSubmit('registration-form');
handleFormSubmit('modal-registration-form');

// Ensure the DOM is fully loaded (including any partials loaded by the custom <load> element)
document.addEventListener('DOMContentLoaded', () => {
  // Adjust the target date as needed (format: YYYY-MM-DDTHH:MM:SS)
  startCountdown('countdown-timer', '2025-12-31T23:59:59');
});
