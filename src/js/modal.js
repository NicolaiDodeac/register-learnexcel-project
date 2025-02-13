export function initModal(openBtnId, closeBtnId, modalId) {
  const openModalBtn = document.getElementById(openBtnId);
  const closeModalBtn = document.getElementById(closeBtnId);
  const modal = document.getElementById(modalId);

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  });
}
