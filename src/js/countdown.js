export function startCountdown(timerClass, targetDateStr) {
  const countdownTimers = document.querySelectorAll(`.${timerClass}`);
  const targetDate = new Date(targetDateStr).getTime();

  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(timerInterval);
      countdownTimers.forEach(timer => (timer.textContent = 'Час вийшов!'));
      return;
    }

    const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = formatNumber(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = formatNumber(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

    countdownTimers.forEach(timer => {
      timer.querySelector('#days').textContent = days;
      timer.querySelector('#hours').textContent = hours;
      timer.querySelector('#minutes').textContent = minutes;
      timer.querySelector('#seconds').textContent = seconds;
    });
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
}
