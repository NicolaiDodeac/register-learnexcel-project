import { initModal } from './js/modal.js';
import { startCountdown } from './js/countdown.js';
import { handleFormSubmit } from './js/formValidation.js';

initModal('open-modal', 'close-modal', 'modal');
handleFormSubmit('registration-form');
handleFormSubmit('modal-registration-form');

document.addEventListener('DOMContentLoaded', () => {
  startCountdown('countdown-timer', '2025-03-01T23:59:59');
});
