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

  return res.json();
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

    postData('http://localhost:3000/forms', json)
      .then((data) => {
        const json = JSON.stringify(data);
        field.textContent = `
        ${json}
        `;
      })
      .catch(() => {
        alert('Возникла какая-то ошибка...');
      })
      .finally(() => {
        form.reset();
      });
  });
}
