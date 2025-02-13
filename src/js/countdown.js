export function startCountdown(timerId, targetDateStr) {
  const countdownTimer = document.getElementById(timerId);
  const targetDate = new Date(targetDateStr).getTime();

  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      countdownTimer.textContent = 'Час вийшов!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the timer elements to always show two digits
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
  }

  updateCountdown(); // Initial call so the user sees the timer immediately
  const timerInterval = setInterval(updateCountdown, 1000);
}
