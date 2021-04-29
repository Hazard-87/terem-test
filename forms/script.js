const form = document.querySelector('#form'),
  field = document.querySelector('.forms-json');

const forms = document.querySelectorAll('form');

forms.forEach((item) => {
  bindPostData(item);
});

function bindPostData(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = JSON.stringify(Object.fromEntries(formData.entries()));

    field.textContent = `
        ${data}
        `;

    fetch('server.php', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => {
        console.log(e.message);
      });
  });
}
