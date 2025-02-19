export function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  // const modal = document.getElementById(modalId);

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const agreement = form.querySelector('[name="agreement"]');

    let isValid = true;
    [name, email, phone].forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'red';
        isValid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!agreement.checked) {
      agreement.nextElementSibling.style.color = 'red';
      isValid = false;
    } else {
      agreement.nextElementSibling.style.color = '';
    }

    if (isValid) {
      const formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        agreement: agreement.checked,
      };

      try {
        const response = await fetch('https://example.com/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Реєстрація успішна!');
          form.reset();
        } else {
          alert('Щось пішло не так. Спробуйте ще раз.');
        }
      } catch (error) {
        console.error('Помилка:', error);
        alert('Помилка мережі. Перевірте підключення до Інтернету.');
        form.reset();
        if (modal) {
          modal.style.display = 'none';
        }
      }
    }
  });
}
