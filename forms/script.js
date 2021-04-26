const form = document.querySelector('#form'),
  field = document.querySelector('.forms-json');

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });

  return await res.text(); // надо переформатировать данные для возврата
};

const forms = document.querySelectorAll('form');

forms.forEach((item) => {
  bindPostData(item);
});

function bindPostData(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    field.textContent = `
        ${json}
        `;

    postData('server.php', json)
      .then((data) => {
        form.reset();
        console.log(data);
      })
      .catch(() => {
        alert('Возникла какая-то ошибка...');
      });
  });
}
